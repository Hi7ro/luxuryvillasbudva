import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { CONTACT } from '../../core/config/contact.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
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
            E-Mail: <a [href]="'mailto:' + contact.email">{{ contact.email }}</a><br />
            {{ t.inline('Telefon', 'Phone', 'Телефон', 'Teléfono') }}:
            <a [href]="'tel:' + contact.phoneE164">{{ contact.phoneDisplay }}</a><br />
            WhatsApp: <a [href]="'https://wa.me/' + contact.whatsappNumber" target="_blank" rel="noopener noreferrer">{{ contact.phoneDisplay }}</a>
          </p>
        </div>
        <div>
          <p class="col-title">{{ t.inline('Rechtliches', 'Legal', 'Правовая информация', 'Información legal') }}</p>
          <p class="muted">
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
  `,
  styles: [`
    .site-footer {
      background: var(--c-adria);
      color: color-mix(in srgb, var(--c-limestone) 92%, transparent);
      padding-block: var(--space-5) var(--space-3);
      margin-top: var(--space-6);
    }
    .grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: var(--space-4);
      padding-bottom: var(--space-4);
      border-bottom: 1px solid color-mix(in srgb, var(--c-limestone) 20%, transparent);
    }
    .wordmark { font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 0.5rem; }
    .col-title { font-weight: 600; margin-bottom: 0.5rem; color: var(--c-champagne); }
    .muted { color: color-mix(in srgb, var(--c-limestone) 78%, transparent); font-size: 0.92rem; max-width: none; }
    .muted a { color: inherit; text-underline-offset: 0.2em; }
    .muted.small { font-size: 0.8rem; padding-top: var(--space-2); }
    @media (max-width: 720px) {
      .grid { grid-template-columns: 1fr; }
      .site-footer { padding-block: 3.5rem 5.5rem; margin-top: 4rem; }
      .grid { gap: 2rem; }
      .muted a { overflow-wrap: anywhere; }
    }
  `],
})
export class FooterComponent {
  protected readonly t = inject(TranslationService);
  protected readonly contact = CONTACT;
  protected readonly year = new Date().getFullYear();
}
