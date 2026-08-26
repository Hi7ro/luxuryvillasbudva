import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { AvailabilityService } from '../../core/services/availability.service';
import { VillaSlug } from '../../core/models/villa.model';

interface CalendarDay { date: Date; iso: string; day: number; outside: boolean; past: boolean; blocked: boolean; }

@Component({
  selector: 'app-availability-calendar',
  standalone: true,
  template: `
    <div class="calendar" [class.embedded]="embedded" [attr.aria-label]="t.inline('Verfügbarkeitskalender', 'Availability calendar', 'Календарь доступности', 'Calendario de disponibilidad')">
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
  `,
  styles: [`
    :host { display: block; width: 100%; min-width: 0; }
    .calendar { width: 100%; min-width: 0; overflow: hidden; border: 1px solid color-mix(in srgb, var(--c-sand) 78%, transparent); border-radius: 12px; background: #fff; padding: clamp(1rem, 3vw, 1.5rem); box-shadow: 0 18px 45px rgba(23,50,63,.08); }
    .calendar.embedded { border: 0; border-radius: 0; padding: 1rem 0 0; box-shadow: none; }
    .calendar-head { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }
    .calendar-head strong { display: block; color: var(--c-adria); font-family: var(--font-display); font-size: 1.15rem; }
    .calendar-head small { display: block; color: var(--c-olive); margin-top: .2rem; }
    .month-controls { display: flex; gap: .5rem; }
    .month-controls button { width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--c-sand); background: #fff; color: var(--c-adria); font-size: 1.5rem; cursor: pointer; }
    .month-controls button:disabled { opacity: .3; cursor: default; }
    .months, .month, .weekdays, .days { width: 100%; min-width: 0; }
    .months { display: block; }
    .month h3 { text-align: center; color: var(--c-adria); font-size: 1rem; margin-bottom: .75rem; }
    .weekdays, .days { display: grid; grid-template-columns: repeat(7, 1fr); }
    .weekdays span { text-align: center; color: var(--c-olive); font-size: .72rem; padding-bottom: .45rem; }
    .days button { position: relative; border: 0; background: transparent; color: var(--c-anthracite); aspect-ratio: 1; min-width: 0; border-radius: 50%; cursor: pointer; font: inherit; font-size: .86rem; z-index: 1; }
    .days button:hover:not(:disabled) { outline: 1px solid var(--c-adria); }
    .days button:disabled { color: color-mix(in srgb, var(--c-anthracite) 28%, transparent); cursor: default; text-decoration: line-through; }
    .days button.blocked { color: color-mix(in srgb, var(--c-anthracite) 48%, transparent); background: repeating-linear-gradient(135deg, transparent 0 4px, color-mix(in srgb, var(--c-terracotta) 18%, transparent) 4px 6px); text-decoration: line-through; }
    .days button.outside { visibility: hidden; }
    .days button.in-range { border-radius: 0; background: color-mix(in srgb, var(--c-terracotta) 14%, white); }
    .days button.start, .days button.end { border-radius: 50%; background: var(--c-adria); color: #fff; text-decoration: none; }
    .calendar-footer { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-top: 1rem; }
    .hint, .legend, .sync-status { margin: 0; color: var(--c-olive); font-size: .8rem; }
    .legend { display: flex; align-items: center; gap: .4rem; white-space: nowrap; }
    .legend span { width: 1rem; height: 1rem; border-radius: 50%; background: repeating-linear-gradient(135deg, transparent 0 3px, color-mix(in srgb, var(--c-terracotta) 28%, transparent) 3px 5px); border: 1px solid var(--c-sand); }
    .sync-status { padding: .6rem .75rem; margin-bottom: .8rem; border-radius: 7px; background: var(--c-limestone); }
    .sync-error { color: var(--c-terracotta); }
    @media (max-width: 720px) {
      .calendar-head { align-items: flex-start; }
      .calendar-head > div:first-child { min-width: 0; }
      .month-controls { flex: 0 0 auto; }
      .weekdays span, .days button { font-size: .78rem; }
      .calendar-footer { align-items: flex-start; flex-direction: column; gap: .4rem; }
    }
    @media (max-width: 380px) {
      .calendar { padding: .75rem; }
      .month-controls button { width: 40px; height: 40px; }
      .weekdays span, .days button { font-size: .72rem; }
    }
  `],
})
export class AvailabilityCalendarComponent implements OnChanges {
  @Input({ required: true }) villaSlug: VillaSlug = 'villa-monte-mare';
  @Input() embedded = false;
  @Input() initialCheckIn = '';
  @Input() initialCheckOut = '';
  @Output() readonly rangeChange = new EventEmitter<{ checkIn: string; checkOut: string }>();
  protected readonly t = inject(TranslationService);
  private readonly availability = inject(AvailabilityService);
  protected readonly start = signal('');
  protected readonly end = signal('');
  protected readonly blockedDates = signal<ReadonlySet<string>>(new Set());
  protected readonly loading = signal(true);
  protected readonly loadError = signal(false);
  private readonly today = this.startOfDay(new Date());
  private readonly firstVisibleMonth = signal(new Date(this.today.getFullYear(), this.today.getMonth(), 1));

