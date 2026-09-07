import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Locale } from '../../core/models/villa.model';
import { SeoService } from '../../core/services/seo.service';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found container">
      <p class="error-code" aria-hidden="true">404</p>
      <p class="eyebrow">{{ t.inline('Am falschen Abzweig', 'A wrong turn', 'Не тот поворот', 'Un desvío inesperado') }}</p>
      <h1>{{ t.inline('Diese Seite wurde nicht gefunden.', 'This page could not be found.', 'Эта страница не найдена.', 'No hemos encontrado esta página.') }}</h1>
      <p>{{ t.inline('Kehren Sie zu den Villen zurück und planen Sie dort Ihren Aufenthalt an der Budva Riviera.', 'Return to the villas and plan your stay on the Budva Riviera.', 'Вернитесь к виллам и спланируйте отдых на Будванской ривьере.', 'Vuelve a las villas y planifica allí tu estancia en la Riviera de Budva.') }}</p>
      <a class="btn btn-primary" [routerLink]="['/' + locale()]">{{ t.inline('Zur Startseite', 'Back to home', 'На главную', 'Volver al inicio') }}</a>
    </section>
  `,
  styles: [`
    .not-found { position: relative; min-height: 70vh; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding-block: 6rem; overflow: hidden; }
    .error-code { position: absolute; right: 2vw; top: 50%; margin: 0; transform: translateY(-50%); color: color-mix(in srgb, var(--c-sand) 36%, transparent); font-family: var(--font-display); font-size: clamp(12rem, 32vw, 34rem); line-height: .7; z-index: -1; }
    h1 { max-width: 12ch; }
    .not-found > p:not(.error-code):not(.eyebrow) { max-width: 48ch; color: var(--c-olive); }
    @media (max-width: 640px) { .not-found { min-height: 65vh; } .error-code { top: 22%; } }
  `],
})
export class NotFoundComponent implements OnInit {
  protected readonly t = inject(TranslationService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    const routeLocale = this.route.snapshot.data['locale'] as Locale | undefined;
    const urlLocale = this.router.url.split('?')[0].split('/').filter(Boolean)[0];
    const supported: Locale[] = ['de', 'en', 'ru', 'es', 'sr'];
    const locale: Locale = routeLocale
      ?? (supported.includes(urlLocale as Locale) ? (urlLocale as Locale) : 'en');
    this.t.setLocale(locale);
    this.seo.setPage({
      locale,
      path: '404',
      title: this.t.inline('Seite nicht gefunden | MonteMare & Lumina', 'Page not found | MonteMare & Lumina', 'Страница не найдена | MonteMare & Lumina', 'Página no encontrada | MonteMare & Lumina'),
      description: this.t.inline('Die angeforderte Seite wurde nicht gefunden.', 'The requested page could not be found.', 'Запрошенная страница не найдена.', 'No se ha encontrado la página solicitada.'),
      noindex: true,
    });
  }

  protected locale(): Locale { return this.t.locale(); }
}
