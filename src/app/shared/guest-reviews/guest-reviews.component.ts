import { Component, signal, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { Locale, LocalizedText } from '../../core/models/villa.model';
import { REVIEW_TRANSLATIONS } from '../../core/data/review-translations.data';

interface GuestReview {
  id: string;
  name: string;
  location?: string;
  image?: string;
  rating: number;
  date: LocalizedText;
  text: string;
  originalLanguage?: Locale;
}

@Component({
  selector: 'app-guest-reviews',
  standalone: true,
  template: `
    <section class="reviews-section" id="bewertungen" aria-labelledby="reviews-title">
      <header class="reviews-heading">
        <div>
          <p class="eyebrow">{{ t.inline('Echte Erfahrungen', 'Real experiences', 'Реальные впечатления', 'Experiencias reales') }}</p>
          <h2 id="reviews-title">{{ t.inline('Was Gäste über ihren Aufenthalt sagen', 'What guests say about their stay', 'Что гости говорят о своём отдыхе', 'Lo que cuentan nuestros huéspedes') }}</h2>
        </div>
        <div class="reviews-summary" [attr.aria-label]="t.inline('Vier aktuelle Gästebewertungen zur Villa', 'Four recent villa guest reviews', 'Четыре недавних отзыва гостей о вилле', 'Cuatro reseñas recientes de la villa', 'Četiri nedavne recenzije gostiju vile')">
          <strong>{{ t.inline('4,5', '4.5', '4,5', '4,5', '4,5') }}</strong>
          <span class="summary-stars" aria-hidden="true">★★★★★</span>
          <small>{{ t.inline('aus 4 aktuellen Villenaufenthalten', 'from 4 recent villa stays', 'по 4 недавним проживаниям на вилле', 'de 4 estancias recientes en la villa', 'iz 4 nedavna boravka u vili') }}</small>
        </div>
      </header>

      <div class="review-grid">
        @for (review of villaReviews; track review.id) {
          <article class="review-card" [class.review-balanced]="review.rating < 4">
            <div class="review-topline">
              <div class="reviewer">
                @if (review.image) {
                  <img class="avatar" [src]="review.image" alt="" width="41" height="41" />
                } @else {
                  <span class="avatar" aria-hidden="true">{{ initials(review.name) }}</span>
                }
                <span><strong>{{ review.name }}</strong>@if (review.location) { <small>{{ review.location }}</small> }</span>
              </div>
              <time>{{ t.t(review.date) }}</time>
            </div>
            <div class="rating" [attr.aria-label]="ratingLabel(review.rating)">
              @for (star of stars; track star) { <span [class.muted]="star > review.rating" aria-hidden="true">★</span> }
            </div>
            <p class="review-text" [attr.lang]="reviewLanguage(review)" [class.expanded]="isExpanded(review.id)">{{ reviewText(review) }}</p>
            <div class="review-actions">
              @if (reviewText(review).length > 360) {
                <button class="expand-review" type="button" (click)="toggleReview(review.id)" [attr.aria-expanded]="isExpanded(review.id)">
                  {{ isExpanded(review.id) ? t.inline('Weniger anzeigen', 'Show less', 'Свернуть', 'Mostrar menos') : t.inline('Vollständige Bewertung lesen', 'Read full review', 'Читать отзыв полностью', 'Leer la reseña completa') }}
                </button>
              }
              @if (canTranslate(review)) {
                <button class="translate-review" type="button" (click)="toggleTranslation(review.id)" [attr.aria-pressed]="isTranslated(review.id)">
                  {{ isTranslated(review.id)
                    ? t.inline('Original anzeigen', 'Show original', 'Показать оригинал', 'Mostrar original', 'Prikaži original')
                    : translateActionLabel() }}
                </button>
              }
            </div>
          </article>
        }
      </div>

      <details class="host-history">
        <summary>
          <span>
            <small>{{ t.inline('Persönliche Betreuung', 'Personal hosting', 'Личное гостеприимство', 'Atención personal') }}</small>
            <strong>{{ t.inline('Weitere Erfahrungen mit Gastgeber Michael', 'More experiences with host Michael', 'Другие отзывы о хозяине Михаэле', 'Más experiencias con el anfitrión Michael') }}</strong>
          </span>
          <span class="summary-action">{{ t.inline('4 Bewertungen anzeigen', 'Show 4 reviews', 'Показать 4 отзыва', 'Mostrar 4 reseñas') }} <b aria-hidden="true">＋</b></span>
        </summary>
        <p class="host-disclosure">{{ t.inline(
          'Diese Bewertungen stammen aus früheren Aufenthalten in anderen von Michael betreuten Unterkünften. Sie werden getrennt aufgeführt, damit Erfahrungen mit dem Gastgeber nicht mit Bewertungen der Villen in Montenegro verwechselt werden.',
          'These reviews are from earlier stays at other properties hosted by Michael. They are shown separately so that experiences with the host are not confused with reviews of the villas in Montenegro.',
          'Эти отзывы относятся к более ранним проживаниям в других объектах под управлением Михаэла. Они показаны отдельно, чтобы отзывы о хозяине не путались с отзывами о виллах в Черногории.',
          'Estas reseñas corresponden a estancias anteriores en otros alojamientos gestionados por Michael. Se muestran por separado para no confundir la experiencia con el anfitrión con las reseñas de las villas de Montenegro.') }}</p>
        <div class="host-review-grid">
          @for (review of hostReviews; track review.id) {
            <article class="host-review-card">
              <div class="review-topline">
                <div class="reviewer">
                  @if (review.image) {
                    <img class="avatar" [src]="review.image" alt="" width="41" height="41" />
                  } @else {
                    <span class="avatar" aria-hidden="true">{{ initials(review.name) }}</span>
                  }
                  <span><strong>{{ review.name }}</strong>@if (review.location) { <small>{{ review.location }}</small> }</span>
                </div>
                <time>{{ t.t(review.date) }}</time>
              </div>
              <div class="rating" [attr.aria-label]="ratingLabel(review.rating)">
                @for (star of stars; track star) { <span aria-hidden="true">★</span> }
              </div>
              <p class="review-text" [attr.lang]="reviewLanguage(review)" [class.expanded]="isExpanded(review.id)">{{ reviewText(review) }}</p>
              <div class="review-actions">
                @if (reviewText(review).length > 360) {
                  <button class="expand-review" type="button" (click)="toggleReview(review.id)" [attr.aria-expanded]="isExpanded(review.id)">
                    {{ isExpanded(review.id) ? t.inline('Weniger anzeigen', 'Show less', 'Свернуть', 'Mostrar menos') : t.inline('Vollständige Bewertung lesen', 'Read full review', 'Читать отзыв полностью', 'Leer la reseña completa') }}
                  </button>
                }
                @if (canTranslate(review)) {
                  <button class="translate-review" type="button" (click)="toggleTranslation(review.id)" [attr.aria-pressed]="isTranslated(review.id)">
                    {{ isTranslated(review.id)
                      ? t.inline('Original anzeigen', 'Show original', 'Показать оригинал', 'Mostrar original', 'Prikaži original')
                      : translateActionLabel() }}
                  </button>
                }
              </div>
            </article>
          }
        </div>
      </details>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .reviews-section { scroll-margin-top: 8rem; }
    .reviews-heading { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: clamp(2rem, 6vw, 6rem); align-items: end; margin-bottom: clamp(2.5rem, 5vw, 4.5rem); }
    .reviews-heading h2 { max-width: 14ch; margin-bottom: 0; }
    .reviews-summary { min-width: 205px; padding: 1.2rem 1.4rem; border-left: 1px solid var(--c-sand); }
    .reviews-summary strong { display: block; color: var(--c-adria); font-family: var(--font-display); font-size: 2.6rem; font-weight: 400; line-height: 1; }
    .summary-stars { display: block; margin: .45rem 0; color: var(--c-terracotta); letter-spacing: .12em; }
    .reviews-summary small { display: block; max-width: 19ch; color: var(--c-olive); line-height: 1.45; }
    .review-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1rem, 2.2vw, 1.75rem); }
    .review-card, .host-review-card { position: relative; min-width: 0; padding: clamp(1.35rem, 2.7vw, 2rem); border: 1px solid color-mix(in srgb, var(--c-sand) 76%, transparent); border-radius: var(--radius-lg); background: var(--c-ivory); box-shadow: var(--shadow-soft); }
    .review-card::before { content: '“'; position: absolute; top: .75rem; right: 1.2rem; color: color-mix(in srgb, var(--c-champagne) 55%, transparent); font-family: var(--font-display); font-size: 4.5rem; line-height: 1; pointer-events: none; }
    .review-balanced { background: color-mix(in srgb, var(--c-limestone) 80%, white); }
    .review-topline { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; padding-right: 2rem; }
    .reviewer { display: flex; align-items: center; gap: .75rem; min-width: 0; }
    .reviewer > span:last-child { min-width: 0; }
    .reviewer strong, .reviewer small { display: block; }
    .reviewer strong { overflow: hidden; color: var(--c-adria); text-overflow: ellipsis; white-space: nowrap; }
    .reviewer small, time { color: var(--c-olive); font-size: .73rem; }
    time { flex: 0 0 auto; padding-top: .2rem; text-align: right; }
    .avatar { display: grid; place-items: center; flex: 0 0 2.55rem; width: 2.55rem; height: 2.55rem; border-radius: 50%; background: var(--c-adria); color: var(--c-limestone); font-family: var(--font-display); object-fit: cover; }
    .rating { margin: 1.35rem 0 1rem; color: var(--c-terracotta); font-size: .85rem; letter-spacing: .12em; }
    .rating .muted { color: color-mix(in srgb, var(--c-sand) 60%, white); }
    .review-text { display: -webkit-box; overflow: hidden; margin: 0; color: color-mix(in srgb, var(--c-anthracite) 84%, transparent); line-height: 1.72; -webkit-box-orient: vertical; -webkit-line-clamp: 7; }
    .review-text.expanded { display: block; overflow: visible; }
    .review-actions { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem 1.2rem; margin-top: 1rem; }
    .expand-review, .translate-review { padding: 0 0 .18rem; border: 0; border-bottom: 1px solid var(--c-champagne); background: transparent; color: var(--c-adria); font: inherit; font-size: .78rem; font-weight: 600; cursor: pointer; }
    .translate-review { border-bottom-color: color-mix(in srgb, var(--c-adria) 45%, transparent); color: var(--c-olive); }
    .expand-review:hover, .translate-review:hover { color: var(--c-terracotta); }
    .host-history { margin-top: clamp(2rem, 5vw, 4rem); border-block: 1px solid var(--c-sand); }
    .host-history summary { display: flex; align-items: center; justify-content: space-between; gap: 2rem; padding: 1.6rem 0; color: var(--c-adria); cursor: pointer; list-style: none; }
    .host-history summary::-webkit-details-marker { display: none; }
    .host-history summary small, .host-history summary strong { display: block; }
    .host-history summary small { margin-bottom: .25rem; color: var(--c-olive); font-size: .68rem; letter-spacing: .11em; text-transform: uppercase; }
    .host-history summary strong { font-family: var(--font-display); font-size: clamp(1.3rem, 2.4vw, 2rem); font-weight: 400; }
    .summary-action { display: flex; align-items: center; gap: .65rem; flex: 0 0 auto; font-size: .78rem; }
    .summary-action b { display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border: 1px solid var(--c-sand); border-radius: 50%; font-size: 1rem; transition: transform 250ms ease; }
    .host-history[open] .summary-action b { transform: rotate(45deg); }
    .host-disclosure { max-width: 80ch; margin: 0 0 2rem; padding: 1rem 1.2rem; border-left: 2px solid var(--c-champagne); background: color-mix(in srgb, var(--c-sand) 20%, transparent); color: var(--c-olive); font-size: .83rem; line-height: 1.6; }
    .host-review-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; padding-bottom: 2rem; }
    .host-review-card { border-radius: 10px; box-shadow: none; }
    @media (max-width: 900px) {
      .review-grid { grid-template-columns: 1fr; }
      .review-text { -webkit-line-clamp: 5; }
    }
    @media (max-width: 640px) {
      .reviews-heading { grid-template-columns: 1fr; align-items: start; }
      .reviews-summary { padding: 1rem 0 0; border-top: 1px solid var(--c-sand); border-left: 0; }
      .host-history summary { align-items: flex-start; }
      .summary-action { font-size: 0; }
      .review-topline { display: block; }
      .review-topline time { display: block; margin: .65rem 0 0 3.3rem; text-align: left; }

      /* Phones: reviews become one horizontal, snap-scrolling row. */
      .review-grid, .host-review-grid {
        display: flex;
        gap: .85rem;
        margin: -1rem -1.1rem;
        padding: 1rem 1.1rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-padding-left: 1.1rem;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
        overscroll-behavior-x: contain;
      }
      .review-grid::-webkit-scrollbar,
      .host-review-grid::-webkit-scrollbar { display: none; }
      .review-card, .host-review-card {
        flex: 0 0 min(82vw, 300px);
        scroll-snap-align: start;
      }
      .host-review-grid { padding-bottom: 3rem; }
    }
  `],
})
export class GuestReviewsComponent {
  protected readonly t = inject(TranslationService);
  protected readonly stars = [1, 2, 3, 4, 5];
  private readonly expandedReviews = signal<ReadonlySet<string>>(new Set());
  private readonly translatedReviews = signal<ReadonlySet<string>>(new Set());

