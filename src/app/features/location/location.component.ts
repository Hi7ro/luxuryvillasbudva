import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { DISTANCES } from '../../core/data/content.data';
import { Locale, LocalizedText } from '../../core/models/villa.model';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="page-hero container">
      <p class="eyebrow">{{ t.inline('Petrovac, Gemeinde Budva, Montenegro', 'Petrovac, Budva Municipality, Montenegro', 'Петровац, муниципалитет Будва, Черногория', 'Petrovac, municipio de Budva, Montenegro') }}</p>
      <h1>{{ t.inline('Hier wirst du sein', 'This is where you’ll stay', 'Здесь вы будете отдыхать', 'Aquí te alojarás') }}</h1>
      <p class="location-intro">
        {{ t.inline(
          'Unsere Unterkunft liegt in der malerischen Küstenregion Reževići in der Gemeinde Budva, unweit von Sveti Stefan auf einem bewaldeten Hang, rund 90 Meter über dem Meeresspiegel, in zweiter Reihe einer modernen Ferienvillenanlage mit traumhaftem Blick auf das offene Meer und die dahinterliegenden Berge.',
          'Our accommodation is located in the picturesque coastal region of Reževići in Budva Municipality. Not far from Sveti Stefan, it sits on a wooded hillside around 90 metres above sea level, in the second row of a modern holiday-villa development with spectacular views of the open sea and the mountains beyond.',
          'Наши виллы расположены в живописном прибрежном районе Режевичи муниципалитета Будва. Недалеко от Свети-Стефана, на лесистом склоне примерно в 90 метрах над уровнем моря, они находятся во втором ряду современного комплекса вилл и открывают великолепный вид на море и горы.',
          'Nuestro alojamiento se encuentra en la pintoresca región costera de Reževići, en el municipio de Budva. Está situado cerca de Sveti Stefan, en una ladera arbolada a unos 90 metros sobre el nivel del mar, en la segunda línea de un moderno complejo de villas vacacionales con magníficas vistas al mar abierto y a las montañas.') }}
      </p>
      <p class="location-note">{{ t.inline(
        'Die ruhige Lage verbindet Erholung inmitten der Natur mit einer hervorragenden Anbindung an die schönsten Strände und Sehenswürdigkeiten der montenegrinischen Küste.',
        'The peaceful setting combines relaxation in the heart of nature with excellent access to Montenegro’s most beautiful beaches and coastal sights.',
        'Тихое расположение среди природы сочетается с удобным доступом к самым красивым пляжам и достопримечательностям черногорского побережья.',
        'La tranquilidad en plena naturaleza se combina con un excelente acceso a las playas y lugares de interés más bellos de la costa montenegrina.') }}</p>
    </header>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container location-details">
      <div class="location-grid">
        <div class="location-main">
        <article class="content-block getting-around">
          <p class="eyebrow">{{ t.inline('Mobilität', 'Getting around', 'Как передвигаться', 'Cómo desplazarse') }}</p>
          <h2>{{ t.inline('Unterwegs rund um die Unterkunft', 'Getting around the area', 'Передвижение по окрестностям', 'Cómo moverse por los alrededores') }}</h2>
          <p>{{ t.inline(
            'Für maximale Flexibilität empfehlen wir die Anreise mit dem Auto. So kannst du die Küste und die zahlreichen Strände bequem erkunden.',
            'For maximum flexibility, we recommend arriving by car. This makes it easy to explore the coastline and its many beaches.',
            'Для максимальной свободы передвижения рекомендуем приезжать на автомобиле. Так вы сможете с комфортом исследовать побережье и многочисленные пляжи.',
            'Para disfrutar de la máxima flexibilidad, recomendamos llegar en coche. Así podrás explorar cómodamente la costa y sus numerosas playas.') }}</p>
          <p>{{ t.inline(
            'Die Altstadt von Budva mit zahlreichen Restaurants, Geschäften und Märkten ist in etwa 15 Minuten erreichbar.',
            'Budva’s Old Town, with its many restaurants, shops and markets, is around 15 minutes away.',
            'До Старого города Будвы с многочисленными ресторанами, магазинами и рынками можно добраться примерно за 15 минут.',
            'El casco antiguo de Budva, con numerosos restaurantes, tiendas y mercados, se encuentra a unos 15 minutos.') }}</p>
          <div class="mobility-actions">
            <a class="route-link" href="https://www.google.com/maps/dir/?api=1&amp;origin=42.239775685552246%2C18.903049972422934&amp;destination=HDL%20Smokov%20vijenac%20Drobni%C4%87i%20Montenegro&amp;travelmode=walking" target="_blank" rel="noopener">
              <span class="route-icon" aria-hidden="true">↗</span>
              <span>
                <small>{{ t.inline('Einkaufen in der Nähe', 'Groceries nearby', 'Магазин поблизости', 'Supermercado cercano') }}</small>
                <strong>{{ t.inline('Route zum HDL anzeigen', 'Get directions to HDL', 'Построить маршрут до HDL', 'Cómo llegar a HDL') }}</strong>
              </span>
            </a>
          </div>
        </article>

        <article class="content-block">
          <p class="eyebrow">{{ t.inline('Baden an der Adria', 'Swimming in the Adriatic', 'Пляжи Адриатики', 'Baños en el Adriático') }}</p>
          <h2>{{ t.inline('Strände in der Nähe', 'Nearby beaches', 'Пляжи поблизости', 'Playas cercanas') }}</h2>
          <ul class="beach-list">
            @for (beach of nearbyBeaches; track beach.name) {
              <li>
                <span>{{ beach.name }}</span>
                <span class="beach-time">
                  <strong>{{ t.t(beach.primaryTime) }}</strong>
                  @if (beach.secondaryTime) { <small>{{ t.t(beach.secondaryTime) }}</small> }
                </span>
              </li>
            }
          </ul>
        </article>

        <article class="content-block">
          <p class="eyebrow">{{ t.inline('Genuss & Versorgung', 'Dining & essentials', 'Рестораны и магазины', 'Restaurantes y compras') }}</p>
          <h2>{{ t.inline('Restaurants und Geschäfte', 'Restaurants and shops', 'Рестораны и магазины', 'Restaurantes y tiendas') }}</h2>
          <p>{{ t.inline(
            'An der Zufahrtsstraße zur Villa, nur wenige Schritte entfernt, befindet sich ein Vier-Sterne-Hotel mit Restaurant und Frühstücksmöglichkeit. Weitere lokale Restaurants sind innerhalb von 5 bis 10 Minuten mit dem Auto erreichbar.',
            'A four-star hotel with a restaurant and breakfast service is located on the access road, just a few steps from the villas. Additional local restaurants are within a 5- to 10-minute drive.',
            'На подъездной дороге, всего в нескольких шагах от вилл, находится четырёхзвёздочный отель с рестораном и завтраками. До других местных ресторанов можно доехать за 5–10 минут.',
            'En la carretera de acceso, a pocos pasos de las villas, hay un hotel de cuatro estrellas con restaurante y servicio de desayuno. Otros restaurantes locales se encuentran a entre 5 y 10 minutos en coche.') }}</p>
        </article>
        </div>

        <aside class="location-aside">
        <article class="highlight-card market-card">
          <div class="card-meta">
            <span class="card-symbol" aria-hidden="true">⌂</span>
            <span class="card-time">{{ t.inline('wenige Gehminuten', 'a few minutes’ walk', 'несколько минут пешком', 'a pocos minutos a pie') }}</span>
          </div>
          <p class="eyebrow">HDL</p>
          <h2>{{ t.inline('Einkaufen zu Fuß', 'Groceries within walking distance', 'Магазин в пешей доступности', 'Compras a pocos pasos') }}</h2>
          <p>{{ t.inline(
            'Ein besonderer Pluspunkt: In unmittelbarer Nähe hat kürzlich ein großer HDL-Supermarkt eröffnet, der in wenigen Gehminuten erreichbar ist. So kannst du jederzeit bequem frische Lebensmittel und Dinge des täglichen Bedarfs einkaufen und deinen Aufenthalt ganz entspannt genießen.',
            'A particular advantage is the large HDL supermarket that recently opened nearby and can be reached within a few minutes on foot. Fresh groceries and everyday essentials are always conveniently close at hand.',
            'Особое преимущество — недавно открывшийся неподалёку большой супермаркет HDL, до которого можно дойти за несколько минут. Свежие продукты и всё необходимое для повседневной жизни всегда будут рядом.',
            'Una ventaja especial es el gran supermercado HDL inaugurado recientemente en las inmediaciones, a pocos minutos a pie. Tendrás siempre a mano alimentos frescos y todo lo necesario para el día a día.') }}</p>
          <div class="card-tags" [attr.aria-label]="t.inline('Vorteile', 'Benefits', 'Преимущества', 'Ventajas')">
            <span>{{ t.inline('Frische Lebensmittel', 'Fresh groceries', 'Свежие продукты', 'Alimentos frescos') }}</span>
            <span>{{ t.inline('Täglicher Bedarf', 'Everyday essentials', 'Всё необходимое', 'Productos básicos') }}</span>
          </div>
        </article>

        <article class="highlight-card budva-card">
          <div class="card-meta">
            <span class="card-symbol" aria-hidden="true">✦</span>
            <span class="card-time">{{ t.inline('ca. 15 Autominuten', 'approx. 15 min by car', 'около 15 мин. на автомобиле', 'aprox. 15 min en coche') }}</span>
          </div>
          <p class="eyebrow">Budva</p>
          <h2>{{ t.inline('Historische Altstadt', 'Historic Old Town', 'Исторический Старый город', 'Casco antiguo histórico') }}</h2>
          <p>{{ t.inline(
            'Budvas historische Altstadt mit lebhaften Cafés, Nachtleben, Einkaufsmöglichkeiten und Märkten erreichst du in etwa 15 Minuten.',
            'Budva’s historic Old Town, with lively cafés, nightlife, shopping and markets, is around 15 minutes away.',
            'До исторического Старого города Будвы с оживлёнными кафе, ночной жизнью, магазинами и рынками можно добраться примерно за 15 минут.',
            'El casco antiguo de Budva, con animados cafés, vida nocturna, tiendas y mercados, está a unos 15 minutos.') }}</p>
          <div class="card-tags" [attr.aria-label]="t.inline('Vor Ort', 'Highlights', 'Что вас ждёт', 'Qué encontrarás')">
            <span>{{ t.inline('Cafés & Restaurants', 'Cafés & restaurants', 'Кафе и рестораны', 'Cafés y restaurantes') }}</span>
            <span>{{ t.inline('Märkte & Nachtleben', 'Markets & nightlife', 'Рынки и ночная жизнь', 'Mercados y vida nocturna') }}</span>
          </div>
        </article>
        </aside>
      </div>

      <article class="family-panel">
        <div class="family-intro">
          <div>
            <p class="eyebrow">{{ t.inline('Für Groß und Klein', 'For all ages', 'Для всей семьи', 'Para todas las edades', 'Za sve generacije') }}</p>
            <h2>{{ t.inline('Freizeit & Familienaktivitäten', 'Leisure & family activities', 'Отдых и развлечения для всей семьи', 'Ocio y actividades familiares', 'Odmor i porodične aktivnosti') }}</h2>
          </div>
          <p>{{ t.inline(
            'In Budva erwarten dich zahlreiche Freizeitmöglichkeiten für die ganze Familie – darunter Wasserparks, Bootsausflüge, Spielplätze und kinderfreundliche Strände. Auch Wanderwege und Abenteuerparks befinden sich in der näheren Umgebung.',
            'Budva offers a wide range of activities for the whole family, including water parks, boat trips, playgrounds and child-friendly beaches. Hiking trails and adventure parks can also be found nearby.',
            'В Будве вас ждёт множество развлечений для всей семьи: аквапарки, морские прогулки, игровые площадки и пляжи, подходящие для детей. Поблизости также находятся пешеходные маршруты и парки приключений.',
            'Budva ofrece numerosas actividades para toda la familia, como parques acuáticos, excursiones en barco, parques infantiles y playas aptas para niños. También hay rutas de senderismo y parques de aventura en los alrededores.',
            'Budva nudi brojne aktivnosti za celu porodicu, uključujući akva-parkove, izlete brodom, igrališta i plaže pogodne za decu. U blizini se nalaze i pešačke staze i avanturistički parkovi.') }}</p>
        </div>

        <div class="activity-gallery" [attr.aria-label]="t.inline('Freizeitmöglichkeiten rund um Budva', 'Leisure activities around Budva', 'Варианты отдыха в окрестностях Будвы', 'Actividades de ocio alrededor de Budva', 'Aktivnosti u okolini Budve')">
          @for (activity of activityHighlights; track activity.image) {
            <figure class="activity-card">
              <div class="activity-image">
                <img [src]="activity.image" [srcset]="responsiveSrcSet(activity.image)"
                     sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                     [alt]="t.t(activity.alt)" width="1440" height="960" loading="lazy" />
                <figcaption>{{ t.t(activity.title) }}</figcaption>
              </div>
              <p class="activity-credit">
                {{ t.inline('Foto', 'Photo', 'Фото', 'Foto', 'Fotografija') }}:
                <a [href]="activity.sourceUrl" target="_blank" rel="noopener">{{ activity.author }}</a>
                · <a [href]="activity.licenseUrl" target="_blank" rel="noopener">{{ activity.license }}</a>
                · {{ t.inline('weboptimiert', 'web-optimised', 'оптимизировано для сайта', 'optimizada para web', 'optimizovano za veb') }}
              </p>
            </figure>
          }
        </div>
      </article>
    </section>

    <div class="horizon-divider" aria-hidden="true"></div>

    <section class="section container map-section">
      <div class="map-heading">
        <div>
          <p class="eyebrow">Smokov vijenac · Drobnići</p>
          <h2>{{ t.inline('Die Umgebung auf einen Blick', 'The area at a glance', 'Окрестности на карте', 'La zona de un vistazo') }}</h2>
        </div>
        <ul class="distances">
          @for (d of distances; track d.label.de) {
            <li><span>{{ t.t(d.label) }}</span><strong>{{ t.t(d.value) }}</strong></li>
          }
        </ul>
      </div>

      <div class="map-wrap">
        @if (mapConsent()) {
          <iframe
            src="https://www.google.com/maps?q=42.239775685552246%2C18.903049972422934&amp;z=18&amp;output=embed"
            [title]="t.inline('Lage der Villen am Smokov vijenac auf Google Maps', 'Location of the villas at Smokov vijenac on Google Maps', 'Расположение вилл на Smokov vijenac в Google Maps', 'Ubicación de las villas en Smokov vijenac en Google Maps')"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen>
          </iframe>
        } @else {
          <div class="map-consent" role="region" [attr.aria-label]="t.inline('Google Maps Datenschutzeinstellungen', 'Google Maps privacy settings', 'Настройки конфиденциальности Google Maps', 'Ajustes de privacidad de Google Maps')">
            <span class="map-consent-pin" aria-hidden="true">⌖</span>
            <p class="eyebrow">Google Maps</p>
            <h3>{{ t.inline('Karte erst nach Zustimmung laden', 'Load the map after consent', 'Загрузить карту после согласия', 'Cargar el mapa tras dar tu consentimiento') }}</h3>
            <p>{{ t.inline(
              'Zum Schutz deiner Privatsphäre wird die Karte nicht automatisch geladen. Mit dem Aktivieren stellst du eine Verbindung zu Google her; dabei können personenbezogene Daten verarbeitet und in Drittländer übertragen werden.',
              'To protect your privacy, the map is not loaded automatically. Activating it establishes a connection to Google; personal data may be processed and transferred to third countries.',
              'Для защиты вашей конфиденциальности карта не загружается автоматически. После активации устанавливается соединение с Google; персональные данные могут обрабатываться и передаваться в третьи страны.',
              'Para proteger tu privacidad, el mapa no se carga automáticamente. Al activarla se establece una conexión con Google; pueden tratarse datos personales y transferirse a terceros países.') }}</p>
            <button class="btn btn-primary" type="button" (click)="enableMap()">
              {{ t.inline('Google Maps aktivieren', 'Enable Google Maps', 'Включить Google Maps', 'Activar Google Maps') }}
            </button>
            <p class="map-consent-links">
              <a [routerLink]="privacyPath()">{{ t.inline('Datenschutzerklärung', 'Privacy policy', 'Политика конфиденциальности', 'Política de privacidad') }}</a>
              <span aria-hidden="true">·</span>
              <a [href]="googlePrivacyUrl()" target="_blank" rel="noopener">{{ t.inline('Datenschutz bei Google', 'Google Privacy Policy', 'Политика конфиденциальности Google', 'Privacidad de Google') }}</a>
            </p>
          </div>
        }
        <div class="map-caption">
          <p>{{ t.inline('Smokov vijenac, Drobnići, Budva Municipality, 85315, Montenegro', 'Smokov vijenac, Drobnići, Budva Municipality, 85315, Montenegro', 'Smokov vijenac, Drobnići, муниципалитет Будва, 85315, Черногория', 'Smokov vijenac, Drobnići, municipio de Budva, 85315, Montenegro') }}</p>
          <div class="map-caption-actions">
            @if (mapConsent()) {
              <button class="map-revoke" type="button" (click)="revokeMapConsent()">
                {{ t.inline('Einwilligung widerrufen', 'Withdraw consent', 'Отозвать согласие', 'Retirar consentimiento') }}
              </button>
            }
            <a class="btn btn-quiet" href="https://www.google.com/maps/search/?api=1&amp;query=42.239775685552246%2C18.903049972422934"
               target="_blank" rel="noopener">
              {{ t.inline('In Google Maps öffnen', 'Open in Google Maps', 'Открыть в Google Maps', 'Abrir en Google Maps') }}
            </a>
          </div>
        </div>
      </div>
    </section>

  `,
  styles: [`
    .page-hero { padding-block: clamp(4rem, 10vw, 8rem) clamp(3rem, 7vw, 5.5rem); max-width: 1040px; }
    .page-hero h1 { max-width: 12ch; }
    .location-intro { max-width: 80ch; font-size: clamp(1.1rem, 1.8vw, 1.35rem); line-height: 1.75; color: var(--c-adria); }
    .location-note { max-width: 72ch; margin-top: 1.5rem; padding-left: 1.25rem; border-left: 2px solid var(--c-champagne); color: var(--c-olive); line-height: 1.75; }
    .location-grid { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(330px, .8fr); gap: clamp(2rem, 4vw, 4rem); align-items: start; }
    .location-main { display: flex; flex-direction: column; gap: clamp(3.5rem, 7vw, 6rem); }
    .content-block { max-width: 760px; }
    .content-block h2, .highlight-card h2 { margin-bottom: 1.25rem; }
    .content-block p { line-height: 1.75; }
    .mobility-actions { margin-top: 1.75rem; }
    .route-link { display: inline-flex; align-items: center; gap: .9rem; padding: .9rem 1.1rem; border: 1px solid color-mix(in srgb, var(--c-sand) 85%, transparent); border-radius: 8px; background: color-mix(in srgb, var(--c-ivory) 82%, white); color: var(--c-adria); text-decoration: none; box-shadow: 0 12px 28px rgba(23,50,63,.07); transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease; }
    .route-link:hover { transform: translateY(-2px); border-color: var(--c-champagne); box-shadow: 0 16px 34px rgba(23,50,63,.11); }
    .route-link small, .route-link strong { display: block; }
    .route-link small { margin-bottom: .16rem; color: var(--c-olive); font-size: .68rem; letter-spacing: .08em; text-transform: uppercase; }
    .route-link strong { font-size: .9rem; }
    .route-icon { display: grid; place-items: center; flex: 0 0 2.35rem; width: 2.35rem; height: 2.35rem; border-radius: 50%; background: var(--c-adria); color: var(--c-limestone); font-size: 1rem; }
    .beach-list { list-style: none; padding: 0; margin: 2rem 0 0; }
    .beach-list li { display: flex; justify-content: space-between; gap: 1.5rem; padding: .9rem 0; border-bottom: 1px solid color-mix(in srgb, var(--c-sand) 75%, transparent); }
    .beach-time { display: flex; flex-direction: column; align-items: flex-end; text-align: right; }
    .beach-time strong { color: var(--c-adria); white-space: nowrap; }
    .beach-time small { margin-top: .2rem; color: var(--c-olive); font-size: .76rem; white-space: nowrap; }
    .location-aside { position: sticky; top: 7rem; display: flex; flex-direction: column; gap: 1.5rem; }
    .highlight-card { position: relative; isolation: isolate; overflow: hidden; padding: clamp(1.6rem, 2.5vw, 2.2rem); border-radius: var(--radius-lg); box-shadow: var(--shadow-soft); }
    .highlight-card::after { content: ''; position: absolute; z-index: -1; right: -4rem; bottom: -5rem; width: 12rem; height: 12rem; border: 1px solid color-mix(in srgb, var(--c-champagne) 45%, transparent); border-radius: 50%; pointer-events: none; }
    .market-card { border: 1px solid color-mix(in srgb, var(--c-sand) 82%, transparent); background: linear-gradient(145deg, #fffefa 0%, var(--c-ivory) 68%, color-mix(in srgb, var(--c-sand) 28%, white) 100%); }
    .market-card::before { content: ''; position: absolute; inset: 0 auto 0 0; width: 3px; background: linear-gradient(var(--c-champagne), var(--c-terracotta)); }
    .budva-card { background: linear-gradient(145deg, #183b4a 0%, var(--c-adria) 68%, #0d2632 100%); color: rgba(255,255,255,.76); box-shadow: var(--shadow-lifted); }
    .budva-card::before { content: ''; position: absolute; inset: auto 0 0; height: 38%; background: repeating-linear-gradient(0deg, transparent 0 22px, rgba(255,255,255,.035) 22px 23px); pointer-events: none; }
    .budva-card h2 { color: var(--c-limestone); }
    .budva-card .eyebrow { color: var(--c-champagne); }
    .highlight-card h2 { max-width: 12ch; margin: .55rem 0 1.15rem; font-size: clamp(2rem, 3vw, 2.8rem); line-height: 1.02; text-wrap: balance; }
    .highlight-card > p:not(.eyebrow) { margin-bottom: 1.5rem; font-size: .94rem; line-height: 1.72; }
    .card-meta { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem; }
    .card-symbol { display: grid; place-items: center; flex: 0 0 2.65rem; width: 2.65rem; height: 2.65rem; border: 1px solid var(--c-champagne); border-radius: 50%; color: var(--c-terracotta); font-family: var(--font-display); }
    .budva-card .card-symbol { color: var(--c-champagne); }
    .card-time { padding: .45rem .7rem; border: 1px solid color-mix(in srgb, var(--c-sand) 72%, transparent); border-radius: 999px; color: var(--c-olive); font-size: .68rem; font-weight: 600; letter-spacing: .035em; text-align: center; }
    .budva-card .card-time { border-color: rgba(255,255,255,.18); color: rgba(255,255,255,.7); }
    .card-tags { display: flex; flex-wrap: wrap; gap: .45rem; padding-top: 1.1rem; border-top: 1px solid color-mix(in srgb, var(--c-sand) 66%, transparent); }
    .card-tags span { padding: .38rem .58rem; border-radius: 3px; background: color-mix(in srgb, var(--c-sand) 28%, transparent); color: var(--c-olive); font-size: .68rem; line-height: 1.25; }
    .budva-card .card-tags { border-top-color: rgba(255,255,255,.14); }
    .budva-card .card-tags span { background: rgba(255,255,255,.08); color: rgba(255,255,255,.72); }
    .family-panel { margin-top: clamp(3rem, 7vw, 6rem); padding: clamp(2rem, 5vw, 4rem); border-radius: var(--radius-lg); background: color-mix(in srgb, var(--c-sand) 28%, transparent); }
    .family-intro { display: grid; grid-template-columns: minmax(240px, .8fr) minmax(0, 1.2fr); gap: clamp(1.5rem, 5vw, 4rem); align-items: start; }
    .family-intro h2 { max-width: 13ch; margin-bottom: 0; }
    .family-intro > p { max-width: 62ch; margin: 0; font-size: 1.05rem; line-height: 1.8; }
    .activity-gallery { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(.8rem, 1.8vw, 1.25rem); margin-top: clamp(2rem, 5vw, 3.5rem); }
    .activity-card { min-width: 0; margin: 0; }
    .activity-image { position: relative; isolation: isolate; overflow: hidden; aspect-ratio: 4 / 3; border-radius: 10px; background: var(--c-sand); box-shadow: 0 16px 34px rgba(23,50,63,.11); }
    .activity-image::after { content: ''; position: absolute; z-index: 1; inset: 38% 0 0; background: linear-gradient(transparent, rgba(7,28,37,.82)); pointer-events: none; }
    .activity-image img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 700ms cubic-bezier(.2,.7,.2,1); }
    .activity-card:hover img { transform: scale(1.035); }
    .activity-image figcaption { position: absolute; z-index: 2; right: 1.15rem; bottom: 1.05rem; left: 1.15rem; color: #fff; font-family: var(--font-display); font-size: clamp(1.25rem, 2.2vw, 1.75rem); line-height: 1.05; text-wrap: balance; }
    .activity-credit { margin: .6rem .15rem 0; color: var(--c-olive); font-size: .58rem; line-height: 1.45; }
    .activity-credit a { color: inherit; text-underline-offset: 2px; }
    .map-heading { display: grid; grid-template-columns: minmax(0, .9fr) minmax(420px, 1.1fr); gap: clamp(2rem, 5vw, 5rem); align-items: end; margin-bottom: var(--space-4); }
    .map-heading h2 { margin-bottom: 0; }
    .distances { list-style: none; padding: 0; margin: 0; }
    .distances li { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--c-sand); padding: 0.4rem 0; }
    .distances strong { color: var(--c-adria); }
    .map-wrap { overflow: hidden; border: 1px solid color-mix(in srgb, var(--c-sand) 75%, transparent); border-radius: var(--radius-lg); background: var(--c-ivory); box-shadow: var(--shadow-lifted); }
    .map-wrap iframe { display: block; width: 100%; height: clamp(360px, 52vw, 600px); border: 0; }
    .map-consent { display: grid; place-items: center; align-content: center; min-height: clamp(360px, 52vw, 600px); padding: clamp(2rem, 6vw, 5rem); text-align: center; background: radial-gradient(circle at 50% 42%, rgba(215,190,137,.2), transparent 28%), linear-gradient(135deg, rgba(23,50,63,.97), #0e2732); color: rgba(255,255,255,.78); }
    .map-consent-pin { display: grid; place-items: center; width: 3.5rem; height: 3.5rem; margin-bottom: 1.25rem; border: 1px solid var(--c-champagne); border-radius: 50%; color: var(--c-champagne); font-size: 1.7rem; }
    .map-consent .eyebrow { margin-bottom: .7rem; color: var(--c-champagne); }
    .map-consent h3 { max-width: 20ch; margin: 0 0 1rem; color: var(--c-limestone); font-family: var(--font-display); font-size: clamp(1.8rem, 4vw, 3rem); line-height: 1.05; text-wrap: balance; }
    .map-consent > p:not(.eyebrow, .map-consent-links) { max-width: 66ch; margin: 0 0 1.5rem; line-height: 1.7; }
    .map-consent .btn { min-width: min(100%, 250px); }
    .map-consent-links { display: flex; flex-wrap: wrap; justify-content: center; gap: .55rem; margin: 1.2rem 0 0; font-size: .78rem; }
    .map-consent-links a { color: rgba(255,255,255,.78); text-underline-offset: .2em; }
    .map-caption { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); padding: var(--space-2) var(--space-3); }
    .map-caption p { margin: 0; color: var(--c-olive); font-size: 0.9rem; max-width: 70ch; }
    .map-caption .btn { flex: 0 0 auto; }
    .map-caption-actions { display: flex; align-items: center; justify-content: flex-end; gap: 1rem; flex: 0 0 auto; }
    .map-revoke { padding: .35rem 0; border: 0; background: transparent; color: var(--c-olive); font: inherit; font-size: .75rem; text-decoration: underline; text-underline-offset: .2em; cursor: pointer; }
    .map-revoke:hover { color: var(--c-adria); }
    @media (max-width: 900px) {
      .location-grid { grid-template-columns: 1fr; }
      .location-aside { position: static; display: grid; grid-template-columns: 1fr 1fr; }
      .map-heading { grid-template-columns: 1fr; align-items: start; }
      .activity-gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .activity-card:last-child { grid-column: 1 / -1; }
      .activity-card:last-child .activity-image { aspect-ratio: 16 / 8; }
    }
    @media (max-width: 700px) {
      .page-hero { padding-block: 3rem 1.5rem; }
      .location-intro { font-size: 1.05rem; }
      .location-grid { gap: 3rem; }
      .location-main { gap: 3.5rem; }
      .location-aside { grid-template-columns: 1fr; }
      .family-panel { padding: 1.5rem; }
      .family-intro, .activity-gallery { grid-template-columns: 1fr; }
      .activity-card:last-child { grid-column: auto; }
      .activity-card:last-child .activity-image, .activity-image { aspect-ratio: 4 / 3; }
      .beach-list li { align-items: baseline; gap: .75rem; }
      .beach-time { text-align: right; }
      .distances li { gap: 1rem; align-items: baseline; }
      .distances strong { white-space: nowrap; }
      .map-wrap { border-radius: 10px; }
      .map-wrap iframe { height: 420px; }
      .map-consent { min-height: 420px; padding: 2rem 1.25rem; }
      .map-caption { align-items: stretch; flex-direction: column; padding: 1rem; }
      .map-caption .btn { width: 100%; justify-content: center; }
      .map-caption-actions { align-items: stretch; flex-direction: column-reverse; gap: .5rem; }
    }
  `],
})
export class LocationComponent implements OnInit {
  protected readonly t = inject(TranslationService);
  private readonly seo = inject(SeoService);
  private readonly structuredData = inject(StructuredDataService);
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly mapConsentStorageKey = 'villa-google-maps-consent';

  protected readonly mapConsent = signal(false);

  protected readonly distances = DISTANCES;
  protected readonly activityHighlights: Array<{
    image: string;
    title: LocalizedText;
    alt: LocalizedText;
    author: string;
    sourceUrl: string;
    license: string;
    licenseUrl: string;
  }> = [
    {
      image: '/assets/media/location/activities/aquapark-budva.webp',
      title: { de: 'Wasserspaß für Familien', en: 'Water fun for families', ru: 'Водные развлечения для всей семьи', es: 'Diversión acuática en familia', sr: 'Vodena zabava za porodice' },
      alt: { de: 'Wasserrutschen und Familienbereich im Aquapark Budva', en: 'Water slides and family area at Aquapark Budva', ru: 'Водные горки и семейная зона в аквапарке Будвы', es: 'Toboganes y zona familiar del Aquapark Budva', sr: 'Tobogani i porodična zona u Akva-parku Budva' },
      author: 'KarenWunderkind',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aquapark_Budva.jpeg',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
    {
      image: '/assets/media/location/activities/budva-marina.webp',
      title: { de: 'Bootsausflüge & Buchten', en: 'Boat trips & secluded bays', ru: 'Морские прогулки и бухты', es: 'Excursiones en barco y calas', sr: 'Izleti brodom i uvale' },
      alt: { de: 'Boote und Yachten im Hafen von Budva vor der Bergkulisse', en: 'Boats and yachts in Budva Marina with mountains behind', ru: 'Лодки и яхты в марине Будвы на фоне гор', es: 'Barcos y yates en el puerto deportivo de Budva con las montañas al fondo', sr: 'Čamci i jahte u budvanskoj marini sa planinama u pozadini' },
      author: 'Dirgela',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Budvos_uostelis.jpg',
      license: 'CC BY 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    },
    {
      image: '/assets/media/location/activities/kamenovo-beach.webp',
      title: { de: 'Familienzeit am Meer', en: 'Family time by the sea', ru: 'Семейный отдых у моря', es: 'Tiempo en familia junto al mar', sr: 'Porodično vreme pored mora' },
      alt: { de: 'Kamenovo Beach mit klarem Wasser und bewaldeter Bergkulisse', en: 'Kamenovo Beach with clear water and forested mountains', ru: 'Пляж Каменово с прозрачной водой и зелёными горами', es: 'Playa de Kamenovo con agua cristalina y montañas boscosas', sr: 'Plaža Kamenovo sa čistim morem i zelenim planinama' },
      author: 'Liilia Moroz',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kamenovo_beach_Montenegro.jpg',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
  ];
  protected readonly nearbyBeaches: Array<{ name: string; primaryTime: LocalizedText; secondaryTime?: LocalizedText }> = [
    {
      name: 'Drobni Pijesak',
      primaryTime: { de: 'ca. 10 Gehminuten', en: 'approx. 10 min on foot', ru: 'около 10 мин. пешком', es: 'aprox. 10 min a pie' },
      secondaryTime: { de: 'ca. 3 Autominuten', en: 'approx. 3 min by car', ru: 'около 3 мин. на автомобиле', es: 'aprox. 3 min en coche' },
    },
    {
      name: 'Crvena Glavica',
      primaryTime: { de: 'ca. 5 Autominuten', en: 'approx. 5 min by car', ru: 'около 5 мин. на автомобиле', es: 'aprox. 5 min en coche' },
    },
    {
      name: 'Sveti Stefan Beach',
      primaryTime: { de: 'ca. 5 Autominuten', en: 'approx. 5 min by car', ru: 'около 5 мин. на автомобиле', es: 'aprox. 5 min en coche' },
    },
    {
      name: 'Queen’s Beach & King’s Beach',
      primaryTime: { de: 'ca. 6 Autominuten', en: 'approx. 6 min by car', ru: 'около 6 мин. на автомобиле', es: 'aprox. 6 min en coche' },
    },
    {
      name: 'Kamenovo Beach',
      primaryTime: { de: 'ca. 8 Autominuten', en: 'approx. 8 min by car', ru: 'около 8 мин. на автомобиле', es: 'aprox. 8 min en coche' },
    },
  ];

  ngOnInit(): void {
    const locale = (this.route.snapshot.data['locale'] as Locale) ?? 'en';
    this.t.setLocale(locale);
    if (isPlatformBrowser(this.platformId)) {
      this.mapConsent.set(localStorage.getItem(this.mapConsentStorageKey) === 'granted');
    }
    const path = locale === 'de' ? 'lage-budva-riviera' : 'location-budva-riviera';

    this.seo.setPage({
      locale,
      path,
      alternatePaths: {
        de: 'lage-budva-riviera',
        en: 'location-budva-riviera',
        ru: 'location-budva-riviera',
        es: 'location-budva-riviera',
        sr: 'location-budva-riviera',
      },
      title: ({
        de: 'Reževići & Budva Riviera: Lage der Luxusvillen',
        en: 'Reževići & Budva Riviera: Luxury Villa Location',
        ru: 'Режевичи и Будванская ривьера: расположение вилл',
        es: 'Reževići y Riviera de Budva: ubicación de las villas',
        sr: 'Reževići i Budvanska rivijera: lokacija luksuznih vila',
      } as Record<Locale, string>)[locale],
      description: ({
        de: 'Ruhige Villenlage in Reževići, 90 Meter über der Adria: nahe Drobni Pijesak, Sveti Stefan und Budva sowie Einkaufsmöglichkeiten und Restaurants.',
        en: 'Peaceful villa location in Reževići, 90 metres above the Adriatic: close to Drobni Pijesak, Sveti Stefan, Budva, shops and restaurants.',
        ru: 'Тихое расположение вилл в Режевичи, в 90 метрах над Адриатикой: рядом с Дробни-Пиесак, Свети-Стефаном, Будвой, магазинами и ресторанами.',
        es: 'Villas en una zona tranquila de Reževići, a 90 metros sobre el Adriático: cerca de Drobni Pijesak, Sveti Stefan, Budva, tiendas y restaurantes.',
        sr: 'Mirna lokacija vila u Reževićima, 90 metara iznad Jadrana: blizu Drobnog Pijeska, Svetog Stefana, Budve, prodavnica i restorana.',
      } as Record<Locale, string>)[locale],
      ogImage: '/assets/media/lumina/lumina-aerial-location.webp',
      ogImageAlt: this.t.inline('Lage der Villen an der Budva Riviera', 'Villa location on the Budva Riviera', 'Расположение вилл на Будванской ривьере', 'Ubicación de las villas en la Riviera de Budva'),
    });

    this.structuredData.setJsonLd(
      'ld-location',
      [this.structuredData.buildBreadcrumbGraph(
        [
          { name: ({ de: 'Start', en: 'Home', ru: 'Главная', es: 'Inicio', sr: 'Početna' } as Record<Locale, string>)[locale], path: '' },
          { name: ({ de: 'Lage', en: 'Location', ru: 'Расположение', es: 'Ubicación', sr: 'Lokacija' } as Record<Locale, string>)[locale], path },
        ],
        locale
      )]
    );
  }

  protected locale(): Locale {
    return this.t.locale();
  }

  protected enableMap(): void {
    this.mapConsent.set(true);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.mapConsentStorageKey, 'granted');
    }
  }

  protected revokeMapConsent(): void {
    this.mapConsent.set(false);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.mapConsentStorageKey);
    }
  }

  protected privacyPath(): string {
    return `/${this.locale()}/datenschutz`;
  }

  protected googlePrivacyUrl(): string {
    return `https://policies.google.com/privacy?hl=${this.locale()}`;
  }

  protected responsiveSrcSet(path: string): string {
    return `${path.replace(/\.webp$/, '-720.webp')} 720w, ${path} 1440w`;
  }

}
