import { Component, HostListener, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { VILLAS, GUIDE_ARTICLES, DISTANCES } from '../../core/data/content.data';
import { BookingWidgetComponent } from '../../shared/booking-widget/booking-widget.component';
import { ImageLightboxComponent } from '../../shared/image-lightbox/image-lightbox.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label.de;
const _forTrack1 = ($index, $item) => $item.de;
const _forTrack2 = ($index, $item) => $item.question.de;
const _forTrack3 = ($index, $item) => $item.slug;
const _c0 = a0 => [a0];
const _c1 = () => [];
function VillaDetailComponent_Conditional_0_For_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.t(paragraph_r1));
} }
function VillaDetailComponent_Conditional_0_For_106_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 62);
    i0.ɵɵlistener("click", function VillaDetailComponent_Conditional_0_For_106_Conditional_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const $index_r4 = i0.ɵɵnextContext().$index; i0.ɵɵnextContext(); const villaLightbox_r5 = i0.ɵɵreference(94); return i0.ɵɵresetView(villaLightbox_r5.open($index_r4)); });
    i0.ɵɵelement(1, "img", 32);
    i0.ɵɵelementStart(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const img_r7 = ctx_r5.$implicit;
    const $index_r4 = ctx_r5.$index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-label", ctx_r1.galleryAlt(img_r7));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", img_r7, i0.ɵɵsanitizeUrl)("alt", ctx_r1.galleryAlt(img_r7));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(($index_r4 + 1).toString().padStart(2, "0"));
} }
function VillaDetailComponent_Conditional_0_For_106_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 61);
} if (rf & 2) {
    const img_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵattribute("aria-label", "Platzhalter: " + img_r7);
} }
function VillaDetailComponent_Conditional_0_For_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, VillaDetailComponent_Conditional_0_For_106_Conditional_0_Template, 4, 4, "button", 60)(1, VillaDetailComponent_Conditional_0_For_106_Conditional_1_Template, 1, 1, "div", 61);
} if (rf & 2) {
    const img_r7 = ctx.$implicit;
    i0.ɵɵconditional(img_r7.startsWith("/assets/") ? 0 : 1);
} }
function VillaDetailComponent_Conditional_0_Conditional_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 39)(1, "p", 10);
    i0.ɵɵtext(2, "Villa Lumina");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "video", 63);
    i0.ɵɵelement(6, "source", 64);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Video-Rundgang", "Video tour", "\u0412\u0438\u0434\u0435\u043E\u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F", "Recorrido en v\u00EDdeo"));
} }
function VillaDetailComponent_Conditional_0_For_120_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 44)(1, "span", 65);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const highlight_r8 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(($index_r9 + 1).toString().padStart(2, "0"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(highlight_r8.label));
} }
function VillaDetailComponent_Conditional_0_For_129_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.t(item_r10));
} }
function VillaDetailComponent_Conditional_0_Conditional_132_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "h2");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("L\u00E4nger bleiben", "Stay a little longer", "\u041E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u043F\u043E\u0434\u043E\u043B\u044C\u0448\u0435", "Qu\u00E9date un poco m\u00E1s"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Workation \u00FCber der Adria", "Workation above the Adriatic", "\u0420\u0430\u0431\u043E\u0442\u0430 \u043D\u0430\u0434 \u0410\u0434\u0440\u0438\u0430\u0442\u0438\u043A\u043E\u0439", "Teletrabajo sobre el Adri\u00E1tico"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.t.inline("Villa Lumina eignet sich mit separatem Arbeitsbereich, Getr\u00E4nkek\u00FCche und schnellem Glasfaser-Internet gezielt f\u00FCr l\u00E4ngere, arbeitsintensive Aufenthalte.", "With a separate work area, kitchenette and fast fibre internet, Villa Lumina is well suited to longer, work-intensive stays.", "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0437\u043E\u043D\u0435, \u043C\u0438\u043D\u0438-\u043A\u0443\u0445\u043D\u0435 \u0438 \u0431\u044B\u0441\u0442\u0440\u043E\u043C\u0443 \u043E\u043F\u0442\u043E\u0432\u043E\u043B\u043E\u043A\u043E\u043D\u043D\u043E\u043C\u0443 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443 Villa Lumina \u043E\u0442\u043B\u0438\u0447\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0438 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.", "Con una zona de trabajo independiente, peque\u00F1a cocina e internet de fibra r\u00E1pida, Villa Lumina es ideal para estancias largas con teletrabajo."), " ");
} }
function VillaDetailComponent_Conditional_0_For_141_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const d_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(d_r11.label));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r11.value);
} }
function VillaDetailComponent_Conditional_0_For_149_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(item_r12.question));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(item_r12.answer));
} }
function VillaDetailComponent_Conditional_0_For_154_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", ctx_r1.guidePath(g_r13.slug));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.t(g_r13.title));
} }
function VillaDetailComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header", 1);
    i0.ɵɵelement(1, "img", 2)(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4)(4, "nav", 5)(5, "a", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 7);
    i0.ɵɵtext(8, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 8);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 9)(12, "p", 10);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "h1");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 11);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 12)(19, "span")(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span")(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span")(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "span")(32, "strong");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 13)(36, "a", 14);
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "a", 15);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(40, "nav", 16)(41, "div", 17)(42, "a", 18);
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "a", 19);
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "a", 20);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "a", 21);
    i0.ɵɵtext(49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "a", 22);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "div", 23)(53, "section", 24)(54, "div", 25);
    i0.ɵɵelement(55, "img", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 27)(57, "p", 10);
    i0.ɵɵtext(58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "h2");
    i0.ɵɵtext(60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "p", 28);
    i0.ɵɵtext(62);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(63, VillaDetailComponent_Conditional_0_For_64_Template, 2, 1, "p", null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "section", 29)(66, "div", 30)(67, "div")(68, "strong");
    i0.ɵɵtext(69);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "span");
    i0.ɵɵtext(71);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(72, "div")(73, "strong");
    i0.ɵɵtext(74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "span");
    i0.ɵɵtext(76);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "div")(78, "strong");
    i0.ɵɵtext(79);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "span");
    i0.ɵɵtext(81);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(82, "div")(83, "strong");
    i0.ɵɵtext(84);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "span");
    i0.ɵɵtext(86);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(87, "section", 31);
    i0.ɵɵelement(88, "img", 32)(89, "div", 33);
    i0.ɵɵelementStart(90, "div", 34)(91, "p");
    i0.ɵɵtext(92);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(93, "app-image-lightbox", 35, 0);
    i0.ɵɵelementStart(95, "section", 36)(96, "div", 37)(97, "div")(98, "p", 10);
    i0.ɵɵtext(99);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "h2");
    i0.ɵɵtext(101);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(102, "p");
    i0.ɵɵtext(103);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(104, "div", 38);
    i0.ɵɵrepeaterCreate(105, VillaDetailComponent_Conditional_0_For_106_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(107, VillaDetailComponent_Conditional_0_Conditional_107_Template, 7, 1, "section", 39);
    i0.ɵɵelementStart(108, "section", 40)(109, "div", 41)(110, "div", 42)(111, "div")(112, "p", 10);
    i0.ɵɵtext(113);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(114, "h2");
    i0.ɵɵtext(115);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(116, "p");
    i0.ɵɵtext(117);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(118, "div", 43);
    i0.ɵɵrepeaterCreate(119, VillaDetailComponent_Conditional_0_For_120_Template, 5, 2, "article", 44, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(121, "div", 45)(122, "div")(123, "p", 10);
    i0.ɵɵtext(124);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(125, "h2");
    i0.ɵɵtext(126);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(127, "ul", 46);
    i0.ɵɵrepeaterCreate(128, VillaDetailComponent_Conditional_0_For_129_Template, 2, 1, "li", null, _forTrack1);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(130, "section", 47)(131, "div", 48);
    i0.ɵɵtemplate(132, VillaDetailComponent_Conditional_0_Conditional_132_Template, 6, 3);
    i0.ɵɵelementStart(133, "p", 10);
    i0.ɵɵtext(134);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(135, "h2");
    i0.ɵɵtext(136);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(137, "p");
    i0.ɵɵtext(138);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(139, "ul", 49);
    i0.ɵɵrepeaterCreate(140, VillaDetailComponent_Conditional_0_For_141_Template, 5, 2, "li", null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(142, "a", 50);
    i0.ɵɵtext(143);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(144, "div", 51);
    i0.ɵɵelementStart(145, "h2");
    i0.ɵɵtext(146);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(147, "dl", 52);
    i0.ɵɵrepeaterCreate(148, VillaDetailComponent_Conditional_0_For_149_Template, 5, 2, "div", 53, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(150, "h2");
    i0.ɵɵtext(151);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(152, "ul", 54);
    i0.ɵɵrepeaterCreate(153, VillaDetailComponent_Conditional_0_For_154_Template, 3, 2, "li", null, _forTrack3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(155, "p", 55)(156, "a", 6);
    i0.ɵɵtext(157);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(158, "aside", 56)(159, "div", 57);
    i0.ɵɵelement(160, "app-booking-widget", 58);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(161, "a", 59);
    i0.ɵɵtext(162);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.heroImage(), i0.ɵɵsanitizeUrl)("alt", ctx_r1.t.t(ctx_r1.villa.heroImageAlt));
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("aria-label", ctx_r1.t.inline("Brotkr\u00FCmelnavigation", "Breadcrumb", "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0446\u0435\u043F\u043E\u0447\u043A\u0430", "Migas de pan"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(80, _c0, "/" + ctx_r1.locale()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Start", "Home", "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", "Inicio"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.villa.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Re\u017Eevi\u0107i \u00B7 Budva Riviera \u00B7 Montenegro", "Re\u017Eevi\u0107i \u00B7 Budva Riviera \u00B7 Montenegro", "\u0420\u0435\u0436\u0435\u0432\u0438\u0447\u0438 \u00B7 \u0411\u0443\u0434\u0432\u0430\u043D\u0441\u043A\u0430\u044F \u0440\u0438\u0432\u044C\u0435\u0440\u0430 \u00B7 \u0427\u0435\u0440\u043D\u043E\u0433\u043E\u0440\u0438\u044F", "Re\u017Eevi\u0107i \u00B7 Riviera de Budva \u00B7 Montenegro"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.villa.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(ctx_r1.villa.tagline));
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r1.t.inline("Eckdaten der Villa", "Villa facts", "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0438\u043B\u043B\u044B", "Datos de la villa"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.villa.guests);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.t.inline("G\u00E4ste", "guests", "\u0433\u043E\u0441\u0442\u0435\u0439", "hu\u00E9spedes"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.villa.bedrooms);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.t.inline("Schlafzimmer", "bedrooms", "\u0441\u043F\u0430\u043B\u044C\u043D\u0438", "dormitorios"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.villa.bathrooms);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.t.inline("B\u00E4der", "bathrooms", "\u0432\u0430\u043D\u043D\u044B\u0435", "ba\u00F1os"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.villa.nightlyRateEur, " \u20AC");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.t.inline("/ Nacht", "/ night", "/ \u043D\u043E\u0447\u044C", "/ noche"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(82, _c1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.ui("ctaCheckAvailability"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(83, _c1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Villa entdecken", "Discover the villa", "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0438\u043B\u043B\u0443", "Descubrir la villa"));
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r1.t.inline("Seitennavigation", "Page sections", "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B", "Secciones de la p\u00E1gina"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(84, _c1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Die Villa", "The villa", "\u0412\u0438\u043B\u043B\u0430", "La villa"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(85, _c1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Galerie", "Gallery", "\u0413\u0430\u043B\u0435\u0440\u0435\u044F", "Galer\u00EDa"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(86, _c1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Ausstattung", "Amenities", "\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u0430", "Comodidades"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(87, _c1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Lage", "Location", "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435", "Ubicaci\u00F3n"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(88, _c1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Aufenthalt planen", "Plan your stay", "\u0421\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0434\u044B\u0445", "Planificar estancia"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.storyImage(), i0.ɵɵsanitizeUrl)("alt", ctx_r1.galleryAlt(ctx_r1.storyImage()));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Privat wohnen. Weit blicken.", "Private living. Endless views.", "\u0423\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435. \u0411\u0435\u0441\u043A\u0440\u0430\u0439\u043D\u0438\u0439 \u0432\u0438\u0434.", "Privacidad. Vistas infinitas."));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Die Villa", "The villa", "\u0412\u0438\u043B\u043B\u0430", "La villa"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(ctx_r1.villa.intro));
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.villa.description);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", ctx_r1.t.inline("Eckdaten", "Key facts", "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F", "Datos principales"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.villa.guests);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("G\u00E4ste", "Guests", "\u0413\u043E\u0441\u0442\u0435\u0439", "Hu\u00E9spedes"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.villa.bedrooms);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Schlafzimmer", "Bedrooms", "\u0421\u043F\u0430\u043B\u044C\u043D\u0438", "Dormitorios"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.villa.bathrooms);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Badezimmer", "Bathrooms", "\u0412\u0430\u043D\u043D\u044B\u0435", "Ba\u00F1os"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.villa.nightlyRateEur, " \u20AC");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("ab / Nacht", "from / night", "\u043E\u0442 / \u043D\u043E\u0447\u044C", "desde / noche"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r1.atmosphereImage(), i0.ɵɵsanitizeUrl)("alt", ctx_r1.galleryAlt(ctx_r1.atmosphereImage()));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.atmosphereLine());
    i0.ɵɵadvance();
    i0.ɵɵproperty("images", ctx_r1.villa.galleryImagePlaceholders)("altText", ctx_r1.galleryAltForLightbox)("label", ctx_r1.t.inline("Bildergalerie", "Image gallery", "\u0424\u043E\u0442\u043E\u0433\u0430\u043B\u0435\u0440\u0435\u044F", "Galer\u00EDa de im\u00E1genes"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("R\u00E4ume \u00B7 Licht \u00B7 Adria", "Spaces \u00B7 Light \u00B7 Adriatic", "\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u00B7 \u0421\u0432\u0435\u0442 \u00B7 \u0410\u0434\u0440\u0438\u0430\u0442\u0438\u043A\u0430", "Espacios \u00B7 Luz \u00B7 Adri\u00E1tico"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.t.inline("Einblicke in ", "Inside ", "\u0412\u0437\u0433\u043B\u044F\u0434 \u043D\u0430 ", "Descubre "), "", ctx_r1.villa.name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("W\u00E4hlen Sie ein Bild, um die Galerie im Vollbild zu \u00F6ffnen.", "Select an image to open the full-screen gallery.", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u0443\u044E \u0433\u0430\u043B\u0435\u0440\u0435\u044E.", "Selecciona una imagen para abrir la galer\u00EDa a pantalla completa."));
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r1.t.inline("Bildergalerie", "Image gallery", "\u0424\u043E\u0442\u043E\u0433\u0430\u043B\u0435\u0440\u0435\u044F", "Galer\u00EDa de im\u00E1genes"));
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.villa.galleryImagePlaceholders);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.villa.slug === "villa-lumina" ? 107 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Was den Aufenthalt besonders macht", "What makes the stay special", "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u043E\u0442\u0434\u044B\u0445 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u044B\u043C", "Lo que hace especial la estancia"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Vier besondere Seiten", "Four defining features", "\u0427\u0435\u0442\u044B\u0440\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u044B\u0435 \u0447\u0435\u0440\u0442\u044B", "Cuatro rasgos \u00FAnicos"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.t(ctx_r1.villa.positioning));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.villa.highlights);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Alles f\u00FCr Ihren Aufenthalt", "Everything for your stay", "\u0412\u0441\u0451 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0442\u0434\u044B\u0445\u0430", "Todo para tu estancia"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Ausstattung", "Amenities", "\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u0430", "Comodidades"));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.villa.amenities);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.villa.suitableForWorkation ? 132 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Zwischen Meer und Bergen", "Between sea and mountains", "\u041C\u0435\u0436\u0434\u0443 \u043C\u043E\u0440\u0435\u043C \u0438 \u0433\u043E\u0440\u0430\u043C\u0438", "Entre el mar y las monta\u00F1as"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Die Lage", "The location", "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435", "La ubicaci\u00F3n"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.t.inline("Smokov vijenac, Drobni\u0107i, Gemeinde Budva \u2013 ruhig gelegen und zugleich nah an den besonderen Orten der montenegrinischen K\u00FCste.", "Smokov vijenac, Drobni\u0107i, Budva Municipality \u2013 peacefully located yet close to the defining places of Montenegro\u2019s coast.", "Smokov vijenac, \u0414\u0440\u043E\u0431\u043D\u0438\u0447\u0438, \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u0438\u0442\u0435\u0442 \u0411\u0443\u0434\u0432\u0430 \u2014 \u0442\u0438\u0445\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u0440\u044F\u0434\u043E\u043C \u0441 \u0433\u043B\u0430\u0432\u043D\u044B\u043C\u0438 \u0434\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u043F\u043E\u0431\u0435\u0440\u0435\u0436\u044C\u044F \u0427\u0435\u0440\u043D\u043E\u0433\u043E\u0440\u0438\u0438.", "Smokov vijenac, Drobni\u0107i, municipio de Budva: tranquilidad cerca de los lugares m\u00E1s especiales de la costa montenegrina."));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.distances);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", ctx_r1.locationPath());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.t.inline("Zur Lage-Seite", "View location page", "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F", "Ver p\u00E1gina de ubicaci\u00F3n"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.t.ui("faqTitle"));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.villa.faq);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.t.ui("relatedGuides"));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.relatedGuides());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", ctx_r1.otherVillaPath());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.t.inline("Zur anderen Villa: ", "See the other villa: ", "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u0432\u0438\u043B\u043B\u0443: ", "Ver la otra villa: "), "", ctx_r1.otherVilla == null ? null : ctx_r1.otherVilla.name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("preselectedVillaSlug", ctx_r1.villa.slug);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("visible", ctx_r1.showMobileCta());
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(89, _c1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.t.ui("ctaCheckAvailability"));
} }
export class VillaDetailComponent {
    t = inject(TranslationService);
    seo = inject(SeoService);
    structuredData = inject(StructuredDataService);
    route = inject(ActivatedRoute);
    distances = DISTANCES;
    showMobileCta = signal(false);
    villa;
    otherVilla;
    ngOnInit() {
        const locale = this.route.snapshot.data['locale'] ?? 'de';
        this.t.setLocale(locale);
        const slug = this.route.snapshot.paramMap.get('slug');
        this.villa = VILLAS.find((v) => v.slug === slug);
        this.otherVilla = VILLAS.find((v) => v.slug !== slug);
        if (!this.villa)
            return;
        const routeBase = locale === 'de' ? 'villen' : 'villas';
        this.seo.setPage({
            locale,
            path: `${routeBase}/${this.villa.slug}`,
            title: this.t.t(this.villa.seoTitle),
            description: this.t.t(this.villa.metaDescription),
        });
        this.structuredData.setJsonLd('ld-villa', [
            this.structuredData.buildVillaGraph(this.villa, locale),
            this.structuredData.buildFaqGraph(this.villa.faq, locale),
            this.structuredData.buildBreadcrumbGraph([
                { name: { de: 'Start', en: 'Home', ru: 'Главная', es: 'Inicio' }[locale], path: '' },
                { name: this.villa.name, path: `${routeBase}/${this.villa.slug}` },
            ], locale),
        ]);
    }
    locale() {
        return this.t.locale();
    }
    updateMobileCta() {
        this.showMobileCta.set(typeof window !== 'undefined' && window.scrollY > window.innerHeight * 0.72);
    }
    heroImage() {
        return this.villa?.galleryImagePlaceholders[0] ?? '';
    }
    storyImage() {
        return this.villa?.galleryImagePlaceholders[1] ?? this.heroImage();
    }
    atmosphereImage() {
        return this.villa?.galleryImagePlaceholders[2] ?? this.heroImage();
    }
    atmosphereLine() {
        return this.t.inline('Morgens Licht über den Bergen. Abends Ruhe über der Adria.', 'Morning light over the mountains. Evening stillness above the Adriatic.', 'Утром — свет над горами. Вечером — тишина над Адриатикой.', 'Por la mañana, luz sobre las montañas. Al atardecer, calma sobre el Adriático.');
    }
    galleryAlt(path) {
        const subject = path.includes('sunset') ? ['Meerblick bei Sonnenuntergang', 'Adriatic view at sunset', 'Вид на Адриатику на закате', 'Vista del Adriático al atardecer']
            : path.includes('exterior-pool') ? ['Außenansicht mit privatem Pool', 'Exterior with private pool', 'Вилла с частным бассейном', 'Exterior con piscina privada']
                : path.includes('rooftop') ? ['Dachterrasse mit Meerblick', 'Rooftop terrace with sea view', 'Терраса на крыше с видом на море', 'Azotea con vistas al mar']
                    : path.includes('living') ? ['Heller Wohnbereich', 'Bright living room', 'Светлая гостиная', 'Salón luminoso']
                        : path.includes('dining') ? ['Essbereich und offene Küche', 'Dining area and open kitchen', 'Обеденная зона и открытая кухня', 'Comedor y cocina abierta']
                            : path.includes('bedroom') ? ['Schlafzimmer mit Meerblick', 'Bedroom with sea view', 'Спальня с видом на море', 'Dormitorio con vistas al mar']
                                : path.includes('bathroom') ? ['Modernes Badezimmer', 'Modern bathroom', 'Современная ванная комната', 'Baño moderno']
                                    : ['Private Luxusvilla in Reževići', 'Private luxury villa in Reževići', 'Частная вилла класса люкс в Режевичи', 'Villa privada de lujo en Reževići'];
        const index = { de: 0, en: 1, ru: 2, es: 3 };
        return `${subject[index[this.locale()]]} – ${this.villa?.name ?? 'Villa'}`;
    }
    galleryAltForLightbox = (path) => this.galleryAlt(path);
    relatedGuides() {
        return GUIDE_ARTICLES.filter((g) => g.relatedVillaSlugs.includes(this.villa?.slug ?? ''));
    }
    guidePath(slug) {
        const locale = this.locale();
        return locale === 'de' ? ['/de/reisefuehrer', slug] : [`/${locale}/guides`, slug];
    }
    locationPath() {
        const locale = this.locale();
        return locale === 'de' ? ['/de/lage-budva-riviera'] : [`/${locale}/location-budva-riviera`];
    }
    otherVillaPath() {
        const locale = this.locale();
        const base = locale === 'de' ? '/de/villen' : `/${locale}/villas`;
        return [base, this.otherVilla?.slug ?? ''];
    }
    static ɵfac = function VillaDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || VillaDetailComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: VillaDetailComponent, selectors: [["app-villa-detail"]], hostBindings: function VillaDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function VillaDetailComponent_scroll_HostBindingHandler() { return ctx.updateMobileCta(); }, false, i0.ɵɵresolveWindow);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["villaLightbox", ""], [1, "villa-hero"], ["width", "1920", "height", "1280", "fetchpriority", "high", 1, "villa-hero-image", 3, "src", "alt"], ["aria-hidden", "true", 1, "villa-hero-shade"], [1, "villa-hero-inner", "container"], [1, "breadcrumbs"], [3, "routerLink"], ["aria-hidden", "true"], ["aria-current", "page"], [1, "hero-copy"], [1, "eyebrow"], [1, "tagline"], [1, "hero-facts"], [1, "hero-actions"], ["fragment", "verfuegbarkeit", 1, "btn", "btn-primary", 3, "routerLink"], ["fragment", "villa-ueberblick", 1, "btn", "btn-secondary", 3, "routerLink"], [1, "section-nav"], [1, "container", "section-nav-inner"], ["fragment", "villa-ueberblick", 3, "routerLink"], ["fragment", "villa-galerie", 3, "routerLink"], ["fragment", "villa-ausstattung", 3, "routerLink"], ["fragment", "villa-lage", 3, "routerLink"], ["fragment", "verfuegbarkeit", 1, "section-nav-book", 3, "routerLink"], [1, "villa-content"], ["id", "villa-ueberblick", 1, "story-section", "section", "container"], [1, "story-image-wrap"], ["width", "1280", "height", "1600", "loading", "eager", 3, "src", "alt"], [1, "story-copy"], [1, "story-lead"], [1, "stat-band"], [1, "container", "stat-grid"], [1, "atmosphere-band"], ["width", "1920", "height", "1280", "loading", "lazy", 3, "src", "alt"], ["aria-hidden", "true", 1, "atmosphere-overlay"], [1, "container", "atmosphere-copy"], [3, "images", "altText", "label"], ["id", "villa-galerie", 1, "gallery-section", "section", "container"], [1, "section-heading"], [1, "gallery"], [1, "section", "container", "video-tour"], ["id", "villa-ausstattung", 1, "highlight-section", "section"], [1, "container"], [1, "section-heading", "light-heading"], [1, "highlight-grid"], [1, "highlight-card"], [1, "amenities-panel"], [1, "amenities"], ["id", "villa-lage", 1, "section", "container", "detail-grid"], [1, "detail-main"], [1, "distances"], [1, "btn", "btn-quiet", 3, "routerLink"], [1, "horizon-divider"], [1, "faq"], [1, "faq-item"], [1, "related-guides"], [1, "other-villa"], [1, "detail-sidebar"], [1, "sticky-box"], [3, "preselectedVillaSlug"], ["fragment", "verfuegbarkeit", 1, "mobile-sticky-cta", "btn", "btn-primary", 3, "routerLink"], ["type", "button", 1, "gallery-item"], ["role", "img", 1, "gallery-item", "gallery-placeholder"], ["type", "button", 1, "gallery-item", 3, "click"], ["controls", "", "playsinline", "", "preload", "metadata", "poster", "/assets/media/lumina/lumina-video-poster.webp"], ["src", "/assets/media/lumina/lumina-tour.mp4", "type", "video/mp4"], [1, "highlight-number"]], template: function VillaDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, VillaDetailComponent_Conditional_0_Template, 163, 90);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.villa ? 0 : -1);
        } }, dependencies: [RouterLink, BookingWidgetComponent, ImageLightboxComponent], styles: ["[_nghost-%COMP%] { display: block; }\n    .villa-content[_ngcontent-%COMP%] { overflow: clip; }\n    section[id][_ngcontent-%COMP%] { scroll-margin-top: 8.5rem; }\n    .villa-hero[_ngcontent-%COMP%] { min-height: min(830px, calc(100svh - 72px)); position: relative; display: grid; overflow: hidden; background: var(--c-adria); }\n    .villa-hero-image[_ngcontent-%COMP%] { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; animation: _ngcontent-%COMP%_hero-breathe 18s ease-in-out infinite alternate; }\n    .villa-hero-shade[_ngcontent-%COMP%] { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(9, 26, 34, .8) 0%, rgba(9, 26, 34, .48) 50%, rgba(9, 26, 34, .12) 100%), linear-gradient(0deg, rgba(9, 26, 34, .58), transparent 56%); }\n    .villa-hero-inner[_ngcontent-%COMP%] { position: relative; z-index: 1; display: flex; flex-direction: column; width: 100%; padding-block: 1.25rem clamp(3.5rem, 9vh, 7rem); }\n    .breadcrumbs[_ngcontent-%COMP%] { display: flex; gap: .55rem; font-size: .82rem; color: rgba(255,255,255,.72); }\n    .breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: rgba(255,255,255,.9); }\n    .hero-copy[_ngcontent-%COMP%] { margin-top: auto; max-width: 860px; }\n    .hero-copy[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] { color: var(--c-champagne); }\n    .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { color: var(--c-ivory); font-size: clamp(4rem, 9vw, 8rem); margin-bottom: .5rem; }\n    .tagline[_ngcontent-%COMP%] { color: var(--c-ivory); font-family: var(--font-display); font-size: clamp(1.4rem, 2.5vw, 2.25rem); line-height: 1.25; max-width: 28ch; }\n    .hero-facts[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: .75rem 2rem; margin-top: 2rem; color: rgba(255,255,255,.78); font-size: .9rem; text-transform: uppercase; letter-spacing: .08em; }\n    .hero-facts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #fff; font-size: 1.05rem; }\n    .hero-actions[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }\n    @keyframes _ngcontent-%COMP%_hero-breathe { from { transform: scale(1.01); } to { transform: scale(1.07); } }\n\n    .section-nav[_ngcontent-%COMP%] { position: sticky; top: 72px; z-index: 45; background: color-mix(in srgb, var(--c-limestone) 94%, transparent); backdrop-filter: blur(16px); border-bottom: 1px solid color-mix(in srgb, var(--c-sand) 70%, transparent); }\n    .section-nav-inner[_ngcontent-%COMP%] { display: flex; align-items: center; gap: clamp(1.2rem, 3vw, 3rem); min-height: 62px; overflow-x: auto; scrollbar-width: none; }\n    .section-nav-inner[_ngcontent-%COMP%]::-webkit-scrollbar { display: none; }\n    .section-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { flex: 0 0 auto; color: var(--c-adria); text-decoration: none; font-size: .84rem; font-weight: 600; letter-spacing: .04em; }\n    .section-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: var(--c-terracotta); }\n    .section-nav-book[_ngcontent-%COMP%] { margin-left: auto; color: var(--c-terracotta) !important; }\n\n    .story-section[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(320px, .8fr); gap: clamp(3rem, 8vw, 8rem); align-items: center; }\n    .story-image-wrap[_ngcontent-%COMP%] { min-height: 650px; overflow: hidden; }\n    .story-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; height: 100%; min-height: 650px; object-fit: cover; }\n    .story-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: clamp(3.8rem, 7vw, 7rem); }\n    .story-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: color-mix(in srgb, var(--c-anthracite) 84%, transparent); }\n    .story-copy[_ngcontent-%COMP%]   .story-lead[_ngcontent-%COMP%] { color: var(--c-adria); font-family: var(--font-display); font-size: clamp(1.3rem, 2vw, 1.8rem); line-height: 1.45; }\n\n    .stat-band[_ngcontent-%COMP%] { background: var(--c-adria); color: var(--c-ivory); padding-block: clamp(2.5rem, 5vw, 4.5rem); }\n    .stat-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, 1fr); }\n    .stat-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { padding-inline: clamp(1rem, 3vw, 3rem); border-right: 1px solid rgba(255,255,255,.18); text-align: center; }\n    .stat-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child { padding-left: 0; }\n    .stat-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child { padding-right: 0; border-right: 0; }\n    .stat-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; font-family: var(--font-display); font-size: clamp(2.8rem, 5vw, 5rem); line-height: 1; color: var(--c-champagne); font-weight: 400; }\n    .stat-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: block; margin-top: .65rem; font-size: .78rem; text-transform: uppercase; letter-spacing: .13em; }\n\n    .atmosphere-band[_ngcontent-%COMP%] { min-height: clamp(480px, 65vw, 790px); position: relative; display: flex; align-items: flex-end; overflow: hidden; }\n    .atmosphere-band[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }\n    .atmosphere-overlay[_ngcontent-%COMP%] { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(9,26,34,.75), rgba(9,26,34,.04) 65%); }\n    .atmosphere-copy[_ngcontent-%COMP%] { position: relative; z-index: 1; width: 100%; padding-bottom: clamp(3rem, 8vw, 7rem); }\n    .atmosphere-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: 22ch; color: white; font-family: var(--font-display); font-size: clamp(2.4rem, 5vw, 5rem); line-height: 1.08; }\n\n    .section-heading[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: end; gap: 3rem; margin-bottom: clamp(2.5rem, 5vw, 5rem); }\n    .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { max-width: 13ch; }\n    .section-heading[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { color: var(--c-olive); }\n\n    .gallery[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(12, 1fr);\n      grid-auto-rows: clamp(180px, 18vw, 285px);\n      grid-auto-flow: dense;\n      gap: clamp(.5rem, 1.2vw, 1rem);\n    }\n    .gallery-item[_ngcontent-%COMP%] {\n      grid-column: span 4;\n      position: relative;\n      overflow: hidden;\n      margin: 0;\n      padding: 0;\n      border: 0;\n      cursor: zoom-in;\n      background: transparent;\n    }\n    .gallery-item[_ngcontent-%COMP%]:nth-child(7n + 1), .gallery-item[_ngcontent-%COMP%]:nth-child(7n + 5) { grid-column: span 8; grid-row: span 2; }\n    .gallery-item[_ngcontent-%COMP%]:nth-child(7n + 2), .gallery-item[_ngcontent-%COMP%]:nth-child(7n + 3) { grid-column: span 4; }\n    .gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 700ms cubic-bezier(.2,.7,.2,1); }\n    .gallery-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] { transform: scale(1.045); }\n    .gallery-item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { position: absolute; right: 1rem; bottom: .75rem; color: white; font-size: .72rem; letter-spacing: .16em; text-shadow: 0 1px 10px rgba(0,0,0,.7); }\n    .gallery-placeholder[_ngcontent-%COMP%] { background: linear-gradient(135deg, var(--c-sand), var(--c-olive)); }\n    .video-tour[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] { display: block; width: min(100%, 560px); max-height: 78vh; margin-inline: auto; border-radius: var(--radius); background: var(--c-adria); }\n\n    .highlight-section[_ngcontent-%COMP%] { background: var(--c-adria); color: rgba(255,255,255,.78); }\n    .light-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .amenities-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { color: var(--c-ivory); }\n    .light-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%], .amenities-panel[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] { color: var(--c-champagne); }\n    .light-heading[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { color: rgba(255,255,255,.68); }\n    .highlight-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18); }\n    .highlight-card[_ngcontent-%COMP%] { min-height: 260px; padding: 2rem; border-right: 1px solid rgba(255,255,255,.18); display: flex; flex-direction: column; justify-content: space-between; }\n    .highlight-card[_ngcontent-%COMP%]:last-child { border-right: 0; }\n    .highlight-number[_ngcontent-%COMP%] { color: var(--c-champagne); font-size: .75rem; letter-spacing: .16em; }\n    .highlight-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { color: var(--c-ivory); font-size: clamp(1.35rem, 2.3vw, 2rem); max-width: 12ch; }\n    .amenities-panel[_ngcontent-%COMP%] { display: grid; grid-template-columns: .75fr 1.25fr; gap: clamp(3rem, 8vw, 8rem); padding-top: clamp(4rem, 8vw, 8rem); }\n    .amenities[_ngcontent-%COMP%] { columns: 2; column-gap: 3rem; padding: 0; margin: 0; list-style: none; }\n    .amenities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { position: relative; margin-bottom: 1rem; padding: 0 0 1rem 1.6rem; border-bottom: 1px solid rgba(255,255,255,.13); break-inside: avoid; }\n    .amenities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before { content: '\u2014'; position: absolute; left: 0; color: var(--c-champagne); }\n\n    .detail-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1.4fr 1fr; gap: var(--space-5); align-items: start; }\n    .detail-main[_ngcontent-%COMP%]    > .eyebrow[_ngcontent-%COMP%]:not(:first-child) { margin-top: var(--space-5); }\n\n    .distances[_ngcontent-%COMP%] { list-style: none; padding: 0; max-width: 460px; }\n    .distances[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { display: flex; justify-content: space-between; border-bottom: 1px solid var(--c-sand); padding: .8rem 0; }\n\n    .faq-item[_ngcontent-%COMP%] { margin-bottom: var(--space-3); }\n    .faq-item[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] { font-weight: 600; color: var(--c-adria); }\n    .faq-item[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] { margin: 0; }\n\n    .related-guides[_ngcontent-%COMP%] { padding-left: 1.1rem; }\n    .other-villa[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n\n    .detail-sidebar[_ngcontent-%COMP%]   .sticky-box[_ngcontent-%COMP%] { position: sticky; top: 6.5rem; }\n\n    .mobile-sticky-cta[_ngcontent-%COMP%] { display: none; }\n\n    @media (max-width: 900px) {\n      .section-nav[_ngcontent-%COMP%] { top: 68px; }\n      .story-section[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .story-image-wrap[_ngcontent-%COMP%], .story-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { min-height: min(120vw, 660px); }\n      .stat-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); gap: 2.5rem 0; }\n      .stat-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) { border-right: 0; }\n      .highlight-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n      .highlight-card[_ngcontent-%COMP%]:nth-child(2) { border-right: 0; }\n      .highlight-card[_ngcontent-%COMP%]:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.18); }\n      .amenities-panel[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .detail-grid[_ngcontent-%COMP%] { grid-template-columns: minmax(0, 1fr); gap: 3rem; }\n      .mobile-sticky-cta[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        position: fixed;\n        width: auto;\n        left: 1rem;\n        right: 1rem;\n        bottom: max(1rem, env(safe-area-inset-bottom));\n        z-index: 90;\n        opacity: 0;\n        pointer-events: none;\n        transform: translateY(calc(100% + 2rem));\n        transition: opacity 250ms ease, transform 350ms cubic-bezier(.2,.7,.2,1);\n      }\n      .mobile-sticky-cta.visible[_ngcontent-%COMP%] { opacity: 1; pointer-events: auto; transform: translateY(0); }\n    }\n    @media (max-width: 560px) {\n      .villa-hero[_ngcontent-%COMP%] { min-height: calc(100svh - 65px); }\n      .villa-hero-shade[_ngcontent-%COMP%] { background: linear-gradient(0deg, rgba(9,26,34,.86) 0%, rgba(9,26,34,.18) 86%); }\n      .villa-hero-inner[_ngcontent-%COMP%] { padding-block: .9rem 3rem; }\n      .breadcrumbs[_ngcontent-%COMP%] { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; }\n      .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { margin-left: .4rem; }\n      .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: clamp(3.4rem, 18vw, 5rem); overflow-wrap: normal; }\n      .tagline[_ngcontent-%COMP%] { font-size: 1.3rem; }\n      .hero-facts[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: .55rem 1rem; }\n      .hero-actions[_ngcontent-%COMP%] { flex-direction: column; }\n      .section-nav-inner[_ngcontent-%COMP%] { padding-inline: 1.1rem; min-height: 54px; }\n      .section-nav-book[_ngcontent-%COMP%] { margin-left: 0; }\n      .story-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 3.7rem; overflow-wrap: normal; }\n      .stat-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 2.6rem; }\n      .stat-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: .67rem; letter-spacing: .08em; }\n      .stat-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { padding-inline: .75rem; }\n      .section-heading[_ngcontent-%COMP%] { display: block; }\n      .section-heading[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { margin-top: 1.5rem; }\n      .gallery[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; grid-auto-rows: 43vw; gap: .45rem; }\n      .gallery-item[_ngcontent-%COMP%], .gallery-item[_ngcontent-%COMP%]:nth-child(n) { grid-column: span 1; grid-row: span 1; }\n      .gallery-item[_ngcontent-%COMP%]:first-child, .gallery-item[_ngcontent-%COMP%]:nth-child(5n) { grid-column: 1 / -1; grid-row: span 2; }\n      .highlight-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .highlight-card[_ngcontent-%COMP%] { min-height: 180px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.18); }\n      .highlight-card[_ngcontent-%COMP%]:nth-child(n) { border-bottom: 1px solid rgba(255,255,255,.18); }\n      .highlight-card[_ngcontent-%COMP%]:last-child { border-bottom: 0; }\n      .amenities[_ngcontent-%COMP%] { columns: 1; }\n      .video-tour[_ngcontent-%COMP%] { padding-inline: 0; }\n      .video-tour[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .video-tour[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] { margin-inline: 1.1rem; }\n      .video-tour[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] { border-radius: 0; width: 100%; }\n      .distances[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { gap: 1rem; align-items: baseline; }\n      .distances[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { white-space: nowrap; }\n      .detail-sidebar[_ngcontent-%COMP%]   .sticky-box[_ngcontent-%COMP%] { position: static; }\n      .detail-grid[_ngcontent-%COMP%] { padding-bottom: 6rem; }\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VillaDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-villa-detail', standalone: true, imports: [RouterLink, BookingWidgetComponent, ImageLightboxComponent], template: `
    @if (villa) {
      <header class="villa-hero">
        <img class="villa-hero-image" [src]="heroImage()" [alt]="t.t(villa.heroImageAlt)" width="1920" height="1280" fetchpriority="high" />
        <div class="villa-hero-shade" aria-hidden="true"></div>
        <div class="villa-hero-inner container">
          <nav class="breadcrumbs" [attr.aria-label]="t.inline('Brotkrümelnavigation', 'Breadcrumb', 'Навигационная цепочка', 'Migas de pan')">
            <a [routerLink]="['/' + locale()]">{{ t.inline('Start', 'Home', 'Главная', 'Inicio') }}</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{{ villa.name }}</span>
          </nav>
          <div class="hero-copy">
            <p class="eyebrow">{{ t.inline('Reževići · Budva Riviera · Montenegro', 'Reževići · Budva Riviera · Montenegro', 'Режевичи · Будванская ривьера · Черногория', 'Reževići · Riviera de Budva · Montenegro') }}</p>
            <h1>{{ villa.name }}</h1>
            <p class="tagline">{{ t.t(villa.tagline) }}</p>
            <div class="hero-facts" [attr.aria-label]="t.inline('Eckdaten der Villa', 'Villa facts', 'Основные данные виллы', 'Datos de la villa')">
              <span><strong>{{ villa.guests }}</strong> {{ t.inline('Gäste', 'guests', 'гостей', 'huéspedes') }}</span>
              <span><strong>{{ villa.bedrooms }}</strong> {{ t.inline('Schlafzimmer', 'bedrooms', 'спальни', 'dormitorios') }}</span>
              <span><strong>{{ villa.bathrooms }}</strong> {{ t.inline('Bäder', 'bathrooms', 'ванные', 'baños') }}</span>
              <span><strong>{{ villa.nightlyRateEur }} €</strong> {{ t.inline('/ Nacht', '/ night', '/ ночь', '/ noche') }}</span>
            </div>
            <div class="hero-actions">
              <a class="btn btn-primary" [routerLink]="[]" fragment="verfuegbarkeit">{{ t.ui('ctaCheckAvailability') }}</a>
              <a class="btn btn-secondary" [routerLink]="[]" fragment="villa-ueberblick">{{ t.inline('Villa entdecken', 'Discover the villa', 'Открыть виллу', 'Descubrir la villa') }}</a>
            </div>
          </div>
        </div>
      </header>

      <nav class="section-nav" [attr.aria-label]="t.inline('Seitennavigation', 'Page sections', 'Разделы страницы', 'Secciones de la página')">
        <div class="container section-nav-inner">
          <a [routerLink]="[]" fragment="villa-ueberblick">{{ t.inline('Die Villa', 'The villa', 'Вилла', 'La villa') }}</a>
          <a [routerLink]="[]" fragment="villa-galerie">{{ t.inline('Galerie', 'Gallery', 'Галерея', 'Galería') }}</a>
          <a [routerLink]="[]" fragment="villa-ausstattung">{{ t.inline('Ausstattung', 'Amenities', 'Удобства', 'Comodidades') }}</a>
          <a [routerLink]="[]" fragment="villa-lage">{{ t.inline('Lage', 'Location', 'Расположение', 'Ubicación') }}</a>
          <a class="section-nav-book" [routerLink]="[]" fragment="verfuegbarkeit">{{ t.inline('Aufenthalt planen', 'Plan your stay', 'Спланировать отдых', 'Planificar estancia') }}</a>
        </div>
      </nav>

      <div class="villa-content">
      <section class="story-section section container" id="villa-ueberblick">
        <div class="story-image-wrap">
          <img [src]="storyImage()" [alt]="galleryAlt(storyImage())" width="1280" height="1600" loading="eager" />
        </div>
        <div class="story-copy">
          <p class="eyebrow">{{ t.inline('Privat wohnen. Weit blicken.', 'Private living. Endless views.', 'Уединение. Бескрайний вид.', 'Privacidad. Vistas infinitas.') }}</p>
          <h2>{{ t.inline('Die Villa', 'The villa', 'Вилла', 'La villa') }}</h2>
          <p class="story-lead">{{ t.t(villa.intro) }}</p>
          @for (paragraph of villa.description; track $index) {
            <p>{{ t.t(paragraph) }}</p>
          }
        </div>
      </section>

      <section class="stat-band" [attr.aria-label]="t.inline('Eckdaten', 'Key facts', 'Основные сведения', 'Datos principales')">
        <div class="container stat-grid">
          <div><strong>{{ villa.guests }}</strong><span>{{ t.inline('Gäste', 'Guests', 'Гостей', 'Huéspedes') }}</span></div>
          <div><strong>{{ villa.bedrooms }}</strong><span>{{ t.inline('Schlafzimmer', 'Bedrooms', 'Спальни', 'Dormitorios') }}</span></div>
          <div><strong>{{ villa.bathrooms }}</strong><span>{{ t.inline('Badezimmer', 'Bathrooms', 'Ванные', 'Baños') }}</span></div>
          <div><strong>{{ villa.nightlyRateEur }} €</strong><span>{{ t.inline('ab / Nacht', 'from / night', 'от / ночь', 'desde / noche') }}</span></div>
        </div>
      </section>

      <section class="atmosphere-band">
        <img [src]="atmosphereImage()" [alt]="galleryAlt(atmosphereImage())" width="1920" height="1280" loading="lazy" />
        <div class="atmosphere-overlay" aria-hidden="true"></div>
        <div class="container atmosphere-copy">
          <p>{{ atmosphereLine() }}</p>
        </div>
      </section>

      <app-image-lightbox #villaLightbox
        [images]="villa.galleryImagePlaceholders"
        [altText]="galleryAltForLightbox"
        [label]="t.inline('Bildergalerie', 'Image gallery', 'Фотогалерея', 'Galería de imágenes')" />
      <section class="gallery-section section container" id="villa-galerie">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ t.inline('Räume · Licht · Adria', 'Spaces · Light · Adriatic', 'Пространство · Свет · Адриатика', 'Espacios · Luz · Adriático') }}</p>
            <h2>{{ t.inline('Einblicke in ', 'Inside ', 'Взгляд на ', 'Descubre ') }}{{ villa.name }}</h2>
          </div>
          <p>{{ t.inline('Wählen Sie ein Bild, um die Galerie im Vollbild zu öffnen.', 'Select an image to open the full-screen gallery.', 'Выберите фотографию, чтобы открыть полноэкранную галерею.', 'Selecciona una imagen para abrir la galería a pantalla completa.') }}</p>
        </div>
        <div class="gallery" [attr.aria-label]="t.inline('Bildergalerie', 'Image gallery', 'Фотогалерея', 'Galería de imágenes')">
          @for (img of villa.galleryImagePlaceholders; track img) {
            @if (img.startsWith('/assets/')) {
              <button class="gallery-item" type="button" (click)="villaLightbox.open($index)" [attr.aria-label]="galleryAlt(img)">
                <img [src]="img" [alt]="galleryAlt(img)" width="1920" height="1280" loading="lazy" />
                <span aria-hidden="true">{{ ($index + 1).toString().padStart(2, '0') }}</span>
              </button>
            } @else {
              <div class="gallery-item gallery-placeholder" [attr.aria-label]="'Platzhalter: ' + img" role="img"></div>
            }
          }
        </div>
      </section>

      @if (villa.slug === 'villa-lumina') {
        <section class="section container video-tour">
          <p class="eyebrow">Villa Lumina</p>
          <h2>{{ t.inline('Video-Rundgang', 'Video tour', 'Видеоэкскурсия', 'Recorrido en vídeo') }}</h2>
          <video controls playsinline preload="metadata"
                 poster="/assets/media/lumina/lumina-video-poster.webp">
            <source src="/assets/media/lumina/lumina-tour.mp4" type="video/mp4" />
          </video>
        </section>
      }

      <section class="highlight-section section" id="villa-ausstattung">
        <div class="container">
          <div class="section-heading light-heading">
            <div>
              <p class="eyebrow">{{ t.inline('Was den Aufenthalt besonders macht', 'What makes the stay special', 'Что делает отдых особенным', 'Lo que hace especial la estancia') }}</p>
              <h2>{{ t.inline('Vier besondere Seiten', 'Four defining features', 'Четыре особенные черты', 'Cuatro rasgos únicos') }}</h2>
            </div>
            <p>{{ t.t(villa.positioning) }}</p>
          </div>
          <div class="highlight-grid">
            @for (highlight of villa.highlights; track highlight.label.de) {
              <article class="highlight-card">
                <span class="highlight-number">{{ ($index + 1).toString().padStart(2, '0') }}</span>
                <h3>{{ t.t(highlight.label) }}</h3>
              </article>
            }
          </div>
          <div class="amenities-panel">
            <div>
              <p class="eyebrow">{{ t.inline('Alles für Ihren Aufenthalt', 'Everything for your stay', 'Всё для вашего отдыха', 'Todo para tu estancia') }}</p>
              <h2>{{ t.inline('Ausstattung', 'Amenities', 'Удобства', 'Comodidades') }}</h2>
            </div>
            <ul class="amenities">
              @for (item of villa.amenities; track item.de) {
                <li>{{ t.t(item) }}</li>
              }
            </ul>
          </div>
        </div>
      </section>

      <section class="section container detail-grid" id="villa-lage">
        <div class="detail-main">
          @if (villa.suitableForWorkation) {
            <p class="eyebrow">{{ t.inline('Länger bleiben', 'Stay a little longer', 'Остаться подольше', 'Quédate un poco más') }}</p>
            <h2>{{ t.inline('Workation über der Adria', 'Workation above the Adriatic', 'Работа над Адриатикой', 'Teletrabajo sobre el Adriático') }}</h2>
            <p>
              {{ t.inline(
                'Villa Lumina eignet sich mit separatem Arbeitsbereich, Getränkeküche und schnellem Glasfaser-Internet gezielt für längere, arbeitsintensive Aufenthalte.',
                'With a separate work area, kitchenette and fast fibre internet, Villa Lumina is well suited to longer, work-intensive stays.',
                'Благодаря отдельной рабочей зоне, мини-кухне и быстрому оптоволоконному интернету Villa Lumina отлично подходит для длительного проживания и удалённой работы.',
                'Con una zona de trabajo independiente, pequeña cocina e internet de fibra rápida, Villa Lumina es ideal para estancias largas con teletrabajo.') }}
            </p>
          }

          <p class="eyebrow">{{ t.inline('Zwischen Meer und Bergen', 'Between sea and mountains', 'Между морем и горами', 'Entre el mar y las montañas') }}</p>
          <h2>{{ t.inline('Die Lage', 'The location', 'Расположение', 'La ubicación') }}</h2>
          <p>{{ t.inline('Smokov vijenac, Drobnići, Gemeinde Budva – ruhig gelegen und zugleich nah an den besonderen Orten der montenegrinischen Küste.', 'Smokov vijenac, Drobnići, Budva Municipality – peacefully located yet close to the defining places of Montenegro’s coast.', 'Smokov vijenac, Дробничи, муниципалитет Будва — тихое место рядом с главными достопримечательностями побережья Черногории.', 'Smokov vijenac, Drobnići, municipio de Budva: tranquilidad cerca de los lugares más especiales de la costa montenegrina.') }}</p>
          <ul class="distances">
            @for (d of distances; track d.label.de) {
              <li><span>{{ t.t(d.label) }}</span><strong>{{ d.value }}</strong></li>
            }
          </ul>
          <a class="btn btn-quiet" [routerLink]="locationPath()">
            {{ t.inline('Zur Lage-Seite', 'View location page', 'Открыть страницу расположения', 'Ver página de ubicación') }}
          </a>

          <div class="horizon-divider"></div>
          <h2>{{ t.ui('faqTitle') }}</h2>
          <dl class="faq">
            @for (item of villa.faq; track item.question.de) {
              <div class="faq-item">
                <dt>{{ t.t(item.question) }}</dt>
                <dd>{{ t.t(item.answer) }}</dd>
              </div>
            }
          </dl>

          <h2>{{ t.ui('relatedGuides') }}</h2>
          <ul class="related-guides">
            @for (g of relatedGuides(); track g.slug) {
              <li><a [routerLink]="guidePath(g.slug)">{{ t.t(g.title) }}</a></li>
            }
          </ul>

          <p class="other-villa">
            <a [routerLink]="otherVillaPath()">
              {{ t.inline('Zur anderen Villa: ', 'See the other villa: ', 'Посмотреть другую виллу: ', 'Ver la otra villa: ') }}{{ otherVilla?.name }}
            </a>
          </p>
        </div>

        <aside class="detail-sidebar">
          <div class="sticky-box">
            <app-booking-widget [preselectedVillaSlug]="villa.slug" />
          </div>
        </aside>
      </section>
      </div>

      <a class="mobile-sticky-cta btn btn-primary" [class.visible]="showMobileCta()" [routerLink]="[]" fragment="verfuegbarkeit">{{ t.ui('ctaCheckAvailability') }}</a>
    }
  `, styles: ["\n    :host { display: block; }\n    .villa-content { overflow: clip; }\n    section[id] { scroll-margin-top: 8.5rem; }\n    .villa-hero { min-height: min(830px, calc(100svh - 72px)); position: relative; display: grid; overflow: hidden; background: var(--c-adria); }\n    .villa-hero-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; animation: hero-breathe 18s ease-in-out infinite alternate; }\n    .villa-hero-shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(9, 26, 34, .8) 0%, rgba(9, 26, 34, .48) 50%, rgba(9, 26, 34, .12) 100%), linear-gradient(0deg, rgba(9, 26, 34, .58), transparent 56%); }\n    .villa-hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; width: 100%; padding-block: 1.25rem clamp(3.5rem, 9vh, 7rem); }\n    .breadcrumbs { display: flex; gap: .55rem; font-size: .82rem; color: rgba(255,255,255,.72); }\n    .breadcrumbs a { color: rgba(255,255,255,.9); }\n    .hero-copy { margin-top: auto; max-width: 860px; }\n    .hero-copy .eyebrow { color: var(--c-champagne); }\n    .hero-copy h1 { color: var(--c-ivory); font-size: clamp(4rem, 9vw, 8rem); margin-bottom: .5rem; }\n    .tagline { color: var(--c-ivory); font-family: var(--font-display); font-size: clamp(1.4rem, 2.5vw, 2.25rem); line-height: 1.25; max-width: 28ch; }\n    .hero-facts { display: flex; flex-wrap: wrap; gap: .75rem 2rem; margin-top: 2rem; color: rgba(255,255,255,.78); font-size: .9rem; text-transform: uppercase; letter-spacing: .08em; }\n    .hero-facts strong { color: #fff; font-size: 1.05rem; }\n    .hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }\n    @keyframes hero-breathe { from { transform: scale(1.01); } to { transform: scale(1.07); } }\n\n    .section-nav { position: sticky; top: 72px; z-index: 45; background: color-mix(in srgb, var(--c-limestone) 94%, transparent); backdrop-filter: blur(16px); border-bottom: 1px solid color-mix(in srgb, var(--c-sand) 70%, transparent); }\n    .section-nav-inner { display: flex; align-items: center; gap: clamp(1.2rem, 3vw, 3rem); min-height: 62px; overflow-x: auto; scrollbar-width: none; }\n    .section-nav-inner::-webkit-scrollbar { display: none; }\n    .section-nav a { flex: 0 0 auto; color: var(--c-adria); text-decoration: none; font-size: .84rem; font-weight: 600; letter-spacing: .04em; }\n    .section-nav a:hover { color: var(--c-terracotta); }\n    .section-nav-book { margin-left: auto; color: var(--c-terracotta) !important; }\n\n    .story-section { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(320px, .8fr); gap: clamp(3rem, 8vw, 8rem); align-items: center; }\n    .story-image-wrap { min-height: 650px; overflow: hidden; }\n    .story-image-wrap img { width: 100%; height: 100%; min-height: 650px; object-fit: cover; }\n    .story-copy h2 { font-size: clamp(3.8rem, 7vw, 7rem); }\n    .story-copy p { color: color-mix(in srgb, var(--c-anthracite) 84%, transparent); }\n    .story-copy .story-lead { color: var(--c-adria); font-family: var(--font-display); font-size: clamp(1.3rem, 2vw, 1.8rem); line-height: 1.45; }\n\n    .stat-band { background: var(--c-adria); color: var(--c-ivory); padding-block: clamp(2.5rem, 5vw, 4.5rem); }\n    .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); }\n    .stat-grid div { padding-inline: clamp(1rem, 3vw, 3rem); border-right: 1px solid rgba(255,255,255,.18); text-align: center; }\n    .stat-grid div:first-child { padding-left: 0; }\n    .stat-grid div:last-child { padding-right: 0; border-right: 0; }\n    .stat-grid strong { display: block; font-family: var(--font-display); font-size: clamp(2.8rem, 5vw, 5rem); line-height: 1; color: var(--c-champagne); font-weight: 400; }\n    .stat-grid span { display: block; margin-top: .65rem; font-size: .78rem; text-transform: uppercase; letter-spacing: .13em; }\n\n    .atmosphere-band { min-height: clamp(480px, 65vw, 790px); position: relative; display: flex; align-items: flex-end; overflow: hidden; }\n    .atmosphere-band > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }\n    .atmosphere-overlay { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(9,26,34,.75), rgba(9,26,34,.04) 65%); }\n    .atmosphere-copy { position: relative; z-index: 1; width: 100%; padding-bottom: clamp(3rem, 8vw, 7rem); }\n    .atmosphere-copy p { max-width: 22ch; color: white; font-family: var(--font-display); font-size: clamp(2.4rem, 5vw, 5rem); line-height: 1.08; }\n\n    .section-heading { display: flex; justify-content: space-between; align-items: end; gap: 3rem; margin-bottom: clamp(2.5rem, 5vw, 5rem); }\n    .section-heading h2 { max-width: 13ch; }\n    .section-heading > p { color: var(--c-olive); }\n\n    .gallery {\n      display: grid;\n      grid-template-columns: repeat(12, 1fr);\n      grid-auto-rows: clamp(180px, 18vw, 285px);\n      grid-auto-flow: dense;\n      gap: clamp(.5rem, 1.2vw, 1rem);\n    }\n    .gallery-item {\n      grid-column: span 4;\n      position: relative;\n      overflow: hidden;\n      margin: 0;\n      padding: 0;\n      border: 0;\n      cursor: zoom-in;\n      background: transparent;\n    }\n    .gallery-item:nth-child(7n + 1), .gallery-item:nth-child(7n + 5) { grid-column: span 8; grid-row: span 2; }\n    .gallery-item:nth-child(7n + 2), .gallery-item:nth-child(7n + 3) { grid-column: span 4; }\n    .gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 700ms cubic-bezier(.2,.7,.2,1); }\n    .gallery-item:hover img { transform: scale(1.045); }\n    .gallery-item > span { position: absolute; right: 1rem; bottom: .75rem; color: white; font-size: .72rem; letter-spacing: .16em; text-shadow: 0 1px 10px rgba(0,0,0,.7); }\n    .gallery-placeholder { background: linear-gradient(135deg, var(--c-sand), var(--c-olive)); }\n    .video-tour video { display: block; width: min(100%, 560px); max-height: 78vh; margin-inline: auto; border-radius: var(--radius); background: var(--c-adria); }\n\n    .highlight-section { background: var(--c-adria); color: rgba(255,255,255,.78); }\n    .light-heading h2, .amenities-panel h2 { color: var(--c-ivory); }\n    .light-heading .eyebrow, .amenities-panel .eyebrow { color: var(--c-champagne); }\n    .light-heading > p { color: rgba(255,255,255,.68); }\n    .highlight-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18); }\n    .highlight-card { min-height: 260px; padding: 2rem; border-right: 1px solid rgba(255,255,255,.18); display: flex; flex-direction: column; justify-content: space-between; }\n    .highlight-card:last-child { border-right: 0; }\n    .highlight-number { color: var(--c-champagne); font-size: .75rem; letter-spacing: .16em; }\n    .highlight-card h3 { color: var(--c-ivory); font-size: clamp(1.35rem, 2.3vw, 2rem); max-width: 12ch; }\n    .amenities-panel { display: grid; grid-template-columns: .75fr 1.25fr; gap: clamp(3rem, 8vw, 8rem); padding-top: clamp(4rem, 8vw, 8rem); }\n    .amenities { columns: 2; column-gap: 3rem; padding: 0; margin: 0; list-style: none; }\n    .amenities li { position: relative; margin-bottom: 1rem; padding: 0 0 1rem 1.6rem; border-bottom: 1px solid rgba(255,255,255,.13); break-inside: avoid; }\n    .amenities li::before { content: '\u2014'; position: absolute; left: 0; color: var(--c-champagne); }\n\n    .detail-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: var(--space-5); align-items: start; }\n    .detail-main > .eyebrow:not(:first-child) { margin-top: var(--space-5); }\n\n    .distances { list-style: none; padding: 0; max-width: 460px; }\n    .distances li { display: flex; justify-content: space-between; border-bottom: 1px solid var(--c-sand); padding: .8rem 0; }\n\n    .faq-item { margin-bottom: var(--space-3); }\n    .faq-item dt { font-weight: 600; color: var(--c-adria); }\n    .faq-item dd { margin: 0; }\n\n    .related-guides { padding-left: 1.1rem; }\n    .other-villa { margin-top: var(--space-4); }\n\n    .detail-sidebar .sticky-box { position: sticky; top: 6.5rem; }\n\n    .mobile-sticky-cta { display: none; }\n\n    @media (max-width: 900px) {\n      .section-nav { top: 68px; }\n      .story-section { grid-template-columns: 1fr; }\n      .story-image-wrap, .story-image-wrap img { min-height: min(120vw, 660px); }\n      .stat-grid { grid-template-columns: repeat(2, 1fr); gap: 2.5rem 0; }\n      .stat-grid div:nth-child(2) { border-right: 0; }\n      .highlight-grid { grid-template-columns: repeat(2, 1fr); }\n      .highlight-card:nth-child(2) { border-right: 0; }\n      .highlight-card:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.18); }\n      .amenities-panel { grid-template-columns: 1fr; }\n      .detail-grid { grid-template-columns: minmax(0, 1fr); gap: 3rem; }\n      .mobile-sticky-cta {\n        display: flex;\n        justify-content: center;\n        position: fixed;\n        width: auto;\n        left: 1rem;\n        right: 1rem;\n        bottom: max(1rem, env(safe-area-inset-bottom));\n        z-index: 90;\n        opacity: 0;\n        pointer-events: none;\n        transform: translateY(calc(100% + 2rem));\n        transition: opacity 250ms ease, transform 350ms cubic-bezier(.2,.7,.2,1);\n      }\n      .mobile-sticky-cta.visible { opacity: 1; pointer-events: auto; transform: translateY(0); }\n    }\n    @media (max-width: 560px) {\n      .villa-hero { min-height: calc(100svh - 65px); }\n      .villa-hero-shade { background: linear-gradient(0deg, rgba(9,26,34,.86) 0%, rgba(9,26,34,.18) 86%); }\n      .villa-hero-inner { padding-block: .9rem 3rem; }\n      .breadcrumbs { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; }\n      .breadcrumbs span { margin-left: .4rem; }\n      .hero-copy h1 { font-size: clamp(3.4rem, 18vw, 5rem); overflow-wrap: normal; }\n      .tagline { font-size: 1.3rem; }\n      .hero-facts { display: grid; grid-template-columns: 1fr 1fr; gap: .55rem 1rem; }\n      .hero-actions { flex-direction: column; }\n      .section-nav-inner { padding-inline: 1.1rem; min-height: 54px; }\n      .section-nav-book { margin-left: 0; }\n      .story-copy h2 { font-size: 3.7rem; overflow-wrap: normal; }\n      .stat-grid strong { font-size: 2.6rem; }\n      .stat-grid span { font-size: .67rem; letter-spacing: .08em; }\n      .stat-grid div { padding-inline: .75rem; }\n      .section-heading { display: block; }\n      .section-heading > p { margin-top: 1.5rem; }\n      .gallery { grid-template-columns: 1fr 1fr; grid-auto-rows: 43vw; gap: .45rem; }\n      .gallery-item, .gallery-item:nth-child(n) { grid-column: span 1; grid-row: span 1; }\n      .gallery-item:first-child, .gallery-item:nth-child(5n) { grid-column: 1 / -1; grid-row: span 2; }\n      .highlight-grid { grid-template-columns: 1fr; }\n      .highlight-card { min-height: 180px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.18); }\n      .highlight-card:nth-child(n) { border-bottom: 1px solid rgba(255,255,255,.18); }\n      .highlight-card:last-child { border-bottom: 0; }\n      .amenities { columns: 1; }\n      .video-tour { padding-inline: 0; }\n      .video-tour h2, .video-tour .eyebrow { margin-inline: 1.1rem; }\n      .video-tour video { border-radius: 0; width: 100%; }\n      .distances li { gap: 1rem; align-items: baseline; }\n      .distances strong { white-space: nowrap; }\n      .detail-sidebar .sticky-box { position: static; }\n      .detail-grid { padding-bottom: 6rem; }\n    }\n  "] }]
    }], null, { updateMobileCta: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(VillaDetailComponent, { className: "VillaDetailComponent" }); })();
//# sourceMappingURL=villa-detail.component.js.map