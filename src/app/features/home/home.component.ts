import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { VILLAS, DISTANCES, GUIDE_ARTICLES } from '../../core/data/content.data';
import { Locale } from '../../core/models/villa.model';
import { BookingWidgetComponent } from '../../shared/booking-widget/booking-widget.component';
import { ImageLightboxComponent } from '../../shared/image-lightbox/image-lightbox.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BookingWidgetComponent, ImageLightboxComponent],
  template: `
    <section class="hero">
      <div class="hero-slideshow">
        <img class="hero-media hero-slide slide-one" src="/assets/media/lumina/lumina-hero-adriatic-sunset.webp"
             [srcset]="responsiveSrcSet('/assets/media/lumina/lumina-hero-adriatic-sunset.webp')" sizes="100vw"
             [alt]="heroAlt()" width="1920" height="1080" fetchpriority="high" />
        <img class="hero-media hero-slide slide-two" src="/assets/media/montemare/monte-mare-exterior-pool.webp"
             [srcset]="responsiveSrcSet('/assets/media/montemare/monte-mare-exterior-pool.webp')" sizes="100vw"
             alt="" width="1920" height="1280" loading="eager" />
        <img class="hero-media hero-slide slide-three" src="/assets/media/lumina/lumina-exterior-pool.webp"
             [srcset]="responsiveSrcSet('/assets/media/lumina/lumina-exterior-pool.webp')" sizes="100vw"
             alt="" width="1920" height="1280" loading="eager" />
        <img class="hero-media hero-slide slide-four" src="/assets/media/montemare/monte-mare-balcony-view.webp"
             [srcset]="responsiveSrcSet('/assets/media/montemare/monte-mare-balcony-view.webp')" sizes="100vw"
             alt="" width="1920" height="1280" loading="eager" />
      </div>
      <div class="hero-content container">
        <p class="eyebrow">{{ t.ui('heroLocationLine') }}</p>
        <h1>{{ t.inline('Über der Adria. Fernab von allem.', 'Above the Adriatic. Away from everything.', 'Над Адриатикой. Вдали от суеты.', 'Sobre el Adriático. Lejos de todo.') }}</h1>
        <p class="hero-sub">
          {{ t.inline('Zwei private Luxusvillen mit Pool und Panoramablick an der Budva Riviera.', 'Two private luxury villas with pools and panoramic views on the Budva Riviera.', 'Две частные роскошные виллы с бассейнами и панорамным видом на Будванской ривьере.', 'Dos villas de lujo privadas con piscina y vistas panorámicas en la Riviera de Budva.') }}
        </p>
        <p class="hero-facts">
          {{ t.inline('2 Villen · je bis zu 6 Gäste · privater Pool · Meerblick', '2 villas · up to 6 guests each · private pool · sea view', '2 виллы · до 6 гостей каждая · частный бассейн · вид на море', '2 villas · hasta 6 huéspedes cada una · piscina privada · vistas al mar') }}
        </p>
        <div class="hero-ctas">
          <a class="btn btn-primary" href="#verfuegbarkeit">{{ t.ui('ctaCheckAvailability') }}</a>
          <a class="btn btn-secondary" href="#villen">{{ t.ui('ctaDiscoverVillas') }}</a>
        </div>
      </div>
      <div class="horizon-divider hero-horizon" aria-hidden="true"></div>
    </section>

    <section class="section container">
      <p class="eyebrow">{{ t.inline('Der Ort', 'The setting', 'Это место', 'El entorno') }}</p>
      <h2>{{ t.inline('Ruhe, 90 Meter über dem Meer', 'Stillness, 90 metres above the sea', 'Тишина на высоте 90 метров над морем', 'Tranquilidad a 90 metros sobre el mar') }}</h2>
      <p>
        {{ t.inline('In Reževići, zwischen Sveti Stefan und Petrovac, liegen zwei private Villen auf einer ruhigen Anhöhe: Villa MonteMare und Villa Lumina. Beide bieten exklusive Nutzung, einen eigenen Pool und freien Blick über die Adria.', 'In Reževići, between Sveti Stefan and Petrovac, two private villas sit on a quiet hillside: Villa MonteMare and Villa Lumina. Both offer exclusive use, a private pool and open Adriatic views.', 'В Режевичи, между Свети-Стефаном и Петровацем, на тихом склоне расположены две частные виллы: Villa MonteMare и Villa Lumina. Обе предлагают полную приватность, собственный бассейн и открытый вид на Адриатику.', 'En Reževići, entre Sveti Stefan y Petrovac, dos villas privadas se encuentran en una tranquila ladera: Villa MonteMare y Villa Lumina. Ambas ofrecen uso exclusivo, piscina privada y vistas abiertas al Adriático.') }}
      </p>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container" id="villen">
      <p class="eyebrow">{{ t.ui('quietLuxuryEyebrow') }}</p>
      <h2>{{ t.inline('Zwei Villen, ein Ort', 'Two villas, one place', 'Две виллы, одно особенное место', 'Dos villas, un lugar especial') }}</h2>
      <div class="villa-grid">
        @for (villa of villas; track villa.slug) {
          <article class="villa-card">
            @if (villa.slug === 'villa-lumina') {
              <div class="villa-media">
                <img src="/assets/media/lumina/lumina-exterior-pool.webp"
                     [srcset]="responsiveSrcSet('/assets/media/lumina/lumina-exterior-pool.webp')" sizes="(max-width: 900px) 100vw, 50vw"
                     [alt]="t.t(villa.heroImageAlt)" width="1920" height="1280" loading="lazy" />
              </div>
            } @else {
              <div class="villa-media">
                <img src="/assets/media/montemare/monte-mare-exterior-pool.webp"
                     [srcset]="responsiveSrcSet('/assets/media/montemare/monte-mare-exterior-pool.webp')" sizes="(max-width: 900px) 100vw, 50vw"
                     [alt]="t.t(villa.heroImageAlt)" width="1920" height="1280" loading="lazy" />
              </div>
            }
            <div class="villa-body">
              <h3>{{ villa.name }}</h3>
              <p>{{ t.t(villa.tagline) }}</p>
              <p class="villa-price">
                {{ t.inline('Ab', 'From', 'От', 'Desde') }}
                <strong>{{ villa.nightlyRateEur }} €</strong>
                {{ t.inline('pro Nacht', 'per night', 'за ночь', 'por noche') }}
              </p>
              <ul class="facts">
                <li>{{ villa.guests }} {{ t.ui('guestsLabel') }}</li>
                <li>{{ villa.bedrooms }} {{ t.ui('bedroomsLabel') }}</li>
                <li>{{ villa.bathrooms }} {{ t.ui('bathroomsLabel') }}</li>
                <li>{{ t.ui('privatePoolLabel') }}</li>
              </ul>
              <div class="villa-ctas">
                <a class="btn btn-quiet" [routerLink]="villaPath(villa.slug)">{{ t.ui('ctaDiscoverVilla') }}</a>
                <a class="btn btn-primary" href="#verfuegbarkeit">{{ t.ui('ctaCheckAvailability') }}</a>
              </div>
            </div>
          </article>
        }
      </div>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container" id="galerie">
      <p class="eyebrow">MonteMare &amp; Lumina</p>
      <h2>{{ t.inline('Zwei Villen. Eine besondere Perspektive.', 'Two villas. One exceptional perspective.', 'Две виллы. Один исключительный вид.', 'Dos villas. Una perspectiva excepcional.') }}</h2>
      <app-image-lightbox #homeLightbox [images]="homeGalleryImages" [altText]="homeGalleryAlt"
        [label]="t.inline('Bildergalerie der Villen', 'Villa image gallery', 'Фотогалерея вилл', 'Galería de las villas')" />
      <div class="home-gallery">
        @for (image of homeGalleryImages; track image) {
          <button type="button" (click)="homeLightbox.open($index)" [attr.aria-label]="homeGalleryAlt(image)">
            <img [src]="image" [srcset]="responsiveSrcSet(image)" sizes="(max-width: 700px) 100vw, 40vw"
                 [alt]="homeGalleryAlt(image)" width="1920" height="1280" loading="lazy" />
          </button>
        }
      </div>
      <div class="gallery-actions">
        <a class="btn btn-quiet" [routerLink]="villaPath('villa-monte-mare')">Villa MonteMare</a>
        <a class="btn btn-quiet" [routerLink]="villaPath('villa-lumina')">Villa Lumina</a>
      </div>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container compare">
      <h2>{{ t.ui('compareTitle') }}</h2>
      <div class="compare-grid">
        <div>
          <h3>{{ t.inline('Gemeinsam', 'Shared', 'Общее', 'En común') }}</h3>
          <ul>
            <li>{{ t.inline('Bis zu 6 Gäste, exklusive Nutzung', 'Up to 6 guests, exclusive use', 'До 6 гостей, эксклюзивное пользование', 'Hasta 6 huéspedes, uso exclusivo') }}</li>
            <li>{{ t.inline('3 Schlafzimmer, 3 Badezimmer', '3 bedrooms, 3 bathrooms', '3 спальни, 3 ванные комнаты', '3 dormitorios, 3 baños') }}</li>
            <li>{{ t.inline('Privater Pool und Meerblick', 'Private pool and sea view', 'Частный бассейн и вид на море', 'Piscina privada y vistas al mar') }}</li>
            <li>{{ t.inline('Zwei private Parkplätze', 'Two private parking spaces', 'Два частных парковочных места', 'Dos plazas de aparcamiento privadas') }}</li>
          </ul>
        </div>
        <div>
          <h3>Villa MonteMare</h3>
          <p>{{ t.inline('Mediterraner Garten mit alten Olivenbäumen, besonders natürliche Atmosphäre.', 'Mediterranean garden with old olive trees, an especially natural atmosphere.', 'Средиземноморский сад со старыми оливковыми деревьями и особенно естественной атмосферой.', 'Jardín mediterráneo con olivos centenarios y un ambiente especialmente natural.') }}</p>
        </div>
        <div>
          <h3>Villa Lumina</h3>
          <p>{{ t.inline('Dachterrasse, Glasfaser-Internet und separater Arbeitsbereich mit Getränkeküche.', 'Rooftop terrace, fibre internet and a separate work area with kitchenette.', 'Терраса на крыше, оптоволоконный интернет и отдельная рабочая зона с мини-кухней.', 'Azotea, internet de fibra y zona de trabajo independiente con pequeña cocina.') }}</p>
        </div>
      </div>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container">
      <p class="eyebrow">{{ t.ui('distancesTitle') }}</p>
      <h2>{{ t.inline('Lage und Umgebung', 'Location and surroundings', 'Расположение и окрестности', 'Ubicación y alrededores') }}</h2>
      <ul class="distances">
        @for (d of distances; track d.label.de) {
          <li><span>{{ t.t(d.label) }}</span><strong>{{ d.value }}</strong></li>
        }
      </ul>
      <a class="btn btn-quiet" [routerLink]="locationPath()">
        {{ t.inline('Zur Lage-Seite', 'View location page', 'Подробнее о расположении', 'Ver ubicación') }}
      </a>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container" id="erlebnisse">
      <h2>{{ t.inline('Erlebnisse & Reiseführer', 'Experiences & guides', 'Впечатления и путеводители', 'Experiencias y guías') }}</h2>
      <div class="guides-grid">
        @for (g of guides; track g.slug) {
          <a class="guide-card" [routerLink]="guidePath(g.slug)">
            <h3>{{ t.t(g.title) }}</h3>
            <p>{{ t.t(g.excerpt) }}</p>
          </a>
        }
      </div>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container" id="kontakt">
      <app-booking-widget />
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container home-faq">
      <p class="eyebrow">{{ t.ui('faqTitle') }}</p>
      <h2>{{ t.ui('faqTitle') }}</h2>
      <dl class="faq">
        @for (item of faqPreview; track item.q) {
          <div class="faq-item">
            <dt>{{ item.q }}</dt>
            <dd>{{ item.a }}</dd>
          </div>
        }
      </dl>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: min(920px, calc(100svh - 72px));
      display: flex;
      align-items: flex-end;
      color: var(--c-limestone);
      overflow: hidden;
    }
    .hero-slideshow, .hero-media {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .hero-slideshow { overflow: hidden; background: var(--c-adria); isolation: isolate; }
    .hero-media {
      object-fit: cover;
    }
    .hero-slide {
      opacity: 0;
      transform: none;
      animation: heroCrossfade 48s linear infinite;
      will-change: opacity;
      backface-visibility: hidden;
    }
    .slide-one { animation-delay: 0s; }
    .slide-two { animation-delay: -36s; }
    .slide-three { animation-delay: -24s; }
    .slide-four { animation-delay: -12s; }
    @keyframes heroCrossfade {
      0%, 18% { opacity: 1; }
      25%, 93% { opacity: 0; }
      100% { opacity: 1; }
    }
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(12,31,40,.72) 0%, rgba(12,31,40,.34) 48%, rgba(12,31,40,.08) 75%), linear-gradient(0deg, rgba(12,31,40,.52), transparent 55%);
      z-index: 1;
      pointer-events: none;
    }
    .hero-content { position: relative; z-index: 2; padding-block: clamp(4rem, 10vh, 8rem); width: 100%; }
    .hero-content .eyebrow { color: var(--c-champagne); }
    .hero h1 { color: var(--c-limestone); font-style: italic; font-weight: 300; max-width: 12ch; text-wrap: balance; text-shadow: 0 4px 30px rgba(0,0,0,.16); }
    .hero-sub { font-size: 1.15rem; max-width: 46ch; color: color-mix(in srgb, var(--c-limestone) 92%, transparent); }
    .hero-facts { font-size: 0.9rem; letter-spacing: 0.03em; color: color-mix(in srgb, var(--c-limestone) 75%, transparent); }
    .hero-ctas { display: flex; gap: var(--space-2); margin-top: var(--space-3); flex-wrap: wrap; }
    .hero-horizon { position: absolute; z-index: 2; bottom: 0; margin: 0; background: color-mix(in srgb, var(--c-limestone) 30%, transparent); }

    .villa-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-top: var(--space-3); }
    .villa-card { border: 1px solid color-mix(in srgb, var(--c-sand) 72%, transparent); border-radius: var(--radius-lg); overflow: hidden; background: var(--c-ivory); box-shadow: var(--shadow-soft); transition: transform 400ms ease, box-shadow 400ms ease; }
    .villa-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lifted); }
    .villa-media {
      width: 100%;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: var(--c-sand);
    }
    .villa-media img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
    .villa-body { padding: clamp(1.5rem, 3vw, 2.5rem); }
    .villa-price { color: var(--c-adria); margin-block: var(--space-2); }
    .villa-price strong { font-family: var(--font-display); font-size: 1.35rem; font-weight: 500; }
    .facts { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 0.4rem 1rem; margin: var(--space-2) 0; font-size: 0.88rem; color: var(--c-olive); }
    .villa-ctas { display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-2); }

    .home-gallery { display: grid; grid-template-columns: 1.35fr 1fr 1fr; grid-template-rows: repeat(2, 230px); gap: var(--space-1); margin-top: var(--space-3); }
    .home-gallery button { display: block; width: 100%; height: 100%; padding: 0; border: 0; background: transparent; cursor: zoom-in; overflow: hidden; border-radius: var(--radius-lg); }
    .home-gallery img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 300ms ease; }
    .home-gallery button:hover img { transform: scale(1.025); }
    .home-gallery button:first-child { grid-row: 1 / 3; }
    .home-gallery button:nth-child(2) { grid-column: 2 / 4; }
    .gallery-actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: var(--space-3); }

    .compare-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: var(--space-4); margin-top: var(--space-3); }
    .compare-grid ul { padding-left: 1.1rem; }
    .compare-grid li { margin-bottom: 0.4rem; }

    .distances { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0.6rem 2rem; max-width: 640px; margin: var(--space-3) 0 var(--space-3); }
    .distances li { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--c-sand); padding-bottom: 0.35rem; }
    .distances strong { color: var(--c-adria); }

    .guides-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-3); margin-top: var(--space-3); }
    .guide-card { display: block; padding: clamp(1.5rem, 3vw, 2.25rem); border: 1px solid color-mix(in srgb, var(--c-sand) 76%, transparent); border-radius: var(--radius-lg); text-decoration: none; color: var(--c-anthracite); background: var(--c-ivory); box-shadow: var(--shadow-soft); transition: transform 300ms ease, border-color 300ms ease; }
    .guide-card h3 { margin-bottom: 0.4rem; }
    .guide-card p { color: var(--c-anthracite); font-size: 0.92rem; }
    .guide-card:hover { border-color: var(--c-champagne); transform: translateY(-4px); }

    .home-faq { max-width: 900px; }
    .faq { margin-top: var(--space-3); }
    .faq-item { margin-bottom: var(--space-3); }
    .faq-item dt { font-weight: 600; color: var(--c-adria); margin-bottom: 0.25rem; }
    .faq-item dd { margin: 0; color: var(--c-anthracite); }

    @media (max-width: 900px) {
      .villa-grid, .compare-grid, .guides-grid { grid-template-columns: minmax(0, 1fr); }
      .distances { grid-template-columns: 1fr; }
      .home-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: repeat(2, 190px); }
      .home-gallery button:first-child, .home-gallery button:nth-child(2) { grid-column: auto; grid-row: auto; }
    }
    @media (max-width: 600px) {
      .hero { min-height: calc(100svh - 64px); align-items: flex-end; }
      .hero-media { object-position: 57% center; }
      .slide-two, .slide-three { object-position: center center; }
      .hero-content { padding-block: 4rem 3.25rem; }
      .hero h1 { max-width: 10ch; }
      .hero-sub { font-size: 1rem; }
      .hero-facts { line-height: 1.75; }
      .hero-ctas, .villa-ctas, .gallery-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
      .villa-grid { gap: 1.5rem; }
      .villa-media { aspect-ratio: 4 / 3; }
      .home-gallery { grid-template-columns: 1fr; grid-template-rows: none; gap: .65rem; }
      .home-gallery button { height: auto; aspect-ratio: 4 / 3; }
      .compare-grid { gap: 1.75rem; }
      .distances li { gap: 1rem; align-items: baseline; }
      .distances strong { white-space: nowrap; }
    }
    @media (prefers-reduced-motion: reduce) {
      .hero-slide { display: none; animation: none; }
      .slide-one { display: block; opacity: 1; transform: none; }
    }
  `],
})
export class HomeComponent implements OnInit {
  protected readonly t = inject(TranslationService);
  private readonly seo = inject(SeoService);
  private readonly structuredData = inject(StructuredDataService);
  private readonly route = inject(ActivatedRoute);

