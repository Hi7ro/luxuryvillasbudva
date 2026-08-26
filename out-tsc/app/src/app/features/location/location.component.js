import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { DISTANCES } from '../../core/data/content.data';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label.de;
function LocationComponent_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(d_r1.label));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r1.value);
} }
export class LocationComponent {
    t = inject(TranslationService);
    seo = inject(SeoService);
    structuredData = inject(StructuredDataService);
    route = inject(ActivatedRoute);
    distances = DISTANCES;
    ngOnInit() {
        const locale = this.route.snapshot.data['locale'] ?? 'de';
        this.t.setLocale(locale);
        const path = locale === 'de' ? 'lage-budva-riviera' : 'location-budva-riviera';
        this.seo.setPage({
            locale,
            path,
            alternatePath: locale === 'de' ? 'location-budva-riviera' : 'lage-budva-riviera',
            title: {
                de: 'Lage: Budva Riviera & Reževići | Villa MonteMare & Lumina',
                en: 'Location: Budva Riviera & Reževići | Villa MonteMare & Lumina',
                ru: 'Расположение: Будванская ривьера и Режевичи | Villa MonteMare & Lumina',
                es: 'Ubicación: Riviera de Budva y Reževići | Villa MonteMare & Lumina',
            }[locale],
            description: {
                de: 'Reževići an der Budva Riviera: Entfernungen zu Sveti Stefan, Petrovac, Budva und den Flughäfen Tivat und Podgorica.',
                en: 'Reževići on the Budva Riviera: distances to Sveti Stefan, Petrovac, Budva, and Tivat and Podgorica airports.',
                ru: 'Режевичи на Будванской ривьере: расстояния до Свети-Стефана, Петроваца, Будвы и аэропортов Тиват и Подгорица.',
                es: 'Reževići en la Riviera de Budva: distancias a Sveti Stefan, Petrovac, Budva y los aeropuertos de Tivat y Podgorica.',
            }[locale],
        });
        this.structuredData.setJsonLd('ld-location', [this.structuredData.buildBreadcrumbGraph([
                { name: { de: 'Start', en: 'Home', ru: 'Главная', es: 'Inicio' }[locale], path: '' },
                { name: { de: 'Lage', en: 'Location', ru: 'Расположение', es: 'Ubicación' }[locale], path },
            ], locale)]);
    }
    locale() {
        return this.t.locale();
    }
    static ɵfac = function LocationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LocationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LocationComponent, selectors: [["app-location"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 20, vars: 6, consts: [[1, "page-hero", "container"], [1, "eyebrow"], [1, "section", "container"], [1, "distances"], [1, "map-wrap"], ["src", i0.ɵɵtrustConstantResourceUrl `https://www.openstreetmap.org/export/embed.html?bbox=18.8985%2C42.2360%2C18.9070%2C42.2430&layer=mapnik&marker=42.2395%2C18.9025`, "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", "allowfullscreen", "", 3, "title"], [1, "map-caption"], ["href", "https://www.openstreetmap.org/?mlat=42.2395&mlon=18.9025#map=17/42.2395/18.9025", "target", "_blank", "rel", "noopener", 1, "btn", "btn-quiet"]], template: function LocationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "p", 1);
            i0.ɵɵtext(2, "Smokov vijenac \u00B7 Drobni\u0107i \u00B7 Budva \u00B7 Montenegro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h1");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "section", 2)(8, "h2");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "ul", 3);
            i0.ɵɵrepeaterCreate(11, LocationComponent_For_12_Template, 5, 2, "li", null, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 4);
            i0.ɵɵelement(14, "iframe", 5);
            i0.ɵɵelementStart(15, "div", 6)(16, "p");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "a", 7);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.t.inline("Lage: Budva Riviera", "Location: Budva Riviera", "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435: \u0411\u0443\u0434\u0432\u0430\u043D\u0441\u043A\u0430\u044F \u0440\u0438\u0432\u044C\u0435\u0440\u0430", "Ubicaci\u00F3n: Riviera de Budva"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.t.inline("Beide Villen liegen am Smokov vijenac in Drobni\u0107i, einer ruhigen Hanglage in der Gemeinde Budva. Die genaue Anschrift lautet: Smokov vijenac, Drobni\u0107i, Budva Municipality, 85315, Montenegro.", "Both villas are located at Smokov vijenac in Drobni\u0107i, a quiet hillside setting in Budva Municipality. The address is Smokov vijenac, Drobni\u0107i, Budva Municipality, 85315, Montenegro.", "\u041E\u0431\u0435 \u0432\u0438\u043B\u043B\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044B \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 Smokov vijenac \u0432 \u0414\u0440\u043E\u0431\u043D\u0438\u0447\u0438, \u0432 \u0442\u0438\u0445\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u043D\u0430 \u0441\u043A\u043B\u043E\u043D\u0435 \u0432 \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u0438\u0442\u0435\u0442\u0435 \u0411\u0443\u0434\u0432\u0430. \u0422\u043E\u0447\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441: Smokov vijenac, Drobni\u0107i, Budva Municipality, 85315, Montenegro.", "Ambas villas se encuentran en Smokov vijenac, Drobni\u0107i, en una tranquila ladera del municipio de Budva. La direcci\u00F3n exacta es: Smokov vijenac, Drobni\u0107i, Budva Municipality, 85315, Montenegro."), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.t.ui("distancesTitle"));
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.distances);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.t.inline("Lage der Villen am Smokov vijenac", "Location of the villas at Smokov vijenac", "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432\u0438\u043B\u043B \u043D\u0430 Smokov vijenac", "Ubicaci\u00F3n de las villas en Smokov vijenac"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.t.inline("Smokov vijenac, Drobni\u0107i, Budva Municipality, 85315, Montenegro", "Smokov vijenac, Drobni\u0107i, Budva Municipality, 85315, Montenegro", "Smokov vijenac, Drobni\u0107i, \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u0438\u0442\u0435\u0442 \u0411\u0443\u0434\u0432\u0430, 85315, \u0427\u0435\u0440\u043D\u043E\u0433\u043E\u0440\u0438\u044F", "Smokov vijenac, Drobni\u0107i, municipio de Budva, 85315, Montenegro"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.t.inline("Gro\u00DFe Karte \u00F6ffnen", "Open full map", "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043A\u0430\u0440\u0442\u0443", "Abrir mapa completo"), " ");
        } }, styles: [".page-hero[_ngcontent-%COMP%] { padding-block: var(--space-5) var(--space-3); max-width: 800px; }\n    .distances[_ngcontent-%COMP%] { list-style: none; padding: 0; max-width: 460px; margin-bottom: var(--space-4); }\n    .distances[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--c-sand); padding: 0.4rem 0; }\n    .map-wrap[_ngcontent-%COMP%] { overflow: hidden; border: 1px solid color-mix(in srgb, var(--c-sand) 75%, transparent); border-radius: var(--radius-lg); background: var(--c-ivory); box-shadow: var(--shadow-lifted); }\n    .map-wrap[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] { display: block; width: 100%; height: clamp(360px, 52vw, 600px); border: 0; }\n    .map-caption[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); padding: var(--space-2) var(--space-3); }\n    .map-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: var(--c-olive); font-size: 0.9rem; max-width: 70ch; }\n    .map-caption[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] { flex: 0 0 auto; }\n    @media (max-width: 700px) {\n      .page-hero[_ngcontent-%COMP%] { padding-block: 3rem 1.5rem; }\n      .distances[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { gap: 1rem; align-items: baseline; }\n      .distances[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { white-space: nowrap; }\n      .map-wrap[_ngcontent-%COMP%] { border-radius: 10px; }\n      .map-wrap[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] { height: 420px; }\n      .map-caption[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; padding: 1rem; }\n      .map-caption[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] { width: 100%; justify-content: center; }\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocationComponent, [{
        type: Component,
        args: [{ selector: 'app-location', standalone: true, imports: [RouterLink], template: `
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

  `, styles: ["\n    .page-hero { padding-block: var(--space-5) var(--space-3); max-width: 800px; }\n    .distances { list-style: none; padding: 0; max-width: 460px; margin-bottom: var(--space-4); }\n    .distances li { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--c-sand); padding: 0.4rem 0; }\n    .map-wrap { overflow: hidden; border: 1px solid color-mix(in srgb, var(--c-sand) 75%, transparent); border-radius: var(--radius-lg); background: var(--c-ivory); box-shadow: var(--shadow-lifted); }\n    .map-wrap iframe { display: block; width: 100%; height: clamp(360px, 52vw, 600px); border: 0; }\n    .map-caption { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); padding: var(--space-2) var(--space-3); }\n    .map-caption p { margin: 0; color: var(--c-olive); font-size: 0.9rem; max-width: 70ch; }\n    .map-caption .btn { flex: 0 0 auto; }\n    @media (max-width: 700px) {\n      .page-hero { padding-block: 3rem 1.5rem; }\n      .distances li { gap: 1rem; align-items: baseline; }\n      .distances strong { white-space: nowrap; }\n      .map-wrap { border-radius: 10px; }\n      .map-wrap iframe { height: 420px; }\n      .map-caption { align-items: stretch; flex-direction: column; padding: 1rem; }\n      .map-caption .btn { width: 100%; justify-content: center; }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LocationComponent, { className: "LocationComponent" }); })();
//# sourceMappingURL=location.component.js.map