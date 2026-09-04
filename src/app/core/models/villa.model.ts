export type Locale = 'de' | 'en' | 'ru' | 'es';
export type VillaSlug = 'villa-monte-mare' | 'villa-lumina';

export interface LocalizedText {
  de: string;
  en: string;
  ru?: string;
  es?: string;
}

export interface VillaHighlight {
  icon: string; // maps to an svg symbol id in assets/icons.svg
  label: LocalizedText;
}

export interface VillaFaqItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface VillaDetailSection {
  title: LocalizedText;
  paragraphs: LocalizedText[];
}

export interface Villa {
  slug: VillaSlug; // used for both /villen/:slug and /villas/:slug
  name: string;
  tagline: LocalizedText;
  positioning: LocalizedText;
  intro: LocalizedText;
  description: LocalizedText[];
  detailSections: VillaDetailSection[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  nightlyRateEur: number;
  hasPrivatePool: true;
  highlights: VillaHighlight[];
  amenities: LocalizedText[];
  suitableForWorkation: boolean;
  faq: VillaFaqItem[];
  heroImageAlt: LocalizedText;
  /** Placeholder image slugs — replace with licensed originals, see README */
  galleryImagePlaceholders: string[];
  seoTitle: LocalizedText;
  metaDescription: LocalizedText;
}

export interface DistanceItem {
  label: LocalizedText;
  value: LocalizedText;
}

export interface GuideArticle {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  bodyHtml: LocalizedText;
  publishedOn: string; // ISO date — placeholder, confirm before go-live
  updatedOn: string;
  relatedVillaSlugs: string[];
  seoTitle: LocalizedText;
  metaDescription: LocalizedText;
}

/** Inquiry payload sent from the booking widget */
export interface BookingInquiry {
  villaSlug: VillaSlug;
  checkIn: string;
  checkOut: string;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message?: string;
  privacyConsent: boolean;
  /** honeypot field for basic bot protection, must stay empty */
  website?: string;
}
