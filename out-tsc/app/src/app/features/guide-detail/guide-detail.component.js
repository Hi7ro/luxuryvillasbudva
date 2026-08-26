import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { GUIDE_ARTICLES, VILLAS } from '../../core/data/content.data';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.slug;
const _c0 = a0 => [a0];
function GuideDetailComponent_Conditional_0_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", ctx_r1.villaPath(v_r1.slug));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(v_r1.name);
} }
function GuideDetailComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 0)(1, "a", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 2);
    i0.ɵɵtext(4, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 3);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "article", 4)(8, "header")(9, "h1");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 5);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(13, "div", 6)(14, "div", 7);
    i0.ɵɵelementStart(15, "aside", 8)(16, "h2");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "ul");
    i0.ɵɵrepeaterCreate(19, GuideDetailComponent_Conditional_0_For_20_Template, 3, 2, "li", null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 9);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r1.t.inline("Brotkr\u00FCmelnavigation", "Breadcrumb", "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0446\u0435\u043F\u043E\u0447\u043A\u0430", "Migas de pan"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c0, "/" + ctx_r1.locale()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Start", "Home", "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", "Inicio"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(ctx_r1.guide.title));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(ctx_r1.guide.title));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.t.inline("Aktualisiert am", "Updated on", "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E", "Actualizado el"), " ", ctx_r1.guide.updatedOn, " \u2014 Villa MonteMare & Villa Lumina ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.body(), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Passende Villen", "Matching villas", "\u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0432\u0438\u043B\u043B\u044B", "Villas recomendadas"));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.relatedVillas());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(13, _c0, "/" + ctx_r1.locale()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.t.ui("ctaCheckAvailability"), " ");
} }
export class GuideDetailComponent {
    t = inject(TranslationService);
    seo = inject(SeoService);
    structuredData = inject(StructuredDataService);
    route = inject(ActivatedRoute);
    sanitizer = inject(DomSanitizer);
    guide;
    ngOnInit() {
        const locale = this.route.snapshot.data['locale'] ?? 'de';
        this.t.setLocale(locale);
        const slug = this.route.snapshot.paramMap.get('slug');
        this.guide = GUIDE_ARTICLES.find((g) => g.slug === slug);
        if (!this.guide)
            return;
        const routeBase = locale === 'de' ? 'reisefuehrer' : 'guides';
        this.seo.setPage({
            locale,
            path: `${routeBase}/${this.guide.slug}`,
            title: this.t.t(this.guide.seoTitle),
            description: this.t.t(this.guide.metaDescription),
        });
        this.structuredData.setJsonLd('ld-guide', [
            {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: this.t.t(this.guide.title),
                description: this.t.t(this.guide.metaDescription),
                datePublished: this.guide.publishedOn,
                dateModified: this.guide.updatedOn,
                // PLACEHOLDER: replace with the real operator/author name before go-live
                author: { '@type': 'Organization', name: 'Villa MonteMare & Villa Lumina' },
            },
            this.structuredData.buildBreadcrumbGraph([
                { name: { de: 'Start', en: 'Home', ru: 'Главная', es: 'Inicio' }[locale], path: '' },
                { name: this.t.t(this.guide.title), path: `${routeBase}/${this.guide.slug}` },
            ], locale),
        ]);
    }
    locale() {
        return this.t.locale();
    }
    body() {
        if (!this.guide)
            return '';
        return this.sanitizer.bypassSecurityTrustHtml(this.t.t(this.guide.bodyHtml));
    }
    relatedVillas() {
        return VILLAS.filter((v) => this.guide?.relatedVillaSlugs.includes(v.slug));
    }
    villaPath(slug) {
        const locale = this.locale();
        const base = locale === 'de' ? '/de/villen' : `/${locale}/villas`;
        return [base, slug];
    }
    static ɵfac = function GuideDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GuideDetailComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GuideDetailComponent, selectors: [["app-guide-detail"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[1, "breadcrumbs", "container"], [3, "routerLink"], ["aria-hidden", "true"], ["aria-current", "page"], [1, "guide", "container"], [1, "meta"], [1, "guide-body", 3, "innerHTML"], ["aria-hidden", "true", 1, "horizon-divider"], [1, "related"], ["href", "#", "fragment", "verfuegbarkeit", 1, "btn", "btn-primary", 3, "routerLink"]], template: function GuideDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GuideDetailComponent_Conditional_0_Template, 23, 15);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.guide ? 0 : -1);
        } }, dependencies: [RouterLink], styles: [".breadcrumbs[_ngcontent-%COMP%] { padding-block: var(--space-2); font-size: 0.85rem; color: var(--c-olive); }\n    .breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: var(--c-olive); }\n    .guide[_ngcontent-%COMP%] { padding-block: var(--space-3) var(--space-5); max-width: 760px; }\n    .meta[_ngcontent-%COMP%] { color: var(--c-olive); font-size: 0.85rem; }\n    .guide-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: none; }\n    .related[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] { padding-left: 1.1rem; margin-bottom: var(--space-3); }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuideDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-guide-detail', standalone: true, imports: [RouterLink], template: `
    @if (guide) {
      <nav class="breadcrumbs container" [attr.aria-label]="t.inline('Brotkrümelnavigation', 'Breadcrumb', 'Навигационная цепочка', 'Migas de pan')">
        <a [routerLink]="['/' + locale()]">{{ t.inline('Start', 'Home', 'Главная', 'Inicio') }}</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{{ t.t(guide.title) }}</span>
      </nav>

      <article class="guide container">
        <header>
          <h1>{{ t.t(guide.title) }}</h1>
          <p class="meta">
            {{ t.inline('Aktualisiert am', 'Updated on', 'Обновлено', 'Actualizado el') }} {{ guide.updatedOn }}
            — Villa MonteMare &amp; Villa Lumina
          </p>
        </header>

        <div class="guide-body" [innerHTML]="body()"></div>

        <div class="horizon-divider" aria-hidden="true"></div>

        <aside class="related">
          <h2>{{ t.inline('Passende Villen', 'Matching villas', 'Подходящие виллы', 'Villas recomendadas') }}</h2>
          <ul>
            @for (v of relatedVillas(); track v.slug) {
              <li><a [routerLink]="villaPath(v.slug)">{{ v.name }}</a></li>
            }
          </ul>
          <a class="btn btn-primary" href="#" [routerLink]="['/' + locale()]" fragment="verfuegbarkeit">
            {{ t.ui('ctaCheckAvailability') }}
          </a>
        </aside>
      </article>
    }
  `, styles: ["\n    .breadcrumbs { padding-block: var(--space-2); font-size: 0.85rem; color: var(--c-olive); }\n    .breadcrumbs a { color: var(--c-olive); }\n    .guide { padding-block: var(--space-3) var(--space-5); max-width: 760px; }\n    .meta { color: var(--c-olive); font-size: 0.85rem; }\n    .guide-body p { max-width: none; }\n    .related ul { padding-left: 1.1rem; margin-bottom: var(--space-3); }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GuideDetailComponent, { className: "GuideDetailComponent" }); })();
//# sourceMappingURL=guide-detail.component.js.map