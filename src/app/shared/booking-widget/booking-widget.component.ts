import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, PLATFORM_ID, ViewChild, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
import { VillaSlug } from '../../core/models/villa.model';
import { AvailabilityCalendarComponent } from '../availability-calendar/availability-calendar.component';
import { ConversionTrackingService } from '../../core/services/conversion-tracking.service';
import { CONTACT } from '../../core/config/contact.config';
import { LONG_STAY_MIN_NIGHTS, MONTE_MARE_MONTHLY_RATE_EUR, nightlyRateForDate } from '../../core/config/pricing.config';

type SubmitState = 'idle' | 'success' | 'error';
type DrawerStep = 1 | 2 | 3;
type TravelReason = 'family' | 'celebration' | 'friends' | 'workation' | 'party' | 'curious';
type ContactPreference = 'email' | 'whatsapp';
interface PriceLine { rate: number; nights: number; total: number; }

@Component({
  selector: 'app-booking-widget',
  standalone: true,
  imports: [ReactiveFormsModule, AvailabilityCalendarComponent],
  template: `
    <section class="booking-experience" id="verfuegbarkeit">
      <header class="booking-heading">
        <p class="eyebrow">{{ t.inline('Ihr Aufenthalt', 'Your stay', 'Ваш отдых', 'Tu estancia') }}</p>
        <h2>{{ t.inline('Wann möchten Sie anreisen?', 'When would you like to arrive?', 'Когда вы хотите приехать?', '¿Cuándo te gustaría llegar?') }}</h2>
        <p>{{ t.inline('Wählen Sie Ihren Zeitraum – der vorläufige Preis für Ihren Aufenthalt erscheint sofort.', 'Choose your dates and the estimated price for your stay will appear immediately.', 'Выберите даты — предварительная стоимость проживания появится сразу.', 'Elige tus fechas y el precio estimado de la estancia aparecerá de inmediato.') }}</p>
        <p class="booking-microcopy">{{ t.inline('Direkte Anfrage · Keine Buchungsgebühr · Persönlicher Kontakt', 'Direct inquiry · No booking fee · Personal contact', 'Прямой запрос · Без комиссии · Личный контакт', 'Solicitud directa · Sin comisión · Contacto personal') }}</p>
      </header>

      <div class="stay-grid">
        <div class="calendar-panel">
          <label for="stayVilla">{{ t.ui('formVilla') }}</label>
          <select id="stayVilla" [formControl]="form.controls.villaSlug" (change)="villaChanged()">
            <option value="villa-lumina">Villa Lumina</option>
            <option value="villa-monte-mare">Villa MonteMare</option>
          </select>
          <app-availability-calendar [villaSlug]="form.controls.villaSlug.value" [initialCheckIn]="form.controls.checkIn.value" [initialCheckOut]="form.controls.checkOut.value" [embedded]="true" (rangeChange)="setDateRange($event)" />
        </div>

        @if (nightCount() === 0) {
          <aside class="included-panel">
            <div>
              <p class="panel-kicker">{{ t.inline('Im Aufenthalt enthalten', 'Included in your stay', 'Включено в проживание', 'Incluido en tu estancia') }}</p>
              <h3>{{ t.inline('Was inklusive ist', 'What is included', 'Что включено', 'Qué está incluido') }}</h3>
            </div>
            <ul class="included-list">
              <li>{{ t.inline('Endreinigung', 'Final cleaning', 'Финальная уборка', 'Limpieza final') }}</li>
              <li>{{ t.inline('Strom und Wasser', 'Electricity and water', 'Электричество и вода', 'Electricidad y agua') }}</li>
              <li>{{ t.inline('Hochgeschwindigkeits-WLAN', 'High-speed WiFi', 'Высокоскоростной Wi‑Fi', 'Wi‑Fi de alta velocidad') }}</li>
              <li>{{ t.inline('2 private Parkplätze pro Villa', '2 private parking spaces per villa', '2 частных парковочных места для каждой виллы', '2 plazas de aparcamiento privadas por villa') }}</li>
              <li>{{ t.inline('Exklusive Nutzung der gesamten Villa', 'Exclusive use of the entire villa', 'Эксклюзивное пользование всей виллой', 'Uso exclusivo de toda la villa') }}</li>
            </ul>
            <section class="long-stay-extras" [attr.aria-label]="t.inline('Langzeitmiete Villa MonteMare', 'Villa MonteMare long stays', 'Длительное проживание в Villa MonteMare', 'Estancias largas en Villa MonteMare')">
                <div class="long-stay-title">
                  <span aria-hidden="true">✦</span>
                  <div>
                    <small>{{ t.inline('Exklusiv für Villa MonteMare', 'Exclusive to Villa MonteMare', 'Эксклюзивно для Villa MonteMare', 'Exclusivo para Villa MonteMare') }}</small>
                    <h4>{{ t.inline('Extras bei Langzeitmiete', 'Long-stay extras', 'Дополнительные услуги при длительном проживании', 'Extras para estancias largas') }}</h4>
                  </div>
                </div>
                <div class="long-stay-rate">
                  <strong>{{ t.inline('ab 2.500 €', 'from €2,500', 'от 2 500 €', 'desde 2.500 €') }}</strong>
                  <span>{{ t.inline('pro Monat', 'per month', 'в месяц', 'al mes') }}</span>
                </div>
                <ul>
                  <li>{{ t.inline('Poolreinigungsservice', 'Pool cleaning service', 'Обслуживание и очистка бассейна', 'Servicio de limpieza de piscina') }}</li>
                  <li>{{ t.inline('Reinigungsservice', 'Housekeeping service', 'Услуги по уборке', 'Servicio de limpieza') }}</li>
                  <li>{{ t.inline('Gärtnerservice', 'Garden maintenance', 'Уход за садом', 'Servicio de jardinería') }}</li>
                </ul>
                <p>{{ t.inline('Für längere Aufenthalte auf Anfrage individuell planbar.', 'Individually arranged on request for longer stays.', 'Для длительного проживания услуги согласовываются индивидуально по запросу.', 'Disponibles bajo petición y organizados a medida para estancias largas.') }}</p>
            </section>
            <div class="included-footer">
              <p>{{ t.inline('Fragen vor der Datumswahl?', 'Questions before choosing dates?', 'Есть вопросы перед выбором дат?', '¿Preguntas antes de elegir fechas?') }}</p>
              <button class="btn btn-quiet" type="button" (click)="openInquiry()">{{ t.inline('Schreiben Sie uns', 'Write to us', 'Напишите нам', 'Escríbenos') }} →</button>
              <a class="whatsapp-text" [href]="whatsappHref()" (click)="trackWhatsapp()" target="_blank" rel="noopener">{{ t.inline('Oder per WhatsApp erreichen', 'Or reach us on WhatsApp', 'Или свяжитесь через WhatsApp', 'O contáctanos por WhatsApp') }}</a>
            </div>
          </aside>
        } @else {
          <aside class="price-panel" aria-live="polite">
            <div class="date-overview">
              <span><small>{{ t.ui('formCheckIn') }}</small><strong>{{ formatDate(form.controls.checkIn.value) }}</strong></span>
              <span class="date-arrow" aria-hidden="true">→</span>
              <span><small>{{ t.ui('formCheckOut') }}</small><strong>{{ formatDate(form.controls.checkOut.value) }}</strong></span>
            </div>
            <div class="price-row"><span>{{ nightCount() }} {{ t.inline('Nächte', 'nights', 'ночей', 'noches') }}</span></div>
            @if (usesLongStayRate()) {
              <div class="price-row"><span>{{ t.inline('MonteMare-Langzeitpreis', 'MonteMare long-stay rate', 'Долгосрочный тариф MonteMare', 'Tarifa de larga estancia MonteMare') }}</span><strong>2.500 € / {{ t.inline('Monat', 'month', 'месяц', 'mes') }}</strong></div>
              <p class="long-stay-calculation">{{ t.inline('Anteilig auf 30-Tage-Basis berechnet.', 'Calculated pro rata on a 30-day basis.', 'Рассчитано пропорционально на основе 30 дней.', 'Calculado proporcionalmente sobre una base de 30 días.') }}</p>
            } @else {
              @for (line of priceLines(); track line.rate) {
                <div class="price-row"><span>{{ line.rate }} € × {{ line.nights }} {{ t.inline(line.nights === 1 ? 'Nacht' : 'Nächte', line.nights === 1 ? 'night' : 'nights', 'ноч.', line.nights === 1 ? 'noche' : 'noches') }}</span><strong>{{ line.total }} €</strong></div>
              }
            }
            <div class="price-total"><span>{{ t.inline('Gesamt', 'Total', 'Итого', 'Total') }}</span><strong>{{ estimatedTotal() }} €</strong></div>
            <p class="price-note">{{ t.inline('Vorläufiger Preis. Die Verfügbarkeit und der endgültige Gesamtpreis werden persönlich bestätigt.', 'Estimated price. Availability and the final total will be confirmed personally.', 'Предварительная цена. Наличие и окончательная сумма будут подтверждены лично.', 'Precio estimado. La disponibilidad y el total final se confirmarán personalmente.') }}</p>
            <button class="btn price-cta" type="button" (click)="openInquiry()">{{ t.inline('Für diesen Zeitraum anfragen', 'Request these dates', 'Запросить эти даты', 'Solicitar estas fechas') }}</button>
            <a class="btn price-whatsapp" [href]="whatsappHref()" (click)="trackWhatsapp()" target="_blank" rel="noopener">{{ t.ui('whatsappCta') }}</a>
            <button class="change-dates" type="button" (click)="clearDates()">{{ t.inline('Daten ändern', 'Change dates', 'Изменить даты', 'Cambiar fechas') }}</button>
          </aside>
        }
      </div>
    </section>

    @if (drawerOpen()) {
      <button class="drawer-backdrop" type="button" (click)="closeInquiry()" [attr.aria-label]="t.inline('Anfrage schließen', 'Close inquiry', 'Закрыть запрос', 'Cerrar solicitud')"></button>
      <aside #drawerPanel class="inquiry-drawer" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
        <button #drawerCloseButton class="drawer-close" type="button" (click)="closeInquiry()" [attr.aria-label]="t.inline('Schließen', 'Close', 'Закрыть', 'Cerrar')">×</button>
        <p class="eyebrow">{{ t.inline('Ihre Anfrage', 'Your inquiry', 'Ваш запрос', 'Tu solicitud') }}</p>
        <h2 id="inquiry-title">{{ villaName() }}</h2>
        <div class="drawer-progress" aria-hidden="true">
          <span class="active"></span><span [class.active]="drawerStep() >= 2"></span><span [class.active]="drawerStep() >= 3"></span>
        </div>

        @if (state() === 'success') {
          <div class="drawer-success" role="status">
            <span aria-hidden="true">✓</span>
            <h3>{{ t.inline('Ihre Anfrage ist vorbereitet', 'Your inquiry is ready', 'Ваш запрос подготовлен', 'Tu solicitud está lista') }}</h3>
            <p>{{ t.inline('Die gewählte App wurde geöffnet. Dort können Sie Ihre Angaben nochmals prüfen und die Nachricht absenden.', 'Your chosen app has opened. You can review your details there before sending the message.', 'Выбранное приложение открыто. Там можно ещё раз проверить данные и отправить сообщение.', 'Se ha abierto la aplicación elegida. Allí puedes revisar los datos antes de enviar el mensaje.') }}</p>
            <button class="btn drawer-primary" type="button" (click)="closeInquiry()">{{ t.inline('Schließen', 'Close', 'Закрыть', 'Cerrar') }}</button>
          </div>
        } @else if (drawerStep() === 1) {
          <h3>{{ t.inline('Wann reisen Sie an?', 'When are you arriving?', 'Когда вы приезжаете?', '¿Cuándo llegas?') }}</h3>
          <div class="stay-step-layout" [class.flexible-layout]="form.controls.flexibleDates.value">
            <div class="stay-step-controls">
              <div class="field drawer-villa">
                <label for="drawerVilla">{{ t.ui('formVilla') }}</label>
                <select id="drawerVilla" [formControl]="form.controls.villaSlug" (change)="villaChanged()">
                  <option value="villa-lumina">Villa Lumina</option>
                  <option value="villa-monte-mare">Villa MonteMare</option>
                </select>
              </div>
              <label class="flexible-choice">
                <input type="checkbox" [formControl]="form.controls.flexibleDates" />
                <span>{{ t.inline('Ich bin flexibel – noch keine genauen Termine', 'I am flexible – no exact dates yet', 'Я гибок(-ка) — точных дат пока нет', 'Soy flexible: todavía no tengo fechas exactas') }}</span>
              </label>
              <div class="guest-control">
                <span>{{ t.ui('formGuests') }}</span>
                <div>
                  <button type="button" (click)="changeGuests(-1)" [disabled]="form.controls.guests.value <= 1">−</button>
                  <strong>{{ form.controls.guests.value }}</strong>
                  <button type="button" (click)="changeGuests(1)" [disabled]="form.controls.guests.value >= 6">+</button>
                </div>
              </div>
              @if (state() === 'error') { <p class="status-error" role="alert">{{ errorMessage() }}</p> }
              <button class="btn drawer-primary" type="button" (click)="continueFromStay()">{{ t.inline('Weiter', 'Continue', 'Продолжить', 'Continuar') }} →</button>
            </div>
            @if (!form.controls.flexibleDates.value) {
              <div class="drawer-calendar">
                <app-availability-calendar [villaSlug]="form.controls.villaSlug.value" [initialCheckIn]="form.controls.checkIn.value" [initialCheckOut]="form.controls.checkOut.value" [embedded]="true" [compact]="true" (rangeChange)="setDateRange($event)" />
              </div>
            }
          </div>
        } @else if (drawerStep() === 2) {
          <button class="drawer-back" type="button" (click)="goToStep(1)">← {{ t.inline('Zurück', 'Back', 'Назад', 'Atrás') }}</button>
          <h3>{{ t.inline('Was führt Sie zu uns nach Budva?', 'What brings you to Budva?', 'Что привело вас в Будву?', '¿Qué te trae a Budva?') }}</h3>
          <p>{{ t.inline('Wählen Sie aus, was am besten zu Ihrer Reise passt.', 'Choose what best describes your trip.', 'Выберите вариант, который лучше всего описывает поездку.', 'Elige la opción que mejor describa tu viaje.') }}</p>
          <div class="reason-grid">
            @for (reason of travelReasons(); track reason.value) {
              <button type="button" [class.selected]="form.controls.travelReason.value === reason.value" [attr.aria-pressed]="form.controls.travelReason.value === reason.value" (click)="selectReason(reason.value)">
                <span class="reason-icon" aria-hidden="true">{{ reason.icon }}</span>
                <span>{{ reason.label }}</span>
              </button>
            }
          </div>
          @if (state() === 'error') { <p class="status-error" role="alert">{{ errorMessage() }}</p> }
          <button class="btn drawer-primary" type="button" (click)="continueFromReason()">{{ t.inline('Weiter', 'Continue', 'Продолжить', 'Continuar') }} →</button>
        } @else {
          <button class="drawer-back" type="button" (click)="goToStep(2)">← {{ t.inline('Zurück', 'Back', 'Назад', 'Atrás') }}</button>
          <h3>{{ t.inline('Wie dürfen wir Sie erreichen?', 'How may we contact you?', 'Как с вами связаться?', '¿Cómo podemos contactarte?') }}</h3>
          <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <div class="honeypot" aria-hidden="true"><label for="website">Website</label><input id="website" type="text" formControlName="website" tabindex="-1" autocomplete="off" /></div>
            <div class="field-row">
              <div class="field"><label for="firstName">{{ t.ui('formFirstName') }}</label><input id="firstName" type="text" formControlName="firstName" autocomplete="given-name" /></div>
              <div class="field"><label for="lastName">{{ t.ui('formLastName') }}</label><input id="lastName" type="text" formControlName="lastName" autocomplete="family-name" /></div>
            </div>
            <fieldset class="contact-choice">
              <legend>{{ t.inline('Wie möchten Sie die Anfrage senden?', 'How would you like to send the inquiry?', 'Как вы хотите отправить запрос?', '¿Cómo quieres enviar la solicitud?') }}</legend>
              <button type="button" [class.selected]="form.controls.contactPreference.value === 'email'" [attr.aria-pressed]="form.controls.contactPreference.value === 'email'" (click)="selectContact('email')"><span aria-hidden="true">✉️</span> E-Mail</button>
              <button type="button" [class.selected]="form.controls.contactPreference.value === 'whatsapp'" [attr.aria-pressed]="form.controls.contactPreference.value === 'whatsapp'" (click)="selectContact('whatsapp')"><span aria-hidden="true">💬</span> WhatsApp</button>
            </fieldset>
            @if (form.controls.contactPreference.value === 'email') {
              <div class="field"><label for="email">{{ t.ui('formEmail') }}</label><input id="email" type="email" formControlName="email" autocomplete="email" /></div>
            } @else {
              <div class="field">
                <label for="phone">{{ t.inline('WhatsApp-Nummer', 'WhatsApp number', 'Номер WhatsApp', 'Número de WhatsApp') }}</label>
                <input id="phone" type="tel" formControlName="phone" placeholder="+43 680 123 456" autocomplete="tel" inputmode="tel" />
              </div>
            }
            <div class="field"><label for="message">{{ t.ui('formMessage') }}</label><textarea id="message" rows="3" formControlName="message"></textarea></div>
            <label class="consent"><input type="checkbox" formControlName="privacyConsent" /><span>{{ t.ui('formPrivacy') }}</span></label>
            @if (state() === 'error') { <p class="status-error" role="alert">{{ errorMessage() }}</p> }
            <button class="btn drawer-primary" type="submit">{{ t.ui('formSubmit') }} · {{ form.controls.contactPreference.value === 'whatsapp' ? 'WhatsApp' : 'E-Mail' }}</button>
          </form>
        }

        <footer class="drawer-contact">
          <span class="contact-avatar" aria-hidden="true">M</span>
          <span>
            <strong>{{ t.inline('Direkt an Michael', 'Directly to Michael', 'Напрямую Михаэлю', 'Directamente a Michael') }}</strong>
            <small>{{ t.inline('Üblicherweise Antwort innerhalb von 2 Stunden', 'Usually replies within 2 hours', 'Обычно отвечает в течение 2 часов', 'Normalmente responde en 2 horas') }}</small>
          </span>
        </footer>
      </aside>
    }
  `,
  styles: [`
    :host { display: block; width: 100%; }
    .booking-experience { width: 100%; scroll-margin-top: 8rem; }
    .booking-heading { margin-bottom: clamp(2.5rem, 5vw, 4.5rem); }
    .booking-heading h2 { max-width: 18ch; }
    .booking-heading > p:not(.eyebrow) { color: var(--c-olive); }
    .booking-microcopy { font-size: .74rem; letter-spacing: .09em; }
    .stay-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(360px, .95fr); gap: clamp(1.25rem, 4vw, 3.5rem); align-items: stretch; }
    .calendar-panel, .included-panel, .price-panel { border-radius: var(--radius-lg); min-width: 0; }
    .calendar-panel { padding: clamp(1rem, 2.5vw, 2rem); background: var(--c-ivory); border: 1px solid color-mix(in srgb, var(--c-sand) 70%, transparent); box-shadow: var(--shadow-soft); }
    .calendar-panel > label { display: block; color: var(--c-olive); font-size: .75rem; letter-spacing: .1em; text-transform: uppercase; margin-bottom: .35rem; }
    .calendar-panel > select { width: 100%; min-height: 48px; margin-bottom: 1rem; border: 1px solid var(--c-sand); border-radius: 7px; padding: .65rem .8rem; background: white; color: var(--c-adria); font: inherit; }
    .included-panel { display: flex; flex-direction: column; padding: clamp(2rem, 4vw, 3.5rem); background: var(--c-ivory); border: 1px solid color-mix(in srgb, var(--c-sand) 70%, transparent); box-shadow: var(--shadow-soft); }
    .panel-kicker { color: var(--c-olive); font-size: .72rem; letter-spacing: .11em; text-transform: uppercase; }
    .included-list { columns: 2; column-gap: 2rem; list-style: none; padding: 0; margin: 1.5rem 0 2rem; }
    .included-list li { break-inside: avoid; position: relative; padding: 0 0 .9rem 1.15rem; color: color-mix(in srgb, var(--c-anthracite) 78%, transparent); }
    .included-list li::before { content: '·'; position: absolute; left: 0; color: var(--c-terracotta); font-weight: 700; }
    .long-stay-extras { margin: 0 0 2rem; padding: 1.25rem; border: 1px solid color-mix(in srgb, var(--c-champagne) 70%, transparent); border-radius: 9px; background: linear-gradient(145deg, color-mix(in srgb, var(--c-champagne) 13%, white), color-mix(in srgb, var(--c-limestone) 78%, white)); }
    .long-stay-title { display: flex; gap: .85rem; align-items: center; }
    .long-stay-title > span { display: grid; place-items: center; flex: 0 0 38px; width: 38px; height: 38px; border: 1px solid var(--c-champagne); border-radius: 50%; color: var(--c-terracotta); }
    .long-stay-title small { display: block; color: var(--c-olive); font-size: .66rem; letter-spacing: .12em; text-transform: uppercase; }
    .long-stay-title h4 { margin: .15rem 0 0; color: var(--c-adria); font-family: var(--font-display); font-size: 1.1rem; }
    .long-stay-rate { display: flex; align-items: baseline; gap: .45rem; margin: 1rem 0 .7rem; }
    .long-stay-rate strong { color: var(--c-adria); font-family: var(--font-display); font-size: 1.65rem; font-weight: 500; line-height: 1; }
    .long-stay-rate span { color: var(--c-olive); font-size: .78rem; }
    .long-stay-extras ul { display: grid; gap: .45rem; margin: 1rem 0; padding: 0; list-style: none; }
    .long-stay-extras li { position: relative; padding-left: 1rem; color: color-mix(in srgb, var(--c-anthracite) 82%, transparent); font-size: .88rem; }
    .long-stay-extras li::before { content: '–'; position: absolute; left: 0; color: var(--c-terracotta); }
    .long-stay-extras p { margin: 0; color: var(--c-olive); font-size: .78rem; }
    .included-footer { border-top: 1px solid var(--c-sand); margin-top: auto; padding-top: 1.5rem; }
    .included-footer .btn { width: 100%; justify-content: center; }
    .whatsapp-text { display: block; text-align: center; margin-top: 1rem; font-size: .82rem; }
    .price-panel { display: flex; flex-direction: column; padding: clamp(2rem, 4vw, 3.5rem); background: #0c2030; color: rgba(255,255,255,.72); box-shadow: var(--shadow-lifted); }
    .date-overview { display: grid; grid-template-columns: 1fr auto 1fr; gap: 1rem; align-items: end; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,.15); }
    .date-overview span:not(.date-arrow) { display: flex; flex-direction: column; }
    .date-overview small { color: rgba(255,255,255,.48); letter-spacing: .1em; text-transform: uppercase; }
    .date-overview strong { color: white; font-family: var(--font-display); font-size: 1.25rem; }
    .date-arrow { color: var(--c-champagne); font-size: 1.4rem; }
    .price-row, .price-total { display: flex; justify-content: space-between; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,.15); }
    .price-row strong, .price-total strong { color: white; }
    .price-total { font-size: 1.2rem; font-weight: 600; }
    .price-note { margin-top: 1rem; color: rgba(255,255,255,.55); font-size: .8rem; }
    .long-stay-calculation { margin: -.35rem 0 .5rem; color: rgba(255,255,255,.5); font-size: .74rem; }
    .price-cta { width: 100%; justify-content: center; margin-top: auto; background: #24758a; color: white; }
    .price-whatsapp { width: 100%; justify-content: center; margin-top: .75rem; border-color: rgba(255,255,255,.25); color: white; }
    .change-dates { align-self: center; border: 0; background: transparent; color: rgba(255,255,255,.48); margin-top: 1rem; cursor: pointer; }
    .drawer-backdrop { position: fixed; inset: 0; z-index: 199; border: 0; background: rgba(9,18,25,.62); backdrop-filter: blur(3px); }
    .inquiry-drawer { position: fixed; z-index: 200; top: 0; right: 0; width: min(100%, 960px); height: 100dvh; overflow-y: auto; display: flex; flex-direction: column; padding: clamp(1.5rem, 3vw, 2.75rem); background: #091c2d; color: rgba(255,255,255,.78); box-shadow: -30px 0 80px rgba(0,0,0,.32); animation: drawer-in 320ms cubic-bezier(.2,.7,.2,1); }
    @keyframes drawer-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
    .inquiry-drawer h2, .inquiry-drawer h3 { color: white; }
    .inquiry-drawer .eyebrow { color: var(--c-champagne); }
    .drawer-close { position: absolute; right: 1.25rem; top: 1.25rem; width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(255,255,255,.2); background: transparent; color: white; font-size: 1.6rem; cursor: pointer; }
    .drawer-progress { display: flex; gap: .45rem; margin: .85rem 0 1rem; }
    .drawer-progress span { width: 24px; height: 3px; background: rgba(255,255,255,.16); }
    .drawer-progress span.active { background: var(--c-champagne); }
    .drawer-summary { padding: .85rem 1rem; margin-bottom: 1.5rem; border-left: 3px solid var(--c-champagne); border-radius: 5px; background: rgba(255,255,255,.05); }
    .drawer-villa { margin-bottom: .75rem; }
    .drawer-villa select { width: 100%; min-height: 48px; border: 1px solid rgba(255,255,255,.25); border-radius: 5px; padding: .7rem .8rem; background: rgba(255,255,255,.06); color: white; font: inherit; }
    .drawer-villa option { color: var(--c-anthracite); }
    .flexible-choice { display: flex; gap: .65rem; align-items: flex-start; padding: .8rem .9rem; margin-bottom: .75rem; border: 1px solid rgba(255,255,255,.16); cursor: pointer; }
    .flexible-choice input { width: 18px; height: 18px; margin-top: .15rem; accent-color: var(--c-champagne); }
    .drawer-calendar { min-width: 0; padding: .55rem; border-radius: 8px; background: white; color: var(--c-anthracite); }
    .drawer-dates { display: grid; grid-template-columns: 1fr 1fr; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,.16); }
    .drawer-dates span { padding: 1rem; color: white; }
    .drawer-dates span + span { border-left: 1px solid rgba(255,255,255,.16); }
    .drawer-dates small { display: block; color: rgba(255,255,255,.45); text-transform: uppercase; letter-spacing: .1em; }
    .guest-control { display: flex; justify-content: space-between; align-items: center; padding: .8rem 1rem; border: 1px solid rgba(255,255,255,.16); }
    .guest-control div { display: flex; align-items: center; gap: 1rem; }
    .guest-control button { width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(255,255,255,.18); background: transparent; color: white; font-size: 1.2rem; cursor: pointer; }
    .drawer-primary { width: 100%; justify-content: center; margin-top: 1rem; background: #2d8397; color: white; }
    .drawer-back { border: 0; background: transparent; color: var(--c-champagne); padding: 0; cursor: pointer; }
    .reason-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .7rem; margin: 1.5rem 0; }
    .reason-grid button, .contact-choice button { min-height: 52px; padding: .75rem; border: 1px solid rgba(255,255,255,.2); border-radius: 5px; background: rgba(255,255,255,.04); color: white; font: inherit; cursor: pointer; transition: border-color 180ms ease, background 180ms ease; }
    .reason-grid button { min-height: 88px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .35rem; text-align: center; }
    .reason-icon { display: block; font-size: 1.35rem; line-height: 1; filter: saturate(.9); }
    .reason-grid button:hover, .reason-grid button.selected, .contact-choice button:hover, .contact-choice button.selected { border-color: var(--c-champagne); background: rgba(220,187,111,.13); }
    .contact-choice { display: grid; grid-template-columns: 1fr 1fr; gap: .7rem; margin: 0; padding: 0; border: 0; }
    .contact-choice legend { grid-column: 1 / -1; margin-bottom: .35rem; color: rgba(255,255,255,.72); font-size: .82rem; }
    .contact-choice button { display: inline-flex; align-items: center; justify-content: center; gap: .45rem; }
    form { display: flex; flex-direction: column; gap: 1rem; }
    .field, .field-row { display: flex; gap: 1rem; }
    .field { flex-direction: column; gap: .3rem; flex: 1; }
    form label { color: rgba(255,255,255,.72); font-size: .82rem; }
    form input, form textarea { width: 100%; min-height: 46px; border: 1px solid rgba(255,255,255,.2); border-radius: 5px; background: rgba(255,255,255,.04); color: white; padding: .7rem .8rem; font: inherit; }
    form textarea { min-height: 90px; }
    .optional-fields { border: 1px solid rgba(255,255,255,.16); padding: .8rem 1rem; }
    .optional-fields summary { cursor: pointer; color: rgba(255,255,255,.72); }
    .optional-fields[open] summary { margin-bottom: 1rem; }
    .optional-fields .field + .field { margin-top: 1rem; }
    .consent { display: flex; gap: .6rem; align-items: flex-start; }
    .consent input { width: auto; min-height: auto; margin-top: .25rem; }
    .honeypot { position: absolute; left: -9999px; }
    .status-error { color: #ffb19d; }
    .drawer-success { display: flex; flex-direction: column; align-items: flex-start; gap: 1rem; padding-top: 2rem; }
    .drawer-success > span { display: grid; place-items: center; width: 3rem; height: 3rem; border-radius: 50%; background: var(--c-champagne); color: var(--c-adria); font-size: 1.4rem; }
    .drawer-contact { display: flex; align-items: center; gap: .85rem; margin-top: auto; padding-top: .8rem; border-top: 1px solid rgba(255,255,255,.14); color: rgba(255,255,255,.72); }
    .contact-avatar { display: grid; place-items: center; flex: 0 0 42px; width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(145deg, var(--c-champagne), var(--c-terracotta)); color: #091c2d; font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; box-shadow: 0 0 0 3px rgba(255,255,255,.06); }
    .drawer-contact > span:last-child { display: flex; flex-direction: column; line-height: 1.35; }
    .drawer-contact strong { color: white; font-size: .86rem; font-weight: 500; }
    .drawer-contact small { color: rgba(255,255,255,.48); font-size: .76rem; }
    @media (max-width: 900px) { .stay-grid { grid-template-columns: 1fr; } }
    @media (max-width: 600px) {
      .booking-heading h2 { font-size: clamp(2.3rem, 12vw, 3.4rem); }
      .calendar-panel, .included-panel, .price-panel { border-radius: 10px; }
      .included-list { columns: 1; }
      .field-row { flex-direction: column; }
      .inquiry-drawer { padding: 3.8rem 1rem 1.25rem; }
      .date-overview { gap: .55rem; }
      .date-overview strong { font-size: 1.05rem; }
      .reason-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class BookingWidgetComponent implements OnInit, OnDestroy {
  @Input() preselectedVillaSlug: VillaSlug = 'villa-lumina';
  @ViewChild(AvailabilityCalendarComponent) private calendar?: AvailabilityCalendarComponent;
  @ViewChild('drawerPanel') private drawerPanel?: ElementRef<HTMLElement>;
  @ViewChild('drawerCloseButton') private drawerCloseButton?: ElementRef<HTMLButtonElement>;

  protected readonly t = inject(TranslationService);
  private readonly fb = inject(FormBuilder);
  private readonly tracking = inject(ConversionTrackingService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly state = signal<SubmitState>('idle');
  protected readonly errorMessage = signal('');
  protected readonly drawerOpen = signal(false);
  protected readonly drawerStep = signal<DrawerStep>(1);
  private previouslyFocused: HTMLElement | null = null;
  private previousBodyOverflow = '';

  protected readonly form = this.fb.nonNullable.group({
    villaSlug: this.fb.nonNullable.control<VillaSlug>('villa-lumina', Validators.required),
    checkIn: [''], checkOut: [''], flexibleDates: [false],
    guests: [2, [Validators.required, Validators.min(1), Validators.max(6)]],
    travelReason: this.fb.nonNullable.control<TravelReason | ''>('', Validators.required),
    firstName: ['', Validators.required], lastName: ['', Validators.required],
    contactPreference: this.fb.nonNullable.control<ContactPreference>('email', Validators.required),
    email: ['', Validators.email],
    phone: ['', Validators.pattern(/^\+?[0-9\s()\/-]{7,24}$/)],
    message: [''],
    privacyConsent: [false, Validators.requiredTrue], website: [''],
  });

  ngOnInit(): void { this.form.patchValue({ villaSlug: this.preselectedVillaSlug }); }

  ngOnDestroy(): void { this.restorePageState(false); }

  @HostListener('document:keydown', ['$event'])
  protected handleDrawerKeydown(event: KeyboardEvent): void {
    if (!this.drawerOpen()) return;
    if (event.key === 'Escape') { event.preventDefault(); this.closeInquiry(); }
    if (event.key === 'Tab') this.trapDrawerFocus(event);
  }

  protected nightCount(): number {
    const checkIn = this.form.controls.checkIn.value;
    const checkOut = this.form.controls.checkOut.value;
    if (!checkIn || !checkOut) return 0;
    return Math.max(0, Math.round((new Date(`${checkOut}T12:00:00`).getTime() - new Date(`${checkIn}T12:00:00`).getTime()) / 86_400_000));
  }
  protected priceLines(): PriceLine[] {
    const checkIn = this.form.controls.checkIn.value;
    const checkOut = this.form.controls.checkOut.value;
    if (!checkIn || !checkOut) return [];
    const lines = new Map<number, PriceLine>();
    const date = new Date(`${checkIn}T12:00:00`);
    const last = new Date(`${checkOut}T12:00:00`);
    while (date < last) {
      const iso = this.toIso(date);
      const rate = nightlyRateForDate(iso);
      const line = lines.get(rate) ?? { rate, nights: 0, total: 0 };
      line.nights += 1;
      line.total += rate;
      lines.set(rate, line);
      date.setDate(date.getDate() + 1);
    }
    return [...lines.values()];
  }
  protected usesLongStayRate(): boolean {
    return this.form.controls.villaSlug.value === 'villa-monte-mare' && this.nightCount() >= LONG_STAY_MIN_NIGHTS;
  }
  protected estimatedTotal(): number {
    if (this.usesLongStayRate()) return Math.round((this.nightCount() / 30) * MONTE_MARE_MONTHLY_RATE_EUR);
    return this.priceLines().reduce((total, line) => total + line.total, 0);
  }
  protected villaName(): string { return this.form.controls.villaSlug.value === 'villa-lumina' ? 'Villa Lumina' : 'Villa MonteMare'; }
  protected formatDate(iso: string): string {
    if (!iso) return '—';
    const locale = ({ de: 'de-DE', en: 'en-GB', ru: 'ru-RU', es: 'es-ES' })[this.t.locale()];
    return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${iso}T12:00:00`));
  }
  protected setDateRange(range: { checkIn: string; checkOut: string }): void {
    this.form.patchValue(range);
    if (range.checkOut) this.tracking.track('booking_dates_selected', { villa: this.form.controls.villaSlug.value, nights: this.nightCount() });
  }
  public openPlanner(): void { this.openInquiry(); }
  protected clearDates(): void { this.calendar?.resetSelection(); }
  protected villaChanged(): void {
    this.form.patchValue({ checkIn: '', checkOut: '' });
    this.state.set('idle');
  }
  protected openInquiry(): void {
    if (isPlatformBrowser(this.platformId) && !this.drawerOpen()) {
      this.previouslyFocused = this.document.activeElement instanceof HTMLElement ? this.document.activeElement : null;
      this.previousBodyOverflow = this.document.body.style.overflow;
      this.document.body.style.overflow = 'hidden';
    }
    this.drawerStep.set(1); this.state.set('idle'); this.errorMessage.set(''); this.drawerOpen.set(true);
    if (isPlatformBrowser(this.platformId)) requestAnimationFrame(() => this.drawerCloseButton?.nativeElement.focus());
    this.tracking.track('booking_inquiry_opened', { villa: this.form.controls.villaSlug.value, nights: this.nightCount() });
  }
  protected closeInquiry(): void { this.drawerOpen.set(false); this.restorePageState(true); }
  protected changeGuests(change: number): void { this.form.controls.guests.setValue(Math.min(6, Math.max(1, this.form.controls.guests.value + change))); }
  protected goToStep(step: DrawerStep): void { this.state.set('idle'); this.errorMessage.set(''); this.drawerStep.set(step); }
  protected selectReason(reason: TravelReason): void { this.form.controls.travelReason.setValue(reason); this.state.set('idle'); }
  protected selectContact(preference: ContactPreference): void { this.form.controls.contactPreference.setValue(preference); this.state.set('idle'); }

  protected continueFromStay(): void {
    if (!this.form.controls.flexibleDates.value && this.nightCount() === 0) {
      this.showStepError(this.t.inline('Bitte wählen Sie Anreise und Abreise oder markieren Sie sich als flexibel.', 'Please choose check-in and check-out or mark your dates as flexible.', 'Выберите даты заезда и выезда или отметьте гибкие даты.', 'Elige llegada y salida o indica que tus fechas son flexibles.'));
      return;
    }
    this.goToStep(2);
  }

  protected continueFromReason(): void {
    if (!this.form.controls.travelReason.value) {
      this.showStepError(this.t.inline('Bitte wählen Sie einen Reiseanlass aus.', 'Please choose a reason for your trip.', 'Выберите цель поездки.', 'Elige el motivo de tu viaje.'));
      return;
    }
    this.goToStep(3);
  }

  protected travelReasons(): Array<{ value: TravelReason; icon: string; label: string }> {
    return [
      { value: 'party', icon: '🌅', label: this.t.inline('Partyurlaub', 'Party holiday', 'Отдых с вечеринками', 'Vacaciones de fiesta') },
      { value: 'family', icon: '👨‍👩‍👧', label: this.t.inline('Familienurlaub', 'Family holiday', 'Семейный отдых', 'Vacaciones en familia') },
      { value: 'celebration', icon: '🥂', label: this.t.inline('Feier oder Jubiläum', 'Celebration or anniversary', 'Праздник или юбилей', 'Celebración o aniversario') },
      { value: 'friends', icon: '🤝', label: this.t.inline('Freundesgruppe', 'Friends trip', 'Поездка с друзьями', 'Viaje con amigos') },
      { value: 'workation', icon: '💼', label: 'Workation' },
      { value: 'curious', icon: '🧭', label: this.t.inline('Einfach neugierig', 'Just curious', 'Просто интересно', 'Solo tengo curiosidad') },
    ];
  }

  submit(): void {
    const raw = this.form.getRawValue();
    if (raw.website) { this.state.set('success'); return; }
    const missingEmail = raw.contactPreference === 'email' && (!raw.email || this.form.controls.email.invalid);
    const missingWhatsappNumber = raw.contactPreference === 'whatsapp' && (!raw.phone || this.form.controls.phone.invalid);
    if (!raw.firstName || !raw.lastName || !raw.privacyConsent || missingEmail || missingWhatsappNumber) {
      this.form.markAllAsTouched(); this.showStepError(this.t.ui('formErrorRequired')); return;
    }

    const body = this.inquiryMessage();
    if (raw.contactPreference === 'whatsapp') {
      window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
      this.trackWhatsapp();
    } else {
      const subject = this.t.inline(`Anfrage ${this.villaName()}`, `Inquiry ${this.villaName()}`, `Запрос ${this.villaName()}`, `Solicitud ${this.villaName()}`);
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    this.state.set('success');
    this.tracking.track('booking_inquiry_submitted', { villa: raw.villaSlug, nights: this.nightCount(), guests: raw.guests, channel: raw.contactPreference, reason: raw.travelReason });
  }

  private showStepError(message: string): void { this.state.set('error'); this.errorMessage.set(message); }

  private inquiryMessage(): string {
    const raw = this.form.getRawValue();
    const reason = this.travelReasons().find((item) => item.value === raw.travelReason)?.label ?? '—';
    const dates = raw.flexibleDates
      ? this.t.inline('Flexibel / noch offen', 'Flexible / not fixed yet', 'Гибкие / пока не определены', 'Flexibles / aún sin definir')
      : `${this.formatDate(raw.checkIn)} – ${this.formatDate(raw.checkOut)}`;
    const labels = {
      de: ['Guten Tag,', `ich interessiere mich für ${this.villaName()}.`, `Reisezeitraum: ${dates}`, `Gäste: ${raw.guests}`, `Reiseanlass: ${reason}`, `Name: ${raw.firstName} ${raw.lastName}`, raw.contactPreference === 'whatsapp' ? `WhatsApp-Nummer: ${raw.phone}` : `E-Mail: ${raw.email}`, raw.message ? `Zusätzliche Nachricht: ${raw.message}` : '', '', 'Bitte senden Sie mir weitere Informationen zur Verfügbarkeit.'],
      en: ['Hello,', `I am interested in ${this.villaName()}.`, `Travel dates: ${dates}`, `Guests: ${raw.guests}`, `Reason for travel: ${reason}`, `Name: ${raw.firstName} ${raw.lastName}`, raw.contactPreference === 'whatsapp' ? `WhatsApp number: ${raw.phone}` : `Email: ${raw.email}`, raw.message ? `Additional message: ${raw.message}` : '', '', 'Please send me further information about availability.'],
      ru: ['Здравствуйте,', `Меня интересует ${this.villaName()}.`, `Даты поездки: ${dates}`, `Гости: ${raw.guests}`, `Цель поездки: ${reason}`, `Имя: ${raw.firstName} ${raw.lastName}`, raw.contactPreference === 'whatsapp' ? `Номер WhatsApp: ${raw.phone}` : `E-mail: ${raw.email}`, raw.message ? `Дополнительное сообщение: ${raw.message}` : '', '', 'Пожалуйста, сообщите подробности о доступности.'],
      es: ['Hola,', `Me interesa ${this.villaName()}.`, `Fechas del viaje: ${dates}`, `Huéspedes: ${raw.guests}`, `Motivo del viaje: ${reason}`, `Nombre: ${raw.firstName} ${raw.lastName}`, raw.contactPreference === 'whatsapp' ? `Número de WhatsApp: ${raw.phone}` : `Correo: ${raw.email}`, raw.message ? `Mensaje adicional: ${raw.message}` : '', '', 'Envíeme más información sobre la disponibilidad, por favor.'],
    }[this.t.locale()];
    return labels.filter(Boolean).join('\n');
  }

  protected whatsappHref(): string {
    const raw = this.form.getRawValue();
    const dates = `${raw.checkIn || '...'} - ${raw.checkOut || '...'}`;
    const text = encodeURIComponent(this.t.inline(
      `Hallo, ich interessiere mich für ${this.villaName()} (${dates}, ${raw.guests || '?'} Gäste).`,
      `Hi, I'm interested in ${this.villaName()} (${dates}, ${raw.guests || '?'} guests).`,
      `Здравствуйте, меня интересует ${this.villaName()} (${dates}, гостей: ${raw.guests || '?'}).`,
      `Hola, me interesa ${this.villaName()} (${dates}, ${raw.guests || '?'} huéspedes).`,
    ));
    return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
  }

  protected trackWhatsapp(): void {
    this.tracking.track('booking_whatsapp_clicked', { villa: this.form.controls.villaSlug.value, nights: this.nightCount() });
  }

  private toIso(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  private trapDrawerFocus(event: KeyboardEvent): void {
    const focusable = Array.from(this.drawerPanel?.nativeElement.querySelectorAll<HTMLElement>('button:not([disabled]), [href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && this.document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && this.document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private restorePageState(restoreFocus: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.document.body.style.overflow = this.previousBodyOverflow;
    if (restoreFocus) this.previouslyFocused?.focus();
    this.previouslyFocused = null;
  }
}
