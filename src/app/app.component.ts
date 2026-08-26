import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslationService } from './core/services/translation.service';

@Component({
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
})
export class AppComponent {
  protected readonly t = inject(TranslationService);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const fragment = this.router.parseUrl(event.urlAfterRedirects).fragment;
        if (!fragment) return;

        // Wait until the routed component and its images/sections are present.
        window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
          const target = document.getElementById(fragment);
          if (!target) return;
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        }));
      });
  }
}
