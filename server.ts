import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import { GUIDE_ARTICLES, VILLAS } from './src/app/core/data/content.data';

type VillaSlug = 'villa-monte-mare' | 'villa-lumina';

interface AvailabilityCacheEntry {
  expiresAt: number;
  response: {
    villa: VillaSlug;
    blockedDates: string[];
    lastUpdated: string;
    sourceCount: number;
    configuredSourceCount: number;
    complete: boolean;
  };
}

const availabilityCache = new Map<VillaSlug, AvailabilityCacheEntry>();
const AVAILABILITY_CACHE_MS = 5 * 60 * 1000;

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');
  const commonEngine = new CommonEngine();

  server.disable('x-powered-by');
  server.set('trust proxy', 1);
  server.set('view engine', 'html');
  server.set('views', browserDistFolder);
  server.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    next();
  });

  server.get('/robots.txt', (req, res) => {
    const origin = publicOrigin(req);
    res.type('text/plain').send([
      'User-agent: *',
      'Allow: /',
      'Disallow: /admin',
      'Disallow: /*?checkIn=',
      'Disallow: /*?checkOut=',
      '',
      `Sitemap: ${origin}/sitemap.xml`,
      '',
    ].join('\n'));
  });

  server.get('/sitemap.xml', (req, res) => {
    res.type('application/xml').send(buildSitemap(publicOrigin(req)));
  });

  server.get('/api/availability', async (req, res) => {
    const villa = req.query['villa'];
    if (villa !== 'villa-monte-mare' && villa !== 'villa-lumina') {
      res.status(400).json({ error: 'Unknown villa.' });
      return;
    }
    const villaSlug: VillaSlug = villa;

    const cached = availabilityCache.get(villaSlug);
    if (cached && cached.expiresAt > Date.now()) {
      res.setHeader('Cache-Control', 'private, max-age=60');
      res.json(cached.response);
      return;
    }

    const urls = calendarUrlsFor(villaSlug);
    const results = await Promise.allSettled(urls.map(fetchCalendar));
    const blockedDates = new Set<string>();
    let sourceCount = 0;

    for (const result of results) {
      if (result.status !== 'fulfilled') continue;
      sourceCount += 1;
      for (const date of result.value) blockedDates.add(date);
    }

    const response = {
      villa: villaSlug,
      blockedDates: [...blockedDates].sort(),
      lastUpdated: new Date().toISOString(),
      sourceCount,
      configuredSourceCount: urls.length,
      complete: urls.length > 0 && sourceCount === urls.length,
    };
    availabilityCache.set(villaSlug, { expiresAt: Date.now() + AVAILABILITY_CACHE_MS, response });
    res.setHeader('Cache-Control', 'private, max-age=60');
    res.json(response);
  });

  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y',
  }));

  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((error: unknown) => next(error));
  });

  return server;
}

function calendarUrlsFor(villa: VillaSlug): string[] {
  const key = villa === 'villa-monte-mare' ? 'ICAL_MONTE_MARE_URLS' : 'ICAL_LUMINA_URLS';
  return (process.env[key] ?? '')
    .split(/[\n,]+/)
    .map((url) => url.trim())
    .filter((url) => /^https:\/\//i.test(url));
}

function publicOrigin(req: express.Request): string {
  const configured = process.env['PUBLIC_SITE_ORIGIN']?.trim().replace(/\/$/, '');
  if (configured && /^https?:\/\//i.test(configured)) return configured;
  const forwardedProtocol = req.get('x-forwarded-proto')?.split(',')[0]?.trim();
  return `${forwardedProtocol || req.protocol}://${req.get('host')}`;
}

function buildSitemap(origin: string): string {
  const locales = ['de', 'en', 'ru', 'es', 'sr'] as const;
  type SitemapLocale = (typeof locales)[number];
  const groups: Array<Record<SitemapLocale, string>> = [];
  const localizedPaths = (factory: (locale: SitemapLocale) => string): Record<SitemapLocale, string> =>
    Object.fromEntries(locales.map((locale) => [locale, factory(locale)])) as Record<SitemapLocale, string>;

  groups.push(localizedPaths((locale) => `/${locale}`));
  for (const villa of VILLAS) {
    groups.push(localizedPaths((locale) =>
      `/${locale}/${locale === 'de' ? 'villen' : 'villas'}/${villa.slug}`));
  }
  groups.push(localizedPaths((locale) =>
    `/${locale}/${locale === 'de' ? 'lage-budva-riviera' : 'location-budva-riviera'}`));
  for (const guide of GUIDE_ARTICLES) {
    groups.push(localizedPaths((locale) =>
      `/${locale}/${locale === 'de' ? 'reisefuehrer' : 'guides'}/${guide.slug}`));
  }

  const urls = groups.flatMap((group) => {
    const alternates = locales
      .map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(origin + group[locale])}" />`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(origin + group.en)}" />`)
      .join('\n');
    return locales.map((locale) => [
      '  <url>',
      `    <loc>${escapeXml(origin + group[locale])}</loc>`,
      alternates,
      '  </url>',
    ].join('\n'));
  }).join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
}

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  })[character] ?? character);
}

async function fetchCalendar(url: string): Promise<string[]> {
  const response = await fetch(url, {
    headers: { Accept: 'text/calendar, text/plain;q=0.9, */*;q=0.1' },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Calendar returned HTTP ${response.status}`);
  return parseBlockedDates(await response.text());
}

function parseBlockedDates(ical: string): string[] {
  const unfolded = ical.replace(/\r?\n[ \t]/g, '');
  const events = unfolded.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) ?? [];
  const blocked = new Set<string>();

  for (const event of events) {
    if (/^STATUS:CANCELLED$/mi.test(event)) continue;
    const startValue = event.match(/^DTSTART(?:;[^:]*)?:(.+)$/mi)?.[1]?.trim();
    const endValue = event.match(/^DTEND(?:;[^:]*)?:(.+)$/mi)?.[1]?.trim();
    const start = parseIcalDate(startValue);
    if (!start) continue;
    const end = parseIcalDate(endValue) ?? addUtcDays(start, 1);

    for (let date = start, guard = 0; date < end && guard < 730; date = addUtcDays(date, 1), guard += 1) {
      blocked.add(toIsoDate(date));
    }
  }
  return [...blocked];
}

function parseIcalDate(value?: string): Date | undefined {
  const match = value?.match(/^(\d{4})(\d{2})(\d{2})/);
  if (!match) return undefined;
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
}

function addUtcDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
