import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { GUIDE_ARTICLES, VILLAS } from '../../core/data/content.data';
import { GuideArticle, Locale } from '../../core/models/villa.model';

@Component({
  selector: 'app-guide-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (guide) {
      <nav class="breadcrumbs container" [attr.aria-label]="t.inline('Brotkrümelnavigation', 'Breadcrumb', 'Навигационная цепочка', 'Migas de pan')">
        <a [routerLink]="['/' + locale()]">{{ t.inline('Start', 'Home', 'Главная', 'Inicio') }}</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{{ t.t(guide.title) }}</span>
      </nav>

      <article class="guide container">
        <header>
          <h1>{{ t.t(guide.title) }}</h1>
          <p class="meta">
            {{ t.inline('Aktualisiert am', 'Updated on', 'Обновлено', 'Actualizado el') }} {{ guide.updatedOn }}
            — Villa MonteMare &amp; Villa Lumina
          </p>
        </header>

        <div class="guide-body" [innerHTML]="body()"></div>

        <div class="horizon-divider" aria-hidden="true"></div>

        <aside class="related">
          <h2>{{ t.inline('Passende Villen', 'Matching villas', 'Подходящие виллы', 'Villas recomendadas') }}</h2>
          <ul>
            @for (v of relatedVillas(); track v.slug) {
              <li><a [routerLink]="villaPath(v.slug)">{{ v.name }}</a></li>
            }
          </ul>
          <a class="btn btn-primary" [routerLink]="['/' + locale()]" fragment="verfuegbarkeit">
            {{ t.ui('ctaCheckAvailability') }}
          </a>
        </aside>
      </article>
    }
  `,
  styles: [`
    .breadcrumbs { padding-block: var(--space-2); font-size: 0.85rem; color: var(--c-olive); }
    .breadcrumbs a { color: var(--c-olive); }
    .guide { padding-block: var(--space-3) var(--space-5); max-width: 760px; }
    .meta { color: var(--c-olive); font-size: 0.85rem; }
    .guide-body p { max-width: none; }
    .related ul { padding-left: 1.1rem; margin-bottom: var(--space-3); }
  `],
})
export class GuideDetailComponent implements OnInit {
  protected readonly t = inject(TranslationService);
  private readonly seo = inject(SeoService);
  private readonly structuredData = inject(StructuredDataService);
  private readonly route = inject(ActivatedRoute);

  protected guide: GuideArticle | undefined;

  ngOnInit(): void {
    const locale = (this.route.snapshot.data['locale'] as Locale) ?? 'de';
    this.t.setLocale(locale);
    const slug = this.route.snapshot.paramMap.get('slug');
    this.guide = GUIDE_ARTICLES.find((g) => g.slug === slug);
    if (!this.guide) return;

    const routeBase = locale === 'de' ? 'reisefuehrer' : 'guides';
    this.seo.setPage({
      locale,
      path: `${routeBase}/${this.guide.slug}`,
      alternatePaths: {
        de: `reisefuehrer/${this.guide.slug}`,
        en: `guides/${this.guide.slug}`,
        ru: `guides/${this.guide.slug}`,
        es: `guides/${this.guide.slug}`,
      },
      title: this.t.t(this.guide.seoTitle),
      description: this.t.t(this.guide.metaDescription),
      ogImage: '/assets/media/lumina/lumina-hero-adriatic-sunset.webp',
      ogImageAlt: this.t.inline('Blick über die Adria an der Budva Riviera', 'Adriatic view on the Budva Riviera', 'Вид на Адриатику на Будванской ривьере', 'Vista del Adriático en la Riviera de Budva'),
    });

    this.structuredData.setJsonLd('ld-guide', [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: this.t.t(this.guide.title),
        description: this.t.t(this.guide.metaDescription),
        datePublished: this.guide.publishedOn,
        dateModified: this.guide.updatedOn,
        // PLACEHOLDER: replace with the real operator/author name before go-live
        author: { '@type': 'Organization', name: 'Villa MonteMare & Villa Lumina' },
      },
      this.structuredData.buildBreadcrumbGraph(
        [
          { name: ({ de: 'Start', en: 'Home', ru: 'Главная', es: 'Inicio' } as Record<Locale, string>)[locale], path: '' },
          { name: this.t.t(this.guide.title), path: `${routeBase}/${this.guide.slug}` },
        ],
        locale
      ),
    ]);
  }

  protected locale(): Locale {
    return this.t.locale();
  }

  protected body(): string {
    if (!this.guide) return '';
    return this.t.t(this.guide.bodyHtml);
  }

  protected relatedVillas() {
    return VILLAS.filter((v) => this.guide?.relatedVillaSlugs.includes(v.slug));
  }

  villaPath(slug: string): string[] {
    const locale = this.locale();
    const base = locale === 'de' ? '/de/villen' : `/${locale}/villas`;
    return [base, slug];
  }
}
