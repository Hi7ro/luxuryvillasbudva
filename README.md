# Villa MonteMare & Villa Lumina — Website (Phase 1)

Angular 18 (standalone components, signals, SSR-ready) marketing site for two
luxury villas in Reževići, Budva Riviera, Montenegro. Phase 1 scope: SEO
content, both villa detail pages, location page, 2 guide articles, DE/EN/RU/ES,
and a guided booking inquiry that prepares either an email or WhatsApp message
for the guest to review and send. The Angular SSR Express server also provides a small,
database-free endpoint for iCal availability synchronization.

The current phase deliberately avoids a separate Spring Boot backend,
PostgreSQL and admin panel. The lightweight Angular SSR server already merges
external iCal feeds and exposes only blocked dates to the browser.

## 1. Local setup

```bash
npm install
npm start          # dev server, http://localhost:4200
npm run build       # production build with SSR/prerendering
npm test            # strict Angular/TypeScript template check
npm run check       # typecheck followed by a production build
```

Install the locked dependencies with `npm install` before the first local run.
Keep Angular framework packages on the same compatible minor version when
upgrading.

## 2. Required before this is production-ready

These are placeholders on purpose — nothing here was invented to "look done":

| Item | Where | Status |
|---|---|---|
| Production domain | Hosting environment | Set `PUBLIC_SITE_ORIGIN`; canonical and social URLs also derive automatically from the live request |
| Phone / WhatsApp number | `src/app/core/config/contact.config.ts` | `+43 664 266 0438` |
| Contact email | `src/app/core/config/contact.config.ts` | `michael.c.neumann@protonmail.com` |
| Operator name and postal address | Legal pages | still required before go-live |
| Impressum & privacy policy | `/[locale]/impressum`, `/[locale]/datenschutz` | implemented; legal placeholders still require review |
| Photography and video | `src/assets/media` and `content.data.ts` | integrated; confirm publication rights |
| Seasonal nightly rates | `src/app/core/config/pricing.config.ts` | €350–€500; confirm October, minimum stay and cancellation terms |
| Google Search Console + GA4/Plausible | not wired | see section 5 |

## 3. Live-Verfügbarkeit über Airbnb / Booking.com

Der Kalender lädt belegte Zeiträume serverseitig aus den privaten iCal-Exportfeeds
von Airbnb und Booking.com. Die Feed-URLs dürfen nicht in Angular-Dateien oder ein
öffentliches Repository geschrieben werden. Sie werden als Umgebungsvariablen am
Server hinterlegt. Mehrere Feeds werden mit Komma oder Zeilenumbruch getrennt:

```bash
export ICAL_MONTE_MARE_URLS="AIRBNB_ICAL_URL_MONTE_MARE,BOOKING_ICAL_URL_MONTE_MARE"
export ICAL_LUMINA_URLS="AIRBNB_ICAL_URL_LUMINA,BOOKING_ICAL_URL_LUMINA"
npm run build
npm run serve:ssr
```

Für einen lokalen Test kann `.env.example` nach `.env` kopiert und mit den
echten Exportlinks befüllt werden. Danach startet `npm run serve:ssr:env` den
Server mit genau dieser lokalen Konfiguration. `.env` wird durch `.gitignore`
ausgeschlossen und darf nicht veröffentlicht werden.

Die Exportlinks werden jeweils im Kalender-/Synchronisationsbereich des Portals
erzeugt. Benötigt werden bis zu vier Links: Airbnb und Booking.com für MonteMare
sowie Airbnb und Booking.com für Lumina. Der Server führt alle Termine je Villa
zusammen, speichert das Ergebnis fünf Minuten zwischen und veröffentlicht an den
Browser ausschließlich die gesperrten Datumswerte – niemals die privaten Feed-URLs.

Airbnb (Desktop): `Kalender` → Villa auswählen → `Verfügbarkeit` →
`Kalender verknüpfen` → `Mit einer anderen Website verbinden` → den
Airbnb-Kalenderlink kopieren. Der öffentliche Link der Unterkunft ist dafür nicht
ausreichend; der Exportlink endet auf `.ics` und enthält einen privaten Schlüssel.

Wichtig: `npm start` verwendet den Angular-Entwicklungsserver und führt die
Express-API aus `server.ts` nicht aus. Für einen vollständigen lokalen Test der
Live-Synchronisierung deshalb den Produktionsbuild mit `npm run serve:ssr` starten.

## 4. Booking inquiry: how it works now, and when to change it

The three-step inquiry assistant collects the stay preferences locally and then
opens either the guest's email application or WhatsApp with a completed draft.
The guest reviews and sends the message there; the website itself does not post
the personal fields to an additional form provider. The request remains
non-binding and availability is confirmed manually.

If online booking, automatic confirmations or a central inbox are added later,
replace this hand-off with an EU-hosted backend endpoint and update the privacy
policy accordingly.

## 5. What's intentionally NOT in Phase 1

- Spring Boot backend, PostgreSQL, Flyway and admin panel
- Production iCal URLs still need to be configured as environment variables.
- Villenvergleich as a separate page (folded into the homepage section)
- 5 guide articles (2 shipped: beaches, car rental — the pattern is proven,
  duplicate it for the remaining topics in the original brief once Phase 1
  content is reviewed and live)
- Google Business Profile setup, review integration
- Automated browser/unit tests are not yet configured. `npm test` currently
  performs strict TypeScript and Angular template checking.

## 6. SEO go-live checklist

- [ ] Set `PUBLIC_SITE_ORIGIN`, redeploy, and re-check `view-source` output (SSR must emit full text, not just `<app-root></app-root>`)
- [ ] Verify the production domain in Google Search Console and inspect all four language routes
- [ ] Submit the dynamically generated `sitemap.xml` in Search Console; all current guides and four language variants are included automatically
- [ ] Bing Webmaster Tools (import from GSC)
- [ ] Run Lighthouse on `/de`, `/de/villen/villa-monte-mare`, `/de/lage-budva-riviera` — target LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] Validate JSON-LD with Google's Rich Results Test on all 3 page types (VacationRental, FAQPage, Article)
- [ ] Confirm hreflang pairs resolve correctly in German, English, Russian and Spanish
- [ ] Replace the remaining operator placeholders and have Impressum/Datenschutz reviewed before go-live
- [ ] Consent banner before GA4/Plausible/maps load — none is wired yet, by design

## 7. Known simplification to revisit

English guide URLs currently reuse the German slug
(`/en/guides/straende-bei-budva`) rather than a translated slug
(`/en/guides/beaches-near-budva`). Fine for 2 articles; before adding more,
extend `GuideArticle` with a `slugEn` field so each language gets a properly
localized URL — cosmetic now, a real SEO gap at scale.
