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
          <p class="eyebrow">{{ t.t(guide.category) }}</p>
          <h1>{{ t.t(guide.title) }}</h1>
          <p class="meta">
            {{ t.inline('Aktualisiert am', 'Updated on', 'Обновлено', 'Actualizado el') }} {{ guide.updatedOn }}
            — Villa MonteMare &amp; Villa Lumina
          </p>
        </header>

        <figure class="guide-image guide-image-hero">
          <img [src]="guide.image.src" [srcset]="responsiveSrcSet(guide.image.src)" sizes="(max-width: 820px) 100vw, 760px"
               [alt]="t.t(guide.image.alt)" width="1440" height="960" />
          <figcaption>
            {{ t.inline('Foto', 'Photo', 'Фото', 'Foto', 'Fotografija') }}:
            <a [href]="guide.image.credit.sourceUrl" target="_blank" rel="noopener">{{ guide.image.credit.author }}</a>
            · <a [href]="guide.image.credit.licenseUrl" target="_blank" rel="noopener">{{ guide.image.credit.license }}</a>
            @if (guide.image.credit.modified) { · {{ t.inline('weboptimierte Version', 'web-optimised version', 'версия оптимизирована для сайта', 'versión optimizada para web', 'verzija optimizovana za veb') }} }
          </figcaption>
        </figure>

        <div class="guide-body" [innerHTML]="body()"></div>

        @if (guide.secondaryImage; as secondaryImage) {
          <figure class="guide-image guide-image-secondary">
            <img [src]="secondaryImage.src" [srcset]="responsiveSrcSet(secondaryImage.src)" sizes="(max-width: 820px) 100vw, 760px"
                 [alt]="t.t(secondaryImage.alt)" width="1440" height="960" loading="lazy" />
            <figcaption>
              {{ t.inline('Foto', 'Photo', 'Фото', 'Foto', 'Fotografija') }}:
              <a [href]="secondaryImage.credit.sourceUrl" target="_blank" rel="noopener">{{ secondaryImage.credit.author }}</a>
              · <a [href]="secondaryImage.credit.licenseUrl" target="_blank" rel="noopener">{{ secondaryImage.credit.license }}</a>
              @if (secondaryImage.credit.modified) { · {{ t.inline('weboptimierte Version', 'web-optimised version', 'версия оптимизирована для сайта', 'versión optimizada para web', 'verzija optimizovana za veb') }} }
            </figcaption>
          </figure>
        }

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
    .guide { padding-block: var(--space-3) var(--space-5); max-width: 860px; }
    .guide header { max-width: 760px; margin-inline: auto; }
    .meta { color: var(--c-olive); font-size: 0.85rem; }
    .guide-image { margin: var(--space-3) 0; }
    .guide-image img { display: block; width: 100%; aspect-ratio: 3 / 2; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-soft); }
    .guide-image-hero img { aspect-ratio: 16 / 9; }
    .guide-image figcaption { margin-top: .65rem; color: var(--c-olive); font-size: .68rem; letter-spacing: .03em; }
    .guide-image figcaption a { color: inherit; text-underline-offset: 3px; }
    .guide-body { max-width: 760px; margin-inline: auto; }
    .guide-body p { max-width: none; font-size: 1.04rem; line-height: 1.8; }
    .guide-image-secondary { max-width: 760px; margin-inline: auto; }
    .related ul { padding-left: 1.1rem; margin-bottom: var(--space-3); }
    @media (max-width: 640px) {
      .guide-image { margin-inline: -1rem; }
      .guide-image img { border-radius: 0; }
      .guide-image figcaption { padding-inline: 1rem; }
    }
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
        sr: `guides/${this.guide.slug}`,
      },
      title: this.t.t(this.guide.seoTitle),
      description: this.t.t(this.guide.metaDescription),
      ogImage: this.guide.image.src,
      ogImageAlt: this.t.t(this.guide.image.alt),
    });

    this.structuredData.setJsonLd('ld-guide', [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: this.t.t(this.guide.title),
        description: this.t.t(this.guide.metaDescription),
        image: this.guide.image.src,
        datePublished: this.guide.publishedOn,
        dateModified: this.guide.updatedOn,
        // PLACEHOLDER: replace with the real operator/author name before go-live
        author: { '@type': 'Organization', name: 'Villa MonteMare & Villa Lumina' },
      },
      this.structuredData.buildBreadcrumbGraph(
        [
          { name: ({ de: 'Start', en: 'Home', ru: 'Главная', es: 'Inicio', sr: 'Početna' } as Record<Locale, string>)[locale], path: '' },
          { name: this.t.t(this.guide.title), path: `${routeBase}/${this.guide.slug}` },
        ],
        locale
      ),
    ]);
  }

  protected locale(): Locale {
    return this.t.locale();
  }

  protected responsiveSrcSet(path: string): string {
    return `${path.replace(/\.webp$/, '-720.webp')} 720w, ${path} 1440w`;
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
