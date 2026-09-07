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
    <section class="legal container">
      @if (page === 'imprint') {
        <h1>{{ t.inline('Impressum', 'Legal notice', 'Правовая информация', 'Aviso legal') }}</h1>
        <p class="legal-intro">{{ t.inline('Angaben zum Verantwortlichen dieser Website.', 'Information about the person responsible for this website.', 'Сведения о лице, ответственном за этот сайт.', 'Información sobre el responsable de este sitio web.', 'Podaci o licu odgovornom za ovu veb-stranicu.') }}</p>

        <h2>{{ t.inline('Verantwortlicher', 'Responsible person', 'Ответственное лицо', 'Responsable', 'Odgovorno lice') }}</h2>
        <address>
          <strong>Michael Christian Neumann</strong><br />
          Trencianska 17<br />
          SK-821 09 Bratislava II<br />
          {{ t.inline('Slowakei', 'Slovakia', 'Словакия', 'Eslovaquia', 'Slovačka') }}
        </address>

        <h2>{{ t.inline('Kontakt', 'Contact', 'Контакты', 'Contacto', 'Kontakt') }}</h2>
        <p>
          {{ t.inline('Telefon', 'Phone', 'Телефон', 'Teléfono') }}: <a [href]="'tel:' + contact.phoneE164">{{ contact.phoneDisplay }}</a><br />
          E-Mail: <a [href]="'mailto:' + contact.email">{{ contact.email }}</a>
        </p>

        <h2>{{ t.inline('Verantwortlich für den Inhalt', 'Responsible for the content', 'Ответственный за содержание', 'Responsable del contenido', 'Odgovoran za sadržaj') }}</h2>
        <p>Michael Christian Neumann</p>

        <h2>{{ t.inline('Streitschlichtung', 'Dispute resolution', 'Разрешение споров', 'Resolución de litigios', 'Rešavanje sporova') }}</h2>
        <p>{{ t.inline('Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.', 'We are neither required nor willing to participate in dispute resolution proceedings before a consumer arbitration board.', 'Мы не обязаны и не готовы участвовать в процедуре разрешения споров в потребительском арбитраже.', 'No estamos obligados ni dispuestos a participar en procedimientos de resolución de litigios ante una junta arbitral de consumo.', 'Nismo obavezni niti spremni da učestvujemo u postupku rešavanja sporova pred telom za vansudsko rešavanje potrošačkih sporova.') }}</p>

        <h2>{{ t.inline('Bildnachweise', 'Image credits', 'Источники изображений', 'Créditos de imágenes', 'Autorska prava za fotografije') }}</h2>
        <p>{{ t.inline('Die Villenfotos stammen aus eigenem beziehungsweise zur Nutzung freigegebenem Bildmaterial. Abweichende Urheber- und Lizenzangaben finden Sie direkt bei den jeweiligen Reiseführerbildern.', 'The villa photographs are owned by us or have been cleared for use. Any differing author and licence information is shown directly alongside the respective travel-guide image.', 'Фотографии вилл являются собственными материалами либо разрешены к использованию. Иные сведения об авторах и лицензиях указаны непосредственно рядом с изображениями в путеводителях.', 'Las fotografías de las villas son propias o están autorizadas para su uso. Los créditos y licencias distintos aparecen directamente junto a cada imagen de las guías.', 'Fotografije vila su naše ili su odobrene za korišćenje. Drugačiji podaci o autoru i licenci navedeni su neposredno uz odgovarajuće fotografije u vodičima.') }}</p>
      } @else {
        <h1>{{ t.inline('Datenschutzerklärung', 'Privacy policy', 'Политика конфиденциальности', 'Política de privacidad') }}</h1>
        <p class="legal-intro">{{ t.inline('Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Website und bei einer Anfrage verarbeitet werden.', 'This privacy policy explains which personal data is processed when you visit this website or make an enquiry.', 'Настоящая политика объясняет, какие персональные данные обрабатываются при посещении сайта и отправке запроса.', 'Esta política explica qué datos personales se tratan al visitar el sitio web o enviar una consulta.', 'Ova politika privatnosti objašnjava koji se lični podaci obrađuju prilikom posete sajtu ili slanja upita.') }}</p>

        <h2>{{ t.inline('1. Verantwortlicher', '1. Controller', '1. Ответственный', '1. Responsable') }}</h2>
        <address><strong>Michael Christian Neumann</strong><br />
          Trencianska 17<br />
          SK-821 09 Bratislava II<br />
          {{ t.inline('Slowakei', 'Slovakia', 'Словакия', 'Eslovaquia', 'Slovačka') }}<br />
          E-Mail: <a [href]="'mailto:' + contact.email">{{ contact.email }}</a><br />
          {{ t.inline('Telefon', 'Phone', 'Телефон', 'Teléfono') }}: <a [href]="'tel:' + contact.phoneE164">{{ contact.phoneDisplay }}</a>
        </address>

        <h2>{{ t.inline('2. Technische Zugriffsdaten', '2. Technical access data', '2. Технические данные доступа', '2. Datos técnicos de acceso') }}</h2>
        <p>{{ t.inline('Diese Website wird bei', 'This website is hosted by', 'Хостинг этой веб-страницы предоставляет', 'Este sitio web está alojado por', 'Ovu veb-stranicu hostuje') }}
          <a href="https://all-inkl.com/datenschutzinformationen" target="_blank" rel="noopener">ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf, Deutschland</a>.
          {{ t.inline('Beim Aufruf der Website können technisch erforderliche Daten wie IP-Adresse, Zeitpunkt, aufgerufene URL, Referrer, Browser und Betriebssystem in Serverprotokollen verarbeitet werden. Dies dient dem sicheren und störungsfreien Betrieb sowie der Fehleranalyse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden nur so lange gespeichert, wie dies für diese Zwecke oder aufgrund gesetzlicher Pflichten erforderlich ist.', 'When the website is accessed, technically necessary data such as IP address, time, requested URL, referrer, browser and operating system may be processed in server logs. This supports secure and reliable operation and troubleshooting. The legal basis is Art. 6(1)(f) GDPR. Data is retained only for as long as required for these purposes or by law.', 'При посещении сайта в журналах сервера могут обрабатываться технически необходимые данные: IP-адрес, время, запрошенный URL, источник перехода, браузер и операционная система. Это необходимо для безопасной и стабильной работы и устранения ошибок. Правовое основание — ст. 6(1)(f) GDPR. Данные хранятся только столько, сколько необходимо для этих целей или предусмотрено законом.', 'Al acceder al sitio pueden tratarse en los registros del servidor datos técnicamente necesarios como la dirección IP, hora, URL solicitada, referente, navegador y sistema operativo. Esto permite un funcionamiento seguro y estable y la resolución de errores. La base jurídica es el art. 6.1.f RGPD. Los datos se conservan solo durante el tiempo necesario para estos fines o por obligación legal.', 'Prilikom posete sajtu, u serverskim zapisima mogu se obrađivati tehnički neophodni podaci kao što su IP adresa, vreme, zatraženi URL, upućujuća stranica, pregledač i operativni sistem. Obrada služi bezbednom i pouzdanom radu i otklanjanju grešaka. Pravni osnov je član 6(1)(f) GDPR-a. Podaci se čuvaju samo onoliko dugo koliko je potrebno za ove svrhe ili zbog zakonskih obaveza.') }}
        </p>

        <h2>{{ t.inline('3. Kontakt- und Buchungsanfragen', '3. Contact and booking requests', '3. Контактные запросы и бронирования', '3. Consultas y solicitudes de reserva') }}</h2>
        <p>{{ t.inline('Der Anfrage-Assistent verarbeitet die ausgewählte Villa, Reisedaten oder Flexibilität, Gästezahl, Reiseanlass, Name, E-Mail-Adresse oder WhatsApp-Nummer und eine optionale Nachricht zunächst ausschließlich im Browser. Die Website übermittelt diese Angaben nicht automatisch. Erst wenn Sie E-Mail oder WhatsApp auswählen, wird dort ein Nachrichtenentwurf geöffnet, den Sie selbst prüfen und absenden. Nach dem Versand verarbeiten wir die erhaltenen Angaben zur Bearbeitung vorvertraglicher Maßnahmen gemäß Art. 6 Abs. 1 lit. b DSGVO.', 'The inquiry assistant initially processes the selected villa, dates or flexibility, guest count, reason for travel, name, email address or WhatsApp number and optional message only in your browser. The website does not transmit these details automatically. When you choose email or WhatsApp, a draft opens there for you to review and send. After sending, we process the received information for pre-contractual steps under Art. 6(1)(b) GDPR.', 'Помощник запроса сначала обрабатывает выбранную виллу, даты или гибкость, число гостей, цель поездки, имя, адрес e-mail или номер WhatsApp и сообщение только в браузере. Сайт не отправляет эти данные автоматически. При выборе e-mail или WhatsApp там открывается черновик, который вы проверяете и отправляете самостоятельно. После отправки данные обрабатываются для преддоговорных мер по ст. 6(1)(b) GDPR.', 'El asistente trata inicialmente en el navegador la villa, fechas o flexibilidad, número de huéspedes, motivo del viaje, nombre, correo electrónico o número de WhatsApp y mensaje opcional. La web no transmite estos datos automáticamente. Al elegir correo o WhatsApp se abre un borrador para que lo revises y envíes. Tras el envío, tratamos la información para medidas precontractuales conforme al art. 6.1.b RGPD.') }}</p>

        <h2>{{ t.inline('4. E-Mail und WhatsApp', '4. Email and WhatsApp', '4. Электронная почта и WhatsApp', '4. Correo electrónico y WhatsApp') }}</h2>
        <p>{{ t.inline('Beim Öffnen und Absenden über E-Mail beziehungsweise WhatsApp gelten ergänzend die Datenschutzbestimmungen des von Ihnen verwendeten E-Mail-Anbieters beziehungsweise von WhatsApp. WhatsApp kann Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten. Die Nutzung von WhatsApp ist freiwillig; alternativ steht E-Mail zur Verfügung.', 'When you open and send the request by email or WhatsApp, the privacy terms of your email provider or WhatsApp also apply. WhatsApp may process data outside the European Economic Area. WhatsApp is optional; email is available as an alternative.', 'При отправке через e-mail или WhatsApp также действуют правила конфиденциальности соответствующего провайдера. WhatsApp может обрабатывать данные за пределами ЕЭЗ. Использование WhatsApp добровольно; доступна альтернатива по e-mail.', 'Al abrir y enviar la solicitud por correo o WhatsApp también se aplican las políticas del proveedor correspondiente. WhatsApp puede tratar datos fuera del EEE. Su uso es voluntario y el correo electrónico está disponible como alternativa.') }}</p>

        <h2>{{ t.inline('5. Google Maps', '5. Google Maps', '5. Google Maps', '5. Google Maps') }}</h2>
        <p>{{ t.inline('Auf der Standortseite kann eine Karte von Google Maps geladen werden. Die Karte ist zunächst technisch blockiert und stellt erst nach Ihrer ausdrücklichen Aktivierung eine Verbindung zu Google her. Dabei können insbesondere Ihre IP-Adresse, Geräteinformationen und Nutzungsdaten verarbeitet und gegebenenfalls in Drittländer übertragen werden. Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Ihre Entscheidung wird im lokalen Speicher Ihres Browsers gespeichert. Sie können die Einwilligung jederzeit über „Einwilligung widerrufen“ unterhalb der Karte mit Wirkung für die Zukunft zurücknehmen.', 'A Google Maps map can be loaded on the location page. The map is technically blocked by default and connects to Google only after you explicitly activate it. Your IP address, device information and usage data may then be processed and transferred to third countries. The legal basis is your consent under Art. 6(1)(a) GDPR. Your choice is stored in your browser’s local storage. You can withdraw consent at any time using “Withdraw consent” beneath the map, with effect for the future.', 'На странице расположения можно загрузить карту Google Maps. По умолчанию карта технически заблокирована и устанавливает соединение с Google только после вашего явного согласия. При этом могут обрабатываться IP-адрес, сведения об устройстве и данные об использовании, а также возможна передача данных в третьи страны. Правовым основанием является ваше согласие согласно ст. 6(1)(a) GDPR. Выбор сохраняется в локальном хранилище браузера. Согласие можно в любой момент отозвать на будущее с помощью кнопки под картой.', 'En la página de ubicación puede cargarse un mapa de Google Maps. El mapa está bloqueado técnicamente de forma predeterminada y solo se conecta a Google después de que lo actives expresamente. En ese momento pueden tratarse la dirección IP, información del dispositivo y datos de uso, y transferirse a terceros países. La base jurídica es tu consentimiento conforme al art. 6.1.a RGPD. La decisión se guarda en el almacenamiento local del navegador. Puedes retirar el consentimiento en cualquier momento mediante la opción situada debajo del mapa, con efecto para el futuro.') }}</p>

        <h2>{{ t.inline('6. Cookies und Analyse', '6. Cookies and analytics', '6. Файлы cookie и аналитика', '6. Cookies y analítica') }}</h2>
        <p>{{ t.inline('Der aktuelle Stand verwendet keine optionale Webanalyse und keine Marketing-Cookies. Die Einwilligungsentscheidung für Google Maps wird ausschließlich im lokalen Speicher Ihres Browsers abgelegt. Werden später Analyse-, Video- oder Marketingdienste ergänzt, müssen diese vor ihrer Aktivierung dokumentiert und – soweit erforderlich – bis zur Einwilligung blockiert werden.', 'The current version does not use optional analytics or marketing cookies. Your Google Maps consent choice is stored only in your browser’s local storage. If analytics, video or marketing services are added later, they must be documented and, where required, blocked until consent.', 'Текущая версия не использует необязательную аналитику или маркетинговые cookie. Решение о согласии на Google Maps сохраняется только в локальном хранилище браузера. Новые сервисы аналитики, видео или маркетинга должны быть описаны и при необходимости заблокированы до согласия.', 'La versión actual no usa analítica opcional ni cookies de marketing. La decisión sobre Google Maps se guarda únicamente en el almacenamiento local del navegador. Los futuros servicios de analítica, vídeo o marketing deberán documentarse y, cuando proceda, bloquearse hasta obtener consentimiento.') }}</p>

        <h2>{{ t.inline('7. Ihre Rechte', '7. Your rights', '7. Ваши права', '7. Sus derechos') }}</h2>
        <p>{{ t.inline('Sie haben nach Maßgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie das Recht, eine Einwilligung mit Wirkung für die Zukunft zu widerrufen. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere bei der Behörde Ihres Aufenthaltsorts oder beim slowakischen Amt für den Schutz personenbezogener Daten.', 'Subject to the GDPR, you may have rights of access, rectification, erasure, restriction, portability and objection, and may withdraw consent for the future. You may also complain to a supervisory authority, including the authority where you live or the Office for Personal Data Protection of the Slovak Republic.', 'В соответствии с GDPR вы имеете права на доступ, исправление, удаление, ограничение, переносимость и возражение, а также на отзыв согласия на будущее. Вы можете подать жалобу в надзорный орган, в частности по месту жительства или в Управление по защите персональных данных Словацкой Республики.', 'Conforme al RGPD puede ejercer los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición, así como retirar el consentimiento para el futuro. También puede reclamar ante una autoridad de control, en particular la de su lugar de residencia o la Oficina de Protección de Datos Personales de la República Eslovaca.', 'U skladu sa GDPR-om imate naročito pravo na pristup, ispravku, brisanje, ograničenje obrade, prenosivost i prigovor, kao i pravo da povučete saglasnost za ubuduće. Pritužbu možete podneti nadzornom organu, naročito organu u mestu svog boravišta ili Slovačkoj kancelariji za zaštitu podataka o ličnosti.') }}
          <a href="https://www.dataprotection.gov.sk/en/contact/" target="_blank" rel="noopener">{{ t.inline('Kontakt der Aufsichtsbehörde', 'Supervisory authority contact', 'Контакты надзорного органа', 'Contacto de la autoridad de control', 'Kontakt nadzornog organa') }}</a>
        </p>

        <h2>{{ t.inline('8. Stand und Änderungen', '8. Version and changes', '8. Версия и изменения', '8. Versión y cambios') }}</h2>
        <p>{{ t.inline('Stand: September 2026. Diese Erklärung ist anzupassen, sobald sich eingesetzte Dienste oder Verarbeitungen ändern.', 'Version: September 2026. Update this policy whenever services or processing activities change.', 'Версия: сентябрь 2026 года. Политику необходимо обновлять при изменении сервисов или обработки.', 'Versión: septiembre de 2026. La política debe actualizarse cuando cambien los servicios o tratamientos.') }}</p>
      }
    </section>
  `,
  styles: [`
    .legal { max-width: 900px; padding-block: var(--space-5); }
    .legal h1 { margin-bottom: .75rem; }
    .legal h2 { margin-top: var(--space-4); padding-top: 1.25rem; border-top: 1px solid var(--c-sand); font-size: clamp(1.25rem, 3vw, 1.7rem); }
    .legal p, .legal address { line-height: 1.75; }
    .legal address { font-style: normal; }
    .legal a { color: var(--c-adria); }
    .legal-intro { max-width: 62ch; margin: 0 0 var(--space-4); color: var(--c-olive); font-size: 1.05rem; }
  `],
})
export class LegalComponent implements OnInit {
  protected readonly t = inject(TranslationService);
  protected readonly contact = CONTACT;
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  protected page: 'imprint' | 'privacy' = 'imprint';

  ngOnInit(): void {
    const locale = (this.route.snapshot.data['locale'] as Locale) ?? 'en';
    this.page = (this.route.snapshot.data['page'] as 'imprint' | 'privacy') ?? 'imprint';
    this.t.setLocale(locale);
    const path = this.page === 'imprint' ? 'impressum' : 'datenschutz';
    const title = this.page === 'imprint'
      ? this.t.inline('Impressum', 'Legal notice', 'Правовая информация', 'Aviso legal')
      : this.t.inline('Datenschutzerklärung', 'Privacy policy', 'Политика конфиденциальности', 'Política de privacidad');
    this.seo.setPage({ locale, path, title: `${title} | Villa MonteMare & Lumina`, description: title, noindex: true });
  }
}
