import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import * as i0 from "@angular/core";
/**
 * IMPORTANT: replace with the real production domain before go-live.
 * Placeholder chosen deliberately so it cannot be mistaken for a live URL.
 */
const SITE_ORIGIN = 'https://www.REPLACE-WITH-DOMAIN.example';
export class SeoService {
    titleService = inject(Title);
    metaService = inject(Meta);
    document = inject(DOCUMENT);
    setPage(data) {
        this.titleService.setTitle(data.title);
        this.setTag('description', data.description);
        this.setTag('og:title', data.title, 'property');
        this.setTag('og:description', data.description, 'property');
        this.setTag('og:type', 'website', 'property');
        const ogLocales = { de: 'de_DE', en: 'en_US', ru: 'ru_RU', es: 'es_ES' };
        this.setTag('og:locale', ogLocales[data.locale], 'property');
        if (data.ogImage) {
            this.setTag('og:image', `${SITE_ORIGIN}${data.ogImage}`, 'property');
        }
        this.setTag('twitter:card', 'summary_large_image');
        if (data.noindex) {
            this.setTag('robots', 'noindex, nofollow');
        }
        else {
            this.setTag('robots', 'index, follow');
        }
        const canonicalUrl = `${SITE_ORIGIN}/${data.locale}/${data.path}`.replace(/\/$/, '') || SITE_ORIGIN;
        this.setLink('canonical', canonicalUrl);
        const otherPath = data.alternatePath ?? data.path;
        this.setHreflang('de', data.locale === 'de' ? data.path : otherPath);
        this.setHreflang('en', data.locale === 'en' ? data.path : otherPath);
        this.setHreflang('ru', data.locale === 'ru' ? data.path : otherPath);
        this.setHreflang('es', data.locale === 'es' ? data.path : otherPath);
        this.setHreflang('x-default', data.locale === 'de' ? data.path : otherPath);
        this.document.documentElement.lang = data.locale;
    }
    setTag(name, content, attr = 'name') {
        this.metaService.updateTag({ [attr]: name, content });
    }
    setLink(rel, href) {
        let link = this.document.head.querySelector(`link[rel="${rel}"]`);
        if (!link) {
            link = this.document.createElement('link');
            link.setAttribute('rel', rel);
            this.document.head.appendChild(link);
        }
        link.setAttribute('href', href);
    }
    setHreflang(locale, path) {
        const selector = `link[rel="alternate"][hreflang="${locale}"]`;
        let link = this.document.head.querySelector(selector);
        if (!link) {
            link = this.document.createElement('link');
            link.setAttribute('rel', 'alternate');
            link.setAttribute('hreflang', locale);
            this.document.head.appendChild(link);
        }
        const localePrefix = locale === 'x-default' ? 'de' : locale;
        link.setAttribute('href', `${SITE_ORIGIN}/${localePrefix}/${path}`.replace(/\/$/, ''));
    }
    static ɵfac = function SeoService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SeoService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeoService, factory: SeoService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeoService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=seo.service.js.map