import { Component, HostBinding, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { TranslationService } from '../../core/services/translation.service';
import { Locale } from '../../core/models/villa.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="container bar">
        <a class="wordmark" [routerLink]="['/' + locale()]">MonteMare <span>&amp;</span> Lumina</a>

        <button class="nav-toggle" type="button" (click)="mobileOpen.set(!mobileOpen())"
                [attr.aria-expanded]="mobileOpen()" aria-controls="primary-nav">
          <span class="visually-hidden">{{ t.inline('Menü', 'Menu', 'Меню', 'Menú') }}</span>
          <span aria-hidden="true">{{ mobileOpen() ? '✕' : '☰' }}</span>
        </button>

        <nav id="primary-nav" class="primary-nav" [class.open]="mobileOpen()">
          <a [routerLink]="['/' + locale()]" fragment="villen" (click)="navigateToSection($event, 'villen')">{{ t.ui('navVillas') }}</a>
          <a [routerLink]="locationPath()">{{ t.ui('navLocation') }}</a>
          <a [routerLink]="['/' + locale()]" fragment="erlebnisse" (click)="navigateToSection($event, 'erlebnisse')">{{ t.ui('navExperiences') }}</a>
          <a [routerLink]="['/' + locale()]" fragment="galerie" (click)="navigateToSection($event, 'galerie')">{{ t.ui('navGallery') }}</a>
          <a [routerLink]="['/' + locale()]" fragment="kontakt" (click)="navigateToSection($event, 'kontakt')">{{ t.ui('navContact') }}</a>

          <label class="lang-switch">
            <span class="visually-hidden">Sprache / Language / Язык / Idioma</span>
            <select [value]="locale()" (change)="switchLocaleFromSelect($event)"
                    aria-label="Sprache / Language / Язык / Idioma">
              <option value="de">Deutsch</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="es">Español</option>
            </select>
          </label>

          <a class="btn btn-quiet nav-cta" [routerLink]="['/' + locale()]" fragment="verfuegbarkeit" (click)="navigateToSection($event, 'verfuegbarkeit')">
            {{ t.ui('ctaCheckAvailability') }}
          </a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .site-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: linear-gradient(180deg, color-mix(in srgb, var(--c-limestone) 94%, transparent), color-mix(in srgb, var(--c-limestone) 82%, transparent));
      backdrop-filter: blur(18px) saturate(130%);
      -webkit-backdrop-filter: blur(18px) saturate(130%);
      border-bottom: 1px solid color-mix(in srgb, var(--c-sand) 45%, transparent);
      transition: background-color 220ms ease, box-shadow 220ms ease;
    }
    .site-header.scrolled {
      background: linear-gradient(180deg, color-mix(in srgb, var(--c-limestone) 98%, transparent), color-mix(in srgb, var(--c-limestone) 91%, transparent));
      box-shadow: 0 1px 0 var(--c-sand);
      backdrop-filter: blur(6px);
    }
    .bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-block: 0.9rem;
    }
    .wordmark {
      font-family: var(--font-display);
      font-size: clamp(1.1rem, 2vw, 1.35rem);
      color: var(--c-adria);
      text-decoration: none;
      letter-spacing: 0.01em;
    }
    .wordmark span { color: var(--c-terracotta); font-style: italic; }
    .nav-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.4rem;
      color: var(--c-adria);
      min-width: 44px;
      min-height: 44px;
      cursor: pointer;
    }
    .primary-nav {
      display: flex;
      align-items: center;
      gap: clamp(0.85rem, 1.8vw, 1.6rem);
    }
    .primary-nav a {
      color: var(--c-adria);
      font-size: 0.86rem;
      letter-spacing: 0.035em;
      text-decoration: none;
      font-weight: 500;
    }
    .primary-nav a:hover { color: var(--c-terracotta); }
    .lang-switch select {
      min-height: 44px;
      padding: 0.45rem 2rem 0.45rem 0.7rem;
      border: 1px solid var(--c-sand);
      border-radius: var(--radius);
      background: var(--c-limestone);
      color: var(--c-adria);
      font: inherit;
      font-size: 0.85rem;
      cursor: pointer;
    }
    .nav-cta { padding: 0.65rem 1.05rem; background: var(--c-adria); color: var(--c-limestone) !important; border-color: var(--c-adria); }
    .nav-cta:hover { background: var(--c-terracotta); border-color: var(--c-terracotta); }

    @media (max-width: 1180px) {
      .nav-toggle { display: inline-flex; align-items: center; justify-content: center; }
      .primary-nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-2);
        background: var(--c-limestone);
        padding: var(--space-3);
        border-top: 1px solid var(--c-sand);
        display: none;
        max-height: calc(100svh - 70px);
        overflow-y: auto;
        box-shadow: 0 22px 45px rgba(23, 50, 63, .16);
      }
      .primary-nav.open { display: flex; }
      .primary-nav a:not(.nav-cta) { width: 100%; padding-block: .45rem; }
      .lang-switch, .lang-switch select, .nav-cta { width: 100%; }
      .nav-cta { justify-content: center; }
    }
    @media (max-width: 420px) {
      .bar { padding-block: .75rem; }
      .wordmark { font-size: 1.04rem; }
    }
  `],
})
export class HeaderComponent {
  protected readonly t = inject(TranslationService);
  private readonly router = inject(Router);

  protected readonly locale = this.t.locale;
  protected readonly mobileOpen = signal(false);
  protected readonly scrolled = signal(false);

  constructor() {
    this.updateLocaleFromUrl(this.router.url);
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((e) => {
      this.updateLocaleFromUrl(e.urlAfterRedirects);
      this.mobileOpen.set(false);
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set((typeof window !== 'undefined' ? window.scrollY : 0) > 8);
  }

  private updateLocaleFromUrl(url: string): void {
    const segment = url.split('/').filter(Boolean)[0];
    if (segment === 'de' || segment === 'en' || segment === 'ru' || segment === 'es') {
      this.t.setLocale(segment);
    }
  }

  switchLocale(locale: Locale): void {
    const target = this.t.localizedPath(locale, this.router.url);
    this.router.navigateByUrl(target);
  }

  switchLocaleFromSelect(event: Event): void {
    this.switchLocale((event.target as HTMLSelectElement).value as Locale);
  }

  navigateToSection(event: Event, fragment: string): void {
    event.preventDefault();
    this.mobileOpen.set(false);
    void this.router.navigate(['/' + this.locale()], { fragment }).then(() => {
      if (typeof document === 'undefined') return;
      window.requestAnimationFrame(() => {
        const target = document.getElementById(fragment);
        if (!target) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      });
    });
  }

  locationPath(): string[] {
    const locale = this.locale();
    return locale === 'de' ? ['/de/lage-budva-riviera'] : [`/${locale}/location-budva-riviera`];
  }
}
