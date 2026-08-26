import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import * as i0 from "@angular/core";
function LegalComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 1)(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "address");
    i0.ɵɵtext(9);
    i0.ɵɵelement(10, "br");
    i0.ɵɵtext(11);
    i0.ɵɵelement(12, "br");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15);
    i0.ɵɵelementStart(16, "a", 2);
    i0.ɵɵtext(17, "+43 664 2660438");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "br");
    i0.ɵɵtext(19, " E-Mail: ");
    i0.ɵɵelementStart(20, "a", 3);
    i0.ɵɵtext(21, "michael.c.neumann@protonmail.com");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "h2");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p");
    i0.ɵɵtext(25);
    i0.ɵɵelement(26, "br");
    i0.ɵɵtext(27);
    i0.ɵɵelement(28, "br");
    i0.ɵɵtext(29);
    i0.ɵɵelement(30, "br");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "h2");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "p");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "h2");
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Impressum", "Legal notice", "\u041F\u0440\u0430\u0432\u043E\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F", "Aviso legal"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Vor Ver\u00F6ffentlichung erg\u00E4nzen:", "Complete before publication:", "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0434\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438:", "Completar antes de publicar:"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("Vollst\u00E4ndiger Betreibername, ladungsf\u00E4hige Anschrift, Rechtsform sowie gegebenenfalls Firmenbuch-, Gewerbe- und UID-Angaben.", "Full operator name, service address, legal form and, where applicable, company register, trade and VAT details.", "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430, \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441, \u043F\u0440\u0430\u0432\u043E\u0432\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u0438, \u0435\u0441\u043B\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u043E, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0438 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435.", "Nombre completo del operador, domicilio legal, forma jur\u00EDdica y, cuando corresponda, datos registrales, comerciales y fiscales."), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Diensteanbieter und Medieninhaber", "Service provider and media owner", "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u0443\u0441\u043B\u0443\u0433 \u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0441\u0430\u0439\u0442\u0430", "Proveedor del servicio y titular del sitio"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("[VOLLST\u00C4NDIGEN NAMEN / FIRMA ERG\u00C4NZEN]", "[ADD FULL NAME / COMPANY]", "[\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u041F\u041E\u041B\u041D\u041E\u0415 \u0418\u041C\u042F / \u041D\u0410\u0417\u0412\u0410\u041D\u0418\u0415 \u041A\u041E\u041C\u041F\u0410\u041D\u0418\u0418]", "[A\u00D1ADIR NOMBRE COMPLETO / EMPRESA]"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("[STRASSE UND HAUSNUMMER ERG\u00C4NZEN]", "[ADD STREET AND NUMBER]", "[\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u0423\u041B\u0418\u0426\u0423 \u0418 \u041D\u041E\u041C\u0415\u0420 \u0414\u041E\u041C\u0410]", "[A\u00D1ADIR CALLE Y N\u00DAMERO]"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("[PLZ, ORT UND STAAT ERG\u00C4NZEN]", "[ADD POSTCODE, CITY AND COUNTRY]", "[\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u0418\u041D\u0414\u0415\u041A\u0421, \u0413\u041E\u0420\u041E\u0414 \u0418 \u0421\u0422\u0420\u0410\u041D\u0423]", "[A\u00D1ADIR C\u00D3DIGO POSTAL, CIUDAD Y PA\u00CDS]"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("Telefon", "Phone", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "Tel\u00E9fono"), ": ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Unternehmensangaben", "Business information", "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", "Informaci\u00F3n empresarial"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("[RECHTSFORM ERG\u00C4NZEN]", "[ADD LEGAL FORM]", "[\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u041E\u0420\u0413\u0410\u041D\u0418\u0417\u0410\u0426\u0418\u041E\u041D\u041D\u041E-\u041F\u0420\u0410\u0412\u041E\u0412\u0423\u042E \u0424\u041E\u0420\u041C\u0423]", "[A\u00D1ADIR FORMA JUR\u00CDDICA]"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("[FIRMENBUCHNUMMER UND -GERICHT \u2013 SOFERN VORHANDEN]", "[COMPANY REGISTER NUMBER AND COURT \u2013 IF APPLICABLE]", "[\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u041E\u041D\u041D\u042B\u0419 \u041D\u041E\u041C\u0415\u0420 \u0418 \u041E\u0420\u0413\u0410\u041D \u2014 \u0415\u0421\u041B\u0418 \u041F\u0420\u0418\u041C\u0415\u041D\u0418\u041C\u041E]", "[N\u00DAMERO Y REGISTRO MERCANTIL, SI PROCEDE]"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("[UID-NUMMER \u2013 SOFERN VORHANDEN]", "[VAT NUMBER \u2013 IF APPLICABLE]", "[\u041D\u041E\u041C\u0415\u0420 \u041D\u0414\u0421 \u2014 \u0415\u0421\u041B\u0418 \u041F\u0420\u0418\u041C\u0415\u041D\u0418\u041C\u041E]", "[N\u00DAMERO DE IVA, SI PROCEDE]"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("[ZUST\u00C4NDIGE BEH\u00D6RDE UND KAMMER \u2013 SOFERN ANWENDBAR]", "[COMPETENT AUTHORITY AND CHAMBER \u2013 IF APPLICABLE]", "[\u041A\u041E\u041C\u041F\u0415\u0422\u0415\u041D\u0422\u041D\u042B\u0419 \u041E\u0420\u0413\u0410\u041D \u0418 \u041F\u0410\u041B\u0410\u0422\u0410 \u2014 \u0415\u0421\u041B\u0418 \u041F\u0420\u0418\u041C\u0415\u041D\u0418\u041C\u041E]", "[AUTORIDAD Y C\u00C1MARA COMPETENTES, SI PROCEDE]"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Unterkunft und Preise", "Accommodation and prices", "\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0438 \u0446\u0435\u043D\u044B", "Alojamiento y precios"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Angeboten werden Ferienaufenthalte in Villa MonteMare und Villa Lumina in Re\u017Eevi\u0107i, Gemeinde Budva, Montenegro. Der derzeit angezeigte Betrag von 500 \u20AC pro Nacht ist ein Basis- beziehungsweise Richtpreis. Vor Livegang ist eindeutig anzugeben, ob Steuern, Kurtaxe, Endreinigung und sonstige Geb\u00FChren enthalten sind.", "Holiday stays are offered at Villa MonteMare and Villa Lumina in Re\u017Eevi\u0107i, Municipality of Budva, Montenegro. The displayed \u20AC500 per night is currently a base or indicative price. Before launch, state clearly whether taxes, tourist tax, cleaning and other fees are included.", "\u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u0432\u0438\u043B\u043B\u0430\u0445 MonteMare \u0438 Lumina \u0432 \u0420\u0435\u0436\u0435\u0432\u0438\u0447\u0438, \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u0438\u0442\u0435\u0442 \u0411\u0443\u0434\u0432\u0430, \u0427\u0435\u0440\u043D\u043E\u0433\u043E\u0440\u0438\u044F. \u0423\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 500 \u20AC \u0437\u0430 \u043D\u043E\u0447\u044C \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0431\u0430\u0437\u043E\u0432\u043E\u0439 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0439 \u0446\u0435\u043D\u043E\u0439. \u0414\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C, \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u043B\u0438 \u043D\u0430\u043B\u043E\u0433\u0438, \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0431\u043E\u0440, \u0443\u0431\u043E\u0440\u043A\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0438.", "Se ofrecen estancias en Villa MonteMare y Villa Lumina, en Re\u017Eevi\u0107i, municipio de Budva, Montenegro. Los 500 \u20AC por noche mostrados son un precio base orientativo. Antes de publicar debe indicarse claramente si incluye impuestos, tasa tur\u00EDstica, limpieza y otros cargos."));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Haftung und Urheberrecht", "Liability and copyright", "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430", "Responsabilidad y derechos de autor"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Die Inhalte wurden sorgf\u00E4ltig erstellt, ersetzen jedoch keine verbindliche individuelle Auskunft. F\u00FCr externe Links sind deren Betreiber verantwortlich. Texte, Fotos, Videos und Gestaltung d\u00FCrfen ohne Zustimmung nicht vervielf\u00E4ltigt oder verwendet werden, soweit keine abweichenden Rechte ausgewiesen sind.", "Content has been prepared with care but does not replace binding individual information. External sites are the responsibility of their operators. Texts, photos, videos and design may not be reproduced or used without permission unless stated otherwise.", "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u044B \u0441 \u0434\u043E\u043B\u0436\u043D\u043E\u0439 \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E, \u043D\u043E \u043D\u0435 \u0437\u0430\u043C\u0435\u043D\u044F\u044E\u0442 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E. \u0417\u0430 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u044B \u043E\u0442\u0432\u0435\u0447\u0430\u044E\u0442 \u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B. \u0422\u0435\u043A\u0441\u0442\u044B, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438, \u0432\u0438\u0434\u0435\u043E \u0438 \u0434\u0438\u0437\u0430\u0439\u043D \u043D\u0435\u043B\u044C\u0437\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0437 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F.", "El contenido se ha preparado cuidadosamente, pero no sustituye informaci\u00F3n individual vinculante. Los operadores externos son responsables de sus sitios. Los textos, fotos, v\u00EDdeos y dise\u00F1o no pueden utilizarse sin autorizaci\u00F3n."));
} }
function LegalComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 1)(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelement(10, "br");
    i0.ɵɵtext(11, " E-Mail: ");
    i0.ɵɵelementStart(12, "a", 3);
    i0.ɵɵtext(13, "michael.c.neumann@protonmail.com");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "br");
    i0.ɵɵtext(15);
    i0.ɵɵelementStart(16, "a", 2);
    i0.ɵɵtext(17, "+43 664 2660438");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "h2");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "h2");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "h2");
    i0.ɵɵtext(27, "4. EmailJS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "p");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "h2");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "p");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "h2");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p");
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "h2");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "p");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "h2");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Datenschutzerkl\u00E4rung", "Privacy policy", "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438", "Pol\u00EDtica de privacidad"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Vor Ver\u00F6ffentlichung pr\u00FCfen:", "Review before publication:", "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438:", "Revisar antes de publicar:"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("Hostinganbieter, EmailJS-Konfiguration, Domain, Speicherfristen und Betreiberanschrift m\u00FCssen mit der tats\u00E4chlichen Produktion \u00FCbereinstimmen.", "Hosting provider, EmailJS configuration, domain, retention periods and operator address must match the actual production setup.", "\u0425\u043E\u0441\u0442\u0438\u043D\u0433, \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 EmailJS, \u0434\u043E\u043C\u0435\u043D, \u0441\u0440\u043E\u043A\u0438 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438 \u0430\u0434\u0440\u0435\u0441 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438.", "El alojamiento, la configuraci\u00F3n de EmailJS, el dominio, los plazos de conservaci\u00F3n y la direcci\u00F3n del operador deben coincidir con la configuraci\u00F3n real."), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("1. Verantwortlicher", "1. Controller", "1. \u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439", "1. Responsable"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("[VOLLST\u00C4NDIGEN NAMEN / FIRMA UND ANSCHRIFT ERG\u00C4NZEN]", "[ADD FULL NAME / COMPANY AND ADDRESS]", "[\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u041F\u041E\u041B\u041D\u041E\u0415 \u0418\u041C\u042F / \u041A\u041E\u041C\u041F\u0410\u041D\u0418\u042E \u0418 \u0410\u0414\u0420\u0415\u0421]", "[A\u00D1ADIR NOMBRE COMPLETO / EMPRESA Y DIRECCI\u00D3N]"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.t.inline("Telefon", "Phone", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "Tel\u00E9fono"), ": ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("2. Technische Zugriffsdaten", "2. Technical access data", "2. \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430", "2. Datos t\u00E9cnicos de acceso"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Beim Aufruf der Website kann der Hostinganbieter technisch erforderliche Daten wie IP-Adresse, Zeitpunkt, aufgerufene URL, Referrer, Browser und Betriebssystem in Serverprotokollen verarbeiten. Die Verarbeitung dient dem sicheren und st\u00F6rungsfreien Betrieb sowie der Fehleranalyse. Rechtsgrundlage ist das berechtigte Interesse gem\u00E4\u00DF Art. 6 Abs. 1 lit. f DSGVO. Hostinganbieter und konkrete L\u00F6schfrist sind vor Ver\u00F6ffentlichung zu erg\u00E4nzen.", "When the site is accessed, the hosting provider may process technically required data such as IP address, time, URL, referrer, browser and operating system in server logs. Processing supports secure operation and troubleshooting, based on legitimate interests under Art. 6(1)(f) GDPR. Add the hosting provider and actual deletion period before launch.", "\u041F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0441\u0430\u0439\u0442\u0430 \u0445\u043E\u0441\u0442\u0438\u043D\u0433-\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0432\u043A\u043B\u044E\u0447\u0430\u044F IP-\u0430\u0434\u0440\u0435\u0441, \u0432\u0440\u0435\u043C\u044F, URL, \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430, \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443. \u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u043F\u043E \u0441\u0442. 6(1)(f) GDPR. \u0414\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0445\u043E\u0441\u0442\u0438\u043D\u0433 \u0438 \u0441\u0440\u043E\u043A \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F.", "Al acceder al sitio, el proveedor de alojamiento puede tratar datos t\u00E9cnicos como direcci\u00F3n IP, hora, URL, referente, navegador y sistema operativo. La base es el inter\u00E9s leg\u00EDtimo del art. 6.1.f RGPD. Antes de publicar deben a\u00F1adirse el proveedor y el plazo de eliminaci\u00F3n."));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("3. Kontakt- und Buchungsanfragen", "3. Contact and booking requests", "3. \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0438 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F", "3. Consultas y solicitudes de reserva"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Bei einer Anfrage verarbeiten wir Villa, Reisedaten, G\u00E4stezahl, Name, E-Mail-Adresse, optional Telefonnummer und Nachricht. Dies erfolgt zur Bearbeitung vorvertraglicher Ma\u00DFnahmen und der Anfrage gem\u00E4\u00DF Art. 6 Abs. 1 lit. b DSGVO; soweit erforderlich au\u00DFerdem zur Erf\u00FCllung rechtlicher Pflichten. Nicht erforderliche Anfragen werden nach festzulegender Frist gel\u00F6scht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.", "For an enquiry we process the selected villa, travel dates, guest count, name, email address and optionally phone number and message. This is necessary for pre-contractual steps under Art. 6(1)(b) GDPR and, where applicable, legal obligations. Define and document the actual deletion period before launch.", "\u041F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u0432\u0438\u043B\u043B\u0430, \u0434\u0430\u0442\u044B, \u0447\u0438\u0441\u043B\u043E \u0433\u043E\u0441\u0442\u0435\u0439, \u0438\u043C\u044F, e-mail, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438 \u0436\u0435\u043B\u0430\u043D\u0438\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u043F\u0440\u0435\u0434\u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u044B\u0435 \u043C\u0435\u0440\u044B \u043F\u043E \u0441\u0442. 6(1)(b) GDPR \u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u044B\u0435 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438. \u0414\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0440\u043E\u043A \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F.", "Para una consulta tratamos villa, fechas, n\u00FAmero de hu\u00E9spedes, nombre, correo y, opcionalmente, tel\u00E9fono y mensaje. La base son medidas precontractuales del art. 6.1.b RGPD y obligaciones legales aplicables. Debe fijarse el plazo de eliminaci\u00F3n antes de publicar."));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Das Formular ist f\u00FCr einen Versand \u00FCber EmailJS vorbereitet. Sobald EmailJS aktiviert wird, werden die Formulardaten an diesen Dienst \u00FCbermittelt. Vor Aktivierung sind Auftragsverarbeitung, Datenstandorte, Drittlandtransfer und geeignete Garantien zu pr\u00FCfen und hier konkret zu dokumentieren. Alternativ sollte das Formular \u00FCber ein eigenes Backend innerhalb der EU versendet werden.", "The form is prepared for delivery through EmailJS. Once enabled, form data will be transmitted to that service. Before activation, review and document processing terms, data locations, international transfers and safeguards. An EU-hosted backend is an alternative.", "\u0424\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0430 \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 EmailJS. \u0414\u043E \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0438 \u043E\u043F\u0438\u0441\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443, \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445, \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438. \u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430 \u2014 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432 \u0415\u0421.", "El formulario est\u00E1 preparado para EmailJS. Antes de activarlo deben revisarse y documentarse el tratamiento, ubicaci\u00F3n de datos, transferencias internacionales y garant\u00EDas. Una alternativa es un backend alojado en la UE."));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("5. OpenStreetMap", "5. OpenStreetMap", "5. OpenStreetMap", "5. OpenStreetMap"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Auf der Standortseite ist eine Karte von OpenStreetMap eingebettet. Beim Laden kann eine Verbindung zu Servern der OpenStreetMap Foundation beziehungsweise eingebundener Infrastruktur entstehen und dabei insbesondere die IP-Adresse verarbeitet werden. Vor Livegang ist zu entscheiden, ob die Karte erst nach Einwilligung geladen wird. Rechtsgrundlage ist dann Art. 6 Abs. 1 lit. a DSGVO.", "The location page embeds an OpenStreetMap map. Loading it may connect to OpenStreetMap Foundation infrastructure and process the IP address. Before launch, decide whether the map should load only after consent; the basis would then be Art. 6(1)(a) GDPR.", "\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u043A\u0430\u0440\u0442\u0430 OpenStreetMap. \u041F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C\u0441\u044F IP-\u0430\u0434\u0440\u0435\u0441. \u0414\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0440\u0435\u0448\u0438\u0442\u044C, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u043B\u0438 \u043A\u0430\u0440\u0442\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043F\u043E \u0441\u0442. 6(1)(a) GDPR.", "La p\u00E1gina de ubicaci\u00F3n integra OpenStreetMap. Al cargarla puede tratarse la direcci\u00F3n IP. Antes de publicar debe decidirse si la carga requiere consentimiento conforme al art. 6.1.a RGPD."));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("6. Cookies und Analyse", "6. Cookies and analytics", "6. \u0424\u0430\u0439\u043B\u044B cookie \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430", "6. Cookies y anal\u00EDtica"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Der aktuelle Stand verwendet keine optionale Webanalyse und keine Marketing-Cookies. Werden sp\u00E4ter Analyse-, Karten-, Video- oder Marketingdienste erg\u00E4nzt, m\u00FCssen diese vor ihrer Aktivierung dokumentiert und \u2013 soweit erforderlich \u2013 bis zur Einwilligung blockiert werden.", "The current version does not use optional analytics or marketing cookies. If analytics, map, video or marketing services are added, they must be documented and, where required, blocked until consent.", "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0443 \u0438\u043B\u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 cookie. \u041D\u043E\u0432\u044B\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u044B \u0438 \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0434\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F.", "La versi\u00F3n actual no usa anal\u00EDtica opcional ni cookies de marketing. Los servicios futuros deber\u00E1n documentarse y, cuando proceda, bloquearse hasta obtener consentimiento."));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("7. Ihre Rechte", "7. Your rights", "7. \u0412\u0430\u0448\u0438 \u043F\u0440\u0430\u0432\u0430", "7. Sus derechos"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Sie haben nach Ma\u00DFgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, L\u00F6schung, Einschr\u00E4nkung, Daten\u00FCbertragbarkeit und Widerspruch sowie das Recht, eine Einwilligung mit Wirkung f\u00FCr die Zukunft zu widerrufen. Au\u00DFerdem k\u00F6nnen Sie sich bei einer Datenschutzaufsichtsbeh\u00F6rde beschweren, insbesondere bei der Beh\u00F6rde Ihres Aufenthaltsorts oder der zust\u00E4ndigen \u00F6sterreichischen Datenschutzbeh\u00F6rde.", "Subject to the GDPR, you may have rights of access, rectification, erasure, restriction, portability and objection, and may withdraw consent for the future. You may also complain to a supervisory authority, including the authority where you live or the competent Austrian Data Protection Authority.", "\u0412 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 GDPR \u0432\u044B \u0438\u043C\u0435\u0435\u0442\u0435 \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F, \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435, \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435, \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u043E\u0441\u0442\u044C \u0438 \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0442\u0437\u044B\u0432 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0434\u0430\u0442\u044C \u0436\u0430\u043B\u043E\u0431\u0443 \u0432 \u043D\u0430\u0434\u0437\u043E\u0440\u043D\u044B\u0439 \u043E\u0440\u0433\u0430\u043D.", "Conforme al RGPD puede ejercer los derechos de acceso, rectificaci\u00F3n, supresi\u00F3n, limitaci\u00F3n, portabilidad y oposici\u00F3n, retirar el consentimiento y reclamar ante una autoridad de control."));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("8. Stand und \u00C4nderungen", "8. Version and changes", "8. \u0412\u0435\u0440\u0441\u0438\u044F \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F", "8. Versi\u00F3n y cambios"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.t.inline("Stand: August 2026. Diese Erkl\u00E4rung ist anzupassen, sobald sich eingesetzte Dienste oder Verarbeitungen \u00E4ndern.", "Version: August 2026. Update this policy whenever services or processing activities change.", "\u0412\u0435\u0440\u0441\u0438\u044F: \u0430\u0432\u0433\u0443\u0441\u0442 2026 \u0433\u043E\u0434\u0430. \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0442\u044C \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432 \u0438\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438.", "Versi\u00F3n: agosto de 2026. La pol\u00EDtica debe actualizarse cuando cambien los servicios o tratamientos."));
} }
export class LegalComponent {
    t = inject(TranslationService);
    route = inject(ActivatedRoute);
    seo = inject(SeoService);
    page = 'imprint';
    ngOnInit() {
        const locale = this.route.snapshot.data['locale'] ?? 'de';
        this.page = this.route.snapshot.data['page'] ?? 'imprint';
        this.t.setLocale(locale);
        const path = this.page === 'imprint' ? 'impressum' : 'datenschutz';
        const title = this.page === 'imprint'
            ? this.t.inline('Impressum', 'Legal notice', 'Правовая информация', 'Aviso legal')
            : this.t.inline('Datenschutzerklärung', 'Privacy policy', 'Политика конфиденциальности', 'Política de privacidad');
        this.seo.setPage({ locale, path, title: `${title} | Villa MonteMare & Lumina`, description: title, noindex: true });
    }
    static ɵfac = function LegalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LegalComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LegalComponent, selectors: [["app-legal"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [[1, "legal", "container"], [1, "warning"], ["href", "tel:+436642660438"], ["href", "mailto:michael.c.neumann@protonmail.com"]], template: function LegalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0);
            i0.ɵɵtemplate(1, LegalComponent_Conditional_1_Template, 40, 17)(2, LegalComponent_Conditional_2_Template, 46, 19);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page === "imprint" ? 1 : 2);
        } }, styles: [".legal[_ngcontent-%COMP%] { max-width: 900px; padding-block: var(--space-5); }\n    .legal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin-bottom: var(--space-4); }\n    .legal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin-top: var(--space-4); font-size: clamp(1.25rem, 3vw, 1.7rem); }\n    .legal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .legal[_ngcontent-%COMP%]   address[_ngcontent-%COMP%] { line-height: 1.75; }\n    .legal[_ngcontent-%COMP%]   address[_ngcontent-%COMP%] { font-style: normal; }\n    .legal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: var(--c-adria); }\n    .warning[_ngcontent-%COMP%] { padding: var(--space-3); border: 2px solid var(--c-terracotta); border-radius: var(--radius); background: color-mix(in srgb, var(--c-terracotta) 8%, white); }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LegalComponent, [{
        type: Component,
        args: [{ selector: 'app-legal', standalone: true, template: `
    <main class="legal container">
      @if (page === 'imprint') {
        <h1>{{ t.inline('Impressum', 'Legal notice', 'Правовая информация', 'Aviso legal') }}</h1>
        <p class="warning"><strong>{{ t.inline('Vor Veröffentlichung ergänzen:', 'Complete before publication:', 'Заполнить до публикации:', 'Completar antes de publicar:') }}</strong>
          {{ t.inline('Vollständiger Betreibername, ladungsfähige Anschrift, Rechtsform sowie gegebenenfalls Firmenbuch-, Gewerbe- und UID-Angaben.', 'Full operator name, service address, legal form and, where applicable, company register, trade and VAT details.', 'Полное имя оператора, юридический адрес, правовая форма и, если применимо, регистрационные и налоговые данные.', 'Nombre completo del operador, domicilio legal, forma jurídica y, cuando corresponda, datos registrales, comerciales y fiscales.') }}
        </p>

        <h2>{{ t.inline('Diensteanbieter und Medieninhaber', 'Service provider and media owner', 'Поставщик услуг и владелец сайта', 'Proveedor del servicio y titular del sitio') }}</h2>
        <address>
          {{ t.inline('[VOLLSTÄNDIGEN NAMEN / FIRMA ERGÄNZEN]', '[ADD FULL NAME / COMPANY]', '[ДОБАВИТЬ ПОЛНОЕ ИМЯ / НАЗВАНИЕ КОМПАНИИ]', '[AÑADIR NOMBRE COMPLETO / EMPRESA]') }}<br />
          {{ t.inline('[STRASSE UND HAUSNUMMER ERGÄNZEN]', '[ADD STREET AND NUMBER]', '[ДОБАВИТЬ УЛИЦУ И НОМЕР ДОМА]', '[AÑADIR CALLE Y NÚMERO]') }}<br />
          {{ t.inline('[PLZ, ORT UND STAAT ERGÄNZEN]', '[ADD POSTCODE, CITY AND COUNTRY]', '[ДОБАВИТЬ ИНДЕКС, ГОРОД И СТРАНУ]', '[AÑADIR CÓDIGO POSTAL, CIUDAD Y PAÍS]') }}
        </address>
        <p>
          {{ t.inline('Telefon', 'Phone', 'Телефон', 'Teléfono') }}: <a href="tel:+436642660438">+43 664 2660438</a><br />
          E-Mail: <a href="mailto:michael.c.neumann@protonmail.com">michael.c.neumann&#64;protonmail.com</a>
        </p>

        <h2>{{ t.inline('Unternehmensangaben', 'Business information', 'Сведения о компании', 'Información empresarial') }}</h2>
        <p>
          {{ t.inline('[RECHTSFORM ERGÄNZEN]', '[ADD LEGAL FORM]', '[ДОБАВИТЬ ОРГАНИЗАЦИОННО-ПРАВОВУЮ ФОРМУ]', '[AÑADIR FORMA JURÍDICA]') }}<br />
          {{ t.inline('[FIRMENBUCHNUMMER UND -GERICHT – SOFERN VORHANDEN]', '[COMPANY REGISTER NUMBER AND COURT – IF APPLICABLE]', '[РЕГИСТРАЦИОННЫЙ НОМЕР И ОРГАН — ЕСЛИ ПРИМЕНИМО]', '[NÚMERO Y REGISTRO MERCANTIL, SI PROCEDE]') }}<br />
          {{ t.inline('[UID-NUMMER – SOFERN VORHANDEN]', '[VAT NUMBER – IF APPLICABLE]', '[НОМЕР НДС — ЕСЛИ ПРИМЕНИМО]', '[NÚMERO DE IVA, SI PROCEDE]') }}<br />
          {{ t.inline('[ZUSTÄNDIGE BEHÖRDE UND KAMMER – SOFERN ANWENDBAR]', '[COMPETENT AUTHORITY AND CHAMBER – IF APPLICABLE]', '[КОМПЕТЕНТНЫЙ ОРГАН И ПАЛАТА — ЕСЛИ ПРИМЕНИМО]', '[AUTORIDAD Y CÁMARA COMPETENTES, SI PROCEDE]') }}
        </p>

        <h2>{{ t.inline('Unterkunft und Preise', 'Accommodation and prices', 'Размещение и цены', 'Alojamiento y precios') }}</h2>
        <p>{{ t.inline('Angeboten werden Ferienaufenthalte in Villa MonteMare und Villa Lumina in Reževići, Gemeinde Budva, Montenegro. Der derzeit angezeigte Betrag von 500 € pro Nacht ist ein Basis- beziehungsweise Richtpreis. Vor Livegang ist eindeutig anzugeben, ob Steuern, Kurtaxe, Endreinigung und sonstige Gebühren enthalten sind.', 'Holiday stays are offered at Villa MonteMare and Villa Lumina in Reževići, Municipality of Budva, Montenegro. The displayed €500 per night is currently a base or indicative price. Before launch, state clearly whether taxes, tourist tax, cleaning and other fees are included.', 'Предлагается проживание на виллах MonteMare и Lumina в Режевичи, муниципалитет Будва, Черногория. Указанные 500 € за ночь являются базовой ориентировочной ценой. До публикации необходимо указать, включены ли налоги, туристический сбор, уборка и другие платежи.', 'Se ofrecen estancias en Villa MonteMare y Villa Lumina, en Reževići, municipio de Budva, Montenegro. Los 500 € por noche mostrados son un precio base orientativo. Antes de publicar debe indicarse claramente si incluye impuestos, tasa turística, limpieza y otros cargos.') }}</p>

        <h2>{{ t.inline('Haftung und Urheberrecht', 'Liability and copyright', 'Ответственность и авторские права', 'Responsabilidad y derechos de autor') }}</h2>
        <p>{{ t.inline('Die Inhalte wurden sorgfältig erstellt, ersetzen jedoch keine verbindliche individuelle Auskunft. Für externe Links sind deren Betreiber verantwortlich. Texte, Fotos, Videos und Gestaltung dürfen ohne Zustimmung nicht vervielfältigt oder verwendet werden, soweit keine abweichenden Rechte ausgewiesen sind.', 'Content has been prepared with care but does not replace binding individual information. External sites are the responsibility of their operators. Texts, photos, videos and design may not be reproduced or used without permission unless stated otherwise.', 'Материалы подготовлены с должной тщательностью, но не заменяют обязательную индивидуальную информацию. За внешние сайты отвечают их операторы. Тексты, фотографии, видео и дизайн нельзя использовать без разрешения.', 'El contenido se ha preparado cuidadosamente, pero no sustituye información individual vinculante. Los operadores externos son responsables de sus sitios. Los textos, fotos, vídeos y diseño no pueden utilizarse sin autorización.') }}</p>
      } @else {
        <h1>{{ t.inline('Datenschutzerklärung', 'Privacy policy', 'Политика конфиденциальности', 'Política de privacidad') }}</h1>
        <p class="warning"><strong>{{ t.inline('Vor Veröffentlichung prüfen:', 'Review before publication:', 'Проверить до публикации:', 'Revisar antes de publicar:') }}</strong>
          {{ t.inline('Hostinganbieter, EmailJS-Konfiguration, Domain, Speicherfristen und Betreiberanschrift müssen mit der tatsächlichen Produktion übereinstimmen.', 'Hosting provider, EmailJS configuration, domain, retention periods and operator address must match the actual production setup.', 'Хостинг, настройки EmailJS, домен, сроки хранения и адрес оператора должны соответствовать фактической конфигурации.', 'El alojamiento, la configuración de EmailJS, el dominio, los plazos de conservación y la dirección del operador deben coincidir con la configuración real.') }}
        </p>

        <h2>{{ t.inline('1. Verantwortlicher', '1. Controller', '1. Ответственный', '1. Responsable') }}</h2>
        <p>{{ t.inline('[VOLLSTÄNDIGEN NAMEN / FIRMA UND ANSCHRIFT ERGÄNZEN]', '[ADD FULL NAME / COMPANY AND ADDRESS]', '[ДОБАВИТЬ ПОЛНОЕ ИМЯ / КОМПАНИЮ И АДРЕС]', '[AÑADIR NOMBRE COMPLETO / EMPRESA Y DIRECCIÓN]') }}<br />
          E-Mail: <a href="mailto:michael.c.neumann@protonmail.com">michael.c.neumann&#64;protonmail.com</a><br />
          {{ t.inline('Telefon', 'Phone', 'Телефон', 'Teléfono') }}: <a href="tel:+436642660438">+43 664 2660438</a>
        </p>

        <h2>{{ t.inline('2. Technische Zugriffsdaten', '2. Technical access data', '2. Технические данные доступа', '2. Datos técnicos de acceso') }}</h2>
        <p>{{ t.inline('Beim Aufruf der Website kann der Hostinganbieter technisch erforderliche Daten wie IP-Adresse, Zeitpunkt, aufgerufene URL, Referrer, Browser und Betriebssystem in Serverprotokollen verarbeiten. Die Verarbeitung dient dem sicheren und störungsfreien Betrieb sowie der Fehleranalyse. Rechtsgrundlage ist das berechtigte Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Hostinganbieter und konkrete Löschfrist sind vor Veröffentlichung zu ergänzen.', 'When the site is accessed, the hosting provider may process technically required data such as IP address, time, URL, referrer, browser and operating system in server logs. Processing supports secure operation and troubleshooting, based on legitimate interests under Art. 6(1)(f) GDPR. Add the hosting provider and actual deletion period before launch.', 'При посещении сайта хостинг-провайдер может обрабатывать необходимые технические данные, включая IP-адрес, время, URL, источник перехода, браузер и операционную систему. Основание — законный интерес по ст. 6(1)(f) GDPR. До публикации укажите хостинг и срок удаления.', 'Al acceder al sitio, el proveedor de alojamiento puede tratar datos técnicos como dirección IP, hora, URL, referente, navegador y sistema operativo. La base es el interés legítimo del art. 6.1.f RGPD. Antes de publicar deben añadirse el proveedor y el plazo de eliminación.') }}</p>

        <h2>{{ t.inline('3. Kontakt- und Buchungsanfragen', '3. Contact and booking requests', '3. Контактные запросы и бронирования', '3. Consultas y solicitudes de reserva') }}</h2>
        <p>{{ t.inline('Bei einer Anfrage verarbeiten wir Villa, Reisedaten, Gästezahl, Name, E-Mail-Adresse, optional Telefonnummer und Nachricht. Dies erfolgt zur Bearbeitung vorvertraglicher Maßnahmen und der Anfrage gemäß Art. 6 Abs. 1 lit. b DSGVO; soweit erforderlich außerdem zur Erfüllung rechtlicher Pflichten. Nicht erforderliche Anfragen werden nach festzulegender Frist gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.', 'For an enquiry we process the selected villa, travel dates, guest count, name, email address and optionally phone number and message. This is necessary for pre-contractual steps under Art. 6(1)(b) GDPR and, where applicable, legal obligations. Define and document the actual deletion period before launch.', 'При запросе обрабатываются выбранная вилла, даты, число гостей, имя, e-mail, а также при желании телефон и сообщение. Основание — преддоговорные меры по ст. 6(1)(b) GDPR и применимые правовые обязанности. До публикации установите срок удаления.', 'Para una consulta tratamos villa, fechas, número de huéspedes, nombre, correo y, opcionalmente, teléfono y mensaje. La base son medidas precontractuales del art. 6.1.b RGPD y obligaciones legales aplicables. Debe fijarse el plazo de eliminación antes de publicar.') }}</p>

        <h2>4. EmailJS</h2>
        <p>{{ t.inline('Das Formular ist für einen Versand über EmailJS vorbereitet. Sobald EmailJS aktiviert wird, werden die Formulardaten an diesen Dienst übermittelt. Vor Aktivierung sind Auftragsverarbeitung, Datenstandorte, Drittlandtransfer und geeignete Garantien zu prüfen und hier konkret zu dokumentieren. Alternativ sollte das Formular über ein eigenes Backend innerhalb der EU versendet werden.', 'The form is prepared for delivery through EmailJS. Once enabled, form data will be transmitted to that service. Before activation, review and document processing terms, data locations, international transfers and safeguards. An EU-hosted backend is an alternative.', 'Форма подготовлена для отправки через EmailJS. До активации необходимо проверить и описать обработку, расположение данных, международную передачу и гарантии. Альтернатива — собственный сервер в ЕС.', 'El formulario está preparado para EmailJS. Antes de activarlo deben revisarse y documentarse el tratamiento, ubicación de datos, transferencias internacionales y garantías. Una alternativa es un backend alojado en la UE.') }}</p>

        <h2>{{ t.inline('5. OpenStreetMap', '5. OpenStreetMap', '5. OpenStreetMap', '5. OpenStreetMap') }}</h2>
        <p>{{ t.inline('Auf der Standortseite ist eine Karte von OpenStreetMap eingebettet. Beim Laden kann eine Verbindung zu Servern der OpenStreetMap Foundation beziehungsweise eingebundener Infrastruktur entstehen und dabei insbesondere die IP-Adresse verarbeitet werden. Vor Livegang ist zu entscheiden, ob die Karte erst nach Einwilligung geladen wird. Rechtsgrundlage ist dann Art. 6 Abs. 1 lit. a DSGVO.', 'The location page embeds an OpenStreetMap map. Loading it may connect to OpenStreetMap Foundation infrastructure and process the IP address. Before launch, decide whether the map should load only after consent; the basis would then be Art. 6(1)(a) GDPR.', 'На странице расположения встроена карта OpenStreetMap. При загрузке может передаваться IP-адрес. До публикации следует решить, загружать ли карту только после согласия по ст. 6(1)(a) GDPR.', 'La página de ubicación integra OpenStreetMap. Al cargarla puede tratarse la dirección IP. Antes de publicar debe decidirse si la carga requiere consentimiento conforme al art. 6.1.a RGPD.') }}</p>

        <h2>{{ t.inline('6. Cookies und Analyse', '6. Cookies and analytics', '6. Файлы cookie и аналитика', '6. Cookies y analítica') }}</h2>
        <p>{{ t.inline('Der aktuelle Stand verwendet keine optionale Webanalyse und keine Marketing-Cookies. Werden später Analyse-, Karten-, Video- oder Marketingdienste ergänzt, müssen diese vor ihrer Aktivierung dokumentiert und – soweit erforderlich – bis zur Einwilligung blockiert werden.', 'The current version does not use optional analytics or marketing cookies. If analytics, map, video or marketing services are added, they must be documented and, where required, blocked until consent.', 'Текущая версия не использует необязательную аналитику или маркетинговые cookie. Новые сервисы должны быть описаны и при необходимости заблокированы до согласия.', 'La versión actual no usa analítica opcional ni cookies de marketing. Los servicios futuros deberán documentarse y, cuando proceda, bloquearse hasta obtener consentimiento.') }}</p>

        <h2>{{ t.inline('7. Ihre Rechte', '7. Your rights', '7. Ваши права', '7. Sus derechos') }}</h2>
        <p>{{ t.inline('Sie haben nach Maßgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie das Recht, eine Einwilligung mit Wirkung für die Zukunft zu widerrufen. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere bei der Behörde Ihres Aufenthaltsorts oder der zuständigen österreichischen Datenschutzbehörde.', 'Subject to the GDPR, you may have rights of access, rectification, erasure, restriction, portability and objection, and may withdraw consent for the future. You may also complain to a supervisory authority, including the authority where you live or the competent Austrian Data Protection Authority.', 'В соответствии с GDPR вы имеете права на доступ, исправление, удаление, ограничение, переносимость и возражение, а также отзыв согласия. Вы можете подать жалобу в надзорный орган.', 'Conforme al RGPD puede ejercer los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición, retirar el consentimiento y reclamar ante una autoridad de control.') }}</p>

        <h2>{{ t.inline('8. Stand und Änderungen', '8. Version and changes', '8. Версия и изменения', '8. Versión y cambios') }}</h2>
        <p>{{ t.inline('Stand: August 2026. Diese Erklärung ist anzupassen, sobald sich eingesetzte Dienste oder Verarbeitungen ändern.', 'Version: August 2026. Update this policy whenever services or processing activities change.', 'Версия: август 2026 года. Политику необходимо обновлять при изменении сервисов или обработки.', 'Versión: agosto de 2026. La política debe actualizarse cuando cambien los servicios o tratamientos.') }}</p>
      }
    </main>
  `, styles: ["\n    .legal { max-width: 900px; padding-block: var(--space-5); }\n    .legal h1 { margin-bottom: var(--space-4); }\n    .legal h2 { margin-top: var(--space-4); font-size: clamp(1.25rem, 3vw, 1.7rem); }\n    .legal p, .legal address { line-height: 1.75; }\n    .legal address { font-style: normal; }\n    .legal a { color: var(--c-adria); }\n    .warning { padding: var(--space-3); border: 2px solid var(--c-terracotta); border-radius: var(--radius); background: color-mix(in srgb, var(--c-terracotta) 8%, white); }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LegalComponent, { className: "LegalComponent" }); })();
//# sourceMappingURL=legal.component.js.map