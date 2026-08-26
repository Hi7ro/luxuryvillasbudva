import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import * as i0 from "@angular/core";
export class AvailabilityService {
    http = inject(HttpClient);
    platformId = inject(PLATFORM_ID);
    cache = new Map();
    getAvailability(villa, refresh = false) {
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
            const request = firstValueFrom(this.http.get('/api/availability', { params: { villa } })).catch((error) => {
                this.cache.delete(villa);
                throw error;
            });
            this.cache.set(villa, request);
        }
        return this.cache.get(villa);
    }
    static ɵfac = function AvailabilityService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AvailabilityService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AvailabilityService, factory: AvailabilityService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AvailabilityService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=availability.service.js.map