import { Injectable, computed, signal } from '@angular/core';
import { Locale, LocalizedText } from '../models/villa.model';

/**
 * Lightweight runtime i18n for UI strings.
 *
 * Deliberately NOT using Angular's build-time @angular/localize pipeline:
 * with two languages and a small page count, a single runtime-switchable
 * build is far cheaper to operate than two separate localized builds/deploys.
 * Route-level locale segments (/de/.. and /en/..) still give each language
 * its own indexable, canonical URL for hreflang purposes.
 */

const UI_STRINGS: Record<string, LocalizedText> = {
  navVillas: { de: 'Villen', en: 'Villas', ru: 'Виллы', es: 'Villas' },
  navLocation: { de: 'Lage', en: 'Location', ru: 'Расположение', es: 'Ubicación' },
  navExperiences: { de: 'Erlebnisse', en: 'Experiences', ru: 'Впечатления', es: 'Experiencias' },
  navGallery: { de: 'Galerie', en: 'Gallery', ru: 'Галерея', es: 'Galería' },
  navAvailability: { de: 'Verfügbarkeit', en: 'Availability', ru: 'Доступность', es: 'Disponibilidad' },
  navContact: { de: 'Kontakt', en: 'Contact', ru: 'Контакты', es: 'Contacto' },
  ctaCheckAvailability: { de: 'Verfügbarkeit prüfen', en: 'Check availability', ru: 'Проверить доступность', es: 'Comprobar disponibilidad' },
  ctaDiscoverVillas: { de: 'Villen entdecken', en: 'Discover the villas', ru: 'Посмотреть виллы', es: 'Descubrir las villas' },
  ctaDiscoverVilla: { de: 'Villa entdecken', en: 'Discover this villa', ru: 'Посмотреть виллу', es: 'Descubrir esta villa' },
  heroLocationLine: {
    de: 'Drobnići · Budva Riviera · Montenegro',
    en: 'Drobnići · Budva Riviera · Montenegro',
    ru: 'Дробничи · Будванская ривьера · Черногория',
    es: 'Drobnići · Riviera de Budva · Montenegro',
  },
  guestsLabel: { de: 'Gäste', en: 'Guests', ru: 'Гости', es: 'Huéspedes' },
  bedroomsLabel: { de: 'Schlafzimmer', en: 'Bedrooms', ru: 'Спальни', es: 'Dormitorios' },
  bathroomsLabel: { de: 'Badezimmer', en: 'Bathrooms', ru: 'Ванные', es: 'Baños' },
  privatePoolLabel: { de: 'Privater Pool', en: 'Private pool', ru: 'Частный бассейн', es: 'Piscina privada' },
  bookingTitle: { de: 'Buchungsanfrage senden', en: 'Send a booking request', ru: 'Отправить запрос на бронирование', es: 'Enviar solicitud de reserva' },
  bookingIntro: {
    de: 'Unverbindliche Anfrage - wir melden uns mit Verfügbarkeit und Details zurück.',
    en: 'No-obligation request - we will get back to you with availability and details.',
    ru: 'Запрос ни к чему не обязывает — мы сообщим о доступности и деталях.',
    es: 'Solicitud sin compromiso: responderemos con la disponibilidad y los detalles.',
  },
  formVilla: { de: 'Villa', en: 'Villa', ru: 'Вилла', es: 'Villa' },
  formCheckIn: { de: 'Check-in', en: 'Check-in', ru: 'Заезд', es: 'Llegada' },
  formCheckOut: { de: 'Check-out', en: 'Check-out', ru: 'Выезд', es: 'Salida' },
  formGuests: { de: 'Anzahl der Gäste', en: 'Number of guests', ru: 'Количество гостей', es: 'Número de huéspedes' },
  formFirstName: { de: 'Vorname', en: 'First name', ru: 'Имя', es: 'Nombre' },
  formLastName: { de: 'Nachname', en: 'Last name', ru: 'Фамилия', es: 'Apellidos' },
  formEmail: { de: 'E-Mail', en: 'Email', ru: 'Электронная почта', es: 'Correo electrónico' },
  formPhone: { de: 'Telefon (optional)', en: 'Phone (optional)', ru: 'Телефон (необязательно)', es: 'Teléfono (opcional)' },
  formMessage: { de: 'Nachricht (optional)', en: 'Message (optional)', ru: 'Сообщение (необязательно)', es: 'Mensaje (opcional)' },
  formPrivacy: {
    de: 'Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzerklärung zu.',
    en: 'I agree to the processing of my data as described in the privacy policy.',
    ru: 'Я согласен(-на) на обработку моих данных в соответствии с политикой конфиденциальности.',
    es: 'Acepto el tratamiento de mis datos conforme a la política de privacidad.',
  },
  formSubmit: { de: 'Anfrage senden', en: 'Send request', ru: 'Отправить запрос', es: 'Enviar solicitud' },
  formSubmitting: { de: 'Wird gesendet ...', en: 'Sending ...', ru: 'Отправка…', es: 'Enviando…' },
  formSuccess: {
    de: 'Danke! Ihre Anfrage ist eingegangen. Wir antworten in der Regel innerhalb von 24 Stunden.',
    en: 'Thank you! Your request has been received. We usually reply within 24 hours.',
    ru: 'Спасибо! Ваш запрос получен. Обычно мы отвечаем в течение 24 часов.',
    es: '¡Gracias! Hemos recibido su solicitud. Normalmente respondemos en 24 horas.',
  },
  formError: {
    de: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per WhatsApp oder E-Mail.',
    en: 'Your request could not be sent. Please try again, or contact us directly via WhatsApp or email.',
    ru: 'Не удалось отправить запрос. Попробуйте ещё раз или свяжитесь с нами через WhatsApp или электронную почту.',
    es: 'No se pudo enviar la solicitud. Inténtelo de nuevo o contáctenos por WhatsApp o correo electrónico.',
  },
  formErrorRequired: { de: 'Bitte füllen Sie alle Pflichtfelder aus.', en: 'Please fill in all required fields.', ru: 'Пожалуйста, заполните все обязательные поля.', es: 'Complete todos los campos obligatorios.' },
  quietLuxuryEyebrow: { de: 'Zwei private Villen an der Budva Riviera', en: 'Two private villas on the Budva Riviera', ru: 'Две частные виллы на Будванской ривьере', es: 'Dos villas privadas en la Riviera de Budva' },
  compareTitle: { de: 'Villa MonteMare oder Villa Lumina?', en: 'Villa MonteMare or Villa Lumina?', ru: 'Villa MonteMare или Villa Lumina?', es: '¿Villa MonteMare o Villa Lumina?' },
  distancesTitle: { de: 'Entfernungen', en: 'Distances', ru: 'Расстояния', es: 'Distancias' },
  faqTitle: { de: 'Häufige Fragen', en: 'Frequently asked questions', ru: 'Частые вопросы', es: 'Preguntas frecuentes' },
  footerRights: { de: 'Alle Rechte vorbehalten.', en: 'All rights reserved.', ru: 'Все права защищены.', es: 'Todos los derechos reservados.' },
  whatsappCta: { de: 'Direkt per WhatsApp anfragen', en: 'Ask directly on WhatsApp', ru: 'Написать в WhatsApp', es: 'Consultar directamente por WhatsApp' },
  relatedGuides: { de: 'Passende Reiseführer', en: 'Related guides', ru: 'Полезные путеводители', es: 'Guías relacionadas' },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly localeSignal = signal<Locale>('de');
  readonly locale = this.localeSignal.asReadonly();
  readonly isGerman = computed(() => this.localeSignal() === 'de');

  setLocale(locale: Locale): void {
    this.localeSignal.set(locale);
  }

  /** Resolve a LocalizedText object for the current locale. */
  t(text: LocalizedText): string {
    return text[this.localeSignal()] ?? text.en;
  }

  /** Resolve a predefined UI string key for the current locale. */
  ui(key: keyof typeof UI_STRINGS): string {
    const entry = UI_STRINGS[key];
    return entry ? (entry[this.localeSignal()] ?? entry.en) : key;
  }

  inline(de: string, en: string, ru: string, es: string): string {
    return { de, en, ru, es }[this.localeSignal()];
  }

  localizedPath(locale: Locale, path: string): string {
    const stripped = path.replace(/^\/(de|en|ru|es)/, '');
    const parts = stripped.split('/').filter(Boolean);
    const sections: Record<string, string> = {
      villen: locale === 'de' ? 'villen' : 'villas',
      villas: locale === 'de' ? 'villen' : 'villas',
      reisefuehrer: locale === 'de' ? 'reisefuehrer' : 'guides',
      guides: locale === 'de' ? 'reisefuehrer' : 'guides',
      'lage-budva-riviera': locale === 'de' ? 'lage-budva-riviera' : 'location-budva-riviera',
      'location-budva-riviera': locale === 'de' ? 'lage-budva-riviera' : 'location-budva-riviera',
    };
    if (parts[0] && sections[parts[0]]) parts[0] = sections[parts[0]];
    return `/${locale}${parts.length ? `/${parts.join('/')}` : ''}`;
  }
}