  protected readonly villaReviews: GuestReview[] = [
     {
      id: 'marc-2026', name: 'Marc Ulrich', location: 'Bergkamen, Germany', image: '/assets/media/people/marc-ulrich.jpg', rating: 5,
      date: { de: 'Juli 2026', en: 'July 2026', ru: 'Июль 2026', es: 'Julio de 2026' },
      text: 'We felt like at home from the first moment. The reception was incredibly warm, and communication with the hosts was always quick, friendly and absolutely straightforward. The house is exactly as described in the pictures, if not even more beautiful. The villa is equipped with state-of-the-art furnishings, is furnished to a high standard and leaves nothing to be desired. The view of the sea with the mountains in the background is simply fantastic and makes this place very special. The pool and the entire complex are also excellently maintained and invite you to relax. For us, this place had a very special energy. You arrive and immediately feel peace, freedom and relaxation. We not only fell in love with Montenegro, but also with this beautiful house. It was definitely one of the nicest vacation homes we\'ve stayed in so far. We will be happy to come back and can fully recommend the villa.',
    },
      {
      id: 'addy-2026', name: 'Addy W.', location: 'Austria', image: '/assets/media/people/addy.jpeg', rating: 5,
      date: { de: 'Juni 2026', en: 'June 2026', ru: 'Июнь 2026', es: 'Junio de 2026', sr: 'Jun 2026.' },
      originalLanguage: 'de',
      text: 'Durch Bekannte bin ich auf diese Villa aufmerksam geworden – der Aufenthalt hat meine Erwartungen mehr als übertroffen. Die Kommunikation mit Michael war von Anfang an unkompliziert, freundlich und schnell. Da ich ortsunabhängig arbeite, habe ich direkt zwei Wochen gebucht. Vor Ort war alles noch schöner als auf den Fotos: mit viel Liebe zum Detail gestaltet, außerordentlich sauber und hochwertig ausgestattet, stilvoll und zugleich gemütlich – ideal zum Abschalten wie zum konzentrierten Arbeiten. Besonders angenehm fand ich die Ruhe und die Privatsphäre. Ich kann die Villa uneingeschränkt weiterempfehlen und freue mich schon auf den nächsten Aufenthalt. Vielen Dank an Michael für die großartige Betreuung!',
    },
    {
      id: 'arnon-2026', name: 'Arnon', location: 'Israel', image: '/assets/media/people/arnon.jpeg', rating: 5,
      date: { de: 'August 2026', en: 'August 2026', ru: 'Август 2026', es: 'Agosto de 2026' },
      text: 'New villa in a neighborhood with likewise assets - next level houses were under construction (although no noise while we stayed) and kind of blocking the view down, still upper floors have a window to the ocean. Was not an issue to us. Very clean, spacious and well equipped. Nicely and modern decorated, with quality furnitures. A real 3 bedroom place, each with private bath+toilet - comfort beds. Nice small pool, chairs at every porch for our convenience. Really nice, private and easy to handle house, newly constructed so it feels extremely clean modern and inviting.',
    },
    {
      id: 'rali-2026', name: 'Rali', location: 'Sofia, Bulgaria', image: '/assets/media/people/rali.jpg', rating: 3,
      date: { de: 'August 2026', en: 'August 2026', ru: 'Август 2026', es: 'Agosto de 2026' },
      text: "The house is new, lovely, very clean, and equipped with everything necessary. The location is good. What we didn't like was that there is construction of new houses in front, blocking the view, but the main issue for us was the temperature inside. It was terribly hot; when we arrived, the air conditioners were only just being turned on and set up. It was awful, after a full day of traveling, to arrive at a villa that hadn't been pre-cooled—the indoor temperature was 40 degrees. We also had trouble with the AC settings, and by the time someone came to adjust them, we had spent three sleepless nights due to the heat. Overall, the house just wasn't cool enough.",
    }
  ];

