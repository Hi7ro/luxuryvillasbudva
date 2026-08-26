import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { VILLAS, DISTANCES, GUIDE_ARTICLES } from '../../core/data/content.data';
import { BookingWidgetComponent } from '../../shared/booking-widget/booking-widget.component';
import { ImageLightboxComponent } from '../../shared/image-lightbox/image-lightbox.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.slug;
const _forTrack1 = ($index, $item) => $item.label.de;
const _forTrack2 = ($index, $item) => $item.q;
function HomeComponent_For_36_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵelement(1, "img", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const villa_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("alt", ctx_r1.t.t(villa_r1.heroImageAlt));
} }
function HomeComponent_For_36_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵelement(1, "img", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const villa_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("alt", ctx_r1.t.t(villa_r1.heroImageAlt));
} }
function HomeComponent_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 19);
    i0.ɵɵtemplate(1, HomeComponent_For_36_Conditional_1_Template, 2, 1, "div", 36)(2, HomeComponent_For_36_Conditional_2_Template, 2, 1, "div", 36);
    i0.ɵɵelementStart(3, "div", 37)(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 38);
    i0.ɵɵtext(9);
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "ul", 39)(14, "li");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "li");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "li");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "li");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 40)(23, "a", 25);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "a", 12);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const villa_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(villa_r1.slug === "villa-lumina" ? 1 : 2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(villa_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(villa_r1.tagline));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.t.inline("Ab", "From", "\u041E\u0442", "Desde"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", villa_r1.nightlyRateEur, " \u20AC");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.t.inline("pro Nacht", "per night", "\u0437\u0430 \u043D\u043E\u0447\u044C", "por noche"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", villa_r1.guests, " ", ctx_r1.t.ui("guestsLabel"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", villa_r1.bedrooms, " ", ctx_r1.t.ui("bedroomsLabel"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", villa_r1.bathrooms, " ", ctx_r1.t.ui("bathroomsLabel"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.ui("privatePoolLabel"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", ctx_r1.villaPath(villa_r1.slug));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.ui("ctaDiscoverVilla"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.ui("ctaCheckAvailability"));
} }
function HomeComponent_For_47_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function HomeComponent_For_47_Template_button_click_0_listener() { const $index_r4 = i0.ɵɵrestoreView(_r3).$index; i0.ɵɵnextContext(); const homeLightbox_r5 = i0.ɵɵreference(44); return i0.ɵɵresetView(homeLightbox_r5.open($index_r4)); });
    i0.ɵɵelement(1, "img", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r1.homeGalleryAlt(image_r6));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r6, i0.ɵɵsanitizeUrl)("alt", ctx_r1.homeGalleryAlt(image_r6));
} }
function HomeComponent_For_88_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const d_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(d_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r7.value);
} }
function HomeComponent_For_97_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 31)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r1.guidePath(g_r8.slug));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(g_r8.title));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(g_r8.excerpt));
} }
function HomeComponent_For_108_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.q);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.a);
} }
export class HomeComponent {
    t = inject(TranslationService);
    seo = inject(SeoService);
    structuredData = inject(StructuredDataService);
    route = inject(ActivatedRoute);
    villas = VILLAS;
    distances = DISTANCES;
    guides = GUIDE_ARTICLES;
    homeGalleryImages = [
        '/assets/media/montemare/monte-mare-exterior-pool.webp',
        '/assets/media/lumina/lumina-exterior-pool.webp',
        '/assets/media/montemare/monte-mare-olive-garden.webp',
        '/assets/media/lumina/lumina-rooftop-sea-view.webp',
    ];
    homeGalleryAlt = (path) => path.includes('pool')
        ? this.t.inline('Villa mit privatem Pool', 'Villa with private pool', 'Вилла с частным бассейном', 'Villa con piscina privada')
        : path.includes('olive')
            ? this.t.inline('Mediterraner Olivengarten der Villa MonteMare', 'Mediterranean olive garden at Villa MonteMare', 'Средиземноморский сад Villa MonteMare', 'Jardín mediterráneo de Villa MonteMare')
            : path.includes('rooftop')
                ? this.t.inline('Dachterrasse mit Meerblick', 'Rooftop terrace with sea view', 'Терраса на крыше с видом на море', 'Azotea con vistas al mar')
                : path.includes('living')
                    ? this.t.inline('Heller Wohnbereich der Villa Lumina', 'Bright living room at Villa Lumina', 'Светлая гостиная Villa Lumina', 'Salón luminoso de Villa Lumina')
                    : this.t.inline('Schlafzimmer mit Meerblick', 'Bedroom with sea view', 'Спальня с видом на море', 'Dormitorio con vistas al mar');
    ngOnInit() {
        const locale = this.route.snapshot.data['locale'] ?? 'de';
        this.t.setLocale(locale);
        this.seo.setPage({
            locale,
            path: '',
            title: {
                de: 'Luxusvillen in Montenegro mit Pool | Budva Riviera',
                en: 'Luxury Villas in Montenegro with Pool | Budva Riviera',
                ru: 'Роскошные виллы с бассейном в Черногории | Будванская ривьера',
                es: 'Villas de lujo con piscina en Montenegro | Riviera de Budva',
            }[locale],
            description: {
                de: 'Entdecken Sie Villa MonteMare und Villa Lumina in Reževići: private Pools, Meerblick und Platz für je 6 Gäste nahe Budva und Sveti Stefan.',
                en: 'Discover Villa MonteMare and Villa Lumina in Reževići: private pools, sea views and room for up to 6 guests, near Budva and Sveti Stefan.',
                ru: 'Откройте для себя Villa MonteMare и Villa Lumina в Режевичи: частные бассейны, вид на море и размещение до 6 гостей рядом с Будвой и Свети-Стефаном.',
                es: 'Descubra Villa MonteMare y Villa Lumina en Reževići: piscinas privadas, vistas al mar y capacidad para 6 huéspedes cerca de Budva y Sveti Stefan.',
            }[locale],
        });
        this.structuredData.setJsonLd('ld-home', [
            {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Villa MonteMare & Villa Lumina',
                url: `https://www.REPLACE-WITH-DOMAIN.example/${locale}`,
            },
            ...this.villas.map((v) => this.structuredData.buildVillaGraph(v, locale)),
        ]);
    }
    locale() {
        return this.t.locale();
    }
    heroAlt() {
        return this.t.inline('Panoramablick über die Adria von der Terrasse einer Villa in Reževići', 'Panoramic view over the Adriatic from a villa terrace in Reževići', 'Панорамный вид на Адриатику с террасы виллы в Режевичи', 'Vista panorámica del Adriático desde la terraza de una villa en Reževići');
    }
    get faqPreview() {
        const merged = this.villas.flatMap((v) => v.faq);
        return merged.slice(0, 4).map((item) => ({ q: this.t.t(item.question), a: this.t.t(item.answer) }));
    }
    villaPath(slug) {
        const locale = this.locale();
        return locale === 'de' ? ['/de/villen', slug] : [`/${locale}/villas`, slug];
    }
    guidePath(slug) {
        const locale = this.locale();
        return locale === 'de' ? ['/de/reisefuehrer', slug] : [`/${locale}/guides`, slug];
    }
    locationPath() {
        const locale = this.locale();
        return locale === 'de' ? ['/de/lage-budva-riviera'] : [`/${locale}/location-budva-riviera`];
    }
    static ɵfac = function HomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 110, vars: 33, consts: [["homeLightbox", ""], [1, "hero"], [1, "hero-slideshow"], ["src", "/assets/media/lumina/lumina-hero-adriatic-sunset.webp", "width", "1920", "height", "1080", "fetchpriority", "high", 1, "hero-media", "hero-slide", "slide-one", 3, "alt"], ["src", "/assets/media/montemare/monte-mare-exterior-pool.webp", "alt", "", "width", "1920", "height", "1280", "loading", "eager", 1, "hero-media", "hero-slide", "slide-two"], ["src", "/assets/media/lumina/lumina-exterior-pool.webp", "alt", "", "width", "1920", "height", "1280", "loading", "eager", 1, "hero-media", "hero-slide", "slide-three"], ["src", "/assets/media/montemare/monte-mare-balcony-view.webp", "alt", "", "width", "1920", "height", "1280", "loading", "eager", 1, "hero-media", "hero-slide", "slide-four"], [1, "hero-content", "container"], [1, "eyebrow"], [1, "hero-sub"], [1, "hero-facts"], [1, "hero-ctas"], ["href", "#verfuegbarkeit", 1, "btn", "btn-primary"], ["href", "#villen", 1, "btn", "btn-secondary"], ["aria-hidden", "true", 1, "horizon-divider", "hero-horizon"], [1, "section", "container"], ["aria-hidden", "true", 1, "horizon-divider"], ["id", "villen", 1, "section", "container"], [1, "villa-grid"], [1, "villa-card"], ["id", "galerie", 1, "section", "container"], [3, "images", "altText", "label"], [1, "home-gallery"], ["type", "button"], [1, "gallery-actions"], [1, "btn", "btn-quiet", 3, "routerLink"], [1, "section", "container", "compare"], [1, "compare-grid"], [1, "distances"], ["id", "erlebnisse", 1, "section", "container"], [1, "guides-grid"], [1, "guide-card", 3, "routerLink"], ["id", "kontakt", 1, "section", "container"], [1, "booking-layout"], [1, "faq"], [1, "faq-item"], [1, "villa-media"], [1, "villa-body"], [1, "villa-price"], [1, "facts"], [1, "villa-ctas"], ["src", "/assets/media/lumina/lumina-exterior-pool.webp", "width", "1920", "height", "1280", "loading", "lazy", 3, "alt"], ["src", "/assets/media/montemare/monte-mare-exterior-pool.webp", "width", "1920", "height", "1280", "loading", "lazy", 3, "alt"], ["type", "button", 3, "click"], ["width", "1920", "height", "1280", "loading", "lazy", 3, "src", "alt"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 1)(1, "div", 2);
            i0.ɵɵelement(2, "img", 3)(3, "img", 4)(4, "img", 5)(5, "img", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 7)(7, "p", 8);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "h1");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p", 9);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p", 10);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 11)(16, "a", 12);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "a", 13);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(20, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "section", 15)(22, "p", 8);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "h2");
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "p");
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(28, "div", 16);
            i0.ɵɵelementStart(29, "section", 17)(30, "p", 8);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "h2");
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 18);
            i0.ɵɵrepeaterCreate(35, HomeComponent_For_36_Template, 27, 16, "article", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(37, "div", 16);
            i0.ɵɵelementStart(38, "section", 20)(39, "p", 8);
            i0.ɵɵtext(40, "MonteMare & Lumina");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "h2");
            i0.ɵɵtext(42);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(43, "app-image-lightbox", 21, 0);
            i0.ɵɵelementStart(45, "div", 22);
            i0.ɵɵrepeaterCreate(46, HomeComponent_For_47_Template, 2, 3, "button", 23, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div", 24)(49, "a", 25);
            i0.ɵɵtext(50, "Villa MonteMare");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "a", 25);
            i0.ɵɵtext(52, "Villa Lumina");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(53, "div", 16);
            i0.ɵɵelementStart(54, "section", 26)(55, "h2");
            i0.ɵɵtext(56);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "div", 27)(58, "div")(59, "h3");
            i0.ɵɵtext(60);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "ul")(62, "li");
            i0.ɵɵtext(63);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "li");
            i0.ɵɵtext(65);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "li");
            i0.ɵɵtext(67);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "li");
            i0.ɵɵtext(69);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(70, "div")(71, "h3");
            i0.ɵɵtext(72, "Villa MonteMare");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "p");
            i0.ɵɵtext(74);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "div")(76, "h3");
            i0.ɵɵtext(77, "Villa Lumina");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "p");
            i0.ɵɵtext(79);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelement(80, "div", 16);
            i0.ɵɵelementStart(81, "section", 15)(82, "p", 8);
            i0.ɵɵtext(83);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "h2");
            i0.ɵɵtext(85);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "ul", 28);
            i0.ɵɵrepeaterCreate(87, HomeComponent_For_88_Template, 5, 2, "li", null, _forTrack1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "a", 25);
            i0.ɵɵtext(90);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(91, "div", 16);
            i0.ɵɵelementStart(92, "section", 29)(93, "h2");
            i0.ɵɵtext(94);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "div", 30);
            i0.ɵɵrepeaterCreate(96, HomeComponent_For_97_Template, 5, 3, "a", 31, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(98, "div", 16);
            i0.ɵɵelementStart(99, "section", 32)(100, "div", 33)(101, "div")(102, "p", 8);
            i0.ɵɵtext(103);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "h2");
            i0.ɵɵtext(105);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(106, "dl", 34);
            i0.ɵɵrepeaterCreate(107, HomeComponent_For_108_Template, 5, 2, "div", 35, _forTrack2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(109, "app-booking-widget");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("alt", ctx.heroAlt());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.t.ui("heroLocationLine"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.inline("\u00DCber der Adria. Fernab von allem.", "Above the Adriatic. Away from everything.", "\u041D\u0430\u0434 \u0410\u0434\u0440\u0438\u0430\u0442\u0438\u043A\u043E\u0439. \u0412\u0434\u0430\u043B\u0438 \u043E\u0442 \u0441\u0443\u0435\u0442\u044B.", "Sobre el Adri\u00E1tico. Lejos de todo."));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.t.inline("Zwei private Luxusvillen mit Pool und Panoramablick an der Budva Riviera.", "Two private luxury villas with pools and panoramic views on the Budva Riviera.", "\u0414\u0432\u0435 \u0447\u0430\u0441\u0442\u043D\u044B\u0435 \u0440\u043E\u0441\u043A\u043E\u0448\u043D\u044B\u0435 \u0432\u0438\u043B\u043B\u044B \u0441 \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0430\u043C\u0438 \u0438 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u043C \u0432\u0438\u0434\u043E\u043C \u043D\u0430 \u0411\u0443\u0434\u0432\u0430\u043D\u0441\u043A\u043E\u0439 \u0440\u0438\u0432\u044C\u0435\u0440\u0435.", "Dos villas de lujo privadas con piscina y vistas panor\u00E1micas en la Riviera de Budva."), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.t.inline("2 Villen \u00B7 je bis zu 6 G\u00E4ste \u00B7 privater Pool \u00B7 Meerblick", "2 villas \u00B7 up to 6 guests each \u00B7 private pool \u00B7 sea view", "2 \u0432\u0438\u043B\u043B\u044B \u00B7 \u0434\u043E 6 \u0433\u043E\u0441\u0442\u0435\u0439 \u043A\u0430\u0436\u0434\u0430\u044F \u00B7 \u0447\u0430\u0441\u0442\u043D\u044B\u0439 \u0431\u0430\u0441\u0441\u0435\u0439\u043D \u00B7 \u0432\u0438\u0434 \u043D\u0430 \u043C\u043E\u0440\u0435", "2 villas \u00B7 hasta 6 hu\u00E9spedes cada una \u00B7 piscina privada \u00B7 vistas al mar"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.t.ui("ctaCheckAvailability"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.ui("ctaDiscoverVillas"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.t.inline("Der Ort", "The setting", "\u042D\u0442\u043E \u043C\u0435\u0441\u0442\u043E", "El entorno"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.inline("Ruhe, 90 Meter \u00FCber dem Meer", "Stillness, 90 metres above the sea", "\u0422\u0438\u0448\u0438\u043D\u0430 \u043D\u0430 \u0432\u044B\u0441\u043E\u0442\u0435 90 \u043C\u0435\u0442\u0440\u043E\u0432 \u043D\u0430\u0434 \u043C\u043E\u0440\u0435\u043C", "Tranquilidad a 90 metros sobre el mar"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.t.inline("In Re\u017Eevi\u0107i, zwischen Sveti Stefan und Petrovac, liegen zwei private Villen auf einer ruhigen Anh\u00F6he: Villa MonteMare und Villa Lumina. Beide bieten exklusive Nutzung, einen eigenen Pool und freien Blick \u00FCber die Adria.", "In Re\u017Eevi\u0107i, between Sveti Stefan and Petrovac, two private villas sit on a quiet hillside: Villa MonteMare and Villa Lumina. Both offer exclusive use, a private pool and open Adriatic views.", "\u0412 \u0420\u0435\u0436\u0435\u0432\u0438\u0447\u0438, \u043C\u0435\u0436\u0434\u0443 \u0421\u0432\u0435\u0442\u0438-\u0421\u0442\u0435\u0444\u0430\u043D\u043E\u043C \u0438 \u041F\u0435\u0442\u0440\u043E\u0432\u0430\u0446\u0435\u043C, \u043D\u0430 \u0442\u0438\u0445\u043E\u043C \u0441\u043A\u043B\u043E\u043D\u0435 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044B \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u043D\u044B\u0435 \u0432\u0438\u043B\u043B\u044B: Villa MonteMare \u0438 Villa Lumina. \u041E\u0431\u0435 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442 \u043F\u043E\u043B\u043D\u0443\u044E \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C, \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0431\u0430\u0441\u0441\u0435\u0439\u043D \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u0438\u0434 \u043D\u0430 \u0410\u0434\u0440\u0438\u0430\u0442\u0438\u043A\u0443.", "En Re\u017Eevi\u0107i, entre Sveti Stefan y Petrovac, dos villas privadas se encuentran en una tranquila ladera: Villa MonteMare y Villa Lumina. Ambas ofrecen uso exclusivo, piscina privada y vistas abiertas al Adri\u00E1tico."), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.t.ui("quietLuxuryEyebrow"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.inline("Zwei Villen, ein Ort", "Two villas, one place", "\u0414\u0432\u0435 \u0432\u0438\u043B\u043B\u044B, \u043E\u0434\u043D\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E", "Dos villas, un lugar especial"));
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.villas);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.t.inline("Zwei Villen. Eine besondere Perspektive.", "Two villas. One exceptional perspective.", "\u0414\u0432\u0435 \u0432\u0438\u043B\u043B\u044B. \u041E\u0434\u0438\u043D \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u0438\u0434.", "Dos villas. Una perspectiva excepcional."));
            i0.ɵɵadvance();
            i0.ɵɵproperty("images", ctx.homeGalleryImages)("altText", ctx.homeGalleryAlt)("label", ctx.t.inline("Bildergalerie der Villen", "Villa image gallery", "\u0424\u043E\u0442\u043E\u0433\u0430\u043B\u0435\u0440\u0435\u044F \u0432\u0438\u043B\u043B", "Galer\u00EDa de las villas"));
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.homeGalleryImages);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", ctx.villaPath("villa-monte-mare"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", ctx.villaPath("villa-lumina"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.t.ui("compareTitle"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.t.inline("Gemeinsam", "Shared", "\u041E\u0431\u0449\u0435\u0435", "En com\u00FAn"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.t.inline("Bis zu 6 G\u00E4ste, exklusive Nutzung", "Up to 6 guests, exclusive use", "\u0414\u043E 6 \u0433\u043E\u0441\u0442\u0435\u0439, \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435", "Hasta 6 hu\u00E9spedes, uso exclusivo"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.inline("3 Schlafzimmer, 3 Badezimmer", "3 bedrooms, 3 bathrooms", "3 \u0441\u043F\u0430\u043B\u044C\u043D\u0438, 3 \u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u043D\u0430\u0442\u044B", "3 dormitorios, 3 ba\u00F1os"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.inline("Privater Pool und Meerblick", "Private pool and sea view", "\u0427\u0430\u0441\u0442\u043D\u044B\u0439 \u0431\u0430\u0441\u0441\u0435\u0439\u043D \u0438 \u0432\u0438\u0434 \u043D\u0430 \u043C\u043E\u0440\u0435", "Piscina privada y vistas al mar"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.inline("Zwei private Parkpl\u00E4tze", "Two private parking spaces", "\u0414\u0432\u0430 \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043F\u0430\u0440\u043A\u043E\u0432\u043E\u0447\u043D\u044B\u0445 \u043C\u0435\u0441\u0442\u0430", "Dos plazas de aparcamiento privadas"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.t.inline("Mediterraner Garten mit alten Olivenb\u00E4umen, besonders nat\u00FCrliche Atmosph\u00E4re.", "Mediterranean garden with old olive trees, an especially natural atmosphere.", "\u0421\u0440\u0435\u0434\u0438\u0437\u0435\u043C\u043D\u043E\u043C\u043E\u0440\u0441\u043A\u0438\u0439 \u0441\u0430\u0434 \u0441\u043E \u0441\u0442\u0430\u0440\u044B\u043C\u0438 \u043E\u043B\u0438\u0432\u043A\u043E\u0432\u044B\u043C\u0438 \u0434\u0435\u0440\u0435\u0432\u044C\u044F\u043C\u0438 \u0438 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043E\u0439.", "Jard\u00EDn mediterr\u00E1neo con olivos centenarios y un ambiente especialmente natural."));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.t.inline("Dachterrasse, Glasfaser-Internet und separater Arbeitsbereich mit Getr\u00E4nkek\u00FCche.", "Rooftop terrace, fibre internet and a separate work area with kitchenette.", "\u0422\u0435\u0440\u0440\u0430\u0441\u0430 \u043D\u0430 \u043A\u0440\u044B\u0448\u0435, \u043E\u043F\u0442\u043E\u0432\u043E\u043B\u043E\u043A\u043E\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u0437\u043E\u043D\u0430 \u0441 \u043C\u0438\u043D\u0438-\u043A\u0443\u0445\u043D\u0435\u0439.", "Azotea, internet de fibra y zona de trabajo independiente con peque\u00F1a cocina."));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.t.ui("distancesTitle"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.inline("Lage und Umgebung", "Location and surroundings", "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438", "Ubicaci\u00F3n y alrededores"));
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.distances);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", ctx.locationPath());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.t.inline("Zur Lage-Seite", "View location page", "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438", "Ver ubicaci\u00F3n"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.t.inline("Erlebnisse & Reisef\u00FChrer", "Experiences & guides", "\u0412\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u044F \u0438 \u043F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438", "Experiencias y gu\u00EDas"));
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.guides);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.t.ui("faqTitle"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.t.ui("faqTitle"));
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.faqPreview);
        } }, dependencies: [RouterLink, BookingWidgetComponent, ImageLightboxComponent], styles: [".hero[_ngcontent-%COMP%] {\n      position: relative;\n      min-height: min(920px, calc(100svh - 72px));\n      display: flex;\n      align-items: flex-end;\n      color: var(--c-limestone);\n      overflow: hidden;\n    }\n    .hero-slideshow[_ngcontent-%COMP%], .hero-media[_ngcontent-%COMP%] {\n      position: absolute;\n      inset: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .hero-slideshow[_ngcontent-%COMP%] { overflow: hidden; background: var(--c-adria); }\n    .hero-media[_ngcontent-%COMP%] {\n      object-fit: cover;\n    }\n    .hero-slide[_ngcontent-%COMP%] { opacity: 0; animation-duration: 48s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; will-change: opacity, transform; }\n    .slide-one[_ngcontent-%COMP%], .slide-three[_ngcontent-%COMP%] { animation-name: _ngcontent-%COMP%_heroFadeZoomIn; }\n    .slide-two[_ngcontent-%COMP%], .slide-four[_ngcontent-%COMP%] { animation-name: _ngcontent-%COMP%_heroFadeZoomOut; }\n    .slide-one[_ngcontent-%COMP%] { animation-delay: 0s; }\n    .slide-two[_ngcontent-%COMP%] { animation-delay: -36s; }\n    .slide-three[_ngcontent-%COMP%] { animation-delay: -24s; }\n    .slide-four[_ngcontent-%COMP%] { animation-delay: -12s; }\n    @keyframes _ngcontent-%COMP%_heroFadeZoomIn {\n      0% { opacity: 1; transform: scale(1); }\n      19% { opacity: 1; transform: scale(1.045); }\n      25% { opacity: 0; transform: scale(1.06); }\n      95% { opacity: 0; transform: scale(1); }\n      100% { opacity: 1; transform: scale(1); }\n    }\n    @keyframes _ngcontent-%COMP%_heroFadeZoomOut {\n      0% { opacity: 1; transform: scale(1.06); }\n      19% { opacity: 1; transform: scale(1.015); }\n      25% { opacity: 0; transform: scale(1); }\n      95% { opacity: 0; transform: scale(1.06); }\n      100% { opacity: 1; transform: scale(1.06); }\n    }\n    .hero[_ngcontent-%COMP%]::after {\n      content: '';\n      position: absolute;\n      inset: 0;\n      background: linear-gradient(90deg, rgba(12,31,40,.72) 0%, rgba(12,31,40,.34) 48%, rgba(12,31,40,.08) 75%), linear-gradient(0deg, rgba(12,31,40,.52), transparent 55%);\n      z-index: 1;\n      pointer-events: none;\n    }\n    .hero-content[_ngcontent-%COMP%] { position: relative; z-index: 2; padding-block: clamp(4rem, 10vh, 8rem); width: 100%; }\n    .hero-content[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] { color: var(--c-champagne); }\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { color: var(--c-limestone); font-style: italic; font-weight: 300; max-width: 12ch; text-wrap: balance; text-shadow: 0 4px 30px rgba(0,0,0,.16); }\n    .hero-sub[_ngcontent-%COMP%] { font-size: 1.15rem; max-width: 46ch; color: color-mix(in srgb, var(--c-limestone) 92%, transparent); }\n    .hero-facts[_ngcontent-%COMP%] { font-size: 0.9rem; letter-spacing: 0.03em; color: color-mix(in srgb, var(--c-limestone) 75%, transparent); }\n    .hero-ctas[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); margin-top: var(--space-3); flex-wrap: wrap; }\n    .hero-horizon[_ngcontent-%COMP%] { position: absolute; z-index: 2; bottom: 0; margin: 0; background: color-mix(in srgb, var(--c-limestone) 30%, transparent); }\n\n    .villa-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-top: var(--space-3); }\n    .villa-card[_ngcontent-%COMP%] { border: 1px solid color-mix(in srgb, var(--c-sand) 72%, transparent); border-radius: var(--radius-lg); overflow: hidden; background: var(--c-ivory); box-shadow: var(--shadow-soft); transition: transform 400ms ease, box-shadow 400ms ease; }\n    .villa-card[_ngcontent-%COMP%]:hover { transform: translateY(-6px); box-shadow: var(--shadow-lifted); }\n    .villa-media[_ngcontent-%COMP%] {\n      width: 100%;\n      aspect-ratio: 4 / 3;\n      overflow: hidden;\n      background: var(--c-sand);\n    }\n    .villa-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      object-position: center center;\n    }\n    .villa-body[_ngcontent-%COMP%] { padding: clamp(1.5rem, 3vw, 2.5rem); }\n    .villa-price[_ngcontent-%COMP%] { color: var(--c-adria); margin-block: var(--space-2); }\n    .villa-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-family: var(--font-display); font-size: 1.35rem; font-weight: 500; }\n    .facts[_ngcontent-%COMP%] { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 0.4rem 1rem; margin: var(--space-2) 0; font-size: 0.88rem; color: var(--c-olive); }\n    .villa-ctas[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-2); }\n\n    .home-gallery[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1.35fr 1fr 1fr; grid-template-rows: repeat(2, 230px); gap: var(--space-1); margin-top: var(--space-3); }\n    .home-gallery[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { display: block; width: 100%; height: 100%; padding: 0; border: 0; background: transparent; cursor: zoom-in; overflow: hidden; border-radius: var(--radius-lg); }\n    .home-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 300ms ease; }\n    .home-gallery[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] { transform: scale(1.025); }\n    .home-gallery[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child { grid-row: 1 / 3; }\n    .home-gallery[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) { grid-column: 2 / 4; }\n    .gallery-actions[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: var(--space-3); }\n\n    .compare-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: var(--space-4); margin-top: var(--space-3); }\n    .compare-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] { padding-left: 1.1rem; }\n    .compare-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin-bottom: 0.4rem; }\n\n    .distances[_ngcontent-%COMP%] { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0.6rem 2rem; max-width: 640px; margin: var(--space-3) 0 var(--space-3); }\n    .distances[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--c-sand); padding-bottom: 0.35rem; }\n    .distances[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--c-adria); }\n\n    .guides-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-3); margin-top: var(--space-3); }\n    .guide-card[_ngcontent-%COMP%] { display: block; padding: clamp(1.5rem, 3vw, 2.25rem); border: 1px solid color-mix(in srgb, var(--c-sand) 76%, transparent); border-radius: var(--radius-lg); text-decoration: none; color: var(--c-anthracite); background: var(--c-ivory); box-shadow: var(--shadow-soft); transition: transform 300ms ease, border-color 300ms ease; }\n    .guide-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin-bottom: 0.4rem; }\n    .guide-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--c-anthracite); font-size: 0.92rem; }\n    .guide-card[_ngcontent-%COMP%]:hover { border-color: var(--c-champagne); transform: translateY(-4px); }\n\n    .booking-layout[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1.1fr 1fr; gap: var(--space-5); align-items: start; }\n    .faq[_ngcontent-%COMP%] { margin-top: var(--space-3); }\n    .faq-item[_ngcontent-%COMP%] { margin-bottom: var(--space-3); }\n    .faq-item[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] { font-weight: 600; color: var(--c-adria); margin-bottom: 0.25rem; }\n    .faq-item[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] { margin: 0; color: var(--c-anthracite); }\n\n    @media (max-width: 900px) {\n      .villa-grid[_ngcontent-%COMP%], .compare-grid[_ngcontent-%COMP%], .guides-grid[_ngcontent-%COMP%], .booking-layout[_ngcontent-%COMP%] { grid-template-columns: minmax(0, 1fr); }\n      .booking-layout[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { min-width: 0; }\n      .distances[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .home-gallery[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; grid-template-rows: repeat(2, 190px); }\n      .home-gallery[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child, .home-gallery[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) { grid-column: auto; grid-row: auto; }\n    }\n    @media (max-width: 600px) {\n      .hero[_ngcontent-%COMP%] { min-height: calc(100svh - 64px); align-items: flex-end; }\n      .hero-media[_ngcontent-%COMP%] { object-position: 57% center; }\n      .slide-two[_ngcontent-%COMP%], .slide-three[_ngcontent-%COMP%] { object-position: center center; }\n      .hero-content[_ngcontent-%COMP%] { padding-block: 4rem 3.25rem; }\n      .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { max-width: 10ch; }\n      .hero-sub[_ngcontent-%COMP%] { font-size: 1rem; }\n      .hero-facts[_ngcontent-%COMP%] { line-height: 1.75; }\n      .hero-ctas[_ngcontent-%COMP%], .villa-ctas[_ngcontent-%COMP%], .gallery-actions[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr; width: 100%; }\n      .villa-grid[_ngcontent-%COMP%] { gap: 1.5rem; }\n      .villa-media[_ngcontent-%COMP%] { aspect-ratio: 4 / 3; }\n      .home-gallery[_ngcontent-%COMP%] { grid-template-columns: 1fr; grid-template-rows: none; gap: .65rem; }\n      .home-gallery[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { height: auto; aspect-ratio: 4 / 3; }\n      .compare-grid[_ngcontent-%COMP%] { gap: 1.75rem; }\n      .distances[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { gap: 1rem; align-items: baseline; }\n      .distances[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { white-space: nowrap; }\n    }\n    @media (prefers-reduced-motion: reduce) {\n      .hero-slide[_ngcontent-%COMP%] { display: none; animation: none; }\n      .slide-one[_ngcontent-%COMP%] { display: block; opacity: 1; transform: none; }\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', standalone: true, imports: [RouterLink, BookingWidgetComponent, ImageLightboxComponent], template: `
    <section class="hero">
      <div class="hero-slideshow">
        <img class="hero-media hero-slide slide-one" src="/assets/media/lumina/lumina-hero-adriatic-sunset.webp"
             [alt]="heroAlt()" width="1920" height="1080" fetchpriority="high" />
        <img class="hero-media hero-slide slide-two" src="/assets/media/montemare/monte-mare-exterior-pool.webp"
             alt="" width="1920" height="1280" loading="eager" />
        <img class="hero-media hero-slide slide-three" src="/assets/media/lumina/lumina-exterior-pool.webp"
             alt="" width="1920" height="1280" loading="eager" />
        <img class="hero-media hero-slide slide-four" src="/assets/media/montemare/monte-mare-balcony-view.webp"
             alt="" width="1920" height="1280" loading="eager" />
      </div>
      <div class="hero-content container">
        <p class="eyebrow">{{ t.ui('heroLocationLine') }}</p>
        <h1>{{ t.inline('Über der Adria. Fernab von allem.', 'Above the Adriatic. Away from everything.', 'Над Адриатикой. Вдали от суеты.', 'Sobre el Adriático. Lejos de todo.') }}</h1>
        <p class="hero-sub">
          {{ t.inline('Zwei private Luxusvillen mit Pool und Panoramablick an der Budva Riviera.', 'Two private luxury villas with pools and panoramic views on the Budva Riviera.', 'Две частные роскошные виллы с бассейнами и панорамным видом на Будванской ривьере.', 'Dos villas de lujo privadas con piscina y vistas panorámicas en la Riviera de Budva.') }}
        </p>
        <p class="hero-facts">
          {{ t.inline('2 Villen · je bis zu 6 Gäste · privater Pool · Meerblick', '2 villas · up to 6 guests each · private pool · sea view', '2 виллы · до 6 гостей каждая · частный бассейн · вид на море', '2 villas · hasta 6 huéspedes cada una · piscina privada · vistas al mar') }}
        </p>
        <div class="hero-ctas">
          <a class="btn btn-primary" href="#verfuegbarkeit">{{ t.ui('ctaCheckAvailability') }}</a>
          <a class="btn btn-secondary" href="#villen">{{ t.ui('ctaDiscoverVillas') }}</a>
        </div>
      </div>
      <div class="horizon-divider hero-horizon" aria-hidden="true"></div>
    </section>

    <section class="section container">
      <p class="eyebrow">{{ t.inline('Der Ort', 'The setting', 'Это место', 'El entorno') }}</p>
      <h2>{{ t.inline('Ruhe, 90 Meter über dem Meer', 'Stillness, 90 metres above the sea', 'Тишина на высоте 90 метров над морем', 'Tranquilidad a 90 metros sobre el mar') }}</h2>
      <p>
        {{ t.inline('In Reževići, zwischen Sveti Stefan und Petrovac, liegen zwei private Villen auf einer ruhigen Anhöhe: Villa MonteMare und Villa Lumina. Beide bieten exklusive Nutzung, einen eigenen Pool und freien Blick über die Adria.', 'In Reževići, between Sveti Stefan and Petrovac, two private villas sit on a quiet hillside: Villa MonteMare and Villa Lumina. Both offer exclusive use, a private pool and open Adriatic views.', 'В Режевичи, между Свети-Стефаном и Петровацем, на тихом склоне расположены две частные виллы: Villa MonteMare и Villa Lumina. Обе предлагают полную приватность, собственный бассейн и открытый вид на Адриатику.', 'En Reževići, entre Sveti Stefan y Petrovac, dos villas privadas se encuentran en una tranquila ladera: Villa MonteMare y Villa Lumina. Ambas ofrecen uso exclusivo, piscina privada y vistas abiertas al Adriático.') }}
      </p>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container" id="villen">
      <p class="eyebrow">{{ t.ui('quietLuxuryEyebrow') }}</p>
      <h2>{{ t.inline('Zwei Villen, ein Ort', 'Two villas, one place', 'Две виллы, одно особенное место', 'Dos villas, un lugar especial') }}</h2>
      <div class="villa-grid">
        @for (villa of villas; track villa.slug) {
          <article class="villa-card">
            @if (villa.slug === 'villa-lumina') {
              <div class="villa-media">
                <img src="/assets/media/lumina/lumina-exterior-pool.webp"
                     [alt]="t.t(villa.heroImageAlt)" width="1920" height="1280" loading="lazy" />
              </div>
            } @else {
              <div class="villa-media">
                <img src="/assets/media/montemare/monte-mare-exterior-pool.webp"
                     [alt]="t.t(villa.heroImageAlt)" width="1920" height="1280" loading="lazy" />
              </div>
            }
            <div class="villa-body">
              <h3>{{ villa.name }}</h3>
              <p>{{ t.t(villa.tagline) }}</p>
              <p class="villa-price">
                {{ t.inline('Ab', 'From', 'От', 'Desde') }}
                <strong>{{ villa.nightlyRateEur }} €</strong>
                {{ t.inline('pro Nacht', 'per night', 'за ночь', 'por noche') }}
              </p>
              <ul class="facts">
                <li>{{ villa.guests }} {{ t.ui('guestsLabel') }}</li>
                <li>{{ villa.bedrooms }} {{ t.ui('bedroomsLabel') }}</li>
                <li>{{ villa.bathrooms }} {{ t.ui('bathroomsLabel') }}</li>
                <li>{{ t.ui('privatePoolLabel') }}</li>
              </ul>
              <div class="villa-ctas">
                <a class="btn btn-quiet" [routerLink]="villaPath(villa.slug)">{{ t.ui('ctaDiscoverVilla') }}</a>
                <a class="btn btn-primary" href="#verfuegbarkeit">{{ t.ui('ctaCheckAvailability') }}</a>
              </div>
            </div>
          </article>
        }
      </div>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container" id="galerie">
      <p class="eyebrow">MonteMare &amp; Lumina</p>
      <h2>{{ t.inline('Zwei Villen. Eine besondere Perspektive.', 'Two villas. One exceptional perspective.', 'Две виллы. Один исключительный вид.', 'Dos villas. Una perspectiva excepcional.') }}</h2>
      <app-image-lightbox #homeLightbox [images]="homeGalleryImages" [altText]="homeGalleryAlt"
        [label]="t.inline('Bildergalerie der Villen', 'Villa image gallery', 'Фотогалерея вилл', 'Galería de las villas')" />
      <div class="home-gallery">
        @for (image of homeGalleryImages; track image) {
          <button type="button" (click)="homeLightbox.open($index)" [attr.aria-label]="homeGalleryAlt(image)">
            <img [src]="image" [alt]="homeGalleryAlt(image)" width="1920" height="1280" loading="lazy" />
          </button>
        }
      </div>
      <div class="gallery-actions">
        <a class="btn btn-quiet" [routerLink]="villaPath('villa-monte-mare')">Villa MonteMare</a>
        <a class="btn btn-quiet" [routerLink]="villaPath('villa-lumina')">Villa Lumina</a>
      </div>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container compare">
      <h2>{{ t.ui('compareTitle') }}</h2>
      <div class="compare-grid">
        <div>
          <h3>{{ t.inline('Gemeinsam', 'Shared', 'Общее', 'En común') }}</h3>
          <ul>
            <li>{{ t.inline('Bis zu 6 Gäste, exklusive Nutzung', 'Up to 6 guests, exclusive use', 'До 6 гостей, эксклюзивное пользование', 'Hasta 6 huéspedes, uso exclusivo') }}</li>
            <li>{{ t.inline('3 Schlafzimmer, 3 Badezimmer', '3 bedrooms, 3 bathrooms', '3 спальни, 3 ванные комнаты', '3 dormitorios, 3 baños') }}</li>
            <li>{{ t.inline('Privater Pool und Meerblick', 'Private pool and sea view', 'Частный бассейн и вид на море', 'Piscina privada y vistas al mar') }}</li>
            <li>{{ t.inline('Zwei private Parkplätze', 'Two private parking spaces', 'Два частных парковочных места', 'Dos plazas de aparcamiento privadas') }}</li>
          </ul>
        </div>
        <div>
          <h3>Villa MonteMare</h3>
          <p>{{ t.inline('Mediterraner Garten mit alten Olivenbäumen, besonders natürliche Atmosphäre.', 'Mediterranean garden with old olive trees, an especially natural atmosphere.', 'Средиземноморский сад со старыми оливковыми деревьями и особенно естественной атмосферой.', 'Jardín mediterráneo con olivos centenarios y un ambiente especialmente natural.') }}</p>
        </div>
        <div>
          <h3>Villa Lumina</h3>
          <p>{{ t.inline('Dachterrasse, Glasfaser-Internet und separater Arbeitsbereich mit Getränkeküche.', 'Rooftop terrace, fibre internet and a separate work area with kitchenette.', 'Терраса на крыше, оптоволоконный интернет и отдельная рабочая зона с мини-кухней.', 'Azotea, internet de fibra y zona de trabajo independiente con pequeña cocina.') }}</p>
        </div>
      </div>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container">
      <p class="eyebrow">{{ t.ui('distancesTitle') }}</p>
      <h2>{{ t.inline('Lage und Umgebung', 'Location and surroundings', 'Расположение и окрестности', 'Ubicación y alrededores') }}</h2>
      <ul class="distances">
        @for (d of distances; track d.label.de) {
          <li><span>{{ t.t(d.label) }}</span><strong>{{ d.value }}</strong></li>
        }
      </ul>
      <a class="btn btn-quiet" [routerLink]="locationPath()">
        {{ t.inline('Zur Lage-Seite', 'View location page', 'Подробнее о расположении', 'Ver ubicación') }}
      </a>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container" id="erlebnisse">
      <h2>{{ t.inline('Erlebnisse & Reiseführer', 'Experiences & guides', 'Впечатления и путеводители', 'Experiencias y guías') }}</h2>
      <div class="guides-grid">
        @for (g of guides; track g.slug) {
          <a class="guide-card" [routerLink]="guidePath(g.slug)">
            <h3>{{ t.t(g.title) }}</h3>
            <p>{{ t.t(g.excerpt) }}</p>
          </a>
        }
      </div>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container" id="kontakt">
      <div class="booking-layout">
        <div>
          <p class="eyebrow">{{ t.ui('faqTitle') }}</p>
          <h2>{{ t.ui('faqTitle') }}</h2>
          <dl class="faq">
            @for (item of faqPreview; track item.q) {
              <div class="faq-item">
                <dt>{{ item.q }}</dt>
                <dd>{{ item.a }}</dd>
              </div>
            }
          </dl>
        </div>
        <app-booking-widget />
      </div>
    </section>
  `, styles: ["\n    .hero {\n      position: relative;\n      min-height: min(920px, calc(100svh - 72px));\n      display: flex;\n      align-items: flex-end;\n      color: var(--c-limestone);\n      overflow: hidden;\n    }\n    .hero-slideshow, .hero-media {\n      position: absolute;\n      inset: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .hero-slideshow { overflow: hidden; background: var(--c-adria); }\n    .hero-media {\n      object-fit: cover;\n    }\n    .hero-slide { opacity: 0; animation-duration: 48s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; will-change: opacity, transform; }\n    .slide-one, .slide-three { animation-name: heroFadeZoomIn; }\n    .slide-two, .slide-four { animation-name: heroFadeZoomOut; }\n    .slide-one { animation-delay: 0s; }\n    .slide-two { animation-delay: -36s; }\n    .slide-three { animation-delay: -24s; }\n    .slide-four { animation-delay: -12s; }\n    @keyframes heroFadeZoomIn {\n      0% { opacity: 1; transform: scale(1); }\n      19% { opacity: 1; transform: scale(1.045); }\n      25% { opacity: 0; transform: scale(1.06); }\n      95% { opacity: 0; transform: scale(1); }\n      100% { opacity: 1; transform: scale(1); }\n    }\n    @keyframes heroFadeZoomOut {\n      0% { opacity: 1; transform: scale(1.06); }\n      19% { opacity: 1; transform: scale(1.015); }\n      25% { opacity: 0; transform: scale(1); }\n      95% { opacity: 0; transform: scale(1.06); }\n      100% { opacity: 1; transform: scale(1.06); }\n    }\n    .hero::after {\n      content: '';\n      position: absolute;\n      inset: 0;\n      background: linear-gradient(90deg, rgba(12,31,40,.72) 0%, rgba(12,31,40,.34) 48%, rgba(12,31,40,.08) 75%), linear-gradient(0deg, rgba(12,31,40,.52), transparent 55%);\n      z-index: 1;\n      pointer-events: none;\n    }\n    .hero-content { position: relative; z-index: 2; padding-block: clamp(4rem, 10vh, 8rem); width: 100%; }\n    .hero-content .eyebrow { color: var(--c-champagne); }\n    .hero h1 { color: var(--c-limestone); font-style: italic; font-weight: 300; max-width: 12ch; text-wrap: balance; text-shadow: 0 4px 30px rgba(0,0,0,.16); }\n    .hero-sub { font-size: 1.15rem; max-width: 46ch; color: color-mix(in srgb, var(--c-limestone) 92%, transparent); }\n    .hero-facts { font-size: 0.9rem; letter-spacing: 0.03em; color: color-mix(in srgb, var(--c-limestone) 75%, transparent); }\n    .hero-ctas { display: flex; gap: var(--space-2); margin-top: var(--space-3); flex-wrap: wrap; }\n    .hero-horizon { position: absolute; z-index: 2; bottom: 0; margin: 0; background: color-mix(in srgb, var(--c-limestone) 30%, transparent); }\n\n    .villa-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-top: var(--space-3); }\n    .villa-card { border: 1px solid color-mix(in srgb, var(--c-sand) 72%, transparent); border-radius: var(--radius-lg); overflow: hidden; background: var(--c-ivory); box-shadow: var(--shadow-soft); transition: transform 400ms ease, box-shadow 400ms ease; }\n    .villa-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lifted); }\n    .villa-media {\n      width: 100%;\n      aspect-ratio: 4 / 3;\n      overflow: hidden;\n      background: var(--c-sand);\n    }\n    .villa-media img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      object-position: center center;\n    }\n    .villa-body { padding: clamp(1.5rem, 3vw, 2.5rem); }\n    .villa-price { color: var(--c-adria); margin-block: var(--space-2); }\n    .villa-price strong { font-family: var(--font-display); font-size: 1.35rem; font-weight: 500; }\n    .facts { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 0.4rem 1rem; margin: var(--space-2) 0; font-size: 0.88rem; color: var(--c-olive); }\n    .villa-ctas { display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-2); }\n\n    .home-gallery { display: grid; grid-template-columns: 1.35fr 1fr 1fr; grid-template-rows: repeat(2, 230px); gap: var(--space-1); margin-top: var(--space-3); }\n    .home-gallery button { display: block; width: 100%; height: 100%; padding: 0; border: 0; background: transparent; cursor: zoom-in; overflow: hidden; border-radius: var(--radius-lg); }\n    .home-gallery img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 300ms ease; }\n    .home-gallery button:hover img { transform: scale(1.025); }\n    .home-gallery button:first-child { grid-row: 1 / 3; }\n    .home-gallery button:nth-child(2) { grid-column: 2 / 4; }\n    .gallery-actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: var(--space-3); }\n\n    .compare-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: var(--space-4); margin-top: var(--space-3); }\n    .compare-grid ul { padding-left: 1.1rem; }\n    .compare-grid li { margin-bottom: 0.4rem; }\n\n    .distances { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0.6rem 2rem; max-width: 640px; margin: var(--space-3) 0 var(--space-3); }\n    .distances li { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--c-sand); padding-bottom: 0.35rem; }\n    .distances strong { color: var(--c-adria); }\n\n    .guides-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-3); margin-top: var(--space-3); }\n    .guide-card { display: block; padding: clamp(1.5rem, 3vw, 2.25rem); border: 1px solid color-mix(in srgb, var(--c-sand) 76%, transparent); border-radius: var(--radius-lg); text-decoration: none; color: var(--c-anthracite); background: var(--c-ivory); box-shadow: var(--shadow-soft); transition: transform 300ms ease, border-color 300ms ease; }\n    .guide-card h3 { margin-bottom: 0.4rem; }\n    .guide-card p { color: var(--c-anthracite); font-size: 0.92rem; }\n    .guide-card:hover { border-color: var(--c-champagne); transform: translateY(-4px); }\n\n    .booking-layout { display: grid; grid-template-columns: 1.1fr 1fr; gap: var(--space-5); align-items: start; }\n    .faq { margin-top: var(--space-3); }\n    .faq-item { margin-bottom: var(--space-3); }\n    .faq-item dt { font-weight: 600; color: var(--c-adria); margin-bottom: 0.25rem; }\n    .faq-item dd { margin: 0; color: var(--c-anthracite); }\n\n    @media (max-width: 900px) {\n      .villa-grid, .compare-grid, .guides-grid, .booking-layout { grid-template-columns: minmax(0, 1fr); }\n      .booking-layout > * { min-width: 0; }\n      .distances { grid-template-columns: 1fr; }\n      .home-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: repeat(2, 190px); }\n      .home-gallery button:first-child, .home-gallery button:nth-child(2) { grid-column: auto; grid-row: auto; }\n    }\n    @media (max-width: 600px) {\n      .hero { min-height: calc(100svh - 64px); align-items: flex-end; }\n      .hero-media { object-position: 57% center; }\n      .slide-two, .slide-three { object-position: center center; }\n      .hero-content { padding-block: 4rem 3.25rem; }\n      .hero h1 { max-width: 10ch; }\n      .hero-sub { font-size: 1rem; }\n      .hero-facts { line-height: 1.75; }\n      .hero-ctas, .villa-ctas, .gallery-actions { display: grid; grid-template-columns: 1fr; width: 100%; }\n      .villa-grid { gap: 1.5rem; }\n      .villa-media { aspect-ratio: 4 / 3; }\n      .home-gallery { grid-template-columns: 1fr; grid-template-rows: none; gap: .65rem; }\n      .home-gallery button { height: auto; aspect-ratio: 4 / 3; }\n      .compare-grid { gap: 1.75rem; }\n      .distances li { gap: 1rem; align-items: baseline; }\n      .distances strong { white-space: nowrap; }\n    }\n    @media (prefers-reduced-motion: reduce) {\n      .hero-slide { display: none; animation: none; }\n      .slide-one { display: block; opacity: 1; transform: none; }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent" }); })();
//# sourceMappingURL=home.component.js.map