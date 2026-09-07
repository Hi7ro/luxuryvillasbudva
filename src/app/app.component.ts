import { Component, DestroyRef, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  private readonly destroyRef = inject(DestroyRef);
  private resetHomepageAfterReload = false;
  private initialNavigationHandled = false;

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.resetHomepageAfterReload = (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)?.type === 'reload';
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        this.handleNavigation(event.urlAfterRedirects);
      });

    // Hydration can finish after the first router event. This fallback handles
    // both an initial fragment and a browser-restored scroll position.
    window.setTimeout(() => this.handleNavigation(this.router.url), 250);
  }

  private handleNavigation(url: string): void {
    const urlTree = this.router.parseUrl(url);
    if (!this.initialNavigationHandled) {
      this.initialNavigationHandled = true;
      if (this.resetHomepageAfterReload && this.isHomepage(urlTree)) {
        const locale = urlTree.root.children['primary']?.segments[0]?.path ?? 'en';
        if (urlTree.fragment) {
          void this.router.navigateByUrl(`/${locale}`, { replaceUrl: true }).then(() => this.scrollToTop());
        } else {
          this.scrollToTop();
        }
        return;
      }
    }

    this.scrollToFragment(urlTree.fragment);
  }

  private isHomepage(urlTree: ReturnType<Router['parseUrl']>): boolean {
    const segments = urlTree.root.children['primary']?.segments.map((segment) => segment.path) ?? [];
    return segments.length === 1 && ['de', 'en', 'ru', 'es', 'sr'].includes(segments[0]);
  }

  private scrollToTop(): void {
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })));
  }

  private scrollToFragment(fragment: string | null): void {
    if (!fragment) return;
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      const target = document.getElementById(fragment);
      if (!target) return;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }));
  }
}