  protected readonly hostReviews: GuestReview[] = [
    {
      id: 'adam-2024', name: 'Adam', location: 'Bydgoszcz, Poland', image: '/assets/media/people/adam.jpg', rating: 5,
      date: { de: 'August 2024', en: 'August 2024', ru: 'Август 2024', es: 'Agosto de 2024' },
      text: 'I had an amazing stay at this property! The house was spotless and very well-maintained, making it feel like a true home away from home. The host was incredibly communicative and responded instantly to any questions or requests, which made the experience even smoother. The neighborhood was also fantastic—safe, quiet, and close to everything I needed. Highly recommend staying here!',
    },
    {
      id: 'agroindustria-2023', name: 'Agroindustria Frutos De Oro', rating: 5,
      date: { de: 'Oktober 2023', en: 'October 2023', ru: 'Октябрь 2023', es: 'Octubre de 2023' },
      text: 'Very welcoming environment, I would definitely come back another time.',
    },
    {
      id: 'fatma-2023', name: 'Fatma', location: 'Istanbul, Turkey', image: '/assets/media/people/fatma.jpg', rating: 5,
      date: { de: 'Juli 2023', en: 'July 2023', ru: 'Июль 2023', es: 'Julio de 2023' },
      text: 'The 30 days we stayed in Cologne-Junkersdorf were very nice. The house we stayed in was very suitable for our needs and comfortable in terms of location and size. We were the first to use the house after a major renovation. All the items, furniture, towels, etc. were new. Over time, we had to give feedback to Michael on minor issues, but none of them affected us negatively. These were entirely aimed at further improving the quality of the stay. We were able to reach Michael easily in case of any problems. Thank you, Michael and your wife. It was a house that will always remain in our memories as a beautiful memory. I hope we will have the opportunity to come in the coming years☺️🙏',
    },
    {
      id: 'iurii-2022', name: 'Iurii', location: 'Ukraine', image: '/assets/media/people/iurii.jpg', rating: 5,
      date: { de: 'April 2022', en: 'April 2022', ru: 'Апрель 2022', es: 'Abril de 2022' },
      text: 'Michael is super host. Very nice apartment with good location. Apartment is very clean and comfortable, very calm place with nice terrace and own garage. In the same time it is very close to city center and there are many different shops and cafe, restaurants around. Comfortable place for long stay as well as short trip.',
    },
  ];

