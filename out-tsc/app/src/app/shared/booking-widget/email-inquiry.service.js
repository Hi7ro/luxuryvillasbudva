import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * PHASE 1 STRATEGY: no custom backend for booking inquiries.
 *
 * Sends the inquiry directly from the browser via EmailJS
 * (https://www.emailjs.com — free tier covers low volume, no server to run
 * or patch). This is a deliberate trade-off for two villas with limited
 * inquiry volume: it removes hosting/ops overhead entirely. Once inquiry
 * volume or the need for a real booking/availability database grows,
 * swap this service's implementation for a call to the Spring Boot
 * `/api/inquiries` endpoint described in the backend concept — nothing
 * else in the app needs to change, since components only depend on
 * `sendInquiry()`.
 *
 * REQUIRED SETUP BEFORE GO-LIVE (see README):
 *   1. Create a free EmailJS account.
 *   2. Create an email service + a template with the fields used below.
 *   3. Replace SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY with real values.
 *   4. Restrict the EmailJS public key to your production domain in the
 *      EmailJS dashboard (prevents abuse from other origins).
 */
const EMAILJS_SERVICE_ID = 'REPLACE-SERVICE-ID';
const EMAILJS_TEMPLATE_ID = 'REPLACE-TEMPLATE-ID';
const EMAILJS_PUBLIC_KEY = 'REPLACE-PUBLIC-KEY';
const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';
export class EmailInquiryService {
    platformId = inject(PLATFORM_ID);
    async sendInquiry(inquiry) {
        if (!isPlatformBrowser(this.platformId)) {
            // SSR pass — never attempt network calls during server rendering
            return;
        }
        const response = await fetch(EMAILJS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id: EMAILJS_SERVICE_ID,
                template_id: EMAILJS_TEMPLATE_ID,
                user_id: EMAILJS_PUBLIC_KEY,
                template_params: {
                    villa: inquiry.villaSlug,
                    check_in: inquiry.checkIn,
                    check_out: inquiry.checkOut,
                    guests: inquiry.guests,
                    first_name: inquiry.firstName,
                    last_name: inquiry.lastName,
                    email: inquiry.email,
                    phone: inquiry.phone ?? '-',
                    message: inquiry.message ?? '-',
                },
            }),
        });
        if (!response.ok) {
            throw new Error(`Inquiry could not be sent (status ${response.status})`);
        }
    }
    static ɵfac = function EmailInquiryService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EmailInquiryService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EmailInquiryService, factory: EmailInquiryService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailInquiryService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=email-inquiry.service.js.map