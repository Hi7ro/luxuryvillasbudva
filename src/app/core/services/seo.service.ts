import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Locale } from '../models/villa.model';

export interface SeoPageData {
  title: string;
  description: string;
  /** Path WITHOUT locale prefix and WITHOUT leading slash, e.g. 'villen/villa-monte-mare' */
  path: string;
  locale: Locale;
  /** Locale-specific equivalents, without locale prefix or leading slash. */
  alternatePaths?: Partial<Record<Locale, string>>;
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);

  currentAbsoluteUrl(locale: Locale, path: string): string {
    return this.absoluteUrl(locale, path);
  }

  setPage(data: SeoPageData): void {
    this.titleService.setTitle(data.title);
    this.setTag('description', data.description);
    this.setTag('og:title', data.title, 'property');
    this.setTag('og:description', data.description, 'property');
    this.setTag('og:type', 'website', 'property');
    this.setTag('og:site_name', 'Villa MonteMare & Villa Lumina', 'property');
    const ogLocales: Record<Locale, string> = { de: 'de_DE', en: 'en_US', ru: 'ru_RU', es: 'es_ES', sr: 'sr_RS' };
    this.setTag('og:locale', ogLocales[data.locale], 'property');
    const canonicalUrl = this.absoluteUrl(data.locale, data.path);
    this.setTag('og:url', canonicalUrl, 'property');
    if (data.ogImage) {
      const imageUrl = this.absoluteAssetUrl(data.ogImage);
      this.setTag('og:image', imageUrl, 'property');
      this.setTag('twitter:image', imageUrl);
      if (data.ogImageAlt) {
        this.setTag('og:image:alt', data.ogImageAlt, 'property');
        this.setTag('twitter:image:alt', data.ogImageAlt);
      }
    } else {
      this.removeTag('og:image', 'property');
      this.removeTag('og:image:alt', 'property');
      this.removeTag('twitter:image');
      this.removeTag('twitter:image:alt');
    }
    this.setTag('twitter:card', 'summary_large_image');
    this.setTag('twitter:title', data.title);
    this.setTag('twitter:description', data.description);

    if (data.noindex) {
      this.setTag('robots', 'noindex, nofollow');
    } else {
      this.setTag('robots', 'index, follow');
    }

    this.setLink('canonical', canonicalUrl);

    const paths: Record<Locale, string> = {
      de: data.alternatePaths?.de ?? data.path,
      en: data.alternatePaths?.en ?? data.path,
      ru: data.alternatePaths?.ru ?? data.path,
      es: data.alternatePaths?.es ?? data.path,
      sr: data.alternatePaths?.sr ?? data.path,
    };
    this.setHreflang('de', paths.de);
    this.setHreflang('en', paths.en);
    this.setHreflang('ru', paths.ru);
    this.setHreflang('es', paths.es);
    this.setHreflang('sr', paths.sr);
    this.setHreflang('x-default', paths.en);

    this.document.documentElement.lang = data.locale;
  }

  private setTag(name: string, content: string, attr: 'name' | 'property' = 'name'): void {
    this.metaService.updateTag({ [attr]: name, content } as never);
  }

  private removeTag(name: string, attr: 'name' | 'property' = 'name'): void {
    this.metaService.removeTag(`${attr}='${name}'`);
  }

  private setLink(rel: string, href: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setHreflang(locale: string, path: string): void {
    const selector = `link[rel="alternate"][hreflang="${locale}"]`;
    let link = this.document.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', locale);
      this.document.head.appendChild(link);
    }
    const localePrefix = locale === 'x-default' ? 'en' : locale;
    link.setAttribute('href', this.absoluteUrl(localePrefix as Locale, path));
  }

  private absoluteUrl(locale: Locale, path: string): string {
    const pathname = `/${locale}/${path}`.replace(/\/$/, '') || `/${locale}`;
    return new URL(pathname, `${this.siteOrigin()}/`).toString().replace(/\/$/, '');
  }

  private absoluteAssetUrl(path: string): string {
    return new URL(path, `${this.siteOrigin()}/`).toString();
  }

  private siteOrigin(): string {
    const origin = this.document.location?.origin;
    return origin && origin !== 'null' ? origin.replace(/\/$/, '') : 'http://localhost';
  }
}