  protected initials(name: string): string {
    return name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
  }

  protected ratingLabel(rating: number): string {
    return this.t.inline(`${rating} von 5 Sternen`, `${rating} out of 5 stars`, `${rating} из 5 звёзд`, `${rating} de 5 estrellas`, `${rating} od 5 zvezdica`);
  }

  protected isExpanded(id: string): boolean { return this.expandedReviews().has(id); }

  protected toggleReview(id: string): void {
    const next = new Set(this.expandedReviews());
    next.has(id) ? next.delete(id) : next.add(id);
    this.expandedReviews.set(next);
  }

  protected isTranslated(id: string): boolean {
    return this.translatedReviews().has(id);
  }

  protected canTranslate(review: GuestReview): boolean {
    return this.t.locale() !== (review.originalLanguage ?? 'en');
  }

  protected toggleTranslation(id: string): void {
    const next = new Set(this.translatedReviews());
    next.has(id) ? next.delete(id) : next.add(id);
    this.translatedReviews.set(next);
  }

  protected reviewText(review: GuestReview): string {
    if (!this.isTranslated(review.id)) return review.text;
    return REVIEW_TRANSLATIONS[this.t.locale()]?.[review.id] ?? review.text;
  }

  protected reviewLanguage(review: GuestReview): Locale {
    return this.isTranslated(review.id) ? this.t.locale() : (review.originalLanguage ?? 'en');
  }

  protected translateActionLabel(): string {
    return this.t.inline(
      'Auf Deutsch übersetzen',
      'Translate to English',
      'Перевести на русский',
      'Traducir al español',
      'Prevedi na srpski',
    );
  }
}