  protected readonly villas = VILLAS;
  protected readonly distances = DISTANCES;
  protected readonly guides = GUIDE_ARTICLES;
  protected readonly homeGalleryImages = [
    '/assets/media/montemare/monte-mare-exterior-pool.webp',
    '/assets/media/lumina/lumina-exterior-pool.webp',
    '/assets/media/montemare/monte-mare-olive-garden.webp',
    '/assets/media/lumina/lumina-rooftop-sea-view.webp',
  ];
  protected readonly homeGalleryAlt = (path: string): string => path.includes('pool')
    ? this.t.inline('Villa mit privatem Pool', 'Villa with private pool', 'Вилла с частным бассейном', 'Villa con piscina privada')
    : path.includes('olive')
      ? this.t.inline('Mediterraner Olivengarten der Villa MonteMare', 'Mediterranean olive garden at Villa MonteMare', 'Средиземноморский сад Villa MonteMare', 'Jardín mediterráneo de Villa MonteMare')
    : path.includes('rooftop')
      ? this.t.inline('Dachterrasse mit Meerblick', 'Rooftop terrace with sea view', 'Терраса на крыше с видом на море', 'Azotea con vistas al mar')
      : path.includes('living')
        ? this.t.inline('Heller Wohnbereich der Villa Lumina', 'Bright living room at Villa Lumina', 'Светлая гостиная Villa Lumina', 'Salón luminoso de Villa Lumina')
        : this.t.inline('Schlafzimmer mit Meerblick', 'Bedroom with sea view', 'Спальня с видом на море', 'Dormitorio con vistas al mar');

