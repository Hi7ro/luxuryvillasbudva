import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { VillaSlug } from '../models/villa.model';

export interface AvailabilityResponse {
  villa: VillaSlug;
  blockedDates: string[];
  lastUpdated: string;
  sourceCount: number;
  configuredSourceCount: number;
  complete: boolean;
}

@Injectable({ providedIn: 'root' })
export class AvailabilityService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cache = new Map<VillaSlug, Promise<AvailabilityResponse>>();

  getAvailability(villa: VillaSlug, refresh = false): Promise<AvailabilityResponse> {
    // Angular's development server does not execute the custom Express API from
    // server.ts. Avoid sending /api back through SSR, where it would recursively
    // try to render itself. The real iCal endpoint is used by the production server.
    const isLocalAngularDevServer = isPlatformBrowser(this.platformId)
      && (globalThis.location?.hostname === 'localhost' || globalThis.location?.hostname === '127.0.0.1')
      && globalThis.location?.port === '4200';
    if (!isPlatformBrowser(this.platformId) || isLocalAngularDevServer) {
      return Promise.resolve({
        villa,
        blockedDates: [],
        lastUpdated: new Date().toISOString(),
        sourceCount: 0,
        configuredSourceCount: 0,
        complete: false,
      });
    }

    if (refresh || !this.cache.has(villa)) {
      const request = firstValueFrom(
        this.http.get<AvailabilityResponse>('/api/availability', { params: { villa } })
      ).catch((error) => {
        this.cache.delete(villa);
        throw error;
      });
      this.cache.set(villa, request);
    }
    return this.cache.get(villa)!;
  }
}
