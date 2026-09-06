import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { Locale } from '../../core/models/villa.model';
import { CONTACT } from '../../core/config/contact.config';

@Component({
  selector: 'app-legal',
  standalone: true,
  template: `
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
          {{ t.inline('Telefon', 'Phone', 'Телефон', 'Teléfono') }}: <a [href]="'tel:' + contact.phoneE164">{{ contact.phoneDisplay }}</a><br />
          E-Mail: <a [href]="'mailto:' + contact.email">{{ contact.email }}</a>
        </p>

        <h2>{{ t.inline('Unternehmensangaben', 'Business information', 'Сведения о компании', 'Información empresarial') }}</h2>
        <p>
          {{ t.inline('[RECHTSFORM ERGÄNZEN]', '[ADD LEGAL FORM]', '[ДОБАВИТЬ ОРГАНИЗАЦИОННО-ПРАВОВУЮ ФОРМУ]', '[AÑADIR FORMA JURÍDICA]') }}<br />
          {{ t.inline('[FIRMENBUCHNUMMER UND -GERICHT – SOFERN VORHANDEN]', '[COMPANY REGISTER NUMBER AND COURT – IF APPLICABLE]', '[РЕГИСТРАЦИОННЫЙ НОМЕР И ОРГАН — ЕСЛИ ПРИМЕНИМО]', '[NÚMERO Y REGISTRO MERCANTIL, SI PROCEDE]') }}<br />
          {{ t.inline('[UID-NUMMER – SOFERN VORHANDEN]', '[VAT NUMBER – IF APPLICABLE]', '[НОМЕР НДС — ЕСЛИ ПРИМЕНИМО]', '[NÚMERO DE IVA, SI PROCEDE]') }}<br />
          {{ t.inline('[ZUSTÄNDIGE BEHÖRDE UND KAMMER – SOFERN ANWENDBAR]', '[COMPETENT AUTHORITY AND CHAMBER – IF APPLICABLE]', '[КОМПЕТЕНТНЫЙ ОРГАН И ПАЛАТА — ЕСЛИ ПРИМЕНИМО]', '[AUTORIDAD Y CÁMARA COMPETENTES, SI PROCEDE]') }}
        </p>

        <h2>{{ t.inline('Unterkunft und Preise', 'Accommodation and prices', 'Размещение и цены', 'Alojamiento y precios') }}</h2>
        <p>{{ t.inline('Angeboten werden Ferienaufenthalte in Villa MonteMare und Villa Lumina in Reževići, Gemeinde Budva, Montenegro. Die angezeigten Saisonpreise von 378 € bis 539 € pro Nacht sind vorläufige Richtpreise. Vor Livegang ist eindeutig anzugeben, ob Steuern, Kurtaxe und sonstige Gebühren enthalten sind; die Endreinigung ist im Aufenthalt enthalten.', 'Holiday stays are offered at Villa MonteMare and Villa Lumina in Reževići, Municipality of Budva, Montenegro. The displayed seasonal rates from €378 to €539 per night are provisional indicative prices. Before launch, state clearly whether taxes, tourist tax and other charges are included; final cleaning is included in the stay.', 'Предлагается проживание на виллах MonteMare и Lumina в Режевичи, муниципалитет Будва, Черногория. Указанные сезонные цены от 378 € до 539 € за ночь являются предварительными ориентировочными ценами. До публикации необходимо указать, включены ли налоги, туристический сбор и другие платежи; финальная уборка включена.', 'Se ofrecen estancias en Villa MonteMare y Villa Lumina, en Reževići, municipio de Budva, Montenegro. Las tarifas de temporada mostradas, de 378 € a 539 € por noche, son precios orientativos provisionales. Antes de publicar debe indicarse claramente si incluyen impuestos, tasa turística y otros cargos; la limpieza final está incluida.') }}</p>

        <h2>{{ t.inline('Haftung und Urheberrecht', 'Liability and copyright', 'Ответственность и авторские права', 'Responsabilidad y derechos de autor') }}</h2>
        <p>{{ t.inline('Die Inhalte wurden sorgfältig erstellt, ersetzen jedoch keine verbindliche individuelle Auskunft. Für externe Links sind deren Betreiber verantwortlich. Texte, Fotos, Videos und Gestaltung dürfen ohne Zustimmung nicht vervielfältigt oder verwendet werden, soweit keine abweichenden Rechte ausgewiesen sind.', 'Content has been prepared with care but does not replace binding individual information. External sites are the responsibility of their operators. Texts, photos, videos and design may not be reproduced or used without permission unless stated otherwise.', 'Материалы подготовлены с должной тщательностью, но не заменяют обязательную индивидуальную информацию. За внешние сайты отвечают их операторы. Тексты, фотографии, видео и дизайн нельзя использовать без разрешения.', 'El contenido se ha preparado cuidadosamente, pero no sustituye información individual vinculante. Los operadores externos son responsables de sus sitios. Los textos, fotos, vídeos y diseño no pueden utilizarse sin autorización.') }}</p>
      } @else {
        <h1>{{ t.inline('Datenschutzerklärung', 'Privacy policy', 'Политика конфиденциальности', 'Política de privacidad') }}</h1>
        <p class="warning"><strong>{{ t.inline('Vor Veröffentlichung prüfen:', 'Review before publication:', 'Проверить до публикации:', 'Revisar antes de publicar:') }}</strong>
          {{ t.inline('Hostinganbieter, Domain, Speicherfristen und Betreiberanschrift müssen mit der tatsächlichen Produktion übereinstimmen.', 'Hosting provider, domain, retention periods and operator address must match the actual production setup.', 'Хостинг, домен, сроки хранения и адрес оператора должны соответствовать фактической конфигурации.', 'El alojamiento, el dominio, los plazos de conservación y la dirección del operador deben coincidir con la configuración real.') }}
        </p>

        <h2>{{ t.inline('1. Verantwortlicher', '1. Controller', '1. Ответственный', '1. Responsable') }}</h2>
        <p>{{ t.inline('[VOLLSTÄNDIGEN NAMEN / FIRMA UND ANSCHRIFT ERGÄNZEN]', '[ADD FULL NAME / COMPANY AND ADDRESS]', '[ДОБАВИТЬ ПОЛНОЕ ИМЯ / КОМПАНИЮ И АДРЕС]', '[AÑADIR NOMBRE COMPLETO / EMPRESA Y DIRECCIÓN]') }}<br />
          E-Mail: <a [href]="'mailto:' + contact.email">{{ contact.email }}</a><br />
          {{ t.inline('Telefon', 'Phone', 'Телефон', 'Teléfono') }}: <a [href]="'tel:' + contact.phoneE164">{{ contact.phoneDisplay }}</a>
        </p>

        <h2>{{ t.inline('2. Technische Zugriffsdaten', '2. Technical access data', '2. Технические данные доступа', '2. Datos técnicos de acceso') }}</h2>
        <p>{{ t.inline('Beim Aufruf der Website kann der Hostinganbieter technisch erforderliche Daten wie IP-Adresse, Zeitpunkt, aufgerufene URL, Referrer, Browser und Betriebssystem in Serverprotokollen verarbeiten. Die Verarbeitung dient dem sicheren und störungsfreien Betrieb sowie der Fehleranalyse. Rechtsgrundlage ist das berechtigte Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Hostinganbieter und konkrete Löschfrist sind vor Veröffentlichung zu ergänzen.', 'When the site is accessed, the hosting provider may process technically required data such as IP address, time, URL, referrer, browser and operating system in server logs. Processing supports secure operation and troubleshooting, based on legitimate interests under Art. 6(1)(f) GDPR. Add the hosting provider and actual deletion period before launch.', 'При посещении сайта хостинг-провайдер может обрабатывать необходимые технические данные, включая IP-адрес, время, URL, источник перехода, браузер и операционную систему. Основание — законный интерес по ст. 6(1)(f) GDPR. До публикации укажите хостинг и срок удаления.', 'Al acceder al sitio, el proveedor de alojamiento puede tratar datos técnicos como dirección IP, hora, URL, referente, navegador y sistema operativo. La base es el interés legítimo del art. 6.1.f RGPD. Antes de publicar deben añadirse el proveedor y el plazo de eliminación.') }}</p>

        <h2>{{ t.inline('3. Kontakt- und Buchungsanfragen', '3. Contact and booking requests', '3. Контактные запросы и бронирования', '3. Consultas y solicitudes de reserva') }}</h2>
        <p>{{ t.inline('Der Anfrage-Assistent verarbeitet die ausgewählte Villa, Reisedaten oder Flexibilität, Gästezahl, Reiseanlass, Name, E-Mail-Adresse oder WhatsApp-Nummer und eine optionale Nachricht zunächst ausschließlich im Browser. Die Website übermittelt diese Angaben nicht automatisch. Erst wenn Sie E-Mail oder WhatsApp auswählen, wird dort ein Nachrichtenentwurf geöffnet, den Sie selbst prüfen und absenden. Nach dem Versand verarbeiten wir die erhaltenen Angaben zur Bearbeitung vorvertraglicher Maßnahmen gemäß Art. 6 Abs. 1 lit. b DSGVO.', 'The inquiry assistant initially processes the selected villa, dates or flexibility, guest count, reason for travel, name, email address or WhatsApp number and optional message only in your browser. The website does not transmit these details automatically. When you choose email or WhatsApp, a draft opens there for you to review and send. After sending, we process the received information for pre-contractual steps under Art. 6(1)(b) GDPR.', 'Помощник запроса сначала обрабатывает выбранную виллу, даты или гибкость, число гостей, цель поездки, имя, адрес e-mail или номер WhatsApp и сообщение только в браузере. Сайт не отправляет эти данные автоматически. При выборе e-mail или WhatsApp там открывается черновик, который вы проверяете и отправляете самостоятельно. После отправки данные обрабатываются для преддоговорных мер по ст. 6(1)(b) GDPR.', 'El asistente trata inicialmente en el navegador la villa, fechas o flexibilidad, número de huéspedes, motivo del viaje, nombre, correo electrónico o número de WhatsApp y mensaje opcional. La web no transmite estos datos automáticamente. Al elegir correo o WhatsApp se abre un borrador para que lo revises y envíes. Tras el envío, tratamos la información para medidas precontractuales conforme al art. 6.1.b RGPD.') }}</p>

        <h2>{{ t.inline('4. E-Mail und WhatsApp', '4. Email and WhatsApp', '4. Электронная почта и WhatsApp', '4. Correo electrónico y WhatsApp') }}</h2>
        <p>{{ t.inline('Beim Öffnen und Absenden über E-Mail beziehungsweise WhatsApp gelten ergänzend die Datenschutzbestimmungen des von Ihnen verwendeten E-Mail-Anbieters beziehungsweise von WhatsApp. WhatsApp kann Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten. Die Nutzung von WhatsApp ist freiwillig; alternativ steht E-Mail zur Verfügung.', 'When you open and send the request by email or WhatsApp, the privacy terms of your email provider or WhatsApp also apply. WhatsApp may process data outside the European Economic Area. WhatsApp is optional; email is available as an alternative.', 'При отправке через e-mail или WhatsApp также действуют правила конфиденциальности соответствующего провайдера. WhatsApp может обрабатывать данные за пределами ЕЭЗ. Использование WhatsApp добровольно; доступна альтернатива по e-mail.', 'Al abrir y enviar la solicitud por correo o WhatsApp también se aplican las políticas del proveedor correspondiente. WhatsApp puede tratar datos fuera del EEE. Su uso es voluntario y el correo electrónico está disponible como alternativa.') }}</p>

        <h2>{{ t.inline('5. Google Maps', '5. Google Maps', '5. Google Maps', '5. Google Maps') }}</h2>
        <p>{{ t.inline('Auf der Standortseite ist eine Karte von Google Maps eingebettet. Beim Laden der Karte wird eine Verbindung zu Servern von Google hergestellt; dabei können insbesondere die IP-Adresse, Geräteinformationen und Nutzungsdaten verarbeitet und gegebenenfalls in Drittländer übertragen werden. Vor dem Livegang ist zu entscheiden, ob die Karte erst nach Ihrer Einwilligung geladen wird. Rechtsgrundlage ist dann Art. 6 Abs. 1 lit. a DSGVO.', 'The location page embeds a Google Maps map. Loading the map establishes a connection to Google servers; this may involve processing the IP address, device information and usage data and may transfer data to third countries. Before launch, decide whether the map should load only after consent; the legal basis would then be Art. 6(1)(a) GDPR.', 'На странице расположения встроена карта Google Maps. При её загрузке устанавливается соединение с серверами Google; при этом могут обрабатываться IP-адрес, сведения об устройстве и данные об использовании, а также возможна передача данных в третьи страны. До публикации следует решить, загружать ли карту только после согласия по ст. 6(1)(a) GDPR.', 'La página de ubicación integra un mapa de Google Maps. Al cargarlo se establece una conexión con los servidores de Google; pueden tratarse la dirección IP, información del dispositivo y datos de uso, y transferirse datos a terceros países. Antes de publicar debe decidirse si el mapa se carga solo tras obtener el consentimiento conforme al art. 6.1.a RGPD.') }}</p>

        <h2>{{ t.inline('6. Cookies und Analyse', '6. Cookies and analytics', '6. Файлы cookie и аналитика', '6. Cookies y analítica') }}</h2>
        <p>{{ t.inline('Der aktuelle Stand verwendet keine optionale Webanalyse und keine Marketing-Cookies. Werden später Analyse-, Karten-, Video- oder Marketingdienste ergänzt, müssen diese vor ihrer Aktivierung dokumentiert und – soweit erforderlich – bis zur Einwilligung blockiert werden.', 'The current version does not use optional analytics or marketing cookies. If analytics, map, video or marketing services are added, they must be documented and, where required, blocked until consent.', 'Текущая версия не использует необязательную аналитику или маркетинговые cookie. Новые сервисы должны быть описаны и при необходимости заблокированы до согласия.', 'La versión actual no usa analítica opcional ni cookies de marketing. Los servicios futuros deberán documentarse y, cuando proceda, bloquearse hasta obtener consentimiento.') }}</p>

        <h2>{{ t.inline('7. Ihre Rechte', '7. Your rights', '7. Ваши права', '7. Sus derechos') }}</h2>
        <p>{{ t.inline('Sie haben nach Maßgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie das Recht, eine Einwilligung mit Wirkung für die Zukunft zu widerrufen. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere bei der Behörde Ihres Aufenthaltsorts oder der zuständigen österreichischen Datenschutzbehörde.', 'Subject to the GDPR, you may have rights of access, rectification, erasure, restriction, portability and objection, and may withdraw consent for the future. You may also complain to a supervisory authority, including the authority where you live or the competent Austrian Data Protection Authority.', 'В соответствии с GDPR вы имеете права на доступ, исправление, удаление, ограничение, переносимость и возражение, а также отзыв согласия. Вы можете подать жалобу в надзорный орган.', 'Conforme al RGPD puede ejercer los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición, retirar el consentimiento y reclamar ante una autoridad de control.') }}</p>

        <h2>{{ t.inline('8. Stand und Änderungen', '8. Version and changes', '8. Версия и изменения', '8. Versión y cambios') }}</h2>
        <p>{{ t.inline('Stand: August 2026. Diese Erklärung ist anzupassen, sobald sich eingesetzte Dienste oder Verarbeitungen ändern.', 'Version: August 2026. Update this policy whenever services or processing activities change.', 'Версия: август 2026 года. Политику необходимо обновлять при изменении сервисов или обработки.', 'Versión: agosto de 2026. La política debe actualizarse cuando cambien los servicios o tratamientos.') }}</p>
      }
    </main>
  `,
  styles: [`
    .legal { max-width: 900px; padding-block: var(--space-5); }
    .legal h1 { margin-bottom: var(--space-4); }
    .legal h2 { margin-top: var(--space-4); font-size: clamp(1.25rem, 3vw, 1.7rem); }
    .legal p, .legal address { line-height: 1.75; }
    .legal address { font-style: normal; }
    .legal a { color: var(--c-adria); }
    .warning { padding: var(--space-3); border: 2px solid var(--c-terracotta); border-radius: var(--radius); background: color-mix(in srgb, var(--c-terracotta) 8%, white); }
  `],
})
export class LegalComponent implements OnInit {
  protected readonly t = inject(TranslationService);
  protected readonly contact = CONTACT;
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  protected page: 'imprint' | 'privacy' = 'imprint';

  ngOnInit(): void {
    const locale = (this.route.snapshot.data['locale'] as Locale) ?? 'de';
    this.page = (this.route.snapshot.data['page'] as 'imprint' | 'privacy') ?? 'imprint';
    this.t.setLocale(locale);
    const path = this.page === 'imprint' ? 'impressum' : 'datenschutz';
    const title = this.page === 'imprint'
      ? this.t.inline('Impressum', 'Legal notice', 'Правовая информация', 'Aviso legal')
      : this.t.inline('Datenschutzerklärung', 'Privacy policy', 'Политика конфиденциальности', 'Política de privacidad');
    this.seo.setPage({ locale, path, title: `${title} | Villa MonteMare & Lumina`, description: title, noindex: true });
  }
}