  ngOnInit(): void {
    const locale = (this.route.snapshot.data['locale'] as Locale) ?? 'de';
    this.t.setLocale(locale);

    this.seo.setPage({
      locale,
      path: '',
      alternatePaths: { de: '', en: '', ru: '', es: '' },
      title: ({
        de: 'Luxusvillen in Montenegro mit Pool | Budva Riviera',
        en: 'Luxury Villas in Montenegro with Pool | Budva Riviera',
        ru: 'Роскошные виллы с бассейном в Черногории | Будванская ривьера',
        es: 'Villas de lujo con piscina en Montenegro | Riviera de Budva',
      } as Record<Locale, string>)[locale],
      description: ({
        de: 'Entdecken Sie Villa MonteMare und Villa Lumina in Reževići: private Pools, Meerblick und Platz für je 6 Gäste nahe Budva und Sveti Stefan.',
        en: 'Discover Villa MonteMare and Villa Lumina in Reževići: private pools, sea views and room for up to 6 guests, near Budva and Sveti Stefan.',
        ru: 'Откройте для себя Villa MonteMare и Villa Lumina в Режевичи: частные бассейны, вид на море и размещение до 6 гостей рядом с Будвой и Свети-Стефаном.',
        es: 'Descubra Villa MonteMare y Villa Lumina en Reževići: piscinas privadas, vistas al mar y capacidad para 6 huéspedes cerca de Budva y Sveti Stefan.',
      } as Record<Locale, string>)[locale],
      ogImage: '/assets/media/lumina/lumina-hero-adriatic-sunset.webp',
      ogImageAlt: this.heroAlt(),
    });

    this.structuredData.setJsonLd('ld-home', [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Villa MonteMare & Villa Lumina',
        url: this.seo.currentAbsoluteUrl(locale, ''),
      },
      ...this.villas.map((v) => this.structuredData.buildVillaGraph(v, locale)),
    ]);
  }

  protected locale(): Locale {
    return this.t.locale();
  }

  protected heroAlt(): string {
    return this.t.inline(
      'Panoramablick über die Adria von der Terrasse einer Villa in Reževići',
      'Panoramic view over the Adriatic from a villa terrace in Reževići',
      'Панорамный вид на Адриатику с террасы виллы в Режевичи',
      'Vista panorámica del Adriático desde la terraza de una villa en Reževići');
  }

  protected responsiveSrcSet(path: string): string {
    return `${path.replace(/\.webp$/, '-720.webp')} 720w, ${path} 1280w`;
  }

  protected get faqPreview() {
    const merged = this.villas.flatMap((v) => v.faq);
    return merged.slice(0, 4).map((item) => ({ q: this.t.t(item.question), a: this.t.t(item.answer) }));
  }

  villaPath(slug: string): string[] {
    const locale = this.locale();
    return locale === 'de' ? ['/de/villen', slug] : [`/${locale}/villas`, slug];
  }

  guidePath(slug: string): string[] {
    const locale = this.locale();
    return locale === 'de' ? ['/de/reisefuehrer', slug] : [`/${locale}/guides`, slug];
  }

  locationPath(): string[] {
    const locale = this.locale();
    return locale === 'de' ? ['/de/lage-budva-riviera'] : [`/${locale}/location-budva-riviera`];
  }
}
