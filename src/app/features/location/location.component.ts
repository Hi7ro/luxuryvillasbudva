import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { DISTANCES } from '../../core/data/content.data';
import { Locale } from '../../core/models/villa.model';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="page-hero container">
      <p class="eyebrow">Smokov vijenac · Drobnići · Budva · Montenegro</p>
      <h1>{{ t.inline('Lage: Budva Riviera', 'Location: Budva Riviera', 'Расположение: Будванская ривьера', 'Ubicación: Riviera de Budva') }}</h1>
      <p>
        {{ t.inline(
          'Beide Villen liegen am Smokov vijenac in Drobnići, einer ruhigen Hanglage in der Gemeinde Budva. Die genaue Anschrift lautet: Smokov vijenac, Drobnići, Budva Municipality, 85315, Montenegro.',
          'Both villas are located at Smokov vijenac in Drobnići, a quiet hillside setting in Budva Municipality. The address is Smokov vijenac, Drobnići, Budva Municipality, 85315, Montenegro.',
          'Обе виллы расположены по адресу Smokov vijenac в Дробничи, в тихом месте на склоне в муниципалитете Будва. Точный адрес: Smokov vijenac, Drobnići, Budva Municipality, 85315, Montenegro.',
          'Ambas villas se encuentran en Smokov vijenac, Drobnići, en una tranquila ladera del municipio de Budva. La dirección exacta es: Smokov vijenac, Drobnići, Budva Municipality, 85315, Montenegro.') }}
      </p>
    </header>

    <section class="section container">
      <h2>{{ t.ui('distancesTitle') }}</h2>
      <ul class="distances">
        @for (d of distances; track d.label.de) {
          <li><span>{{ t.t(d.label) }}</span><strong>{{ d.value }}</strong></li>
        }
      </ul>

      <div class="map-wrap">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=18.8985%2C42.2360%2C18.9070%2C42.2430&amp;layer=mapnik&amp;marker=42.2395%2C18.9025"
          [title]="t.inline('Lage der Villen am Smokov vijenac', 'Location of the villas at Smokov vijenac', 'Расположение вилл на Smokov vijenac', 'Ubicación de las villas en Smokov vijenac')"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen>
        </iframe>
        <div class="map-caption">
          <p>{{ t.inline('Smokov vijenac, Drobnići, Budva Municipality, 85315, Montenegro', 'Smokov vijenac, Drobnići, Budva Municipality, 85315, Montenegro', 'Smokov vijenac, Drobnići, муниципалитет Будва, 85315, Черногория', 'Smokov vijenac, Drobnići, municipio de Budva, 85315, Montenegro') }}</p>
          <a class="btn btn-quiet" href="https://www.openstreetmap.org/?mlat=42.2395&amp;mlon=18.9025#map=17/42.2395/18.9025"
             target="_blank" rel="noopener">
            {{ t.inline('Große Karte öffnen', 'Open full map', 'Открыть большую карту', 'Abrir mapa completo') }}
          </a>
        </div>
      </div>
    </section>

  `,
  styles: [`
    .page-hero { padding-block: var(--space-5) var(--space-3); max-width: 800px; }
    .distances { list-style: none; padding: 0; max-width: 460px; margin-bottom: var(--space-4); }
    .distances li { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--c-sand); padding: 0.4rem 0; }
    .map-wrap { overflow: hidden; border: 1px solid color-mix(in srgb, var(--c-sand) 75%, transparent); border-radius: var(--radius-lg); background: var(--c-ivory); box-shadow: var(--shadow-lifted); }
    .map-wrap iframe { display: block; width: 100%; height: clamp(360px, 52vw, 600px); border: 0; }
    .map-caption { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); padding: var(--space-2) var(--space-3); }
    .map-caption p { margin: 0; color: var(--c-olive); font-size: 0.9rem; max-width: 70ch; }
    .map-caption .btn { flex: 0 0 auto; }
    @media (max-width: 700px) {
      .page-hero { padding-block: 3rem 1.5rem; }
      .distances li { gap: 1rem; align-items: baseline; }
      .distances strong { white-space: nowrap; }
      .map-wrap { border-radius: 10px; }
      .map-wrap iframe { height: 420px; }
      .map-caption { align-items: stretch; flex-direction: column; padding: 1rem; }
      .map-caption .btn { width: 100%; justify-content: center; }
    }
  `],
})
export class LocationComponent implements OnInit {
  protected readonly t = inject(TranslationService);
  private readonly seo = inject(SeoService);
  private readonly structuredData = inject(StructuredDataService);
  private readonly route = inject(ActivatedRoute);

  protected readonly distances = DISTANCES;

  ngOnInit(): void {
    const locale = (this.route.snapshot.data['locale'] as Locale) ?? 'de';
    this.t.setLocale(locale);
    const path = locale === 'de' ? 'lage-budva-riviera' : 'location-budva-riviera';

    this.seo.setPage({
      locale,
      path,
      alternatePaths: {
        de: 'lage-budva-riviera',
        en: 'location-budva-riviera',
        ru: 'location-budva-riviera',
        es: 'location-budva-riviera',
      },
      title: ({
        de: 'Lage: Budva Riviera & Reževići | Villa MonteMare & Lumina',
        en: 'Location: Budva Riviera & Reževići | Villa MonteMare & Lumina',
        ru: 'Расположение: Будванская ривьера и Режевичи | Villa MonteMare & Lumina',
        es: 'Ubicación: Riviera de Budva y Reževići | Villa MonteMare & Lumina',
      } as Record<Locale, string>)[locale],
      description: ({
        de: 'Reževići an der Budva Riviera: Entfernungen zu Sveti Stefan, Petrovac, Budva und den Flughäfen Tivat und Podgorica.',
        en: 'Reževići on the Budva Riviera: distances to Sveti Stefan, Petrovac, Budva, and Tivat and Podgorica airports.',
        ru: 'Режевичи на Будванской ривьере: расстояния до Свети-Стефана, Петроваца, Будвы и аэропортов Тиват и Подгорица.',
        es: 'Reževići en la Riviera de Budva: distancias a Sveti Stefan, Petrovac, Budva y los aeropuertos de Tivat y Podgorica.',
      } as Record<Locale, string>)[locale],
      ogImage: '/assets/media/lumina/lumina-aerial-location.webp',
      ogImageAlt: this.t.inline('Lage der Villen an der Budva Riviera', 'Villa location on the Budva Riviera', 'Расположение вилл на Будванской ривьере', 'Ubicación de las villas en la Riviera de Budva'),
    });

    this.structuredData.setJsonLd(
      'ld-location',
      [this.structuredData.buildBreadcrumbGraph(
        [
          { name: ({ de: 'Start', en: 'Home', ru: 'Главная', es: 'Inicio' } as Record<Locale, string>)[locale], path: '' },
          { name: ({ de: 'Lage', en: 'Location', ru: 'Расположение', es: 'Ubicación' } as Record<Locale, string>)[locale], path },
        ],
        locale
      )]
    );
  }

  protected locale(): Locale {
    return this.t.locale();
  }

}
