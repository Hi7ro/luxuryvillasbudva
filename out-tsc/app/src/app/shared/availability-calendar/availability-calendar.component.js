import { Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { AvailabilityService } from '../../core/services/availability.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.iso;
function AvailabilityCalendarComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Belegte Tage werden geladen\u2026", "Loading booked dates\u2026", "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u043D\u044F\u0442\u044B\u0445 \u0434\u0430\u0442\u2026", "Cargando fechas ocupadas\u2026"));
} }
function AvailabilityCalendarComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Live-Verf\u00FCgbarkeit ist vor\u00FCbergehend nicht abrufbar. Ihre Anfrage wird dennoch manuell gepr\u00FCft.", "Live availability is temporarily unavailable. Your request will still be checked manually.", "\u041E\u043D\u043B\u0430\u0439\u043D-\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430. \u0412\u0430\u0448 \u0437\u0430\u043F\u0440\u043E\u0441 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D \u0432\u0440\u0443\u0447\u043D\u0443\u044E.", "La disponibilidad en tiempo real no est\u00E1 disponible temporalmente. Su solicitud se comprobar\u00E1 manualmente."));
} }
function AvailabilityCalendarComponent_For_16_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const label_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(label_r2);
} }
function AvailabilityCalendarComponent_For_16_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function AvailabilityCalendarComponent_For_16_For_8_Template_button_click_0_listener() { const cell_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.select(cell_r4.iso)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("outside", cell_r4.outside)("blocked", cell_r4.blocked)("start", cell_r4.iso === ctx_r0.start())("end", cell_r4.iso === ctx_r0.end())("in-range", ctx_r0.isInRange(cell_r4.iso));
    i0.ɵɵproperty("disabled", cell_r4.past || cell_r4.outside || cell_r4.blocked);
    i0.ɵɵattribute("aria-label", cell_r4.blocked ? ctx_r0.blockedDayLabel(cell_r4.date) : ctx_r0.dayLabel(cell_r4.date))("aria-pressed", cell_r4.iso === ctx_r0.start() || cell_r4.iso === ctx_r0.end());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", cell_r4.day, " ");
} }
function AvailabilityCalendarComponent_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 8)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵrepeaterCreate(4, AvailabilityCalendarComponent_For_16_For_5_Template, 2, 1, "span", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 14);
    i0.ɵɵrepeaterCreate(7, AvailabilityCalendarComponent_For_16_For_8_Template, 2, 14, "button", 15, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const month_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.monthLabel(month_r5.date));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.weekdayLabels());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(month_r5.days);
} }
export class AvailabilityCalendarComponent {
    villaSlug = 'villa-monte-mare';
    rangeChange = new EventEmitter();
    t = inject(TranslationService);
    availability = inject(AvailabilityService);
    start = signal('');
    end = signal('');
    blockedDates = signal(new Set());
    loading = signal(true);
    loadError = signal(false);
    today = this.startOfDay(new Date());
    firstVisibleMonth = signal(new Date(this.today.getFullYear(), this.today.getMonth(), 1));
    visibleMonths = computed(() => [0, 1].map((offset) => {
        const base = this.firstVisibleMonth();
        const date = new Date(base.getFullYear(), base.getMonth() + offset, 1);
        return { key: `${date.getFullYear()}-${date.getMonth()}`, date, days: this.monthDays(date) };
    }));
    ngOnChanges(changes) {
        if (changes['villaSlug'])
            void this.loadAvailability();
    }
    select(iso) {
        if (this.blockedDates().has(iso))
            return;
        if (!this.start() || this.end() || iso <= this.start()) {
            this.start.set(iso);
            this.end.set('');
            this.rangeChange.emit({ checkIn: iso, checkOut: '' });
            return;
        }
        if (this.rangeContainsBlockedDate(this.start(), iso)) {
            this.start.set(iso);
            this.end.set('');
            this.rangeChange.emit({ checkIn: iso, checkOut: '' });
            return;
        }
        this.end.set(iso);
        this.rangeChange.emit({ checkIn: this.start(), checkOut: iso });
    }
    previousMonth() { this.shiftMonth(-1); }
    nextMonth() { this.shiftMonth(1); }
    cannotGoBack() {
        const current = this.firstVisibleMonth();
        return current.getFullYear() === this.today.getFullYear() && current.getMonth() === this.today.getMonth();
    }
    isInRange(iso) { return !!this.start() && !!this.end() && iso > this.start() && iso < this.end(); }
    monthLabel(date) { return new Intl.DateTimeFormat(this.intlLocale(), { month: 'long', year: 'numeric' }).format(date); }
    dayLabel(date) { return new Intl.DateTimeFormat(this.intlLocale(), { dateStyle: 'full' }).format(date); }
    blockedDayLabel(date) {
        return `${this.dayLabel(date)} – ${this.t.inline('belegt', 'booked', 'занято', 'ocupado')}`;
    }
    weekdayLabels() {
        const monday = new Date(2026, 0, 5);
        return Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(this.intlLocale(), { weekday: 'short' }).format(new Date(2026, 0, 5 + i)));
    }
    selectionText() {
        if (!this.start())
            return this.t.inline('Anreise – Abreise', 'Check-in – Check-out', 'Заезд – Выезд', 'Llegada – Salida');
        if (!this.end())
            return `${this.formatShort(this.start())} – …`;
        return `${this.formatShort(this.start())} – ${this.formatShort(this.end())}`;
    }
    monthDays(month) {
        const mondayOffset = (new Date(month.getFullYear(), month.getMonth(), 1).getDay() + 6) % 7;
        const first = new Date(month.getFullYear(), month.getMonth(), 1 - mondayOffset);
        return Array.from({ length: 42 }, (_, i) => {
            const date = new Date(first.getFullYear(), first.getMonth(), first.getDate() + i);
            const iso = this.toIso(date);
            return { date, iso, day: date.getDate(), outside: date.getMonth() !== month.getMonth(), past: date < this.today, blocked: this.blockedDates().has(iso) };
        });
    }
    shiftMonth(offset) {
        const current = this.firstVisibleMonth();
        this.firstVisibleMonth.set(new Date(current.getFullYear(), current.getMonth() + offset, 1));
    }
    formatShort(iso) { return new Intl.DateTimeFormat(this.intlLocale(), { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${iso}T12:00:00`)); }
    intlLocale() { return ({ de: 'de-DE', en: 'en-GB', ru: 'ru-RU', es: 'es-ES' })[this.t.locale()]; }
    toIso(date) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`; }
    startOfDay(date) { return new Date(date.getFullYear(), date.getMonth(), date.getDate()); }
    async loadAvailability() {
        this.loading.set(true);
        this.loadError.set(false);
        this.start.set('');
        this.end.set('');
        this.rangeChange.emit({ checkIn: '', checkOut: '' });
        try {
            const response = await this.availability.getAvailability(this.villaSlug, true);
            this.blockedDates.set(new Set(response.blockedDates));
            this.loadError.set(!response.complete);
        }
        catch {
            this.blockedDates.set(new Set());
            this.loadError.set(true);
        }
        finally {
            this.loading.set(false);
        }
    }
    rangeContainsBlockedDate(start, end) {
        const date = new Date(`${start}T12:00:00`);
        const last = new Date(`${end}T12:00:00`);
        while (date < last) {
            if (this.blockedDates().has(this.toIso(date)))
                return true;
            date.setDate(date.getDate() + 1);
        }
        return false;
    }
    static ɵfac = function AvailabilityCalendarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AvailabilityCalendarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AvailabilityCalendarComponent, selectors: [["app-availability-calendar"]], inputs: { villaSlug: "villaSlug" }, outputs: { rangeChange: "rangeChange" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 23, vars: 9, consts: [[1, "calendar"], [1, "calendar-head"], [1, "month-controls"], ["type", "button", 3, "click", "disabled"], ["type", "button", 3, "click"], ["role", "status", 1, "sync-status"], ["role", "status", 1, "sync-status", "sync-error"], [1, "months"], [1, "month"], [1, "calendar-footer"], [1, "hint"], [1, "legend"], ["aria-hidden", "true"], ["aria-hidden", "true", 1, "weekdays"], [1, "days"], ["type", "button", 3, "disabled", "outside", "blocked", "start", "end", "in-range"]], template: function AvailabilityCalendarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "strong");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "small");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 2)(8, "button", 3);
            i0.ɵɵlistener("click", function AvailabilityCalendarComponent_Template_button_click_8_listener() { return ctx.previousMonth(); });
            i0.ɵɵtext(9, "\u2039");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵlistener("click", function AvailabilityCalendarComponent_Template_button_click_10_listener() { return ctx.nextMonth(); });
            i0.ɵɵtext(11, "\u203A");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(12, AvailabilityCalendarComponent_Conditional_12_Template, 2, 1, "p", 5)(13, AvailabilityCalendarComponent_Conditional_13_Template, 2, 1, "p", 6);
            i0.ɵɵelementStart(14, "div", 7);
            i0.ɵɵrepeaterCreate(15, AvailabilityCalendarComponent_For_16_Template, 9, 1, "section", 8, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 9)(18, "p", 10);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p", 11);
            i0.ɵɵelement(21, "span", 12);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵattribute("aria-label", ctx.t.inline("Verf\u00FCgbarkeitskalender", "Availability calendar", "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438", "Calendario de disponibilidad"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.t.inline("Reisedaten ausw\u00E4hlen", "Select travel dates", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u044B", "Selecciona las fechas"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.selectionText());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.cannotGoBack());
            i0.ɵɵattribute("aria-label", ctx.t.inline("Vorheriger Monat", "Previous month", "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446", "Mes anterior"));
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-label", ctx.t.inline("N\u00E4chster Monat", "Next month", "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446", "Mes siguiente"));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading() ? 12 : ctx.loadError() ? 13 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.visibleMonths());
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.t.inline("Anreise w\u00E4hlen, danach Abreise w\u00E4hlen.", "Choose check-in, then check-out.", "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u0435\u0437\u0434, \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0435\u0437\u0434.", "Elige la llegada y despu\u00E9s la salida."));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.t.inline("Belegt", "Booked", "\u0417\u0430\u043D\u044F\u0442\u043E", "Ocupado"));
        } }, styles: [".calendar[_ngcontent-%COMP%] { width: 100%; min-width: 0; overflow: hidden; border: 1px solid color-mix(in srgb, var(--c-sand) 78%, transparent); border-radius: 12px; background: #fff; padding: clamp(1rem, 3vw, 1.5rem); box-shadow: 0 18px 45px rgba(23,50,63,.08); }\n    .calendar-head[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }\n    .calendar-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; color: var(--c-adria); font-family: var(--font-display); font-size: 1.15rem; }\n    .calendar-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; color: var(--c-olive); margin-top: .2rem; }\n    .month-controls[_ngcontent-%COMP%] { display: flex; gap: .5rem; }\n    .month-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--c-sand); background: #fff; color: var(--c-adria); font-size: 1.5rem; cursor: pointer; }\n    .month-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled { opacity: .3; cursor: default; }\n    .months[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 4vw, 2.5rem); }\n    .month[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { text-align: center; color: var(--c-adria); font-size: 1rem; margin-bottom: .75rem; }\n    .weekdays[_ngcontent-%COMP%], .days[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(7, 1fr); }\n    .weekdays[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { text-align: center; color: var(--c-olive); font-size: .72rem; padding-bottom: .45rem; }\n    .days[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { position: relative; border: 0; background: transparent; color: var(--c-anthracite); aspect-ratio: 1; min-width: 0; border-radius: 50%; cursor: pointer; font: inherit; font-size: .86rem; z-index: 1; }\n    .days[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) { outline: 1px solid var(--c-adria); }\n    .days[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled { color: color-mix(in srgb, var(--c-anthracite) 28%, transparent); cursor: default; text-decoration: line-through; }\n    .days[_ngcontent-%COMP%]   button.blocked[_ngcontent-%COMP%] { color: color-mix(in srgb, var(--c-anthracite) 48%, transparent); background: repeating-linear-gradient(135deg, transparent 0 4px, color-mix(in srgb, var(--c-terracotta) 18%, transparent) 4px 6px); text-decoration: line-through; }\n    .days[_ngcontent-%COMP%]   button.outside[_ngcontent-%COMP%] { visibility: hidden; }\n    .days[_ngcontent-%COMP%]   button.in-range[_ngcontent-%COMP%] { border-radius: 0; background: color-mix(in srgb, var(--c-terracotta) 14%, white); }\n    .days[_ngcontent-%COMP%]   button.start[_ngcontent-%COMP%], .days[_ngcontent-%COMP%]   button.end[_ngcontent-%COMP%] { border-radius: 50%; background: var(--c-adria); color: #fff; text-decoration: none; }\n    .calendar-footer[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-top: 1rem; }\n    .hint[_ngcontent-%COMP%], .legend[_ngcontent-%COMP%], .sync-status[_ngcontent-%COMP%] { margin: 0; color: var(--c-olive); font-size: .8rem; }\n    .legend[_ngcontent-%COMP%] { display: flex; align-items: center; gap: .4rem; white-space: nowrap; }\n    .legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { width: 1rem; height: 1rem; border-radius: 50%; background: repeating-linear-gradient(135deg, transparent 0 3px, color-mix(in srgb, var(--c-terracotta) 28%, transparent) 3px 5px); border: 1px solid var(--c-sand); }\n    .sync-status[_ngcontent-%COMP%] { padding: .6rem .75rem; margin-bottom: .8rem; border-radius: 7px; background: var(--c-limestone); }\n    .sync-error[_ngcontent-%COMP%] { color: var(--c-terracotta); }\n    @media (max-width: 720px) {\n      .months[_ngcontent-%COMP%] { grid-template-columns: minmax(0, 1fr); }\n      .month[_ngcontent-%COMP%]:nth-child(2) { display: none; }\n      .calendar-head[_ngcontent-%COMP%] { align-items: flex-start; }\n      .calendar-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child { min-width: 0; }\n      .month-controls[_ngcontent-%COMP%] { flex: 0 0 auto; }\n      .weekdays[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .days[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { font-size: .78rem; }\n      .calendar-footer[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; gap: .4rem; }\n    }\n    @media (max-width: 380px) {\n      .calendar[_ngcontent-%COMP%] { padding: .75rem; }\n      .month-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { width: 40px; height: 40px; }\n      .weekdays[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .days[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { font-size: .72rem; }\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AvailabilityCalendarComponent, [{
        type: Component,
        args: [{ selector: 'app-availability-calendar', standalone: true, template: `
    <div class="calendar" [attr.aria-label]="t.inline('Verfügbarkeitskalender', 'Availability calendar', 'Календарь доступности', 'Calendario de disponibilidad')">
      <div class="calendar-head">
        <div>
          <strong>{{ t.inline('Reisedaten auswählen', 'Select travel dates', 'Выберите даты', 'Selecciona las fechas') }}</strong>
          <small>{{ selectionText() }}</small>
        </div>
        <div class="month-controls">
          <button type="button" (click)="previousMonth()" [disabled]="cannotGoBack()" [attr.aria-label]="t.inline('Vorheriger Monat', 'Previous month', 'Предыдущий месяц', 'Mes anterior')">‹</button>
          <button type="button" (click)="nextMonth()" [attr.aria-label]="t.inline('Nächster Monat', 'Next month', 'Следующий месяц', 'Mes siguiente')">›</button>
        </div>
      </div>

      @if (loading()) {
        <p class="sync-status" role="status">{{ t.inline('Belegte Tage werden geladen…', 'Loading booked dates…', 'Загрузка занятых дат…', 'Cargando fechas ocupadas…') }}</p>
      } @else if (loadError()) {
        <p class="sync-status sync-error" role="status">{{ t.inline('Live-Verfügbarkeit ist vorübergehend nicht abrufbar. Ihre Anfrage wird dennoch manuell geprüft.', 'Live availability is temporarily unavailable. Your request will still be checked manually.', 'Онлайн-доступность временно недоступна. Ваш запрос всё равно будет проверен вручную.', 'La disponibilidad en tiempo real no está disponible temporalmente. Su solicitud se comprobará manualmente.') }}</p>
      }

      <div class="months">
        @for (month of visibleMonths(); track month.key) {
          <section class="month">
            <h3>{{ monthLabel(month.date) }}</h3>
            <div class="weekdays" aria-hidden="true">
              @for (label of weekdayLabels(); track label) { <span>{{ label }}</span> }
            </div>
            <div class="days">
              @for (cell of month.days; track cell.iso) {
                <button type="button"
                        [disabled]="cell.past || cell.outside || cell.blocked"
                        [class.outside]="cell.outside"
                        [class.blocked]="cell.blocked"
                        [class.start]="cell.iso === start()"
                        [class.end]="cell.iso === end()"
                        [class.in-range]="isInRange(cell.iso)"
                        (click)="select(cell.iso)"
                        [attr.aria-label]="cell.blocked ? blockedDayLabel(cell.date) : dayLabel(cell.date)"
                        [attr.aria-pressed]="cell.iso === start() || cell.iso === end()">
                  {{ cell.day }}
                </button>
              }
            </div>
          </section>
        }
      </div>
      <div class="calendar-footer">
        <p class="hint">{{ t.inline('Anreise wählen, danach Abreise wählen.', 'Choose check-in, then check-out.', 'Сначала выберите заезд, затем выезд.', 'Elige la llegada y después la salida.') }}</p>
        <p class="legend"><span aria-hidden="true"></span>{{ t.inline('Belegt', 'Booked', 'Занято', 'Ocupado') }}</p>
      </div>
    </div>
  `, styles: ["\n    .calendar { width: 100%; min-width: 0; overflow: hidden; border: 1px solid color-mix(in srgb, var(--c-sand) 78%, transparent); border-radius: 12px; background: #fff; padding: clamp(1rem, 3vw, 1.5rem); box-shadow: 0 18px 45px rgba(23,50,63,.08); }\n    .calendar-head { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }\n    .calendar-head strong { display: block; color: var(--c-adria); font-family: var(--font-display); font-size: 1.15rem; }\n    .calendar-head small { display: block; color: var(--c-olive); margin-top: .2rem; }\n    .month-controls { display: flex; gap: .5rem; }\n    .month-controls button { width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--c-sand); background: #fff; color: var(--c-adria); font-size: 1.5rem; cursor: pointer; }\n    .month-controls button:disabled { opacity: .3; cursor: default; }\n    .months { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 4vw, 2.5rem); }\n    .month h3 { text-align: center; color: var(--c-adria); font-size: 1rem; margin-bottom: .75rem; }\n    .weekdays, .days { display: grid; grid-template-columns: repeat(7, 1fr); }\n    .weekdays span { text-align: center; color: var(--c-olive); font-size: .72rem; padding-bottom: .45rem; }\n    .days button { position: relative; border: 0; background: transparent; color: var(--c-anthracite); aspect-ratio: 1; min-width: 0; border-radius: 50%; cursor: pointer; font: inherit; font-size: .86rem; z-index: 1; }\n    .days button:hover:not(:disabled) { outline: 1px solid var(--c-adria); }\n    .days button:disabled { color: color-mix(in srgb, var(--c-anthracite) 28%, transparent); cursor: default; text-decoration: line-through; }\n    .days button.blocked { color: color-mix(in srgb, var(--c-anthracite) 48%, transparent); background: repeating-linear-gradient(135deg, transparent 0 4px, color-mix(in srgb, var(--c-terracotta) 18%, transparent) 4px 6px); text-decoration: line-through; }\n    .days button.outside { visibility: hidden; }\n    .days button.in-range { border-radius: 0; background: color-mix(in srgb, var(--c-terracotta) 14%, white); }\n    .days button.start, .days button.end { border-radius: 50%; background: var(--c-adria); color: #fff; text-decoration: none; }\n    .calendar-footer { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-top: 1rem; }\n    .hint, .legend, .sync-status { margin: 0; color: var(--c-olive); font-size: .8rem; }\n    .legend { display: flex; align-items: center; gap: .4rem; white-space: nowrap; }\n    .legend span { width: 1rem; height: 1rem; border-radius: 50%; background: repeating-linear-gradient(135deg, transparent 0 3px, color-mix(in srgb, var(--c-terracotta) 28%, transparent) 3px 5px); border: 1px solid var(--c-sand); }\n    .sync-status { padding: .6rem .75rem; margin-bottom: .8rem; border-radius: 7px; background: var(--c-limestone); }\n    .sync-error { color: var(--c-terracotta); }\n    @media (max-width: 720px) {\n      .months { grid-template-columns: minmax(0, 1fr); }\n      .month:nth-child(2) { display: none; }\n      .calendar-head { align-items: flex-start; }\n      .calendar-head > div:first-child { min-width: 0; }\n      .month-controls { flex: 0 0 auto; }\n      .weekdays span, .days button { font-size: .78rem; }\n      .calendar-footer { align-items: flex-start; flex-direction: column; gap: .4rem; }\n    }\n    @media (max-width: 380px) {\n      .calendar { padding: .75rem; }\n      .month-controls button { width: 40px; height: 40px; }\n      .weekdays span, .days button { font-size: .72rem; }\n    }\n  "] }]
    }], null, { villaSlug: [{
            type: Input,
            args: [{ required: true }]
        }], rangeChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AvailabilityCalendarComponent, { className: "AvailabilityCalendarComponent" }); })();
//# sourceMappingURL=availability-calendar.component.js.map