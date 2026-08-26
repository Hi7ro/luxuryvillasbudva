import { Component, HostListener, Input, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import * as i0 from "@angular/core";
function ImageLightboxComponent_Conditional_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function ImageLightboxComponent_Conditional_0_Conditional_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.previous()); });
    i0.ɵɵtext(1, "\u2039");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-label", ctx_r1.t.inline("Vorheriges Bild", "Previous image", "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", "Imagen anterior"));
} }
function ImageLightboxComponent_Conditional_0_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ImageLightboxComponent_Conditional_0_Conditional_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.next()); });
    i0.ɵɵtext(1, "\u203A");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-label", ctx_r1.t.inline("N\u00E4chstes Bild", "Next image", "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", "Imagen siguiente"));
} }
function ImageLightboxComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function ImageLightboxComponent_Conditional_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("click", function ImageLightboxComponent_Conditional_0_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "button", 3);
    i0.ɵɵlistener("click", function ImageLightboxComponent_Conditional_0_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ImageLightboxComponent_Conditional_0_Conditional_4_Template, 2, 1, "button", 4);
    i0.ɵɵelementStart(5, "figure");
    i0.ɵɵelement(6, "img", 5);
    i0.ɵɵelementStart(7, "figcaption");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, ImageLightboxComponent_Conditional_0_Conditional_9_Template, 2, 1, "button", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r1.label);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", ctx_r1.t.inline("Schlie\u00DFen", "Close", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", "Cerrar"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.images.length > 1 ? 4 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r1.currentImage(), i0.ɵɵsanitizeUrl)("alt", ctx_r1.currentAlt());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.activeIndex() + 1, " / ", ctx_r1.images.length, "");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.images.length > 1 ? 9 : -1);
} }
export class ImageLightboxComponent {
    t = inject(TranslationService);
    images = [];
    altText = () => '';
    label = 'Image gallery';
    activeIndex = signal(null);
    open(index) {
        if (!this.images[index])
            return;
        this.activeIndex.set(index);
        document.body.style.overflow = 'hidden';
    }
    close() {
        this.activeIndex.set(null);
        document.body.style.overflow = '';
    }
    previous() {
        const index = this.activeIndex();
        if (index === null)
            return;
        this.activeIndex.set((index - 1 + this.images.length) % this.images.length);
    }
    next() {
        const index = this.activeIndex();
        if (index === null)
            return;
        this.activeIndex.set((index + 1) % this.images.length);
    }
    currentImage() {
        return this.images[this.activeIndex() ?? 0] ?? '';
    }
    currentAlt() {
        return this.altText(this.currentImage());
    }
    onKeydown(event) {
        if (this.activeIndex() === null)
            return;
        if (event.key === 'Escape')
            this.close();
        if (event.key === 'ArrowLeft')
            this.previous();
        if (event.key === 'ArrowRight')
            this.next();
    }
    static ɵfac = function ImageLightboxComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImageLightboxComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageLightboxComponent, selectors: [["app-image-lightbox"]], hostBindings: function ImageLightboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function ImageLightboxComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { images: "images", altText: "altText", label: "label" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["role", "dialog", "aria-modal", "true", 1, "backdrop"], ["role", "dialog", "aria-modal", "true", 1, "backdrop", 3, "click"], [1, "lightbox", 3, "click"], ["type", "button", 1, "control", "close", 3, "click"], ["type", "button", 1, "control", "previous"], [3, "src", "alt"], ["type", "button", 1, "control", "next"], ["type", "button", 1, "control", "previous", 3, "click"], ["type", "button", 1, "control", "next", 3, "click"]], template: function ImageLightboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ImageLightboxComponent_Conditional_0_Template, 10, 8, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.activeIndex() !== null ? 0 : -1);
        } }, styles: [".backdrop[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 1rem; background: rgba(8, 20, 26, 0.94); }\n    .lightbox[_ngcontent-%COMP%] { position: relative; width: min(96vw, 1500px); height: min(92vh, 1000px); display: grid; place-items: center; }\n    figure[_ngcontent-%COMP%] { margin: 0; width: 100%; height: 100%; display: grid; place-items: center; }\n    img[_ngcontent-%COMP%] { display: block; max-width: 100%; max-height: calc(100% - 2rem); width: auto; height: auto; object-fit: contain; border-radius: 0.35rem; }\n    figcaption[_ngcontent-%COMP%] { color: #fff; font-size: 0.9rem; margin-top: 0.5rem; }\n    .control[_ngcontent-%COMP%] { position: absolute; z-index: 2; width: 48px; height: 48px; border: 1px solid rgba(255,255,255,.5); border-radius: 50%; background: rgba(8,20,26,.65); color: #fff; font-size: 2rem; cursor: pointer; display: grid; place-items: center; }\n    .control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus-visible { background: #fff; color: #17323f; outline: none; }\n    .close[_ngcontent-%COMP%] { top: 0; right: 0; }\n    .previous[_ngcontent-%COMP%] { left: 0; top: 50%; transform: translateY(-50%); }\n    .next[_ngcontent-%COMP%] { right: 0; top: 50%; transform: translateY(-50%); }\n    @media (max-width: 700px) {\n      .backdrop[_ngcontent-%COMP%] { padding: .5rem; }\n      .lightbox[_ngcontent-%COMP%] { width: 100%; height: calc(100dvh - 1rem); }\n      figure[_ngcontent-%COMP%] { align-content: center; }\n      img[_ngcontent-%COMP%] { max-height: calc(100dvh - 5rem); border-radius: 0; }\n      .close[_ngcontent-%COMP%] { top: .4rem; right: .4rem; }\n      .previous[_ngcontent-%COMP%] { left: .25rem; }\n      .next[_ngcontent-%COMP%] { right: .25rem; }\n      .control[_ngcontent-%COMP%] { width: 44px; height: 44px; background: rgba(8,20,26,.82); }\n      figcaption[_ngcontent-%COMP%] { position: absolute; bottom: .6rem; margin: 0; }\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageLightboxComponent, [{
        type: Component,
        args: [{ selector: 'app-image-lightbox', standalone: true, template: `
    @if (activeIndex() !== null) {
      <div class="backdrop" role="dialog" aria-modal="true" [attr.aria-label]="label"
           (click)="close()">
        <div class="lightbox" (click)="$event.stopPropagation()">
          <button class="control close" type="button" (click)="close()" [attr.aria-label]="t.inline('Schließen', 'Close', 'Закрыть', 'Cerrar')">×</button>
          @if (images.length > 1) {
            <button class="control previous" type="button" (click)="previous()" [attr.aria-label]="t.inline('Vorheriges Bild', 'Previous image', 'Предыдущее изображение', 'Imagen anterior')">‹</button>
          }
          <figure>
            <img [src]="currentImage()" [alt]="currentAlt()" />
            <figcaption>{{ activeIndex()! + 1 }} / {{ images.length }}</figcaption>
          </figure>
          @if (images.length > 1) {
            <button class="control next" type="button" (click)="next()" [attr.aria-label]="t.inline('Nächstes Bild', 'Next image', 'Следующее изображение', 'Imagen siguiente')">›</button>
          }
        </div>
      </div>
    }
  `, styles: ["\n    .backdrop { position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 1rem; background: rgba(8, 20, 26, 0.94); }\n    .lightbox { position: relative; width: min(96vw, 1500px); height: min(92vh, 1000px); display: grid; place-items: center; }\n    figure { margin: 0; width: 100%; height: 100%; display: grid; place-items: center; }\n    img { display: block; max-width: 100%; max-height: calc(100% - 2rem); width: auto; height: auto; object-fit: contain; border-radius: 0.35rem; }\n    figcaption { color: #fff; font-size: 0.9rem; margin-top: 0.5rem; }\n    .control { position: absolute; z-index: 2; width: 48px; height: 48px; border: 1px solid rgba(255,255,255,.5); border-radius: 50%; background: rgba(8,20,26,.65); color: #fff; font-size: 2rem; cursor: pointer; display: grid; place-items: center; }\n    .control:hover, .control:focus-visible { background: #fff; color: #17323f; outline: none; }\n    .close { top: 0; right: 0; }\n    .previous { left: 0; top: 50%; transform: translateY(-50%); }\n    .next { right: 0; top: 50%; transform: translateY(-50%); }\n    @media (max-width: 700px) {\n      .backdrop { padding: .5rem; }\n      .lightbox { width: 100%; height: calc(100dvh - 1rem); }\n      figure { align-content: center; }\n      img { max-height: calc(100dvh - 5rem); border-radius: 0; }\n      .close { top: .4rem; right: .4rem; }\n      .previous { left: .25rem; }\n      .next { right: .25rem; }\n      .control { width: 44px; height: 44px; background: rgba(8,20,26,.82); }\n      figcaption { position: absolute; bottom: .6rem; margin: 0; }\n    }\n  "] }]
    }], null, { images: [{
            type: Input,
            args: [{ required: true }]
        }], altText: [{
            type: Input
        }], label: [{
            type: Input
        }], onKeydown: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ImageLightboxComponent, { className: "ImageLightboxComponent" }); })();
//# sourceMappingURL=image-lightbox.component.js.map