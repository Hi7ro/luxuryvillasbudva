import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslationService } from './core/services/translation.service';
import * as i0 from "@angular/core";
export class AppComponent {
    t = inject(TranslationService);
    static ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 6, vars: 1, consts: [["href", "#main-content", 1, "skip-link"], ["id", "main-content", "tabindex", "-1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "app-header");
            i0.ɵɵelementStart(3, "main", 1);
            i0.ɵɵelement(4, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "app-footer");
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.t.inline("Zum Inhalt springen", "Skip to content", "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443", "Saltar al contenido"));
        } }, dependencies: [RouterOutlet, HeaderComponent, FooterComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                standalone: true,
                imports: [RouterOutlet, HeaderComponent, FooterComponent],
                template: `
    <a class="skip-link" href="#main-content">{{ t.inline('Zum Inhalt springen', 'Skip to content', 'Перейти к содержимому', 'Saltar al contenido') }}</a>
    <app-header />
    <main id="main-content" tabindex="-1">
      <router-outlet />
    </main>
    <app-footer />
  `,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent" }); })();
//# sourceMappingURL=app.component.js.map