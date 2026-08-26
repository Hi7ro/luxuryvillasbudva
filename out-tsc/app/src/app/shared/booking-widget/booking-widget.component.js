import { Component, Input, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
import { EmailInquiryService } from './email-inquiry.service';
import { AvailabilityCalendarComponent } from '../availability-calendar/availability-calendar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function BookingWidgetComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formSuccess"));
} }
function BookingWidgetComponent_Conditional_6_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "span")(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span")(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formCheckIn"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.form.controls.checkIn.value);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formCheckOut"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.form.controls.checkOut.value || "\u2014");
} }
function BookingWidgetComponent_Conditional_6_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r0.nightCount(), " ", ctx_r0.t.inline("N\u00E4chte", "nights", "\u043D\u043E\u0447\u0435\u0439", "noches"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.estimatedTotal(), " \u20AC");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Vorl\u00E4ufiger Gesamtpreis ohne m\u00F6gliche Zusatzgeb\u00FChren.", "Estimated total excluding possible additional fees.", "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0431\u043E\u0440\u043E\u0432.", "Total estimado sin posibles cargos adicionales."));
} }
function BookingWidgetComponent_Conditional_6_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage());
} }
function BookingWidgetComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 4);
    i0.ɵɵlistener("ngSubmit", function BookingWidgetComponent_Conditional_6_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submit()); });
    i0.ɵɵelementStart(1, "div", 5)(2, "label", 6);
    i0.ɵɵtext(3, "Website");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "label", 9);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 10)(9, "option", 11);
    i0.ɵɵtext(10, "Villa MonteMare");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 12);
    i0.ɵɵtext(12, "Villa Lumina");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "app-availability-calendar", 13);
    i0.ɵɵlistener("rangeChange", function BookingWidgetComponent_Conditional_6_Template_app_availability_calendar_rangeChange_13_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setDateRange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, BookingWidgetComponent_Conditional_6_Conditional_14_Template, 9, 4, "div", 14);
    i0.ɵɵelementStart(15, "div", 8)(16, "label", 15);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "input", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 17)(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "strong");
    i0.ɵɵtext(23, "500 \u20AC");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, BookingWidgetComponent_Conditional_6_Conditional_24_Template, 6, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 18)(26, "div", 8)(27, "label", 19);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(29, "input", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 8)(31, "label", 21);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(33, "input", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 8)(35, "label", 23);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "input", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 8)(39, "label", 25);
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(41, "input", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 8)(43, "label", 27);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(45, "textarea", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "label", 29);
    i0.ɵɵelement(47, "input", 30);
    i0.ɵɵelementStart(48, "span");
    i0.ɵɵtext(49);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(50, BookingWidgetComponent_Conditional_6_Conditional_50_Template, 2, 1, "p", 31);
    i0.ɵɵelementStart(51, "button", 32);
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "a", 33);
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formVilla"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("villaSlug", ctx_r0.form.controls.villaSlug.value);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.form.controls.checkIn.value ? 14 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formGuests"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Preis pro Nacht", "Price per night", "\u0426\u0435\u043D\u0430 \u0437\u0430 \u043D\u043E\u0447\u044C", "Precio por noche"));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.nightCount() > 0 ? 24 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formFirstName"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formLastName"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formEmail"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formPhone"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formMessage"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.t.ui("formPrivacy"));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.state() === "error" ? 50 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.state() === "submitting");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.state() === "submitting" ? ctx_r0.t.ui("formSubmitting") : ctx_r0.t.ui("formSubmit"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", ctx_r0.whatsappHref(), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.ui("whatsappCta"), " ");
} }
export class BookingWidgetComponent {
    preselectedVillaSlug = 'villa-monte-mare';
    t = inject(TranslationService);
    fb = inject(FormBuilder);
    emailService = inject(EmailInquiryService);
    state = signal('idle');
    errorMessage = signal('');
    form = this.fb.nonNullable.group({
        villaSlug: this.fb.nonNullable.control('villa-monte-mare', Validators.required),
        checkIn: ['', Validators.required],
        checkOut: ['', Validators.required],
        guests: [2, [Validators.required, Validators.min(1), Validators.max(6)]],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        message: [''],
        privacyConsent: [false, Validators.requiredTrue],
        website: [''], // honeypot — must stay empty
    });
    ngOnInit() {
        this.form.patchValue({ villaSlug: this.preselectedVillaSlug });
    }
    nightCount() {
        const checkIn = this.form.controls.checkIn.value;
        const checkOut = this.form.controls.checkOut.value;
        if (!checkIn || !checkOut)
            return 0;
        const milliseconds = new Date(`${checkOut}T12:00:00`).getTime() - new Date(`${checkIn}T12:00:00`).getTime();
        return Math.max(0, Math.round(milliseconds / 86_400_000));
    }
    estimatedTotal() {
        return this.nightCount() * 500;
    }
    setDateRange(range) {
        this.form.patchValue(range);
    }
    async submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.state.set('error');
            this.errorMessage.set(this.t.ui('formErrorRequired'));
            return;
        }
        const raw = this.form.getRawValue();
        if (raw.website) {
            // honeypot triggered — silently drop, behave as if it succeeded
            this.state.set('success');
            return;
        }
        const inquiry = {
            villaSlug: raw.villaSlug,
            checkIn: raw.checkIn,
            checkOut: raw.checkOut,
            guests: raw.guests,
            firstName: raw.firstName,
            lastName: raw.lastName,
            email: raw.email,
            phone: raw.phone || undefined,
            message: raw.message || undefined,
            privacyConsent: raw.privacyConsent,
        };
        this.state.set('submitting');
        try {
            await this.emailService.sendInquiry(inquiry);
            this.state.set('success');
        }
        catch {
            this.state.set('error');
            this.errorMessage.set(this.t.ui('formError'));
        }
    }
    whatsappHref() {
        const raw = this.form.getRawValue();
        const phoneNumber = '436642660438';
        const villaName = raw.villaSlug === 'villa-lumina' ? 'Villa Lumina' : 'Villa MonteMare';
        const dates = `${raw.checkIn || '...'} - ${raw.checkOut || '...'}`;
        const text = encodeURIComponent(this.t.inline(`Hallo, ich interessiere mich für ${villaName} (${dates}, ${raw.guests || '?'} Gäste).`, `Hi, I'm interested in ${villaName} (${dates}, ${raw.guests || '?'} guests).`, `Здравствуйте, меня интересует ${villaName} (${dates}, гостей: ${raw.guests || '?'}).`, `Hola, me interesa ${villaName} (${dates}, ${raw.guests || '?'} huéspedes).`));
        return `https://wa.me/${phoneNumber}?text=${text}`;
    }
    static ɵfac = function BookingWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BookingWidgetComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BookingWidgetComponent, selectors: [["app-booking-widget"]], inputs: { preselectedVillaSlug: "preselectedVillaSlug" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 3, consts: [["id", "verfuegbarkeit", 1, "booking-widget"], [1, "muted"], ["role", "status", 1, "status", "status-success"], ["novalidate", "", 3, "formGroup"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["aria-hidden", "true", 1, "honeypot"], ["for", "website"], ["id", "website", "type", "text", "formControlName", "website", "tabindex", "-1", "autocomplete", "off"], [1, "field"], ["for", "villaSlug"], ["id", "villaSlug", "formControlName", "villaSlug"], ["value", "villa-monte-mare"], ["value", "villa-lumina"], [3, "rangeChange", "villaSlug"], [1, "selected-dates"], ["for", "guests"], ["id", "guests", "type", "number", "min", "1", "max", "6", "formControlName", "guests"], ["aria-live", "polite", 1, "price-summary"], [1, "field-row"], ["for", "firstName"], ["id", "firstName", "type", "text", "formControlName", "firstName", "autocomplete", "given-name"], ["for", "lastName"], ["id", "lastName", "type", "text", "formControlName", "lastName", "autocomplete", "family-name"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email"], ["for", "phone"], ["id", "phone", "type", "tel", "formControlName", "phone", "autocomplete", "tel"], ["for", "message"], ["id", "message", "rows", "3", "formControlName", "message"], [1, "consent"], ["type", "checkbox", "formControlName", "privacyConsent"], ["role", "alert", 1, "status", "status-error"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-quiet", "whatsapp-link", 3, "href"]], template: function BookingWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p", 1);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, BookingWidgetComponent_Conditional_5_Template, 2, 1, "p", 2)(6, BookingWidgetComponent_Conditional_6_Template, 55, 18, "form", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.ui("bookingTitle"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.ui("bookingIntro"));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.state() === "success" ? 5 : 6);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.MaxValidator, i1.FormGroupDirective, i1.FormControlName, AvailabilityCalendarComponent], styles: [".booking-widget[_ngcontent-%COMP%] {\n      background: var(--c-ivory);\n      border: 1px solid color-mix(in srgb, var(--c-sand) 75%, transparent);\n      border-radius: var(--radius-lg);\n      padding: clamp(1.5rem, 4vw, 2.5rem);\n      max-width: 560px;\n      width: 100%;\n      min-width: 0;\n      box-shadow: var(--shadow-lifted);\n    }\n    form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-2); margin-top: var(--space-2); }\n    .field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 0.3rem; flex: 1; }\n    .field-row[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); }\n    .selected-dates[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; padding: .75rem 1rem; border-radius: 9px; background: var(--c-limestone); }\n    .selected-dates[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--c-adria); font-weight: 600; }\n    .selected-dates[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; color: var(--c-olive); font-weight: 400; margin-bottom: .2rem; }\n    label[_ngcontent-%COMP%] { font-size: 0.85rem; font-weight: 600; color: var(--c-adria); }\n    input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n      font: inherit;\n      padding: 0.65rem 0.75rem;\n      border: 1px solid var(--c-sand);\n      border-radius: 8px;\n      background: color-mix(in srgb, var(--c-limestone) 55%, white);\n      color: var(--c-anthracite);\n      min-height: 44px;\n    }\n    textarea[_ngcontent-%COMP%] { min-height: 88px; resize: vertical; }\n    .consent[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; }\n    .consent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { min-height: auto; margin-top: 0.2rem; }\n    .honeypot[_ngcontent-%COMP%] { position: absolute; left: -9999px; }\n    .status[_ngcontent-%COMP%] { padding: 0.75rem 1rem; border-radius: var(--radius); font-size: 0.9rem; }\n    .status-success[_ngcontent-%COMP%] { background: color-mix(in srgb, var(--c-olive) 15%, white); color: var(--c-olive); }\n    .status-error[_ngcontent-%COMP%] { background: color-mix(in srgb, var(--c-terracotta) 12%, white); color: var(--c-terracotta); }\n    .whatsapp-link[_ngcontent-%COMP%] { justify-content: center; }\n    .muted[_ngcontent-%COMP%] { color: color-mix(in srgb, var(--c-anthracite) 70%, transparent); font-size: 0.92rem; }\n    .price-summary[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr auto; gap: 0.25rem 1rem; padding: 1rem; background: color-mix(in srgb, var(--c-limestone) 70%, white); border: 1px solid var(--c-sand); border-radius: 9px; }\n    .price-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--c-adria); text-align: right; }\n    .price-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { grid-column: 1 / -1; color: var(--c-olive); }\n    @media (max-width: 600px) {\n      .booking-widget[_ngcontent-%COMP%] { padding: 1.1rem; border-radius: 10px; }\n      .field-row[_ngcontent-%COMP%] { flex-direction: column; }\n      .selected-dates[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: .5rem; }\n      input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] { width: 100%; max-width: 100%; font-size: 16px; }\n      .booking-widget[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] { width: 100%; justify-content: center; }\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BookingWidgetComponent, [{
        type: Component,
        args: [{ selector: 'app-booking-widget', standalone: true, imports: [ReactiveFormsModule, AvailabilityCalendarComponent], template: `
    <div class="booking-widget" id="verfuegbarkeit">
      <h2>{{ t.ui('bookingTitle') }}</h2>
      <p class="muted">{{ t.ui('bookingIntro') }}</p>

      @if (state() === 'success') {
        <p class="status status-success" role="status">{{ t.ui('formSuccess') }}</p>
      } @else {
        <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <!-- honeypot: hidden from real visitors, bots tend to fill every field -->
          <div class="honeypot" aria-hidden="true">
            <label for="website">Website</label>
            <input id="website" type="text" formControlName="website" tabindex="-1" autocomplete="off" />
          </div>

          <div class="field">
            <label for="villaSlug">{{ t.ui('formVilla') }}</label>
            <select id="villaSlug" formControlName="villaSlug">
              <option value="villa-monte-mare">Villa MonteMare</option>
              <option value="villa-lumina">Villa Lumina</option>
            </select>
          </div>

          <app-availability-calendar [villaSlug]="form.controls.villaSlug.value" (rangeChange)="setDateRange($event)" />
          @if (form.controls.checkIn.value) {
            <div class="selected-dates">
              <span><small>{{ t.ui('formCheckIn') }}</small>{{ form.controls.checkIn.value }}</span>
              <span><small>{{ t.ui('formCheckOut') }}</small>{{ form.controls.checkOut.value || '—' }}</span>
            </div>
          }

          <div class="field">
            <label for="guests">{{ t.ui('formGuests') }}</label>
            <input id="guests" type="number" min="1" max="6" formControlName="guests" />
          </div>

          <div class="price-summary" aria-live="polite">
            <span>{{ t.inline('Preis pro Nacht', 'Price per night', 'Цена за ночь', 'Precio por noche') }}</span>
            <strong>500 €</strong>
            @if (nightCount() > 0) {
              <span>{{ nightCount() }} {{ t.inline('Nächte', 'nights', 'ночей', 'noches') }}</span>
              <strong>{{ estimatedTotal() }} €</strong>
              <small>{{ t.inline('Vorläufiger Gesamtpreis ohne mögliche Zusatzgebühren.', 'Estimated total excluding possible additional fees.', 'Предварительная сумма без возможных дополнительных сборов.', 'Total estimado sin posibles cargos adicionales.') }}</small>
            }
          </div>

          <div class="field-row">
            <div class="field">
              <label for="firstName">{{ t.ui('formFirstName') }}</label>
              <input id="firstName" type="text" formControlName="firstName" autocomplete="given-name" />
            </div>
            <div class="field">
              <label for="lastName">{{ t.ui('formLastName') }}</label>
              <input id="lastName" type="text" formControlName="lastName" autocomplete="family-name" />
            </div>
          </div>

          <div class="field">
            <label for="email">{{ t.ui('formEmail') }}</label>
            <input id="email" type="email" formControlName="email" autocomplete="email" />
          </div>

          <div class="field">
            <label for="phone">{{ t.ui('formPhone') }}</label>
            <input id="phone" type="tel" formControlName="phone" autocomplete="tel" />
          </div>

          <div class="field">
            <label for="message">{{ t.ui('formMessage') }}</label>
            <textarea id="message" rows="3" formControlName="message"></textarea>
          </div>

          <label class="consent">
            <input type="checkbox" formControlName="privacyConsent" />
            <span>{{ t.ui('formPrivacy') }}</span>
          </label>

          @if (state() === 'error') {
            <p class="status status-error" role="alert">{{ errorMessage() }}</p>
          }

          <button class="btn btn-primary" type="submit" [disabled]="state() === 'submitting'">
            {{ state() === 'submitting' ? t.ui('formSubmitting') : t.ui('formSubmit') }}
          </button>

          <a class="btn btn-quiet whatsapp-link" [href]="whatsappHref()" target="_blank" rel="noopener">
            {{ t.ui('whatsappCta') }}
          </a>
        </form>
      }
    </div>
  `, styles: ["\n    .booking-widget {\n      background: var(--c-ivory);\n      border: 1px solid color-mix(in srgb, var(--c-sand) 75%, transparent);\n      border-radius: var(--radius-lg);\n      padding: clamp(1.5rem, 4vw, 2.5rem);\n      max-width: 560px;\n      width: 100%;\n      min-width: 0;\n      box-shadow: var(--shadow-lifted);\n    }\n    form { display: flex; flex-direction: column; gap: var(--space-2); margin-top: var(--space-2); }\n    .field { display: flex; flex-direction: column; gap: 0.3rem; flex: 1; }\n    .field-row { display: flex; gap: var(--space-2); }\n    .selected-dates { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; padding: .75rem 1rem; border-radius: 9px; background: var(--c-limestone); }\n    .selected-dates span { color: var(--c-adria); font-weight: 600; }\n    .selected-dates small { display: block; color: var(--c-olive); font-weight: 400; margin-bottom: .2rem; }\n    label { font-size: 0.85rem; font-weight: 600; color: var(--c-adria); }\n    input, select, textarea {\n      font: inherit;\n      padding: 0.65rem 0.75rem;\n      border: 1px solid var(--c-sand);\n      border-radius: 8px;\n      background: color-mix(in srgb, var(--c-limestone) 55%, white);\n      color: var(--c-anthracite);\n      min-height: 44px;\n    }\n    textarea { min-height: 88px; resize: vertical; }\n    .consent { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; }\n    .consent input { min-height: auto; margin-top: 0.2rem; }\n    .honeypot { position: absolute; left: -9999px; }\n    .status { padding: 0.75rem 1rem; border-radius: var(--radius); font-size: 0.9rem; }\n    .status-success { background: color-mix(in srgb, var(--c-olive) 15%, white); color: var(--c-olive); }\n    .status-error { background: color-mix(in srgb, var(--c-terracotta) 12%, white); color: var(--c-terracotta); }\n    .whatsapp-link { justify-content: center; }\n    .muted { color: color-mix(in srgb, var(--c-anthracite) 70%, transparent); font-size: 0.92rem; }\n    .price-summary { display: grid; grid-template-columns: 1fr auto; gap: 0.25rem 1rem; padding: 1rem; background: color-mix(in srgb, var(--c-limestone) 70%, white); border: 1px solid var(--c-sand); border-radius: 9px; }\n    .price-summary strong { color: var(--c-adria); text-align: right; }\n    .price-summary small { grid-column: 1 / -1; color: var(--c-olive); }\n    @media (max-width: 600px) {\n      .booking-widget { padding: 1.1rem; border-radius: 10px; }\n      .field-row { flex-direction: column; }\n      .selected-dates { grid-template-columns: 1fr; gap: .5rem; }\n      input, select, textarea { width: 100%; max-width: 100%; font-size: 16px; }\n      .booking-widget .btn { width: 100%; justify-content: center; }\n    }\n  "] }]
    }], null, { preselectedVillaSlug: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BookingWidgetComponent, { className: "BookingWidgetComponent" }); })();
//# sourceMappingURL=booking-widget.component.js.map