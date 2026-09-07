import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { VILLAS, DISTANCES, GUIDE_ARTICLES } from '../../core/data/content.data';
import { Locale } from '../../core/models/villa.model';
import { BookingWidgetComponent } from '../../shared/booking-widget/booking-widget.component';
import { ImageLightboxComponent } from '../../shared/image-lightbox/image-lightbox.component';
import { GuestReviewsComponent } from '../../shared/guest-reviews/guest-reviews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BookingWidgetComponent, ImageLightboxComponent, GuestReviewsComponent],
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
        <h1>{{ t.inline('Über der Adria – fernab von allem', 'Above the Adriatic – away from it all', 'Над Адриатикой — вдали от суеты', 'Sobre el Adriático, lejos de todo') }}</h1>
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
      <h2>{{ t.inline('Zwei Villen – eine besondere Perspektive', 'Two villas – one exceptional perspective', 'Две виллы — один особенный ракурс', 'Dos villas, una perspectiva excepcional') }}</h2>
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

    <section class="section container">
      <app-guest-reviews />
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container compare">
      <p class="eyebrow">MonteMare &amp; Lumina</p>
      <h2>{{ t.ui('compareTitle') }}</h2>
      <div class="compare-grid">
        <div class="compare-card compare-card-shared">
          <span class="compare-label">{{ t.inline('Beide Villen gemeinsam', 'Both villas together', 'Обе виллы вместе', 'Ambas villas juntas') }}</span>
          <h3>{{ t.inline('Doppelt so viel Raum für besondere Aufenthalte', 'Twice the space for an exceptional stay', 'Вдвое больше пространства для особенного отдыха', 'El doble de espacio para una estancia excepcional') }}</h3>
          <p>{{ t.inline('Beide Villen verbinden modernes Design, Privatsphäre und höchsten Komfort auf jeweils drei Ebenen – eingebettet zwischen den Bergen und der montenegrinischen Adriaküste.', 'Both villas combine modern design, privacy and exceptional comfort across three levels, nestled between the mountains and Montenegro’s Adriatic coast.', 'Обе виллы сочетают современный дизайн, уединение и высокий уровень комфорта на трёх этажах, между горами и Адриатическим побережьем Черногории.', 'Ambas villas combinan diseño moderno, privacidad y el máximo confort en tres plantas, entre las montañas y la costa adriática de Montenegro.') }}</p>
          <ul class="compare-facts">
            <li><strong>12</strong><span>{{ t.inline('Gäste bei Buchung beider Villen', 'guests when booking both villas', 'гостей при бронировании обеих вилл', 'huéspedes al reservar ambas villas') }}</span></li>
            <li><strong>6</strong><span>{{ t.inline('Schlafzimmer und 6 Badezimmer', 'bedrooms and 6 bathrooms', 'спален и 6 ванных комнат', 'dormitorios y 6 baños') }}</span></li>
            <li><strong>2</strong><span>{{ t.inline('private Pools mit Meerblick', 'private pools with sea views', 'частных бассейна с видом на море', 'piscinas privadas con vistas al mar') }}</span></li>
            <li><strong>4</strong><span>{{ t.inline('private Parkplätze', 'private parking spaces', 'частных парковочных места', 'plazas de aparcamiento privadas') }}</span></li>
          </ul>
        </div>
        <div class="compare-card">
          <span class="compare-label">{{ t.inline('Mediterraner Rückzugsort', 'Mediterranean retreat', 'Средиземноморское уединение', 'Refugio mediterráneo') }}</span>
          <h3>Villa MonteMare</h3>
          <p>{{ t.inline('Mediterraner Garten mit alten Olivenbäumen und viel Privatsphäre – ideal für Familien, längere Aufenthalte und entspannte Workations.', 'A Mediterranean garden with old olive trees and abundant privacy – ideal for families, longer stays and relaxed workations.', 'Средиземноморский сад со старыми оливковыми деревьями и полной приватностью — идеальный выбор для семей, длительного отдыха и работы у моря.', 'Jardín mediterráneo con olivos centenarios y mucha privacidad, ideal para familias, estancias largas y unas vacaciones de trabajo relajadas.') }}</p>
          <ul class="villa-feature-list">
            <li>{{ t.inline('Bis zu 6 Gäste, exklusive Nutzung', 'Up to 6 guests, exclusive use', 'До 6 гостей, вилла полностью в вашем распоряжении', 'Hasta 6 huéspedes, uso exclusivo') }}</li>
            <li>{{ t.inline('3 Schlafzimmer, 3 Badezimmer', '3 bedrooms, 3 bathrooms', '3 спальни, 3 ванные комнаты', '3 dormitorios, 3 baños') }}</li>
            <li>{{ t.inline('Privater Pool und Meerblick', 'Private pool and sea view', 'Частный бассейн и вид на море', 'Piscina privada y vistas al mar') }}</li>
            <li>{{ t.inline('Zwei private Parkplätze', 'Two private parking spaces', 'Два частных парковочных места', 'Dos plazas de aparcamiento privadas') }}</li>
          </ul>
          <a class="compare-link" [routerLink]="villaPath('villa-monte-mare')">{{ t.ui('ctaDiscoverVilla') }} <span aria-hidden="true">→</span></a>
        </div>
        <div class="compare-card">
          <span class="compare-label">{{ t.inline('Moderner Panoramablick', 'Contemporary panoramic living', 'Современная вилла с панорамным видом', 'Estilo contemporáneo y vistas panorámicas') }}</span>
          <h3>Villa Lumina</h3>
          <p>{{ t.inline('Dachterrasse mit Panoramablick, modernes Design und höchster Komfort – ergänzt durch Glasfaser-Internet und einen separaten Arbeitsbereich.', 'A rooftop terrace with panoramic views, contemporary design and exceptional comfort – complemented by fibre internet and a separate workspace.', 'Терраса на крыше с панорамным видом, современный дизайн и высокий уровень комфорта, а также оптоволоконный интернет и отдельная рабочая зона.', 'Azotea con vistas panorámicas, diseño contemporáneo y el máximo confort, además de internet de fibra y una zona de trabajo independiente.') }}</p>
          <ul class="villa-feature-list">
            <li>{{ t.inline('Bis zu 6 Gäste, exklusive Nutzung', 'Up to 6 guests, exclusive use', 'До 6 гостей, вилла полностью в вашем распоряжении', 'Hasta 6 huéspedes, uso exclusivo') }}</li>
            <li>{{ t.inline('3 Schlafzimmer, 3 Badezimmer', '3 bedrooms, 3 bathrooms', '3 спальни, 3 ванные комнаты', '3 dormitorios, 3 baños') }}</li>
            <li>{{ t.inline('Privater Pool und Meerblick', 'Private pool and sea view', 'Частный бассейн и вид на море', 'Piscina privada y vistas al mar') }}</li>
            <li>{{ t.inline('Zwei private Parkplätze', 'Two private parking spaces', 'Два частных парковочных места', 'Dos plazas de aparcamiento privadas') }}</li>
          </ul>
          <a class="compare-link" [routerLink]="villaPath('villa-lumina')">{{ t.ui('ctaDiscoverVilla') }} <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container location-overview">
      <p class="eyebrow">{{ t.ui('distancesTitle') }}</p>
      <h2>{{ t.inline('Lage und Umgebung', 'Location and surroundings', 'Расположение и окрестности', 'Ubicación y alrededores') }}</h2>
      <p class="location-lead">{{ t.inline('Ruhig an der Küste gelegen und dennoch nah an den schönsten Orten der Budva Riviera.', 'Peacefully situated on the coast, yet close to the most beautiful places along the Budva Riviera.', 'Тихое место у побережья, откуда легко добраться до самых красивых уголков Будванской ривьеры.', 'Una ubicación tranquila junto a la costa, cerca de los lugares más bellos de la Riviera de Budva.') }}</p>
      <div class="location-highlights">
        <article>
          <span class="location-icon" aria-hidden="true">✦</span>
          <h3>{{ t.inline('Küste & Orte', 'Coast & towns', 'Побережье и города', 'Costa y localidades') }}</h3>
          <p>{{ t.inline('Malerische Buchten und Strände liegen ebenso in der Nähe wie Budva, Sveti Stefan und Petrovac.', 'Picturesque bays and beaches are close by, as are Budva, Sveti Stefan and Petrovac.', 'Поблизости находятся живописные бухты и пляжи, а также Будва, Свети-Стефан и Петровац.', 'Muy cerca encontrará calas y playas pintorescas, además de Budva, Sveti Stefan y Petrovac.') }}</p>
        </article>
        <article>
          <span class="location-icon" aria-hidden="true">⌂</span>
          <h3>{{ t.inline('Alles für den Aufenthalt', 'Everyday essentials nearby', 'Всё необходимое рядом', 'Todo lo necesario cerca') }}</h3>
          <p>{{ t.inline('Ein großer HDL-Supermarkt ist in wenigen Gehminuten erreichbar – ideal für frische Lebensmittel und alles, was Sie täglich benötigen.', 'A large HDL supermarket is only a few minutes’ walk away – ideal for fresh groceries and everyday essentials.', 'Большой супермаркет HDL находится всего в нескольких минутах ходьбы — здесь есть свежие продукты и всё необходимое на каждый день.', 'Un gran supermercado HDL se encuentra a pocos minutos a pie, perfecto para comprar alimentos frescos y todo lo necesario durante la estancia.') }}</p>
        </article>
        <article>
          <span class="location-icon" aria-hidden="true">≈</span>
          <h3>{{ t.inline('Drobni Pijesak', 'Drobni Pijesak', 'Дробни-Пиесак', 'Drobni Pijesak') }}</h3>
          <p>{{ t.inline('Der Strand mit goldenem Sand und kristallklarem Wasser liegt etwa 3 Autominuten oder 10 Gehminuten entfernt. Zwei Parkplätze pro Villa stehen kostenfrei zur Verfügung.', 'The beach with golden sand and crystal-clear water is around 3 minutes away by car or 10 minutes on foot. Two parking spaces per villa are included.', 'Пляж с золотистым песком и кристально чистой водой находится примерно в 3 минутах на автомобиле или в 10 минутах пешком. Для каждой виллы предусмотрено два бесплатных парковочных места.', 'La playa de arena dorada y agua cristalina está a unos 3 minutos en coche o 10 minutos a pie. Cada villa incluye dos plazas de aparcamiento gratuitas.') }}</p>
        </article>
      </div>
      <ul class="distances">
        @for (d of distances; track d.label.de) {
          <li><span>{{ t.t(d.label) }}</span><strong>{{ t.t(d.value) }}</strong></li>
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
          <article class="guide-card">
            <a class="guide-card-main" [routerLink]="guidePath(g.slug)">
              <div class="guide-card-image">
                <img [src]="g.image.src" [srcset]="responsiveSrcSet(g.image.src)" sizes="(max-width: 700px) 100vw, 50vw"
                     [alt]="t.t(g.image.alt)" width="1440" height="960" loading="lazy" />
                <span>{{ t.t(g.category) }}</span>
              </div>
              <div class="guide-card-copy">
                <h3>{{ t.t(g.title) }}</h3>
                <p>{{ t.t(g.excerpt) }}</p>
                <strong>{{ t.inline('Entdecken', 'Discover', 'Открыть', 'Descubrir', 'Otkrijte') }} <span aria-hidden="true">→</span></strong>
              </div>
            </a>
            <p class="guide-card-credit">
              {{ t.inline('Foto', 'Photo', 'Фото', 'Foto', 'Fotografija') }}:
              <a [href]="g.image.credit.sourceUrl" target="_blank" rel="noopener">{{ g.image.credit.author }}</a>
              · <a [href]="g.image.credit.licenseUrl" target="_blank" rel="noopener">{{ g.image.credit.license }}</a>
            </p>
          </article>
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

    .compare-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: clamp(1rem, 2.5vw, 2rem); margin-top: var(--space-3); align-items: stretch; }
    .compare-card { display: flex; flex-direction: column; min-width: 0; padding: clamp(1.4rem, 3vw, 2.25rem); border: 1px solid color-mix(in srgb, var(--c-sand) 74%, transparent); border-radius: var(--radius-lg); background: var(--c-ivory); box-shadow: var(--shadow-soft); }
    .compare-card-shared { background: var(--c-adria); border-color: var(--c-adria); color: rgba(255,255,255,.78); box-shadow: var(--shadow-lifted); }
    .compare-card h3 { font-size: clamp(1.65rem, 2.5vw, 2.2rem); margin: .45rem 0 1rem; }
    .compare-card-shared h3 { color: var(--c-limestone); }
    .compare-card p { line-height: 1.7; }
    .compare-label { color: var(--c-olive); font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; }
    .compare-card-shared .compare-label { color: var(--c-champagne); }
    .compare-facts, .villa-feature-list { list-style: none; padding: 0; margin: auto 0 0; }
    .compare-facts { display: grid; grid-template-columns: 1fr 1fr; gap: .8rem; padding-top: 1.25rem; }
    .compare-facts li { display: flex; flex-direction: column; gap: .15rem; padding-top: .75rem; border-top: 1px solid rgba(255,255,255,.16); }
    .compare-facts strong { color: var(--c-limestone); font-family: var(--font-display); font-size: 1.65rem; font-weight: 500; }
    .compare-facts span { font-size: .78rem; line-height: 1.45; }
    .villa-feature-list { padding-top: 1rem; }
    .villa-feature-list li { position: relative; padding: .65rem 0 .65rem 1.1rem; border-top: 1px solid color-mix(in srgb, var(--c-sand) 65%, transparent); }
    .villa-feature-list li::before { content: '·'; position: absolute; left: 0; color: var(--c-terracotta); font-weight: 700; }
    .compare-link { display: inline-flex; align-items: center; gap: .45rem; margin-top: 1.25rem; color: var(--c-adria); font-size: .85rem; font-weight: 600; text-decoration: none; }
    .compare-link span { transition: transform 180ms ease; }
    .compare-link:hover span { transform: translateX(4px); }

    .location-lead { max-width: 58ch; color: var(--c-olive); font-size: clamp(1.05rem, 1.6vw, 1.25rem); }
    .location-highlights { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1rem, 2vw, 1.5rem); margin: var(--space-3) 0; }
    .location-highlights article { padding: clamp(1.25rem, 2.5vw, 1.8rem); border-top: 1px solid var(--c-sand); background: color-mix(in srgb, var(--c-ivory) 64%, transparent); }
    .location-highlights h3 { margin: .75rem 0 .5rem; font-size: 1.35rem; }
    .location-highlights p { margin: 0; font-size: .92rem; line-height: 1.65; }
    .location-icon { display: grid; place-items: center; width: 2.25rem; height: 2.25rem; border: 1px solid var(--c-champagne); border-radius: 50%; color: var(--c-terracotta); font-family: var(--font-display); }

    .distances { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0.6rem 2rem; max-width: 640px; margin: var(--space-3) 0 var(--space-3); }
    .distances li { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--c-sand); padding-bottom: 0.35rem; }
    .distances strong { color: var(--c-adria); }

    .guides-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-3); margin-top: var(--space-3); }
    .guide-card { overflow: hidden; border: 1px solid color-mix(in srgb, var(--c-sand) 76%, transparent); border-radius: var(--radius-lg); color: var(--c-anthracite); background: var(--c-ivory); box-shadow: var(--shadow-soft); transition: transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease; }
    .guide-card-main { display: block; color: inherit; text-decoration: none; }
    .guide-card-image { position: relative; overflow: hidden; aspect-ratio: 16 / 10; background: var(--c-sand); }
    .guide-card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 750ms cubic-bezier(.2,.7,.2,1); }
    .guide-card-image span { position: absolute; left: 1.25rem; bottom: 1.25rem; padding: .5rem .75rem; border-radius: 999px; color: var(--c-ivory); background: rgba(10,36,49,.82); backdrop-filter: blur(8px); font-size: .66rem; letter-spacing: .12em; text-transform: uppercase; }
    .guide-card-copy { padding: clamp(1.5rem, 3vw, 2.25rem); }
    .guide-card h3 { margin: 0 0 .65rem; font-size: clamp(1.7rem, 3vw, 2.35rem); line-height: 1.08; }
    .guide-card-copy p { margin: 0 0 1.25rem; color: var(--c-anthracite); font-size: 0.92rem; line-height: 1.7; }
    .guide-card-copy strong { color: var(--c-adria); font-size: .8rem; letter-spacing: .05em; }
    .guide-card-copy strong span { display: inline-block; margin-left: .3rem; transition: transform 180ms ease; }
    .guide-card-credit { margin: 0; padding: 0 2.25rem 1.1rem; color: var(--c-olive); font-size: .62rem; }
    .guide-card-credit a { color: inherit; text-underline-offset: 2px; }
    .guide-card:hover { border-color: var(--c-champagne); transform: translateY(-5px); box-shadow: 0 24px 55px rgba(19,53,66,.13); }
    .guide-card:hover .guide-card-image img { transform: scale(1.04); }
    .guide-card:hover .guide-card-copy strong span { transform: translateX(4px); }

    .home-faq { max-width: 900px; }
    .faq { margin-top: var(--space-3); }
    .faq-item { margin-bottom: var(--space-3); }
    .faq-item dt { font-weight: 600; color: var(--c-adria); margin-bottom: 0.25rem; }
    .faq-item dd { margin: 0; color: var(--c-anthracite); }

    @media (max-width: 900px) {
      .villa-grid, .compare-grid, .guides-grid { grid-template-columns: minmax(0, 1fr); }
      .location-highlights { grid-template-columns: 1fr; }
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
      .compare-card { padding: 1.35rem; }
      .compare-facts { grid-template-columns: 1fr 1fr; }
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
    '/assets/media/lumina/lumina-dining-area.webp',
  ];
  protected readonly homeGalleryAlt = (path: string): string => path.includes('pool')
    ? this.t.inline('Villa mit privatem Pool', 'Villa with private pool', 'Вилла с частным бассейном', 'Villa con piscina privada')
    : path.includes('olive')
      ? this.t.inline('Mediterraner Olivengarten der Villa MonteMare', 'Mediterranean olive garden at Villa MonteMare', 'Средиземноморский сад Villa MonteMare', 'Jardín mediterráneo de Villa MonteMare')
    : path.includes('rooftop')
      ? this.t.inline('Dachterrasse mit Meerblick', 'Rooftop terrace with sea view', 'Терраса на крыше с видом на море', 'Azotea con vistas al mar')
      : path.includes('dining')
        ? this.t.inline('Heller Essbereich der Villa Lumina mit großem Holztisch', 'Bright dining area at Villa Lumina with a large wooden table', 'Светлая обеденная зона Villa Lumina с большим деревянным столом', 'Luminoso comedor de Villa Lumina con una gran mesa de madera', 'Svetla trpezarija vile Lumina sa velikim drvenim stolom')
      : path.includes('living')
        ? this.t.inline('Heller Wohnbereich der Villa Lumina', 'Bright living room at Villa Lumina', 'Светлая гостиная Villa Lumina', 'Salón luminoso de Villa Lumina')
        : this.t.inline('Schlafzimmer mit Meerblick', 'Bedroom with sea view', 'Спальня с видом на море', 'Dormitorio con vistas al mar');

  ngOnInit(): void {
    const locale = (this.route.snapshot.data['locale'] as Locale) ?? 'de';
    this.t.setLocale(locale);

    this.seo.setPage({
      locale,
      path: '',
      alternatePaths: { de: '', en: '', ru: '', es: '', sr: '' },
      title: ({
        de: 'Luxusvillen in Montenegro mit Pool | Budva Riviera',
        en: 'Luxury Villas in Montenegro with Pool | Budva Riviera',
        ru: 'Роскошные виллы с бассейном в Черногории | Будванская ривьера',
        es: 'Villas de lujo con piscina en Montenegro | Riviera de Budva',
        sr: 'Luksuzne vile u Crnoj Gori sa bazenom | Budvanska rivijera',
      } as Record<Locale, string>)[locale],
      description: ({
        de: 'Entdecken Sie Villa MonteMare und Villa Lumina in Reževići: private Pools, Meerblick und Platz für je 6 Gäste nahe Budva und Sveti Stefan.',
        en: 'Discover Villa MonteMare and Villa Lumina in Reževići: private pools, sea views and room for up to 6 guests, near Budva and Sveti Stefan.',
        ru: 'Откройте для себя Villa MonteMare и Villa Lumina в Режевичи: частные бассейны, вид на море и размещение до 6 гостей рядом с Будвой и Свети-Стефаном.',
        es: 'Descubra Villa MonteMare y Villa Lumina en Reževići: piscinas privadas, vistas al mar y capacidad para 6 huéspedes cerca de Budva y Sveti Stefan.',
        sr: 'Otkrijte vile MonteMare i Lumina u Reževićima: privatni bazeni, pogled na more i smeštaj za do 6 gostiju, blizu Budve i Svetog Stefana.',
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
