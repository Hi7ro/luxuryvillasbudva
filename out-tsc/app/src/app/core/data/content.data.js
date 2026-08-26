export const DISTANCES = [
    { label: { de: 'Drobni Pijesak Beach', en: 'Drobni Pijesak Beach', ru: 'Пляж Дробни Пиесак', es: 'Playa Drobni Pijesak' }, value: '≈ 3 Min.' },
    { label: { de: 'Sveti Stefan', en: 'Sveti Stefan', ru: 'Свети-Стефан', es: 'Sveti Stefan' }, value: '≈ 3,5 km' },
    { label: { de: 'Petrovac', en: 'Petrovac', ru: 'Петровац', es: 'Petrovac' }, value: '≈ 5 km' },
    { label: { de: 'Budva', en: 'Budva', ru: 'Будва', es: 'Budva' }, value: '≈ 7 km' },
    { label: { de: 'Flughafen Tivat', en: 'Tivat Airport', ru: 'Аэропорт Тиват', es: 'Aeropuerto de Tivat' }, value: '≈ 24 km' },
    { label: { de: 'Flughafen Podgorica', en: 'Podgorica Airport', ru: 'Аэропорт Подгорица', es: 'Aeropuerto de Podgorica' }, value: '≈ 32 km' },
];
export const VILLAS = [
    {
        slug: 'villa-monte-mare',
        name: 'Villa MonteMare',
        tagline: {
            de: 'Ein privater Rückzugsort über der Adria',
            en: 'A private retreat above the Adriatic',
            ru: 'Уединённое место над Адриатикой',
            es: 'Un refugio privado sobre el Adriático',
        },
        positioning: {
            de: 'Ein privater Rückzugsort über der montenegrinischen Adriaküste - mit modernem Design, mediterranem Garten, eigenem Pool und unvergesslichen Sonnenuntergängen.',
            en: 'A private retreat above the Montenegrin Adriatic coast - modern design, a Mediterranean garden, a private pool and unforgettable sunsets.',
            ru: 'Уединённая вилла над черногорским побережьем Адриатики — современный дизайн, средиземноморский сад, частный бассейн и незабываемые закаты.',
            es: 'Un refugio privado sobre la costa adriática de Montenegro, con diseño moderno, jardín mediterráneo, piscina privada y atardeceres inolvidables.',
        },
        intro: {
            de: 'In Reževići, auf einer ruhigen Anhöhe rund 90 Meter über dem Meer, liegt Villa MonteMare zwischen alten Olivenbäumen und drei terrassierten Gartenebenen. Bis zu sechs Gäste bewohnen die Villa exklusiv - mit Panoramablick auf Bucht und Berge.',
            en: 'In Reževići, on a quiet hillside roughly 90 metres above the sea, Villa MonteMare sits among old olive trees across three terraced garden levels. Up to six guests have the entire villa to themselves, with panoramic views over the bay and mountains.',
            ru: 'Villa MonteMare расположена в Режевичи, на тихом склоне примерно в 90 метрах над морем, среди старых оливковых деревьев и трёх уровней террасного сада. Вилла полностью предоставляется группе до шести гостей и открывает панорамный вид на залив и горы.',
            es: 'Villa MonteMare se encuentra en Reževići, en una tranquila ladera a unos 90 metros sobre el mar, entre olivos centenarios y tres niveles de jardín. Hasta seis huéspedes disfrutan de toda la villa en exclusiva, con vistas panorámicas a la bahía y las montañas.',
        },
        description: [
            {
                de: 'Drei Etagen, jede mit eigener Terrasse, verbinden Innen- und Außenraum. Der offene Wohn-, Ess- und Küchenbereich mit großem Esstisch bildet das Herzstück der Villa - voll ausgestattet für längere Aufenthalte.',
                en: 'Three floors, each with its own terrace, blend indoor and outdoor living. The open living, dining and kitchen area with a large dining table is the heart of the villa - fully equipped for longer stays.',
                ru: 'Три этажа, каждый с собственной террасой, соединяют внутреннее и внешнее пространство. Открытая гостиная, столовая и кухня с большим обеденным столом образуют сердце виллы и полностью оборудованы для длительного проживания.',
                es: 'Tres plantas, cada una con su propia terraza, conectan los espacios interiores y exteriores. La zona abierta de salón, comedor y cocina con una gran mesa es el corazón de la villa y está totalmente equipada para estancias largas.',
            },
            {
                de: 'Ein separater Arbeitsbereich mit Schreibtisch und WLAN eignet sich für einzelne Arbeitstage während des Urlaubs. Ein eigener Hauswirtschaftsraum mit Waschmaschine sowie zwei private Parkplätze runden die Ausstattung ab.',
                en: 'A separate work area with a desk and WiFi suits the odd working day during your stay. A dedicated utility room with a washing machine and two private parking spaces complete the setup.',
                ru: 'Отдельная рабочая зона со столом и Wi‑Fi подходит для работы во время отдыха. Отдельная прачечная со стиральной машиной и два частных парковочных места дополняют оснащение.',
                es: 'Una zona de trabajo separada con escritorio y Wi‑Fi permite trabajar cómodamente durante la estancia. Un lavadero con lavadora y dos plazas de aparcamiento privadas completan el equipamiento.',
            },
        ],
        guests: 6,
        bedrooms: 3,
        bathrooms: 3,
        nightlyRateEur: 500,
        hasPrivatePool: true,
        highlights: [
            { icon: 'pool', label: { de: 'Privater Außenpool', en: 'Private outdoor pool', ru: 'Частный открытый бассейн', es: 'Piscina exterior privada' } },
            { icon: 'view', label: { de: 'Panorama-Meerblick', en: 'Panoramic sea view', ru: 'Панорамный вид на море', es: 'Vistas panorámicas al mar' } },
            { icon: 'garden', label: { de: 'Garten mit alten Olivenbäumen', en: 'Garden with old olive trees', ru: 'Сад со старыми оливковыми деревьями', es: 'Jardín con olivos centenarios' } },
            { icon: 'terrace', label: { de: 'Terrassen auf jeder Ebene', en: 'Terraces on every level', ru: 'Террасы на каждом этаже', es: 'Terrazas en cada planta' } },
        ],
        amenities: [
            { de: '3 Schlafzimmer mit Queensize-Doppelbetten', en: '3 bedrooms with queen-size beds', ru: '3 спальни с двуспальными кроватями', es: '3 dormitorios con camas queen size' },
            { de: '3 private Badezimmer', en: '3 private bathrooms', ru: '3 отдельные ванные комнаты', es: '3 baños privados' },
            { de: 'Großzügige Sonnenterrasse', en: 'Generous sun terrace', ru: 'Просторная солнечная терраса', es: 'Amplia terraza-solárium' },
            { de: 'Voll ausgestattete Küche', en: 'Fully equipped kitchen', ru: 'Полностью оборудованная кухня', es: 'Cocina totalmente equipada' },
            { de: 'Separater Arbeitsbereich mit Schreibtisch', en: 'Separate work area with desk', ru: 'Отдельная рабочая зона с письменным столом', es: 'Zona de trabajo independiente con escritorio' },
            { de: 'WLAN', en: 'WiFi', ru: 'Wi‑Fi', es: 'Wi‑Fi' },
            { de: 'Waschmaschine im separaten Hauswirtschaftsraum', en: 'Washing machine in a separate utility room', ru: 'Стиральная машина в отдельной прачечной', es: 'Lavadora en un lavadero independiente' },
            { de: 'Zwei private Parkplätze', en: 'Two private parking spaces', ru: 'Два частных парковочных места', es: 'Dos plazas de aparcamiento privadas' },
            { de: 'Exklusive Nutzung der gesamten Villa', en: 'Exclusive use of the entire villa', ru: 'Эксклюзивное пользование всей виллой', es: 'Uso exclusivo de toda la villa' },
        ],
        suitableForWorkation: false,
        faq: [
            {
                question: { de: 'Ist der Pool wirklich privat?', en: 'Is the pool really private?', ru: 'Бассейн действительно частный?', es: '¿La piscina es realmente privada?' },
                answer: {
                    de: 'Ja. Villa MonteMare wird ausschließlich an eine Reisegruppe vergeben, der Pool wird während des Aufenthalts nicht mit anderen Gästen geteilt.',
                    en: 'Yes. Villa MonteMare is rented to a single party only - the pool is never shared with other guests during your stay.',
                    ru: 'Да. Villa MonteMare сдаётся только одной группе гостей, поэтому бассейн не используется совместно с другими гостями.',
                    es: 'Sí. Villa MonteMare se alquila exclusivamente a un solo grupo, por lo que la piscina no se comparte con otros huéspedes.',
                },
            },
            {
                question: { de: 'Wie weit ist der nächste Strand entfernt?', en: 'How far is the nearest beach?', ru: 'Как далеко находится ближайший пляж?', es: '¿A qué distancia está la playa más cercana?' },
                answer: {
                    de: 'Drobni Pijesak Beach ist etwa 3 Gehminuten entfernt.',
                    en: 'Drobni Pijesak Beach is roughly a 3-minute walk away.',
                    ru: 'До пляжа Дробни Пиесак около трёх минут пешком.',
                    es: 'La playa Drobni Pijesak está a unos tres minutos a pie.',
                },
            },
        ],
        heroImageAlt: {
            de: 'Villa MonteMare mit privatem Pool und Blick auf die Adria bei Sonnenuntergang',
            en: 'Villa MonteMare with private pool and Adriatic view at sunset',
            ru: 'Villa MonteMare с частным бассейном и видом на Адриатику на закате',
            es: 'Villa MonteMare con piscina privada y vistas al Adriático al atardecer',
        },
        galleryImagePlaceholders: [
            '/assets/media/montemare/monte-mare-exterior-pool.webp',
            '/assets/media/montemare/monte-mare-pool-garden.webp',
            '/assets/media/montemare/monte-mare-olive-garden.webp',
            '/assets/media/montemare/monte-mare-living-dining.webp',
            '/assets/media/montemare/monte-mare-dining-balcony.webp',
            '/assets/media/montemare/monte-mare-bedroom-lounge.webp',
            '/assets/media/montemare/monte-mare-bedroom-one.webp',
            '/assets/media/montemare/monte-mare-bedroom-two.webp',
            '/assets/media/montemare/monte-mare-bathroom-one.webp',
            '/assets/media/montemare/monte-mare-bathroom-two.webp',
            '/assets/media/montemare/monte-mare-balcony-view.webp',
            '/assets/media/montemare/monte-mare-workspace.webp',
        ],
        seoTitle: {
            de: 'Villa MonteMare - Luxusvilla mit Pool bei Budva',
            en: 'Villa MonteMare - Luxury Villa with Pool near Budva',
            ru: 'Villa MonteMare — роскошная вилла с бассейном рядом с Будвой',
            es: 'Villa MonteMare: villa de lujo con piscina cerca de Budva',
        },
        metaDescription: {
            de: 'Private Ferienvilla in Reževići für bis zu 6 Gäste: 3 Schlafzimmer, eigener Pool, mediterraner Garten und Panoramablick über die Adria.',
            en: 'Private holiday villa in Reževići for up to 6 guests: 3 bedrooms, private pool, Mediterranean garden and panoramic Adriatic views.',
            ru: 'Частная вилла в Режевичи для 6 гостей: 3 спальни, собственный бассейн, средиземноморский сад и панорамный вид на Адриатику.',
            es: 'Villa vacacional privada en Reževići para 6 huéspedes: 3 dormitorios, piscina privada, jardín mediterráneo y vistas panorámicas al Adriático.',
        },
    },
    {
        slug: 'villa-lumina',
        name: 'Villa Lumina',
        tagline: {
            de: 'Zeitgenössischer Luxus mit Dachterrasse über der Adria',
            en: 'Contemporary luxury with a rooftop terrace above the Adriatic',
            ru: 'Современная роскошь с террасой на крыше над Адриатикой',
            es: 'Lujo contemporáneo con azotea sobre el Adriático',
        },
        positioning: {
            de: 'Zeitgenössischer Luxus mit privatem Pool, lichtdurchfluteten Räumen und einer Dachterrasse über der Adria.',
            en: 'Contemporary luxury with a private pool, light-filled interiors and a rooftop terrace above the Adriatic.',
            ru: 'Современная роскошь с частным бассейном, наполненными светом интерьерами и террасой на крыше над Адриатикой.',
            es: 'Lujo contemporáneo con piscina privada, interiores llenos de luz y una azotea sobre el Adriático.',
        },
        intro: {
            de: 'Villa Lumina liegt, wie Villa MonteMare, in Reževići in der Gemeinde Budva. Drei Etagen mit modernem, offenem Grundriss führen hinauf zu einer Dachterrasse mit Panoramablick über Meer und Berge - ideal auch für längere Aufenthalte und Workations.',
            en: 'Like Villa MonteMare, Villa Lumina is located in Reževići in the municipality of Budva. Three floors with a modern open layout lead up to a rooftop terrace with panoramic sea and mountain views - well suited to longer stays and workations.',
            ru: 'Villa Lumina, как и Villa MonteMare, находится в Режевичи, в муниципалитете Будва. Три этажа с современной открытой планировкой ведут к террасе на крыше с панорамным видом на море и горы — отличный выбор для длительного проживания и удалённой работы.',
            es: 'Al igual que Villa MonteMare, Villa Lumina se encuentra en Reževići, en el municipio de Budva. Sus tres plantas de diseño moderno y abierto conducen a una azotea con vistas panorámicas al mar y las montañas, ideal para estancias largas y teletrabajo.',
        },
        description: [
            {
                de: 'Der offene Wohn-, Ess- und Küchenbereich ist auf Helligkeit und Weite ausgelegt. Ein separater Arbeitsbereich mit eigener Getränkeküche und schnellem Glasfaser-Internet macht die Villa zu einer echten Option für Workations.',
                en: 'The open living, dining and kitchen area is designed for light and openness. A separate work area with its own kitchenette and fast fibre internet makes the villa a genuine workation option.',
                ru: 'Открытая зона гостиной, столовой и кухни создана светлой и просторной. Отдельное рабочее место с мини-кухней и быстрым оптоволоконным интернетом делает виллу подходящей для совмещения отдыха и работы.',
                es: 'La zona abierta de salón, comedor y cocina está diseñada para ofrecer luz y amplitud. Un espacio de trabajo independiente con pequeña cocina e internet de fibra rápida convierte la villa en una opción ideal para teletrabajar.',
            },
            {
                de: 'Die großzügige Pool- und Sonnenterrasse sowie die Dachterrasse bieten mehrere Rückzugsorte im Freien. Ein 65-Zoll-HDTV, ein eigener Hauswirtschaftsraum mit Waschmaschine und zwei private Parkplätze runden das Angebot ab.',
                en: 'The generous pool and sun terrace, plus the rooftop terrace, offer several outdoor retreats. A 65-inch HDTV, a separate utility room with a washing machine and two private parking spaces round out the offering.',
                ru: 'Просторная терраса у бассейна и терраса на крыше создают несколько зон отдыха на свежем воздухе. Телевизор 65 дюймов, отдельная прачечная со стиральной машиной и два парковочных места дополняют удобства.',
                es: 'La amplia terraza de la piscina y la azotea ofrecen varios espacios de descanso al aire libre. Un televisor HDTV de 65 pulgadas, un lavadero con lavadora y dos plazas de aparcamiento privadas completan la oferta.',
            },
        ],
        guests: 6,
        bedrooms: 3,
        bathrooms: 3,
        nightlyRateEur: 500,
        hasPrivatePool: true,
        highlights: [
            { icon: 'pool', label: { de: 'Privater Außenpool', en: 'Private outdoor pool', ru: 'Частный открытый бассейн', es: 'Piscina exterior privada' } },
            { icon: 'roof', label: { de: 'Dachterrasse mit Panoramablick', en: 'Rooftop terrace with panoramic view', ru: 'Терраса на крыше с панорамным видом', es: 'Azotea con vistas panorámicas' } },
            { icon: 'wifi', label: { de: 'Glasfaser-Internet, ideal für Workation', en: 'Fibre internet, ideal for workation', ru: 'Оптоволоконный интернет для удалённой работы', es: 'Internet de fibra, ideal para teletrabajo' } },
            { icon: 'terrace', label: { de: 'Terrassen auf jeder Ebene', en: 'Terraces on every level', ru: 'Террасы на каждом этаже', es: 'Terrazas en cada planta' } },
        ],
        amenities: [
            { de: '3 Schlafzimmer mit Queensize-Doppelbetten', en: '3 bedrooms with queen-size beds', ru: '3 спальни с двуспальными кроватями', es: '3 dormitorios con camas queen size' },
            { de: '3 En-suite-Badezimmer', en: '3 en-suite bathrooms', ru: '3 ванные комнаты в спальнях', es: '3 baños en suite' },
            { de: 'Großzügige Pool- und Sonnenterrasse', en: 'Generous pool and sun terrace', ru: 'Просторная терраса у бассейна', es: 'Amplia terraza con piscina y solárium' },
            { de: 'Separater Arbeitsbereich mit Getränkeküche', en: 'Separate work area with kitchenette', ru: 'Отдельная рабочая зона с мини-кухней', es: 'Zona de trabajo independiente con pequeña cocina' },
            { de: 'Schnelles Glasfaser-Internet', en: 'Fast fibre internet', ru: 'Быстрый оптоволоконный интернет', es: 'Internet de fibra rápida' },
            { de: '65-Zoll-HDTV', en: '65-inch HDTV', ru: 'HD-телевизор 65 дюймов', es: 'Televisor HDTV de 65 pulgadas' },
            { de: 'Waschmaschine im separaten Hauswirtschaftsraum', en: 'Washing machine in a separate utility room', ru: 'Стиральная машина в отдельной прачечной', es: 'Lavadora en un lavadero independiente' },
            { de: 'Zwei private Parkplätze', en: 'Two private parking spaces', ru: 'Два частных парковочных места', es: 'Dos plazas de aparcamiento privadas' },
            { de: 'Exklusive Nutzung der gesamten Villa', en: 'Exclusive use of the entire villa', ru: 'Эксклюзивное пользование всей виллой', es: 'Uso exclusivo de toda la villa' },
        ],
        suitableForWorkation: true,
        faq: [
            {
                question: { de: 'Eignet sich Villa Lumina für Workation?', en: 'Is Villa Lumina suited to workation?', ru: 'Подходит ли Villa Lumina для совмещения отдыха и работы?', es: '¿Es Villa Lumina adecuada para teletrabajar?' },
                answer: {
                    de: 'Ja. Die Villa verfügt über einen separaten Arbeitsbereich und schnelles Glasfaser-Internet - vorgesehen für längere, arbeitsintensive Aufenthalte.',
                    en: 'Yes. The villa has a separate work area and fast fibre internet, designed for longer, work-intensive stays.',
                    ru: 'Да. На вилле есть отдельная рабочая зона и быстрый оптоволоконный интернет для длительного проживания и удалённой работы.',
                    es: 'Sí. La villa dispone de una zona de trabajo independiente e internet de fibra rápida, ideal para estancias largas con teletrabajo.',
                },
            },
            {
                question: { de: 'Gibt es eine Dachterrasse?', en: 'Is there a rooftop terrace?', ru: 'Есть ли терраса на крыше?', es: '¿Hay una azotea?' },
                answer: {
                    de: 'Ja, mit Panoramablick über die Adria - zusätzlich zu den Terrassen auf jeder Etage.',
                    en: 'Yes, with panoramic Adriatic views - in addition to the terraces on every floor.',
                    ru: 'Да, с панорамным видом на Адриатику, в дополнение к террасам на каждом этаже.',
                    es: 'Sí, con vistas panorámicas al Adriático, además de las terrazas de cada planta.',
                },
            },
        ],
        heroImageAlt: {
            de: 'Villa Lumina mit Pool, Dachterrasse und Blick auf die Adria',
            en: 'Villa Lumina with pool, rooftop terrace and Adriatic view',
            ru: 'Villa Lumina с бассейном, террасой на крыше и видом на Адриатику',
            es: 'Villa Lumina con piscina, azotea y vistas al Adriático',
        },
        galleryImagePlaceholders: [
            '/assets/media/lumina/lumina-hero-adriatic-sunset.webp',
            '/assets/media/lumina/lumina-exterior-pool.webp',
            '/assets/media/lumina/lumina-rooftop-sea-view.webp',
            '/assets/media/lumina/lumina-balcony-sea-view.webp',
            '/assets/media/lumina/lumina-living-room.webp',
            '/assets/media/lumina/lumina-dining-area.webp',
            '/assets/media/lumina/lumina-kitchen.webp',
            '/assets/media/lumina/lumina-workspace.webp',
            '/assets/media/lumina/lumina-bedroom-sea-view.webp',
            '/assets/media/lumina/lumina-bathroom.webp',
            '/assets/media/lumina/lumina-hallway.webp',
            '/assets/media/lumina/lumina-pool-garden.webp',
            '/assets/media/lumina/lumina-exterior-terraces.webp',
            '/assets/media/lumina/lumina-aerial-location.webp',
        ],
        seoTitle: {
            de: 'Villa Lumina - Luxusvilla mit Meerblick in Montenegro',
            en: 'Villa Lumina - Luxury Villa with Sea View in Montenegro',
            ru: 'Villa Lumina — роскошная вилла с видом на море в Черногории',
            es: 'Villa Lumina: villa de lujo con vistas al mar en Montenegro',
        },
        metaDescription: {
            de: 'Moderne Villa an der Budva Riviera für 6 Gäste mit privatem Pool, Dachterrasse, Glasfaser-Internet und spektakulärem Meerblick.',
            en: 'Modern villa on the Budva Riviera for 6 guests with a private pool, rooftop terrace, fibre internet and spectacular sea views.',
            ru: 'Современная вилла на Будванской ривьере для 6 гостей с частным бассейном, террасой на крыше, оптоволоконным интернетом и великолепным видом на море.',
            es: 'Villa moderna en la Riviera de Budva para 6 huéspedes, con piscina privada, azotea, internet de fibra y espectaculares vistas al mar.',
        },
    },
];
export const GUIDE_ARTICLES = [
    {
        slug: 'straende-bei-budva',
        title: {
            de: 'Die schönsten Strände rund um Budva',
            en: 'The Best Beaches Near Budva',
            ru: 'Лучшие пляжи в окрестностях Будвы',
            es: 'Las mejores playas cerca de Budva',
        },
        excerpt: {
            de: 'Von der ruhigen Bucht Drobni Pijesak bis zu den bekannten Stränden von Budva und Petrovac - ein Überblick für Gäste von Villa MonteMare und Villa Lumina.',
            en: 'From the quiet Drobni Pijesak cove to the well-known beaches of Budva and Petrovac - an overview for guests of Villa MonteMare and Villa Lumina.',
            ru: 'От тихой бухты Дробни Пиесак до известных пляжей Будвы и Петроваца — обзор для гостей Villa MonteMare и Villa Lumina.',
            es: 'Desde la tranquila cala de Drobni Pijesak hasta las conocidas playas de Budva y Petrovac: una guía para los huéspedes de Villa MonteMare y Villa Lumina.',
        },
        bodyHtml: {
            de: `<p>Wer in Reževići wohnt, hat einen entscheidenden Vorteil: Drobni Pijesak Beach liegt nur rund drei Gehminuten von Villa MonteMare und Villa Lumina entfernt. Die kleine Bucht ist bei Einheimischen geschätzt, weil sie ruhiger ist als die großen Strände in Budva selbst.</p>
      <p>Wer mehr Auswahl sucht, findet in Petrovac (ca. 5 km) einen langen Sandstrand mit Promenade, Restaurants und einer entspannten Atmosphäre. Richtung Sveti Stefan (ca. 3,5 km) liegen mehrere kleine Buchten mit Blick auf die berühmte Halbinsel.</p>
      <p>In Budva selbst (ca. 7 km) sind die Strände lebendiger und besser für Gäste geeignet, die abends auch das Stadtleben mit Restaurants und Bars erleben möchten.</p>
      <p><em>Hinweis: Öffnungszeiten von Strandbars und Liegenverleih variieren saisonal und sollten vor Ort bestätigt werden.</em></p>`,
            en: `<p>Staying in Reževići has one clear advantage: Drobni Pijesak Beach is roughly a three-minute walk from both Villa MonteMare and Villa Lumina. The small cove is popular with locals precisely because it's quieter than the larger beaches in Budva itself.</p>
      <p>For more variety, Petrovac (about 5 km away) has a long sandy beach with a promenade, restaurants and a relaxed atmosphere. Toward Sveti Stefan (about 3.5 km) you'll find several small coves with views of the famous peninsula.</p>
      <p>Budva itself (about 7 km) has livelier beaches and suits guests who also want to experience the town's restaurants and bars in the evening.</p>
      <p><em>Note: opening hours for beach bars and sunbed rentals vary by season and should be confirmed locally.</em></p>`,
            ru: `<p>Проживание в Режевичи имеет важное преимущество: пляж Дробни Пиесак находится примерно в трёх минутах ходьбы от Villa MonteMare и Villa Lumina. Местные жители ценят эту небольшую бухту за более спокойную атмосферу по сравнению с крупными пляжами Будвы.</p>
      <p>В Петроваце, примерно в 5 км, находится длинный песчаный пляж с набережной, ресторанами и непринуждённой атмосферой. По направлению к Свети-Стефану, примерно в 3,5 км, расположены небольшие бухты с видом на знаменитый полуостров.</p>
      <p>Пляжи Будвы, примерно в 7 км, более оживлённые и подходят гостям, которые хотят вечером посетить городские рестораны и бары.</p>
      <p><em>Примечание: часы работы пляжных баров и пунктов аренды лежаков зависят от сезона; актуальную информацию лучше уточнять на месте.</em></p>`,
            es: `<p>Alojarse en Reževići ofrece una ventaja clara: la playa Drobni Pijesak está a unos tres minutos a pie de Villa MonteMare y Villa Lumina. Los habitantes de la zona aprecian esta pequeña cala por ser más tranquila que las grandes playas de Budva.</p>
      <p>Para disfrutar de más variedad, Petrovac, a unos 5 km, cuenta con una larga playa de arena, paseo marítimo, restaurantes y un ambiente relajado. En dirección a Sveti Stefan, a unos 3,5 km, hay varias calas con vistas a la famosa península.</p>
      <p>Las playas de Budva, a unos 7 km, son más animadas y resultan ideales para quienes también desean disfrutar por la noche de los restaurantes y bares de la ciudad.</p>
      <p><em>Nota: los horarios de los bares de playa y del alquiler de tumbonas varían según la temporada y deben confirmarse en el lugar.</em></p>`,
        },
        publishedOn: '2026-08-01',
        updatedOn: '2026-08-01',
        relatedVillaSlugs: ['villa-monte-mare', 'villa-lumina'],
        seoTitle: {
            de: 'Die schönsten Strände rund um Budva | Reiseführer',
            en: 'The Best Beaches Near Budva | Travel Guide',
            ru: 'Лучшие пляжи рядом с Будвой | Путеводитель',
            es: 'Las mejores playas cerca de Budva | Guía de viaje',
        },
        metaDescription: {
            de: 'Strandguide für die Budva Riviera: Drobni Pijesak, Petrovac, Sveti Stefan und Budva - praktische Tipps für Ihren Villenaufenthalt.',
            en: 'Beach guide to the Budva Riviera: Drobni Pijesak, Petrovac, Sveti Stefan and Budva - practical tips for your villa stay.',
            ru: 'Путеводитель по пляжам Будванской ривьеры: Дробни Пиесак, Петровац, Свети-Стефан и Будва.',
            es: 'Guía de playas de la Riviera de Budva: Drobni Pijesak, Petrovac, Sveti Stefan y Budva.',
        },
    },
];
//# sourceMappingURL=content.data.js.map