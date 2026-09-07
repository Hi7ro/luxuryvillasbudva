import { Component, DestroyRef, HostListener, OnInit, ViewChild, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { VILLAS, GUIDE_ARTICLES, DISTANCES } from '../../core/data/content.data';
import { Locale, Villa } from '../../core/models/villa.model';
import { BookingWidgetComponent } from '../../shared/booking-widget/booking-widget.component';
import { ImageLightboxComponent } from '../../shared/image-lightbox/image-lightbox.component';

@Component({
  selector: 'app-villa-detail',
  standalone: true,
  imports: [RouterLink, BookingWidgetComponent, ImageLightboxComponent],
  template: `
    @if (villa) {
      <header class="villa-hero">
        <img class="villa-hero-image" [src]="heroImage()" [srcset]="responsiveSrcSet(heroImage())" sizes="100vw"
             [alt]="t.t(villa.heroImageAlt)" width="1920" height="1280" fetchpriority="high" />
        <div class="villa-hero-shade" aria-hidden="true"></div>
        <div class="villa-hero-inner container">
          <nav class="breadcrumbs" [attr.aria-label]="t.inline('Brotkrümelnavigation', 'Breadcrumb', 'Навигационная цепочка', 'Migas de pan')">
            <a [routerLink]="['/' + locale()]">{{ t.inline('Start', 'Home', 'Главная', 'Inicio') }}</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{{ villa.name }}</span>
          </nav>
          <div class="hero-copy">
            <p class="eyebrow">{{ t.inline('Reževići · Budva Riviera · Montenegro', 'Reževići · Budva Riviera · Montenegro', 'Режевичи · Будванская ривьера · Черногория', 'Reževići · Riviera de Budva · Montenegro') }}</p>
            <h1>{{ villa.name }}</h1>
            <p class="tagline">{{ t.t(villa.tagline) }}</p>
            <div class="hero-facts" [attr.aria-label]="t.inline('Eckdaten der Villa', 'Villa facts', 'Основные данные виллы', 'Datos de la villa')">
              <span><strong>{{ villa.guests }}</strong> {{ t.inline('Gäste', 'guests', 'гостей', 'huéspedes') }}</span>
              <span><strong>{{ villa.bedrooms }}</strong> {{ t.inline('Schlafzimmer', 'bedrooms', 'спальни', 'dormitorios') }}</span>
              <span><strong>{{ villa.bathrooms }}</strong> {{ t.inline('Bäder', 'bathrooms', 'ванные', 'baños') }}</span>
              <span><strong>{{ villa.nightlyRateEur }} €</strong> {{ t.inline('/ Nacht', '/ night', '/ ночь', '/ noche') }}</span>
            </div>
            <div class="hero-actions">
              <a class="btn btn-primary" [routerLink]="[]" fragment="verfuegbarkeit" (click)="navigateToBooking($event)">{{ t.ui('ctaCheckAvailability') }}</a>
              <a class="btn btn-secondary" [routerLink]="[]" fragment="villa-ueberblick">{{ t.inline('Villa entdecken', 'Discover the villa', 'Открыть виллу', 'Descubrir la villa') }}</a>
            </div>
          </div>
        </div>
      </header>

      <nav class="section-nav" [attr.aria-label]="t.inline('Seitennavigation', 'Page sections', 'Разделы страницы', 'Secciones de la página')">
        <div class="container section-nav-inner">
          <a [routerLink]="[]" fragment="villa-ueberblick">{{ t.inline('Die Villa', 'The villa', 'Вилла', 'La villa') }}</a>
          <a [routerLink]="[]" fragment="villa-galerie">{{ t.inline('Galerie', 'Gallery', 'Галерея', 'Galería') }}</a>
          <a [routerLink]="[]" fragment="villa-ausstattung">{{ t.inline('Ausstattung', 'Amenities', 'Удобства', 'Comodidades') }}</a>
          <a [routerLink]="[]" fragment="villa-lage">{{ t.inline('Lage', 'Location', 'Расположение', 'Ubicación') }}</a>
          <a class="section-nav-book" href="#verfuegbarkeit" (click)="openStayPlanner($event)">{{ t.inline('Aufenthalt planen', 'Plan your stay', 'Спланировать отдых', 'Planificar estancia') }}</a>
        </div>
      </nav>

      <div class="villa-content">
      <section class="story-section section container" id="villa-ueberblick">
        <div class="story-image-wrap">
          <img [src]="storyImage()" [srcset]="responsiveSrcSet(storyImage())" sizes="(max-width: 900px) 100vw, 55vw"
               [alt]="galleryAlt(storyImage())" width="1280" height="1600" loading="eager" />
        </div>
        <div class="story-copy">
          <p class="eyebrow">{{ t.inline('Privat wohnen. Weit blicken.', 'Private living. Endless views.', 'Уединение. Бескрайний вид.', 'Privacidad. Vistas infinitas.') }}</p>
          <h2>{{ t.inline('Ihr privater Rückzugsort', 'Your private retreat', 'Ваше уединённое место', 'Tu refugio privado') }}</h2>
          <p class="story-lead">{{ t.t(villa.intro) }}</p>
          @for (paragraph of villa.description; track $index) {
            <p>{{ t.t(paragraph) }}</p>
          }
        </div>
      </section>

      <section class="stat-band" [attr.aria-label]="t.inline('Eckdaten', 'Key facts', 'Основные сведения', 'Datos principales')">
        <div class="container stat-grid">
          <div><strong>{{ villa.guests }}</strong><span>{{ t.inline('Gäste', 'Guests', 'Гостей', 'Huéspedes') }}</span></div>
          <div><strong>{{ villa.bedrooms }}</strong><span>{{ t.inline('Schlafzimmer', 'Bedrooms', 'Спальни', 'Dormitorios') }}</span></div>
          <div><strong>{{ villa.bathrooms }}</strong><span>{{ t.inline('Badezimmer', 'Bathrooms', 'Ванные', 'Baños') }}</span></div>
          <div><strong>{{ villa.nightlyRateEur }} €</strong><span>{{ t.inline('ab / Nacht', 'from / night', 'от / ночь', 'desde / noche') }}</span></div>
        </div>
      </section>

      <section class="villa-details section">
        <div class="container">
          <header class="villa-details-heading">
            <div>
              <p class="eyebrow">{{ t.inline('Ankommen · Aufatmen · Bleiben', 'Arrive · Unwind · Stay', 'Приехать · Выдохнуть · Остаться', 'Llegar · Respirar · Quedarse') }}</p>
              <h2>{{ t.inline('Ihr Aufenthalt im Detail', 'Your stay in detail', 'Подробно о вашем отдыхе', 'Tu estancia al detalle') }}</h2>
            </div>
            <p>{{ t.inline('Alles, was Sie über Räume, Terrassen, Garten und Pool wissen möchten.', 'Everything you need to know about the interiors, terraces, garden and pool.', 'Всё, что важно знать о помещениях, террасах, саде и бассейне.', 'Todo lo que necesitas saber sobre los interiores, terrazas, jardín y piscina.') }}</p>
          </header>
          <div class="villa-detail-stories">
            @for (section of villa.detailSections; track section.title.de) {
              <article class="villa-detail-story" [class.featured]="$first">
                <span class="detail-index" aria-hidden="true">{{ ($index + 1).toString().padStart(2, '0') }}</span>
                <div>
                  <h3>{{ t.t(section.title) }}</h3>
                  @for (paragraph of section.paragraphs; track $index) {
                    <p>{{ t.t(paragraph) }}</p>
                  }
                </div>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="atmosphere-band">
        <img [src]="atmosphereImage()" [srcset]="responsiveSrcSet(atmosphereImage())" sizes="100vw"
             [alt]="galleryAlt(atmosphereImage())" width="1920" height="1280" loading="lazy" />
        <div class="atmosphere-overlay" aria-hidden="true"></div>
        <div class="container atmosphere-copy">
          <p>{{ atmosphereLine() }}</p>
        </div>
      </section>

      <app-image-lightbox #villaLightbox
        [images]="villa.galleryImagePlaceholders"
        [altText]="galleryAltForLightbox"
        [label]="t.inline('Bildergalerie', 'Image gallery', 'Фотогалерея', 'Galería de imágenes')" />
      <section class="gallery-section section container" id="villa-galerie">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ t.inline('Räume · Licht · Adria', 'Spaces · Light · Adriatic', 'Пространство · Свет · Адриатика', 'Espacios · Luz · Adriático') }}</p>
            <h2>{{ t.inline('Einblicke in ', 'Inside ', 'Взгляд на ', 'Descubre ') }}{{ villa.name }}</h2>
          </div>
          <p>{{ t.inline('Wählen Sie ein Bild, um die Galerie im Vollbild zu öffnen.', 'Select an image to open the full-screen gallery.', 'Выберите фотографию, чтобы открыть полноэкранную галерею.', 'Selecciona una imagen para abrir la galería a pantalla completa.') }}</p>
        </div>
        <div class="gallery" [attr.aria-label]="t.inline('Bildergalerie', 'Image gallery', 'Фотогалерея', 'Galería de imágenes')">
          @for (img of visibleGalleryImages(); track img) {
            @if (img.startsWith('/assets/')) {
              <button class="gallery-item" type="button" (click)="villaLightbox.open($index)" [attr.aria-label]="galleryAlt(img)">
                <img [src]="img" [srcset]="responsiveSrcSet(img)" sizes="(max-width: 560px) 50vw, 40vw"
                     [alt]="galleryAlt(img)" width="1920" height="1280" loading="lazy" />
                <span aria-hidden="true">{{ ($index + 1).toString().padStart(2, '0') }}</span>
              </button>
            } @else {
              <div class="gallery-item gallery-placeholder" [attr.aria-label]="'Platzhalter: ' + img" role="img"></div>
            }
          }
        </div>
        @if (villa.galleryImagePlaceholders.length > 15) {
          <div class="gallery-more">
            <button class="btn btn-quiet" type="button" (click)="allGalleryImagesVisible.set(!allGalleryImagesVisible())">
              {{ allGalleryImagesVisible()
                ? t.inline('Weniger Fotos anzeigen', 'Show fewer photos', 'Показать меньше фотографий', 'Mostrar menos fotos', 'Prikaži manje fotografija')
                : t.inline('Alle Fotos anzeigen', 'Show all photos', 'Показать все фотографии', 'Mostrar todas las fotos', 'Prikaži sve fotografije') }}
              @if (!allGalleryImagesVisible()) { <span aria-hidden="true">({{ villa.galleryImagePlaceholders.length }})</span> }
            </button>
          </div>
        }
      </section>

      @if (villa.slug === 'villa-lumina') {
        <section class="section container video-tour">
          <p class="eyebrow">Villa Lumina</p>
          <h2>{{ t.inline('Video-Rundgang', 'Video tour', 'Видеоэкскурсия', 'Recorrido en vídeo') }}</h2>
          <video controls playsinline preload="metadata"
                 poster="/assets/media/lumina/lumina-video-poster.webp">
            <source src="/assets/media/lumina/lumina-tour.mp4" type="video/mp4" />
          </video>
        </section>
      }

      <section class="highlight-section section" id="villa-ausstattung">
        <div class="container">
          <div class="section-heading light-heading">
            <div>
              <p class="eyebrow">{{ t.inline('Was den Aufenthalt besonders macht', 'What makes the stay special', 'Что делает отдых особенным', 'Lo que hace especial la estancia') }}</p>
              <h2>{{ t.inline('Vier besondere Seiten', 'Four defining features', 'Четыре особенные черты', 'Cuatro rasgos únicos') }}</h2>
            </div>
            <p>{{ t.t(villa.positioning) }}</p>
          </div>
          <div class="highlight-grid">
            @for (highlight of villa.highlights; track highlight.label.de) {
              <article class="highlight-card">
                <span class="highlight-number">{{ ($index + 1).toString().padStart(2, '0') }}</span>
                <h3>{{ t.t(highlight.label) }}</h3>
              </article>
            }
          </div>
          <div class="amenities-panel">
            <div>
              <p class="eyebrow">{{ t.inline('Alles für Ihren Aufenthalt', 'Everything for your stay', 'Всё для вашего отдыха', 'Todo para tu estancia') }}</p>
              <h2>{{ t.inline('Ausstattung', 'Amenities', 'Удобства', 'Comodidades') }}</h2>
            </div>
            <ul class="amenities">
              @for (item of villa.amenities; track item.de) {
                <li>{{ t.t(item) }}</li>
              }
            </ul>
          </div>
        </div>
      </section>

      <section class="section container detail-grid" id="villa-lage">
        <div class="detail-main">
          @if (villa.suitableForWorkation) {
            <p class="eyebrow">{{ t.inline('Länger bleiben', 'Stay a little longer', 'Остаться подольше', 'Quédate un poco más') }}</p>
            <h2>{{ t.inline('Workation über der Adria', 'Workation above the Adriatic', 'Работа над Адриатикой', 'Teletrabajo sobre el Adriático') }}</h2>
            <p>
              @if (villa.slug === 'villa-monte-mare') {
                {{ t.inline(
                  'Villa MonteMare bietet einen separaten Arbeitsbereich mit Schreibtisch und Getränkeküche, zuverlässiges WLAN sowie viel Ruhe und Privatsphäre – ideal für einzelne Arbeitstage und längere Workations.',
                  'Villa MonteMare offers a separate workspace with a desk and refreshment kitchenette, reliable WiFi, and plenty of peace and privacy – ideal for occasional remote-working days and longer workations.',
                  'Villa MonteMare располагает отдельной рабочей зоной с письменным столом и небольшой кухней для напитков, надёжным Wi‑Fi, тишиной и приватностью — идеальные условия как для отдельных рабочих дней, так и для длительной удалённой работы.',
                  'Villa MonteMare ofrece una zona de trabajo independiente con escritorio y pequeña cocina para bebidas, Wi‑Fi fiable y mucha tranquilidad y privacidad, ideal tanto para días puntuales de teletrabajo como para estancias de workation más largas.',
                  'Vila MonteMare nudi odvojen radni prostor sa radnim stolom i malom čajnom kuhinjom, pouzdan WiFi, kao i mnogo mira i privatnosti – idealno za povremeni rad na daljinu i duže radne boravke.') }}
              } @else {
                {{ t.inline(
                  'Villa Lumina eignet sich mit separatem Arbeitsbereich, eigener kleiner Küche und schnellem Glasfaser-Internet gezielt für längere, arbeitsintensive Aufenthalte.',
                  'With a separate workspace, its own small kitchen and fast fibre internet, Villa Lumina is particularly well suited to longer, work-intensive stays.',
                  'Благодаря отдельной рабочей зоне, собственной мини-кухне и быстрому оптоволоконному интернету Villa Lumina отлично подходит для длительного проживания и удалённой работы.',
                  'Con una zona de trabajo independiente, su propia pequeña cocina e internet de fibra rápida, Villa Lumina resulta especialmente adecuada para estancias largas con teletrabajo.',
                  'Sa odvojenim radnim prostorom, sopstvenom malom kuhinjom i brzim optičkim internetom, Vila Lumina je posebno pogodna za duže boravke uz rad na daljinu.') }}
              }
            </p>
          }

          <p class="eyebrow">{{ t.inline('Zwischen Meer und Bergen', 'Between sea and mountains', 'Между морем и горами', 'Entre el mar y las montañas') }}</p>
          <h2>{{ t.inline('Die Lage', 'The location', 'Расположение', 'La ubicación') }}</h2>
          <p>{{ t.inline('Smokov vijenac, Drobnići, Gemeinde Budva – ruhig gelegen und zugleich nah an den besonderen Orten der montenegrinischen Küste.', 'Smokov vijenac, Drobnići, Budva Municipality – peacefully located yet close to the defining places of Montenegro’s coast.', 'Smokov vijenac, Дробничи, муниципалитет Будва — тихое место рядом с главными достопримечательностями побережья Черногории.', 'Smokov vijenac, Drobnići, municipio de Budva: tranquilidad cerca de los lugares más especiales de la costa montenegrina.') }}</p>
          <ul class="distances">
            @for (d of distances; track d.label.de) {
              <li><span>{{ t.t(d.label) }}</span><strong>{{ t.t(d.value) }}</strong></li>
            }
          </ul>
          <a class="btn btn-quiet" [routerLink]="locationPath()">
            {{ t.inline('Zur Lage-Seite', 'View location page', 'Открыть страницу расположения', 'Ver página de ubicación') }}
          </a>

          <div class="horizon-divider"></div>
          <h2>{{ t.ui('faqTitle') }}</h2>
          <dl class="faq">
            @for (item of villa.faq; track item.question.de) {
              <div class="faq-item">
                <dt>{{ t.t(item.question) }}</dt>
                <dd>{{ t.t(item.answer) }}</dd>
              </div>
            }
          </dl>

          <section class="related-guides-section" aria-labelledby="related-guides-title">
            <p class="eyebrow">{{ t.inline('Die Budva Riviera entdecken', 'Discover the Budva Riviera', 'Откройте Будванскую ривьеру', 'Descubre la Riviera de Budva', 'Otkrijte Budvansku rivijeru') }}</p>
            <div class="related-guides-heading">
              <h2 id="related-guides-title">{{ t.ui('relatedGuides') }}</h2>
              <p>{{ t.inline('Unsere Empfehlungen für besondere Tage am Meer und genussvolle Abende in Budva.', 'Our recommendations for memorable days by the sea and enjoyable evenings in Budva.', 'Наши рекомендации для незабываемых дней у моря и приятных вечеров в Будве.', 'Nuestras recomendaciones para días inolvidables junto al mar y noches especiales en Budva.', 'Naše preporuke za nezaboravne dane uz more i prijatne večeri u Budvi.') }}</p>
            </div>
            <div class="related-guides-grid">
              @for (g of relatedGuides(); track g.slug; let number = $index) {
                <article class="related-guide-card">
                  <a class="related-guide-link" [routerLink]="guidePath(g.slug)">
                    <div class="related-guide-image">
                      <img [src]="g.image.src" [srcset]="responsiveSrcSet(g.image.src)" sizes="(max-width: 700px) 100vw, 390px"
                           [alt]="t.t(g.image.alt)" width="1440" height="960" loading="lazy" />
                      <span>{{ t.t(g.category) }}</span>
                    </div>
                    <div class="related-guide-copy">
                      <small>{{ (number + 1).toString().padStart(2, '0') }}</small>
                      <h3>{{ t.t(g.title) }}</h3>
                      <p>{{ t.t(g.excerpt) }}</p>
                      <strong>{{ t.inline('Reiseführer lesen', 'Read the guide', 'Читать путеводитель', 'Leer la guía', 'Pročitajte vodič') }} <span aria-hidden="true">→</span></strong>
                    </div>
                  </a>
                  <p class="related-guide-credit">
                    {{ t.inline('Foto', 'Photo', 'Фото', 'Foto', 'Fotografija') }}:
                    <a [href]="g.image.credit.sourceUrl" target="_blank" rel="noopener">{{ g.image.credit.author }}</a>
                    · <a [href]="g.image.credit.licenseUrl" target="_blank" rel="noopener">{{ g.image.credit.license }}</a>
                  </p>
                </article>
              }
            </div>
          </section>

          <p class="other-villa">
            <a [routerLink]="otherVillaPath()">
              {{ t.inline('Zur anderen Villa: ', 'See the other villa: ', 'Посмотреть другую виллу: ', 'Ver la otra villa: ') }}{{ otherVilla?.name }}
            </a>
          </p>
        </div>

      </section>
      <section class="section container villa-booking-section">
        <app-booking-widget #bookingWidget [preselectedVillaSlug]="villa.slug" />
      </section>
      </div>

      <a class="mobile-sticky-cta btn btn-primary" [class.visible]="showMobileCta()" [routerLink]="[]" fragment="verfuegbarkeit" (click)="navigateToBooking($event)">{{ t.ui('ctaCheckAvailability') }}</a>
    } @else {
      <section class="missing-villa container">
        <p class="eyebrow">404</p>
        <h1>{{ t.inline('Diese Villa wurde nicht gefunden.', 'This villa could not be found.', 'Эта вилла не найдена.', 'No hemos encontrado esta villa.') }}</h1>
        <p>{{ t.inline('Entdecken Sie unsere beiden Villen auf der Startseite.', 'Discover our two villas on the home page.', 'Познакомьтесь с нашими двумя виллами на главной странице.', 'Descubre nuestras dos villas en la página de inicio.') }}</p>
        <a class="btn btn-primary" [routerLink]="['/' + locale()]">{{ t.inline('Zu den Villen', 'View the villas', 'К виллам', 'Ver las villas') }}</a>
      </section>
    }
  `,
  styles: [`
    :host { display: block; }
    section[id] { scroll-margin-top: 8.5rem; }
    .villa-hero { min-height: min(830px, calc(100svh - 72px)); position: relative; display: grid; overflow: hidden; background: var(--c-adria); }
    .villa-hero-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .villa-hero-shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(9, 26, 34, .8) 0%, rgba(9, 26, 34, .48) 50%, rgba(9, 26, 34, .12) 100%), linear-gradient(0deg, rgba(9, 26, 34, .58), transparent 56%); }
    .villa-hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; width: 100%; padding-block: 1.25rem clamp(3.5rem, 9vh, 7rem); }
    .breadcrumbs { display: flex; gap: .55rem; font-size: .82rem; color: rgba(255,255,255,.72); }
    .breadcrumbs a { color: rgba(255,255,255,.9); }
    .hero-copy { margin-top: auto; max-width: 860px; }
    .hero-copy .eyebrow { color: var(--c-champagne); }
    .hero-copy h1 { color: var(--c-ivory); font-size: clamp(4rem, 9vw, 8rem); margin-bottom: .5rem; }
    .tagline { color: var(--c-ivory); font-family: var(--font-display); font-size: clamp(1.4rem, 2.5vw, 2.25rem); line-height: 1.25; max-width: 28ch; }
    .hero-facts { display: flex; flex-wrap: wrap; gap: .75rem 2rem; margin-top: 2rem; color: rgba(255,255,255,.78); font-size: .9rem; text-transform: uppercase; letter-spacing: .08em; }
    .hero-facts strong { color: #fff; font-size: 1.05rem; }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
    .section-nav { position: sticky; top: 72px; z-index: 45; background: color-mix(in srgb, var(--c-limestone) 94%, transparent); backdrop-filter: blur(16px); border-bottom: 1px solid color-mix(in srgb, var(--c-sand) 70%, transparent); }
    .section-nav-inner { display: flex; align-items: center; gap: clamp(1.2rem, 3vw, 3rem); min-height: 62px; overflow-x: auto; scrollbar-width: none; }
    .section-nav-inner::-webkit-scrollbar { display: none; }
    .section-nav a { flex: 0 0 auto; color: var(--c-adria); text-decoration: none; font-size: .84rem; font-weight: 600; letter-spacing: .04em; }
    .section-nav a:hover { color: var(--c-terracotta); }
    .section-nav-book { margin-left: auto; color: var(--c-terracotta) !important; }

    .story-section { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(320px, .8fr); gap: clamp(3rem, 8vw, 8rem); align-items: center; }
    .story-image-wrap { min-height: 650px; overflow: hidden; }
    .story-image-wrap img { width: 100%; height: 100%; min-height: 650px; object-fit: cover; }
    .story-copy h2 { font-size: clamp(3.8rem, 7vw, 7rem); }
    .story-copy p { color: color-mix(in srgb, var(--c-anthracite) 84%, transparent); }
    .story-copy .story-lead { color: var(--c-adria); font-family: var(--font-display); font-size: clamp(1.3rem, 2vw, 1.8rem); line-height: 1.45; }

    .stat-band { background: var(--c-adria); color: var(--c-ivory); padding-block: clamp(2.5rem, 5vw, 4.5rem); }
    .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
    .stat-grid div { padding-inline: clamp(1rem, 3vw, 3rem); border-right: 1px solid rgba(255,255,255,.18); text-align: center; }
    .stat-grid div:first-child { padding-left: 0; }
    .stat-grid div:last-child { padding-right: 0; border-right: 0; }
    .stat-grid strong { display: block; font-family: var(--font-display); font-size: clamp(2.8rem, 5vw, 5rem); line-height: 1; color: var(--c-champagne); font-weight: 400; }
    .stat-grid span { display: block; margin-top: .65rem; font-size: .78rem; text-transform: uppercase; letter-spacing: .13em; }

    .villa-details { background: var(--c-limestone); }
    .villa-details-heading { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, .55fr); gap: clamp(2rem, 8vw, 8rem); align-items: end; margin-bottom: clamp(3rem, 7vw, 6rem); }
    .villa-details-heading h2 { max-width: 11ch; }
    .villa-details-heading > p { max-width: 42ch; margin: 0; color: var(--c-olive); }
    .villa-detail-stories { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--c-sand); }
    .villa-detail-story { display: grid; grid-template-columns: 2.5rem minmax(0, 1fr); gap: 1.25rem; padding: clamp(2rem, 4vw, 3.5rem); border-bottom: 1px solid var(--c-sand); }
    .villa-detail-story:nth-child(odd):not(.featured) { border-right: 1px solid var(--c-sand); }
    .villa-detail-story.featured { grid-column: 1 / -1; grid-template-columns: 3rem minmax(0, 1fr); padding-inline: 0; }
    .villa-detail-story.featured > div { columns: 2; column-gap: clamp(2rem, 7vw, 7rem); }
    .villa-detail-story.featured h3 { column-span: all; }
    .detail-index { color: var(--c-terracotta); font-size: .72rem; letter-spacing: .16em; padding-top: .45rem; }
    .villa-detail-story h3 { margin-bottom: 1.25rem; color: var(--c-adria); font-size: clamp(1.55rem, 2.4vw, 2.25rem); }
    .villa-detail-story p { color: color-mix(in srgb, var(--c-anthracite) 82%, transparent); }
    .villa-detail-story p:last-child { margin-bottom: 0; }

    .atmosphere-band { min-height: clamp(480px, 65vw, 790px); position: relative; display: flex; align-items: flex-end; overflow: hidden; }
    .atmosphere-band > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .atmosphere-overlay { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(9,26,34,.75), rgba(9,26,34,.04) 65%); }
    .atmosphere-copy { position: relative; z-index: 1; width: 100%; padding-bottom: clamp(3rem, 8vw, 7rem); }
    .atmosphere-copy p { max-width: 22ch; color: white; font-family: var(--font-display); font-size: clamp(2.4rem, 5vw, 5rem); line-height: 1.08; }

    .section-heading { display: flex; justify-content: space-between; align-items: end; gap: 3rem; margin-bottom: clamp(2.5rem, 5vw, 5rem); }
    .section-heading h2 { max-width: 13ch; }
    .section-heading > p { color: var(--c-olive); }

    .gallery {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-auto-rows: clamp(180px, 18vw, 285px);
      grid-auto-flow: dense;
      gap: clamp(.5rem, 1.2vw, 1rem);
    }
    .gallery-item {
      grid-column: span 4;
      position: relative;
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: 0;
      cursor: zoom-in;
      background: transparent;
    }
    .gallery-item:nth-child(7n + 1), .gallery-item:nth-child(7n + 5) { grid-column: span 8; grid-row: span 2; }
    .gallery-item:nth-child(7n + 2), .gallery-item:nth-child(7n + 3) { grid-column: span 4; }
    .gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 700ms cubic-bezier(.2,.7,.2,1); }
    .gallery-item:hover img { transform: scale(1.045); }
    .gallery-item > span { position: absolute; right: 1rem; bottom: .75rem; color: white; font-size: .72rem; letter-spacing: .16em; text-shadow: 0 1px 10px rgba(0,0,0,.7); }
    .gallery-more { display: flex; justify-content: center; margin-top: 2rem; }
    .highlight-section { background: var(--c-adria); color: rgba(255,255,255,.78); }
    .light-heading h2, .amenities-panel h2 { color: var(--c-ivory); }
    .light-heading .eyebrow, .amenities-panel .eyebrow { color: var(--c-champagne); }
    .light-heading > p { color: rgba(255,255,255,.68); }
    .highlight-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18); }
    .highlight-card { min-height: 260px; padding: 2rem; border-right: 1px solid rgba(255,255,255,.18); display: flex; flex-direction: column; justify-content: space-between; }
    .highlight-card:last-child { border-right: 0; }
    .highlight-number { color: var(--c-champagne); font-size: .75rem; letter-spacing: .16em; }
    .highlight-card h3 { color: var(--c-ivory); font-size: clamp(1.35rem, 2.3vw, 2rem); max-width: 12ch; }
    .amenities-panel { display: grid; grid-template-columns: .75fr 1.25fr; gap: clamp(3rem, 8vw, 8rem); padding-top: clamp(4rem, 8vw, 8rem); }
    .amenities { columns: 2; column-gap: 3rem; padding: 0; margin: 0; list-style: none; }
    .amenities li { position: relative; margin-bottom: 1rem; padding: 0 0 1rem 1.6rem; border-bottom: 1px solid rgba(255,255,255,.13); break-inside: avoid; }
    .amenities li::before { content: '—'; position: absolute; left: 0; color: var(--c-champagne); }

    .detail-grid { display: block; }
    .detail-main { max-width: 820px; }
    .detail-main > .eyebrow:not(:first-child) { margin-top: var(--space-5); }

    .distances { list-style: none; padding: 0; max-width: 460px; }
    .distances li { display: flex; justify-content: space-between; border-bottom: 1px solid var(--c-sand); padding: .8rem 0; }

    .faq-item { margin-bottom: var(--space-3); }
    .faq-item dt { font-weight: 600; color: var(--c-adria); }
    .faq-item dd { margin: 0; }

    .other-villa { margin-top: var(--space-4); }

    .mobile-sticky-cta { display: none; }

    @media (max-width: 900px) {
      .section-nav { top: 68px; }
      .story-section { grid-template-columns: 1fr; }
      .story-image-wrap, .story-image-wrap img { min-height: min(120vw, 660px); }
      .stat-grid { grid-template-columns: repeat(2, 1fr); gap: 2.5rem 0; }
      .stat-grid div:nth-child(2) { border-right: 0; }
      .highlight-grid { grid-template-columns: repeat(2, 1fr); }
      .highlight-card:nth-child(2) { border-right: 0; }
      .highlight-card:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.18); }
      .amenities-panel { grid-template-columns: 1fr; }
      .villa-details-heading { grid-template-columns: 1fr; }
      .mobile-sticky-cta {
        display: flex;
        justify-content: center;
        position: fixed;
        width: auto;
        left: 1rem;
        right: 1rem;
        bottom: max(1rem, env(safe-area-inset-bottom));
        z-index: 90;
        opacity: 0;
        pointer-events: none;
        transform: translateY(calc(100% + 2rem));
        transition: opacity 250ms ease, transform 350ms cubic-bezier(.2,.7,.2,1);
      }
      .mobile-sticky-cta.visible { opacity: 1; pointer-events: auto; transform: translateY(0); }
    }
    @media (max-width: 560px) {
      .villa-hero { min-height: calc(100svh - 65px); }
      .villa-hero-shade { background: linear-gradient(0deg, rgba(9,26,34,.86) 0%, rgba(9,26,34,.18) 86%); }
      .villa-hero-inner { padding-block: .9rem 3rem; }
      .breadcrumbs { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; }
      .breadcrumbs span { margin-left: .4rem; }
      .hero-copy h1 { font-size: clamp(3.4rem, 18vw, 5rem); overflow-wrap: normal; }
      .tagline { font-size: 1.3rem; }
      .hero-facts { display: grid; grid-template-columns: 1fr 1fr; gap: .55rem 1rem; }
      .hero-actions { flex-direction: column; }
      .section-nav-inner { padding-inline: 1.1rem; min-height: 54px; }
      .section-nav-book { margin-left: 0; }
      .story-copy h2 { font-size: 3.7rem; overflow-wrap: normal; }
      .stat-grid strong { font-size: 2.6rem; }
      .stat-grid span { font-size: .67rem; letter-spacing: .08em; }
      .stat-grid div { padding-inline: .75rem; }
      .section-heading { display: block; }
      .section-heading > p { margin-top: 1.5rem; }
      .gallery { grid-template-columns: 1fr 1fr; grid-auto-rows: 43vw; gap: .45rem; }
      .gallery-item, .gallery-item:nth-child(n) { grid-column: span 1; grid-row: span 1; }
      .gallery-item:first-child, .gallery-item:nth-child(5n) { grid-column: 1 / -1; grid-row: span 2; }
      .highlight-grid { grid-template-columns: 1fr; }
      .highlight-card { min-height: 180px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.18); }
      .highlight-card:nth-child(n) { border-bottom: 1px solid rgba(255,255,255,.18); }
      .highlight-card:last-child { border-bottom: 0; }
      .amenities { columns: 1; }
      .villa-detail-stories { grid-template-columns: 1fr; }
      .villa-detail-story, .villa-detail-story.featured { grid-column: auto; grid-template-columns: 2rem minmax(0, 1fr); padding-inline: 0; border-right: 0 !important; }
      .villa-detail-story.featured > div { columns: 1; }
      .video-tour { padding-inline: 0; }
      .video-tour h2, .video-tour .eyebrow { margin-inline: 1.1rem; }
      .video-tour video { border-radius: 0; width: 100%; }
      .distances li { gap: 1rem; align-items: baseline; }
      .distances strong { white-space: nowrap; }
      .detail-grid { padding-bottom: 6rem; }
    }
  `],
})
export class VillaDetailComponent implements OnInit {
  @ViewChild('bookingWidget') private bookingWidget?: BookingWidgetComponent;

  protected readonly t = inject(TranslationService);
  private readonly seo = inject(SeoService);
  private readonly structuredData = inject(StructuredDataService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly distances = DISTANCES;
  protected readonly showMobileCta = signal(false);
  protected readonly allGalleryImagesVisible = signal(false);
  protected villa: Villa | undefined;
  protected otherVilla: Villa | undefined;

  ngOnInit(): void {
    // The :slug route is reused when navigating between the two villa pages
    // (e.g. the "see the other villa" link), so react to param changes rather
    // than reading a one-time snapshot.
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.loadVilla());
  }

  private loadVilla(): void {
    const locale = (this.route.snapshot.data['locale'] as Locale) ?? 'de';
    this.t.setLocale(locale);
    this.allGalleryImagesVisible.set(false);
    this.showMobileCta.set(false);
    const slug = this.route.snapshot.paramMap.get('slug');
    this.villa = VILLAS.find((v) => v.slug === slug);
    this.otherVilla = VILLAS.find((v) => v.slug !== slug);
    if (this.villa) this.bookingWidget?.setPreselectedVilla(this.villa.slug);
    if (!this.villa) {
      this.seo.setPage({
        locale,
        path: `${locale === 'de' ? 'villen' : 'villas'}/${slug ?? 'unbekannt'}`,
        title: this.t.inline('Villa nicht gefunden | MonteMare & Lumina', 'Villa not found | MonteMare & Lumina', 'Вилла не найдена | MonteMare & Lumina', 'Villa no encontrada | MonteMare & Lumina'),
        description: this.t.inline('Die angeforderte Villa wurde nicht gefunden.', 'The requested villa could not be found.', 'Запрошенная вилла не найдена.', 'No se ha encontrado la villa solicitada.'),
        noindex: true,
      });
      return;
    }

    const routeBase = locale === 'de' ? 'villen' : 'villas';
    this.seo.setPage({
      locale,
      path: `${routeBase}/${this.villa.slug}`,
      alternatePaths: {
        de: `villen/${this.villa.slug}`,
        en: `villas/${this.villa.slug}`,
        ru: `villas/${this.villa.slug}`,
        es: `villas/${this.villa.slug}`,
        sr: `villas/${this.villa.slug}`,
      },
      title: this.t.t(this.villa.seoTitle),
      description: this.t.t(this.villa.metaDescription),
      ogImage: this.heroImage(),
      ogImageAlt: this.t.t(this.villa.heroImageAlt),
    });

    this.structuredData.setJsonLd('ld-villa', [
      this.structuredData.buildVillaGraph(this.villa, locale),
      this.structuredData.buildFaqGraph(this.villa.faq, locale),
      this.structuredData.buildBreadcrumbGraph(
        [
          { name: ({ de: 'Start', en: 'Home', ru: 'Главная', es: 'Inicio', sr: 'Početna' } as Record<Locale, string>)[locale], path: '' },
          { name: this.villa.name, path: `${routeBase}/${this.villa.slug}` },
        ],
        locale
      ),
    ]);
  }

  protected locale(): Locale {
    return this.t.locale();
  }

  protected navigateToBooking(event: Event): void {
    event.preventDefault();
    void this.router.navigate([], { relativeTo: this.route, fragment: 'verfuegbarkeit' }).then(() => {
      this.scrollToBooking();
    });
  }

  protected openStayPlanner(event: Event): void {
    event.preventDefault();
    this.bookingWidget?.openPlanner();
  }

  private scrollToBooking(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      const target = document.getElementById('verfuegbarkeit');
      if (!target) return;

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }));
  }

  @HostListener('window:scroll')
  protected updateMobileCta(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const bookingSection = document.getElementById('verfuegbarkeit');
    const bookingBounds = bookingSection?.getBoundingClientRect();
    const bookingIsVisible = !!bookingBounds && bookingBounds.top < window.innerHeight && bookingBounds.bottom > 0;
    this.showMobileCta.set(window.scrollY > window.innerHeight * 0.72 && !bookingIsVisible);
  }

  protected heroImage(): string {
    return this.villa?.galleryImagePlaceholders[0] ?? '';
  }

  protected storyImage(): string {
    return this.villa?.galleryImagePlaceholders[1] ?? this.heroImage();
  }

  protected atmosphereImage(): string {
    return this.villa?.galleryImagePlaceholders[2] ?? this.heroImage();
  }

  protected visibleGalleryImages(): string[] {
    const images = this.villa?.galleryImagePlaceholders ?? [];
    return this.allGalleryImagesVisible() ? images : images.slice(0, 15);
  }

  protected atmosphereLine(): string {
    return this.t.inline(
      'Morgens Licht über den Bergen. Abends Ruhe über der Adria.',
      'Morning light over the mountains. Evening stillness above the Adriatic.',
      'Утром — свет над горами. Вечером — тишина над Адриатикой.',
      'Por la mañana, luz sobre las montañas. Al atardecer, calma sobre el Adriático.',
    );
  }

  protected responsiveSrcSet(path: string): string {
    return `${path.replace(/\.webp$/, '-720.webp')} 720w, ${path} 1280w`;
  }

  protected galleryAlt(path: string): string {
    const subject = path.includes('sunset') ? ['Meerblick bei Sonnenuntergang', 'Adriatic view at sunset', 'Вид на Адриатику на закате', 'Vista del Adriático al atardecer', 'Pogled na Jadran pri zalasku sunca']
      : path.includes('exterior-pool') ? ['Außenansicht mit privatem Pool', 'Exterior with private pool', 'Вилла с частным бассейном', 'Exterior con piscina privada', 'Eksterijer sa privatnim bazenom']
      : path.includes('rooftop') ? ['Dachterrasse mit Meerblick', 'Rooftop terrace with sea view', 'Терраса на крыше с видом на море', 'Azotea con vistas al mar', 'Krovna terasa sa pogledom na more']
      : path.includes('living') ? ['Heller Wohnbereich', 'Bright living room', 'Светлая гостиная', 'Salón luminoso', 'Svetao dnevni boravak']
      : path.includes('dining') ? ['Essbereich und offene Küche', 'Dining area and open kitchen', 'Обеденная зона и открытая кухня', 'Comedor y cocina abierta', 'Trpezarija i otvorena kuhinja']
      : path.includes('bedroom') ? ['Schlafzimmer mit Meerblick', 'Bedroom with sea view', 'Спальня с видом на море', 'Dormitorio con vistas al mar', 'Spavaća soba sa pogledom na more']
      : path.includes('bathroom') ? ['Modernes Badezimmer', 'Modern bathroom', 'Современная ванная комната', 'Baño moderno', 'Moderno kupatilo']
      : ['Private Luxusvilla in Reževići', 'Private luxury villa in Reževići', 'Частная вилла класса люкс в Режевичи', 'Villa privada de lujo en Reževići', 'Privatna luksuzna vila u Reževićima'];
    const index: Record<Locale, number> = { de: 0, en: 1, ru: 2, es: 3, sr: 4 };
    return `${subject[index[this.locale()]]} – ${this.villa?.name ?? 'Villa'}`;
  }

  protected readonly galleryAltForLightbox = (path: string): string => this.galleryAlt(path);

  protected relatedGuides() {
    return GUIDE_ARTICLES.filter((g) => g.relatedVillaSlugs.includes(this.villa?.slug ?? ''));
  }

  guidePath(slug: string): string[] {
    const locale = this.locale();
    return locale === 'de' ? ['/de/reisefuehrer', slug] : [`/${locale}/guides`, slug];
  }

  locationPath(): string[] {
    const locale = this.locale();
    return locale === 'de' ? ['/de/lage-budva-riviera'] : [`/${locale}/location-budva-riviera`];
  }

  otherVillaPath(): string[] {
    const locale = this.locale();
    const base = locale === 'de' ? '/de/villen' : `/${locale}/villas`;
    return [base, this.otherVilla?.slug ?? ''];
  }
}
