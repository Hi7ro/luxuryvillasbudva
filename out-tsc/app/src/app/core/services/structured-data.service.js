import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
/** Same placeholder-domain caveat as seo.service.ts */
const SITE_ORIGIN = 'https://www.REPLACE-WITH-DOMAIN.example';
export class StructuredDataService {
    document = inject(DOCUMENT);
    /**
     * Renders one or more JSON-LD <script> blocks into <head>.
     * Deliberately omits price, rating and review fields until real,
     * current data exists — see requirement: never fabricate structured data.
     */
    setJsonLd(id, graphs) {
        this.removeJsonLd(id);
        const script = this.document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        script.text = JSON.stringify(graphs.length === 1 ? graphs[0] : graphs);
        this.document.head.appendChild(script);
    }
    removeJsonLd(id) {
        this.document.getElementById(id)?.remove();
    }
    buildVillaGraph(villa, locale) {
        const routeBase = locale === 'de' ? 'villen' : 'villas';
        const url = `${SITE_ORIGIN}/${locale}/${routeBase}/${villa.slug}`;
        return {
            '@context': 'https://schema.org',
            '@type': 'VacationRental',
            name: villa.name,
            description: villa.metaDescription[locale] ?? villa.metaDescription.en,
            url,
            numberOfRooms: villa.bedrooms,
            occupancy: { '@type': 'QuantitativeValue', maxValue: villa.guests },
            amenityFeature: villa.amenities.map((a) => ({
                '@type': 'LocationFeatureSpecification',
                name: a[locale] ?? a.en,
                value: true,
            })),
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Smokov vijenac',
                postalCode: '85315',
                addressLocality: 'Drobnići',
                addressRegion: 'Budva',
                addressCountry: 'ME',
            },
            checkinTime: '16:00',
            checkoutTime: '11:00',
            // NOTE: no `image`, `geo`, `priceRange` or `aggregateRating` — add only
            // once real licensed images, an approved geo-publication decision and
            // verified current pricing exist.
        };
    }
    buildFaqGraph(items, locale) {
        return {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((item) => ({
                '@type': 'Question',
                name: item.question[locale] ?? item.question.en,
                acceptedAnswer: { '@type': 'Answer', text: item.answer[locale] ?? item.answer.en },
            })),
        };
    }
    buildBreadcrumbGraph(crumbs, locale) {
        return {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs.map((crumb, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: crumb.name,
                item: `${SITE_ORIGIN}/${locale}/${crumb.path}`.replace(/\/$/, ''),
            })),
        };
    }
    static ɵfac = function StructuredDataService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StructuredDataService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructuredDataService, factory: StructuredDataService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructuredDataService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=structured-data.service.js.map