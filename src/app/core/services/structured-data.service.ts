import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Villa, VillaFaqItem, Locale, LocalizedText } from '../models/villa.model';
import { translateEnglishToSerbian } from '../data/serbian-translations.data';

@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  private readonly document = inject(DOCUMENT);

  /**
   * Renders one or more JSON-LD <script> blocks into <head>.
   * Deliberately omits price, rating and review fields until real,
   * current data exists — see requirement: never fabricate structured data.
   */
  setJsonLd(id: string, graphs: Record<string, unknown>[]): void {
    this.removeJsonLd(id);
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(graphs.length === 1 ? graphs[0] : graphs);
    this.document.head.appendChild(script);
  }

  removeJsonLd(id: string): void {
    this.document.getElementById(id)?.remove();
  }

  buildVillaGraph(villa: Villa, locale: Locale): Record<string, unknown> {
    const routeBase = locale === 'de' ? 'villen' : 'villas';
    const url = this.absoluteUrl(`/${locale}/${routeBase}/${villa.slug}`);
    return {
      '@context': 'https://schema.org',
      '@type': 'VacationRental',
      '@id': `${url}#vacation-rental`,
      additionalType: 'Villa',
      identifier: villa.slug,
      name: villa.name,
      description: this.localized(villa.metaDescription, locale),
      url,
      image: villa.galleryImagePlaceholders
        .filter((image) => image.startsWith('/assets/'))
        .map((image) => this.absoluteUrl(image)),
      latitude: 42.23950,
      longitude: 18.90250,
      containsPlace: {
        '@type': 'Accommodation',
        additionalType: 'EntirePlace',
        occupancy: { '@type': 'QuantitativeValue', value: villa.guests },
        numberOfBedrooms: villa.bedrooms,
        numberOfBathroomsTotal: villa.bathrooms,
        bed: { '@type': 'BedDetails', numberOfBeds: villa.bedrooms, typeOfBed: 'Queen' },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'pool', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'poolType', value: 'Outdoor' },
          { '@type': 'LocationFeatureSpecification', name: 'wifi', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'internetType', value: 'Free' },
          { '@type': 'LocationFeatureSpecification', name: 'parkingType', value: 'Free' },
          { '@type': 'LocationFeatureSpecification', name: 'washerDryer', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'instantBookable', value: false },
        ],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Smokov vijenac',
        postalCode: '85315',
        addressLocality: 'Drobnići',
        addressRegion: 'Budva',
        addressCountry: 'ME',
      },
      checkinTime: '16:00:00',
      checkoutTime: '11:00:00',
      knowsLanguage: ['de', 'en', 'ru', 'es', 'sr'],
    };
  }

  buildFaqGraph(items: VillaFaqItem[], locale: Locale): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: this.localized(item.question, locale),
        acceptedAnswer: { '@type': 'Answer', text: this.localized(item.answer, locale) },
      })),
    };
  }

  buildBreadcrumbGraph(crumbs: { name: string; path: string }[], locale: Locale): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: this.absoluteUrl(`/${locale}/${crumb.path}`),
      })),
    };
  }

  private absoluteUrl(path: string): string {
    const origin = this.document.location?.origin;
    const base = origin && origin !== 'null' ? origin : 'http://localhost';
    return new URL(path, `${base.replace(/\/$/, '')}/`).toString().replace(/\/$/, '');
  }

  private localized(text: LocalizedText, locale: Locale): string {
    if (locale === 'sr') {
      return text.sr ?? translateEnglishToSerbian(text.en);
    }
    return text[locale] ?? text.en;
  }
}
