import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ConversionEvent =
  | 'booking_dates_selected'
  | 'booking_inquiry_opened'
  | 'booking_inquiry_submitted'
  | 'booking_whatsapp_clicked';

/**
 * Privacy-neutral tracking bridge. It sends no data by itself. A future
 * consent-aware analytics integration can listen for `villa:conversion` or
 * consume the same events from dataLayer without changing the booking UI.
 */
@Injectable({ providedIn: 'root' })
export class ConversionTrackingService {
  private readonly platformId = inject(PLATFORM_ID);

  track(event: ConversionEvent, details: Record<string, string | number> = {}): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const payload = { event, ...details };
    window.dispatchEvent(new CustomEvent('villa:conversion', { detail: payload }));
    const target = globalThis as typeof globalThis & { dataLayer?: Array<Record<string, unknown>> };
    target.dataLayer?.push(payload);
  }
}
