import { Component, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { TranslationService } from '../../core/services/translation.service';
import * as i0 from "@angular/core";
const _c0 = a0 => [a0];
export class HeaderComponent {
    t = inject(TranslationService);
    router = inject(Router);
    locale = this.t.locale;
    mobileOpen = signal(false);
    scrolled = signal(false);
    constructor() {
        this.updateLocaleFromUrl(this.router.url);
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
            this.updateLocaleFromUrl(e.urlAfterRedirects);
            this.mobileOpen.set(false);
        });
    }
    onScroll() {
        this.scrolled.set((typeof window !== 'undefined' ? window.scrollY : 0) > 8);
    }
    updateLocaleFromUrl(url) {
        const segment = url.split('/').filter(Boolean)[0];
        if (segment === 'de' || segment === 'en' || segment === 'ru' || segment === 'es') {
            this.t.setLocale(segment);
        }
    }
    switchLocale(locale) {
        const target = this.t.localizedPath(locale, this.router.url);
        this.router.navigateByUrl(target);
    }
    switchLocaleFromSelect(event) {
        this.switchLocale(event.target.value);
    }
    locationPath() {
        const locale = this.locale();
        return locale === 'de' ? ['/de/lage-budva-riviera'] : [`/${locale}/location-budva-riviera`];
    }
    static ɵfac = function HeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function HeaderComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 37, vars: 33, consts: [[1, "site-header"], [1, "container", "bar"], [1, "wordmark", 3, "routerLink"], ["type", "button", "aria-controls", "primary-nav", 1, "nav-toggle", 3, "click"], [1, "visually-hidden"], ["aria-hidden", "true"], ["id", "primary-nav", 1, "primary-nav"], ["fragment", "villen", 3, "routerLink"], [3, "routerLink"], ["fragment", "erlebnisse", 3, "routerLink"], ["fragment", "galerie", 3, "routerLink"], ["fragment", "kontakt", 3, "routerLink"], [1, "lang-switch"], ["aria-label", "Sprache / Language / \u042F\u0437\u044B\u043A / Idioma", 3, "change", "value"], ["value", "de"], ["value", "en"], ["value", "ru"], ["value", "es"], ["fragment", "verfuegbarkeit", 1, "btn", "btn-quiet", "nav-cta", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵtext(3, "MonteMare ");
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "&");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(6, " Lumina");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 3);
            i0.ɵɵlistener("click", function HeaderComponent_Template_button_click_7_listener() { return ctx.mobileOpen.set(!ctx.mobileOpen()); });
            i0.ɵɵelementStart(8, "span", 4);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span", 5);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "nav", 6)(13, "a", 7);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 8);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "a", 9);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "a", 10);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "a", 11);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "label", 12)(24, "span", 4);
            i0.ɵɵtext(25, "Sprache / Language / \u042F\u0437\u044B\u043A / Idioma");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "select", 13);
            i0.ɵɵlistener("change", function HeaderComponent_Template_select_change_26_listener($event) { return ctx.switchLocaleFromSelect($event); });
            i0.ɵɵelementStart(27, "option", 14);
            i0.ɵɵtext(28, "Deutsch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "option", 15);
            i0.ɵɵtext(30, "English");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "option", 16);
            i0.ɵɵtext(32, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "option", 17);
            i0.ɵɵtext(34, "Espa\u00F1ol");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "a", 18);
            i0.ɵɵtext(36);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵclassProp("scrolled", ctx.scrolled());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(21, _c0, "/" + ctx.locale()));
            i0.ɵɵadvance(5);
            i0.ɵɵattribute("aria-expanded", ctx.mobileOpen());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.inline("Men\u00FC", "Menu", "\u041C\u0435\u043D\u044E", "Men\u00FA"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.mobileOpen() ? "\u2715" : "\u2630");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("open", ctx.mobileOpen());
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(23, _c0, "/" + ctx.locale()));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.t.ui("navVillas"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", ctx.locationPath());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.t.ui("navLocation"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(25, _c0, "/" + ctx.locale()));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.t.ui("navExperiences"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(27, _c0, "/" + ctx.locale()));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.t.ui("navGallery"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(29, _c0, "/" + ctx.locale()));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.t.ui("navContact"));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("value", ctx.locale());
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(31, _c0, "/" + ctx.locale()));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.t.ui("ctaCheckAvailability"), " ");
        } }, dependencies: [RouterLink], styles: [".site-header[_ngcontent-%COMP%] {\n      position: sticky;\n      top: 0;\n      z-index: 100;\n      background: linear-gradient(180deg, color-mix(in srgb, var(--c-limestone) 94%, transparent), color-mix(in srgb, var(--c-limestone) 82%, transparent));\n      backdrop-filter: blur(18px) saturate(130%);\n      -webkit-backdrop-filter: blur(18px) saturate(130%);\n      border-bottom: 1px solid color-mix(in srgb, var(--c-sand) 45%, transparent);\n      transition: background-color 220ms ease, box-shadow 220ms ease;\n    }\n    .site-header.scrolled[_ngcontent-%COMP%] {\n      background: linear-gradient(180deg, color-mix(in srgb, var(--c-limestone) 98%, transparent), color-mix(in srgb, var(--c-limestone) 91%, transparent));\n      box-shadow: 0 1px 0 var(--c-sand);\n      backdrop-filter: blur(6px);\n    }\n    .bar[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding-block: 0.9rem;\n    }\n    .wordmark[_ngcontent-%COMP%] {\n      font-family: var(--font-display);\n      font-size: clamp(1.1rem, 2vw, 1.35rem);\n      color: var(--c-adria);\n      text-decoration: none;\n      letter-spacing: 0.01em;\n    }\n    .wordmark[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--c-terracotta); font-style: italic; }\n    .nav-toggle[_ngcontent-%COMP%] {\n      display: none;\n      background: none;\n      border: none;\n      font-size: 1.4rem;\n      color: var(--c-adria);\n      min-width: 44px;\n      min-height: 44px;\n      cursor: pointer;\n    }\n    .primary-nav[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: clamp(0.85rem, 1.8vw, 1.6rem);\n    }\n    .primary-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: var(--c-adria);\n      font-size: 0.86rem;\n      letter-spacing: 0.035em;\n      text-decoration: none;\n      font-weight: 500;\n    }\n    .primary-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: var(--c-terracotta); }\n    .lang-switch[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n      min-height: 44px;\n      padding: 0.45rem 2rem 0.45rem 0.7rem;\n      border: 1px solid var(--c-sand);\n      border-radius: var(--radius);\n      background: var(--c-limestone);\n      color: var(--c-adria);\n      font: inherit;\n      font-size: 0.85rem;\n      cursor: pointer;\n    }\n    .nav-cta[_ngcontent-%COMP%] { padding: 0.65rem 1.05rem; background: var(--c-adria); color: var(--c-limestone) !important; border-color: var(--c-adria); }\n    .nav-cta[_ngcontent-%COMP%]:hover { background: var(--c-terracotta); border-color: var(--c-terracotta); }\n\n    @media (max-width: 1180px) {\n      .nav-toggle[_ngcontent-%COMP%] { display: inline-flex; align-items: center; justify-content: center; }\n      .primary-nav[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 100%;\n        left: 0;\n        right: 0;\n        flex-direction: column;\n        align-items: flex-start;\n        gap: var(--space-2);\n        background: var(--c-limestone);\n        padding: var(--space-3);\n        border-top: 1px solid var(--c-sand);\n        display: none;\n        max-height: calc(100svh - 70px);\n        overflow-y: auto;\n        box-shadow: 0 22px 45px rgba(23, 50, 63, .16);\n      }\n      .primary-nav.open[_ngcontent-%COMP%] { display: flex; }\n      .primary-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.nav-cta) { width: 100%; padding-block: .45rem; }\n      .lang-switch[_ngcontent-%COMP%], .lang-switch[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .nav-cta[_ngcontent-%COMP%] { width: 100%; }\n      .nav-cta[_ngcontent-%COMP%] { justify-content: center; }\n    }\n    @media (max-width: 420px) {\n      .bar[_ngcontent-%COMP%] { padding-block: .75rem; }\n      .wordmark[_ngcontent-%COMP%] { font-size: 1.04rem; }\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{ selector: 'app-header', standalone: true, imports: [RouterLink], template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="container bar">
        <a class="wordmark" [routerLink]="['/' + locale()]">MonteMare <span>&amp;</span> Lumina</a>

        <button class="nav-toggle" type="button" (click)="mobileOpen.set(!mobileOpen())"
                [attr.aria-expanded]="mobileOpen()" aria-controls="primary-nav">
          <span class="visually-hidden">{{ t.inline('Menü', 'Menu', 'Меню', 'Menú') }}</span>
          <span aria-hidden="true">{{ mobileOpen() ? '✕' : '☰' }}</span>
        </button>

        <nav id="primary-nav" class="primary-nav" [class.open]="mobileOpen()">
          <a [routerLink]="['/' + locale()]" fragment="villen">{{ t.ui('navVillas') }}</a>
          <a [routerLink]="locationPath()">{{ t.ui('navLocation') }}</a>
          <a [routerLink]="['/' + locale()]" fragment="erlebnisse">{{ t.ui('navExperiences') }}</a>
          <a [routerLink]="['/' + locale()]" fragment="galerie">{{ t.ui('navGallery') }}</a>
          <a [routerLink]="['/' + locale()]" fragment="kontakt">{{ t.ui('navContact') }}</a>

          <label class="lang-switch">
            <span class="visually-hidden">Sprache / Language / Язык / Idioma</span>
            <select [value]="locale()" (change)="switchLocaleFromSelect($event)"
                    aria-label="Sprache / Language / Язык / Idioma">
              <option value="de">Deutsch</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="es">Español</option>
            </select>
          </label>

          <a class="btn btn-quiet nav-cta" [routerLink]="['/' + locale()]" fragment="verfuegbarkeit">
            {{ t.ui('ctaCheckAvailability') }}
          </a>
        </nav>
      </div>
    </header>
  `, styles: ["\n    .site-header {\n      position: sticky;\n      top: 0;\n      z-index: 100;\n      background: linear-gradient(180deg, color-mix(in srgb, var(--c-limestone) 94%, transparent), color-mix(in srgb, var(--c-limestone) 82%, transparent));\n      backdrop-filter: blur(18px) saturate(130%);\n      -webkit-backdrop-filter: blur(18px) saturate(130%);\n      border-bottom: 1px solid color-mix(in srgb, var(--c-sand) 45%, transparent);\n      transition: background-color 220ms ease, box-shadow 220ms ease;\n    }\n    .site-header.scrolled {\n      background: linear-gradient(180deg, color-mix(in srgb, var(--c-limestone) 98%, transparent), color-mix(in srgb, var(--c-limestone) 91%, transparent));\n      box-shadow: 0 1px 0 var(--c-sand);\n      backdrop-filter: blur(6px);\n    }\n    .bar {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding-block: 0.9rem;\n    }\n    .wordmark {\n      font-family: var(--font-display);\n      font-size: clamp(1.1rem, 2vw, 1.35rem);\n      color: var(--c-adria);\n      text-decoration: none;\n      letter-spacing: 0.01em;\n    }\n    .wordmark span { color: var(--c-terracotta); font-style: italic; }\n    .nav-toggle {\n      display: none;\n      background: none;\n      border: none;\n      font-size: 1.4rem;\n      color: var(--c-adria);\n      min-width: 44px;\n      min-height: 44px;\n      cursor: pointer;\n    }\n    .primary-nav {\n      display: flex;\n      align-items: center;\n      gap: clamp(0.85rem, 1.8vw, 1.6rem);\n    }\n    .primary-nav a {\n      color: var(--c-adria);\n      font-size: 0.86rem;\n      letter-spacing: 0.035em;\n      text-decoration: none;\n      font-weight: 500;\n    }\n    .primary-nav a:hover { color: var(--c-terracotta); }\n    .lang-switch select {\n      min-height: 44px;\n      padding: 0.45rem 2rem 0.45rem 0.7rem;\n      border: 1px solid var(--c-sand);\n      border-radius: var(--radius);\n      background: var(--c-limestone);\n      color: var(--c-adria);\n      font: inherit;\n      font-size: 0.85rem;\n      cursor: pointer;\n    }\n    .nav-cta { padding: 0.65rem 1.05rem; background: var(--c-adria); color: var(--c-limestone) !important; border-color: var(--c-adria); }\n    .nav-cta:hover { background: var(--c-terracotta); border-color: var(--c-terracotta); }\n\n    @media (max-width: 1180px) {\n      .nav-toggle { display: inline-flex; align-items: center; justify-content: center; }\n      .primary-nav {\n        position: absolute;\n        top: 100%;\n        left: 0;\n        right: 0;\n        flex-direction: column;\n        align-items: flex-start;\n        gap: var(--space-2);\n        background: var(--c-limestone);\n        padding: var(--space-3);\n        border-top: 1px solid var(--c-sand);\n        display: none;\n        max-height: calc(100svh - 70px);\n        overflow-y: auto;\n        box-shadow: 0 22px 45px rgba(23, 50, 63, .16);\n      }\n      .primary-nav.open { display: flex; }\n      .primary-nav a:not(.nav-cta) { width: 100%; padding-block: .45rem; }\n      .lang-switch, .lang-switch select, .nav-cta { width: 100%; }\n      .nav-cta { justify-content: center; }\n    }\n    @media (max-width: 420px) {\n      .bar { padding-block: .75rem; }\n      .wordmark { font-size: 1.04rem; }\n    }\n  "] }]
    }], () => [], { onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HeaderComponent, { className: "HeaderComponent" }); })();
//# sourceMappingURL=header.component.js.map