  protected readonly visibleMonths = computed(() => [0].map((offset) => {
    const base = this.firstVisibleMonth();
    const date = new Date(base.getFullYear(), base.getMonth() + offset, 1);
    return { key: `${date.getFullYear()}-${date.getMonth()}`, date, days: this.monthDays(date) };
  }));

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['villaSlug']) {
      void this.loadAvailability(!changes['villaSlug'].firstChange);
      return;
    }
    if (changes['initialCheckIn'] || changes['initialCheckOut']) {
      this.start.set(this.initialCheckIn);
      this.end.set(this.initialCheckOut);
    }
  }

  resetSelection(): void {
    this.start.set('');
    this.end.set('');
    this.rangeChange.emit({ checkIn: '', checkOut: '' });
  }

  protected select(iso: string): void {
    if (this.blockedDates().has(iso)) return;
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

  protected previousMonth(): void { this.shiftMonth(-1); }
  protected nextMonth(): void { this.shiftMonth(1); }
  protected cannotGoBack(): boolean {
    const current = this.firstVisibleMonth();
    return current.getFullYear() === this.today.getFullYear() && current.getMonth() === this.today.getMonth();
  }
  protected isInRange(iso: string): boolean { return !!this.start() && !!this.end() && iso > this.start() && iso < this.end(); }
  protected monthLabel(date: Date): string { return new Intl.DateTimeFormat(this.intlLocale(), { month: 'long', year: 'numeric' }).format(date); }
  protected dayLabel(date: Date): string { return new Intl.DateTimeFormat(this.intlLocale(), { dateStyle: 'full' }).format(date); }
  protected blockedDayLabel(date: Date): string {
    return `${this.dayLabel(date)} – ${this.t.inline('belegt', 'booked', 'занято', 'ocupado')}`;
  }
  protected weekdayLabels(): string[] {
    const monday = new Date(2026, 0, 5);
    return Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(this.intlLocale(), { weekday: 'short' }).format(new Date(2026, 0, 5 + i)));
  }
  protected selectionText(): string {
    if (!this.start()) return this.t.inline('Anreise – Abreise', 'Check-in – Check-out', 'Заезд – Выезд', 'Llegada – Salida');
    if (!this.end()) return `${this.formatShort(this.start())} – …`;
    return `${this.formatShort(this.start())} – ${this.formatShort(this.end())}`;
  }

  private monthDays(month: Date): CalendarDay[] {
    const mondayOffset = (new Date(month.getFullYear(), month.getMonth(), 1).getDay() + 6) % 7;
    const first = new Date(month.getFullYear(), month.getMonth(), 1 - mondayOffset);
    return Array.from({ length: 42 }, (_, i) => {
      const date = new Date(first.getFullYear(), first.getMonth(), first.getDate() + i);
      const iso = this.toIso(date);
      return { date, iso, day: date.getDate(), outside: date.getMonth() !== month.getMonth(), past: date < this.today, blocked: this.blockedDates().has(iso) };
    });
  }
  private shiftMonth(offset: number): void {
    const current = this.firstVisibleMonth();
    this.firstVisibleMonth.set(new Date(current.getFullYear(), current.getMonth() + offset, 1));
  }
  private formatShort(iso: string): string { return new Intl.DateTimeFormat(this.intlLocale(), { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${iso}T12:00:00`)); }
  private intlLocale(): string { return ({ de: 'de-DE', en: 'en-GB', ru: 'ru-RU', es: 'es-ES' })[this.t.locale()]; }
  private toIso(date: Date): string { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`; }
  private startOfDay(date: Date): Date { return new Date(date.getFullYear(), date.getMonth(), date.getDate()); }

  private async loadAvailability(resetSelection = false): Promise<void> {
    this.loading.set(true);
    this.loadError.set(false);
    if (resetSelection) {
      this.start.set('');
      this.end.set('');
      this.rangeChange.emit({ checkIn: '', checkOut: '' });
    } else {
      this.start.set(this.initialCheckIn);
      this.end.set(this.initialCheckOut);
    }
    try {
      const response = await this.availability.getAvailability(this.villaSlug, true);
      this.blockedDates.set(new Set(response.blockedDates));
      this.loadError.set(!response.complete);
    } catch {
      this.blockedDates.set(new Set());
      this.loadError.set(true);
    } finally {
      this.loading.set(false);
    }
  }

  private rangeContainsBlockedDate(start: string, end: string): boolean {
    const date = new Date(`${start}T12:00:00`);
    const last = new Date(`${end}T12:00:00`);
    while (date < last) {
      if (this.blockedDates().has(this.toIso(date))) return true;
      date.setDate(date.getDate() + 1);
    }
    return false;
  }
}
