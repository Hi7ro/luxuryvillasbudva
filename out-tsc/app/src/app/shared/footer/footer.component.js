import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import * as i0 from "@angular/core";
const _c0 = a0 => [a0, "impressum"];
const _c1 = a0 => [a0, "datenschutz"];
export class FooterComponent {
    t = inject(TranslationService);
    year = new Date().getFullYear();
    static ɵfac = function FooterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FooterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 38, vars: 14, consts: [[1, "site-footer"], [1, "container", "grid"], [1, "wordmark"], [1, "muted"], [1, "col-title"], ["href", "mailto:michael.c.neumann@protonmail.com"], ["href", "tel:+436642660438"], ["href", "https://wa.me/436642660438", "target", "_blank", "rel", "noopener"], [3, "routerLink"], [1, "container"], [1, "muted", "small"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "footer", 0)(1, "div", 1)(2, "div")(3, "p", 2);
            i0.ɵɵtext(4, "MonteMare & Lumina");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelement(7, "br");
            i0.ɵɵtext(8, " Smokov vijenac, Drobni\u0107i");
            i0.ɵɵelement(9, "br");
            i0.ɵɵtext(10, "Budva Municipality, 85315, Montenegro ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div")(12, "p", 4);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p", 3);
            i0.ɵɵtext(15, " E-Mail: ");
            i0.ɵɵelementStart(16, "a", 5);
            i0.ɵɵtext(17, "michael.c.neumann@protonmail.com");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "br");
            i0.ɵɵtext(19);
            i0.ɵɵelementStart(20, "a", 6);
            i0.ɵɵtext(21, "+43 664 2660438");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "br");
            i0.ɵɵtext(23, " WhatsApp: ");
            i0.ɵɵelementStart(24, "a", 7);
            i0.ɵɵtext(25, "+43 664 2660438");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "div")(27, "p", 4);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "p", 3)(30, "a", 8);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(32, " \u00B7 ");
            i0.ɵɵelementStart(33, "a", 8);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "div", 9)(36, "p", 10);
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.t.inline("Zwei private Luxusvillen mit Pool", "Two private luxury villas with pools", "\u0414\u0432\u0435 \u0447\u0430\u0441\u0442\u043D\u044B\u0435 \u0440\u043E\u0441\u043A\u043E\u0448\u043D\u044B\u0435 \u0432\u0438\u043B\u043B\u044B \u0441 \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0430\u043C\u0438", "Dos villas de lujo privadas con piscina"), "");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.t.inline("Kontakt", "Contact", "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", "Contacto"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.t.inline("Telefon", "Phone", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "Tel\u00E9fono"), ": ");
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.t.inline("Rechtliches", "Legal", "\u041F\u0440\u0430\u0432\u043E\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F", "Informaci\u00F3n legal"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, "/" + ctx.t.locale()));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.t.inline("Impressum", "Legal notice", "\u041F\u0440\u0430\u0432\u043E\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F", "Aviso legal"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(12, _c1, "/" + ctx.t.locale()));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.t.inline("Datenschutz", "Privacy policy", "\u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C", "Privacidad"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("\u00A9 ", ctx.year, " Villa MonteMare & Villa Lumina. ", ctx.t.ui("footerRights"), "");
        } }, dependencies: [RouterLink], styles: [".site-footer[_ngcontent-%COMP%] {\n      background: var(--c-adria);\n      color: color-mix(in srgb, var(--c-limestone) 92%, transparent);\n      padding-block: var(--space-5) var(--space-3);\n      margin-top: var(--space-6);\n    }\n    .grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 2fr 1fr 1fr;\n      gap: var(--space-4);\n      padding-bottom: var(--space-4);\n      border-bottom: 1px solid color-mix(in srgb, var(--c-limestone) 20%, transparent);\n    }\n    .wordmark[_ngcontent-%COMP%] { font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 0.5rem; }\n    .col-title[_ngcontent-%COMP%] { font-weight: 600; margin-bottom: 0.5rem; color: var(--c-champagne); }\n    .muted[_ngcontent-%COMP%] { color: color-mix(in srgb, var(--c-limestone) 78%, transparent); font-size: 0.92rem; max-width: none; }\n    .muted[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: inherit; text-underline-offset: 0.2em; }\n    .muted.small[_ngcontent-%COMP%] { font-size: 0.8rem; padding-top: var(--space-2); }\n    @media (max-width: 720px) {\n      .grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .site-footer[_ngcontent-%COMP%] { padding-block: 3.5rem 5.5rem; margin-top: 4rem; }\n      .grid[_ngcontent-%COMP%] { gap: 2rem; }\n      .muted[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { overflow-wrap: anywhere; }\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{ selector: 'app-footer', standalone: true, imports: [RouterLink], template: `
    <footer class="site-footer">
      <div class="container grid">
        <div>
          <p class="wordmark">MonteMare &amp; Lumina</p>
          <p class="muted">
            {{ t.inline('Zwei private Luxusvillen mit Pool', 'Two private luxury villas with pools', 'Две частные роскошные виллы с бассейнами', 'Dos villas de lujo privadas con piscina') }}<br />
            Smokov vijenac, Drobnići<br />Budva Municipality, 85315, Montenegro
          </p>
        </div>
        <div>
          <p class="col-title">{{ t.inline('Kontakt', 'Contact', 'Контакты', 'Contacto') }}</p>
          <p class="muted">
            E-Mail: <a href="mailto:michael.c.neumann@protonmail.com">michael.c.neumann&#64;protonmail.com</a><br />
            {{ t.inline('Telefon', 'Phone', 'Телефон', 'Teléfono') }}:
            <a href="tel:+436642660438">+43 664 2660438</a><br />
            WhatsApp: <a href="https://wa.me/436642660438" target="_blank" rel="noopener">+43 664 2660438</a>
          </p>
        </div>
        <div>
          <p class="col-title">{{ t.inline('Rechtliches', 'Legal', 'Правовая информация', 'Información legal') }}</p>
          <p class="muted">
            <!-- PLACEHOLDER pages: Impressum / Datenschutz still need real operator + hosting data -->
            <a [routerLink]="['/' + t.locale(), 'impressum']">{{ t.inline('Impressum', 'Legal notice', 'Правовая информация', 'Aviso legal') }}</a>
            ·
            <a [routerLink]="['/' + t.locale(), 'datenschutz']">{{ t.inline('Datenschutz', 'Privacy policy', 'Конфиденциальность', 'Privacidad') }}</a>
          </p>
        </div>
      </div>
      <div class="container">
        <p class="muted small">© {{ year }} Villa MonteMare &amp; Villa Lumina. {{ t.ui('footerRights') }}</p>
      </div>
    </footer>
  `, styles: ["\n    .site-footer {\n      background: var(--c-adria);\n      color: color-mix(in srgb, var(--c-limestone) 92%, transparent);\n      padding-block: var(--space-5) var(--space-3);\n      margin-top: var(--space-6);\n    }\n    .grid {\n      display: grid;\n      grid-template-columns: 2fr 1fr 1fr;\n      gap: var(--space-4);\n      padding-bottom: var(--space-4);\n      border-bottom: 1px solid color-mix(in srgb, var(--c-limestone) 20%, transparent);\n    }\n    .wordmark { font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 0.5rem; }\n    .col-title { font-weight: 600; margin-bottom: 0.5rem; color: var(--c-champagne); }\n    .muted { color: color-mix(in srgb, var(--c-limestone) 78%, transparent); font-size: 0.92rem; max-width: none; }\n    .muted a { color: inherit; text-underline-offset: 0.2em; }\n    .muted.small { font-size: 0.8rem; padding-top: var(--space-2); }\n    @media (max-width: 720px) {\n      .grid { grid-template-columns: 1fr; }\n      .site-footer { padding-block: 3.5rem 5.5rem; margin-top: 4rem; }\n      .grid { gap: 2rem; }\n      .muted a { overflow-wrap: anywhere; }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FooterComponent, { className: "FooterComponent" }); })();
//# sourceMappingURL=footer.component.js.map