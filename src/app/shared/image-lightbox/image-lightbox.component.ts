import { Component, HostListener, Input, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-image-lightbox',
  standalone: true,
  template: `
    @if (activeIndex() !== null) {
      <div class="backdrop" role="dialog" aria-modal="true" [attr.aria-label]="label"
           (click)="close()">
        <div class="lightbox" (click)="$event.stopPropagation()">
          <button class="control close" type="button" (click)="close()" [attr.aria-label]="t.inline('Schließen', 'Close', 'Закрыть', 'Cerrar')">×</button>
          @if (images.length > 1) {
            <button class="control previous" type="button" (click)="previous()" [attr.aria-label]="t.inline('Vorheriges Bild', 'Previous image', 'Предыдущее изображение', 'Imagen anterior')">‹</button>
          }
          <figure>
            <img [src]="currentImage()" [alt]="currentAlt()" />
            <figcaption>{{ activeIndex()! + 1 }} / {{ images.length }}</figcaption>
          </figure>
          @if (images.length > 1) {
            <button class="control next" type="button" (click)="next()" [attr.aria-label]="t.inline('Nächstes Bild', 'Next image', 'Следующее изображение', 'Imagen siguiente')">›</button>
          }
        </div>
      </div>
    }
  `,
  styles: [`
    .backdrop { position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 1rem; background: rgba(8, 20, 26, 0.94); }
    .lightbox { position: relative; width: min(96vw, 1500px); height: min(92vh, 1000px); display: grid; place-items: center; }
    figure { margin: 0; width: 100%; height: 100%; display: grid; place-items: center; }
    img { display: block; max-width: 100%; max-height: calc(100% - 2rem); width: auto; height: auto; object-fit: contain; border-radius: 0.35rem; }
    figcaption { color: #fff; font-size: 0.9rem; margin-top: 0.5rem; }
    .control { position: absolute; z-index: 2; width: 48px; height: 48px; border: 1px solid rgba(255,255,255,.5); border-radius: 50%; background: rgba(8,20,26,.65); color: #fff; font-size: 2rem; cursor: pointer; display: grid; place-items: center; }
    .control:hover, .control:focus-visible { background: #fff; color: #17323f; outline: none; }
    .close { top: 0; right: 0; }
    .previous { left: 0; top: 50%; transform: translateY(-50%); }
    .next { right: 0; top: 50%; transform: translateY(-50%); }
    @media (max-width: 700px) {
      .backdrop { padding: .5rem; }
      .lightbox { width: 100%; height: calc(100dvh - 1rem); }
      figure { align-content: center; }
      img { max-height: calc(100dvh - 5rem); border-radius: 0; }
      .close { top: .4rem; right: .4rem; }
      .previous { left: .25rem; }
      .next { right: .25rem; }
      .control { width: 44px; height: 44px; background: rgba(8,20,26,.82); }
      figcaption { position: absolute; bottom: .6rem; margin: 0; }
    }
  `],
})
export class ImageLightboxComponent {
  protected readonly t = inject(TranslationService);
  @Input({ required: true }) images: string[] = [];
  @Input() altText: (path: string) => string = () => '';
  @Input() label = 'Image gallery';

  protected readonly activeIndex = signal<number | null>(null);

  open(index: number): void {
    if (!this.images[index]) return;
    this.activeIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.activeIndex.set(null);
    document.body.style.overflow = '';
  }

  previous(): void {
    const index = this.activeIndex();
    if (index === null) return;
    this.activeIndex.set((index - 1 + this.images.length) % this.images.length);
  }

  next(): void {
    const index = this.activeIndex();
    if (index === null) return;
    this.activeIndex.set((index + 1) % this.images.length);
  }

  protected currentImage(): string {
    return this.images[this.activeIndex() ?? 0] ?? '';
  }

  protected currentAlt(): string {
    return this.altText(this.currentImage());
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.activeIndex() === null) return;
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.previous();
    if (event.key === 'ArrowRight') this.next();
  }
}
