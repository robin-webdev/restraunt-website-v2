import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "lv" | "ru";

const LANGUAGE_STORAGE_KEY = "gongu-language";

export const languageLabels: Record<Language, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  lv: { short: "LV", name: "Latviešu" },
  ru: { short: "RU", name: "Русский" },
};

export const translations = {
  en: {
    notFound: {
      title: "404 Page Not Found",
      description: "The page you requested is not available.",
    },
    nav: {
      brandTagline: "Latvian Cuisine",
      links: [
        { label: "Home", href: "#" },
        { label: "Menu", href: "#menu" },
        { label: "About", href: "#about" },
        { label: "Gallery", href: "#gallery" },
        { label: "Reviews", href: "#reviews" },
        { label: "Contact", href: "#contact" },
      ],
      reserve: "Book a Table",
      language: "Language",
      callUs: "Call Us",
      directions: "Directions",
    },
    mobileBar: {
      call: "Call",
      menu: "Menu",
      map: "Map",
      reserve: "Reserve",
    },
    home: {
      hero: {
        badge: "Premium Dining",
        rating: "4.9 (500+ Reviews)",
        titleLine1: "Authentic Latvian",
        titleAccent: "Flavors, Reimagined",
        description:
          "A warm, unforgettable dining experience rooted in Latvia's rich culinary heritage. Freshly prepared daily with locally sourced ingredients.",
        reserve: "Reserve a Table",
        viewMenu: "View Menu",
        cardTitle: "Experience Gongu",
        address: "Elizabetes iela 24, Riga, LV-1010",
        hours: "Mon-Sun: 12:00 - 23:00",
        services: "Dine-in • Takeaway • Delivery",
      },
      quickInfo: [
        { title: "Opening Hours", desc: "Every day 12:00 - 23:00" },
        { title: "Location", desc: "Elizabetes iela 24, Riga" },
        { title: "Contact Us", desc: "+371 6700 0000" },
      ],
      featured: {
        eyebrow: "Signature Specials",
        title: "Taste Our Masterpieces",
        description:
          "Every dish at Gongu is crafted with passion, bringing out the vibrant, rustic flavors of Latvia in an elegant presentation.",
        orderNow: "Order Now",
        explore: "Explore Full Menu",
        dishes: [
          {
            name: "Rye Bread Trifle",
            desc: "Layered rye bread dessert with cranberry jam and whipped cream.",
            price: "8.50",
            badge: "Bestseller",
          },
          {
            name: "Grey Peas with Bacon",
            desc: "Traditional grey peas served with smoked bacon and caramelized onions.",
            price: "12.90",
            badge: "Traditional",
          },
          {
            name: "Cold Beet Soup",
            desc: "Refreshing cold beetroot soup with kefir, cucumber, and fresh dill.",
            price: "7.50",
            badge: "Vegetarian",
          },
          {
            name: "Breaded Pork Chop",
            desc: "Breaded pork chop served with dill potatoes and mushroom sauce.",
            price: "18.90",
            badge: "Chef's Special",
          },
          {
            name: "Baltic Salmon",
            desc: "Pan-seared Baltic salmon with asparagus and lemon butter sauce.",
            price: "22.50",
            badge: "Premium",
          },
          {
            name: "Bacon Buns",
            desc: "Soft baked rolls filled with smoked bacon and onion, a Latvian classic.",
            price: "6.90",
            badge: "Classic",
          },
          {
            name: "Pumpkin Soup",
            desc: "Velvety roasted pumpkin soup with toasted pumpkin seeds and cream.",
            price: "8.00",
            badge: "Vegetarian",
          },
          {
            name: "Sponge Cake",
            desc: "Light sponge cake with seasonal berries and cream.",
            price: "7.50",
            badge: "Dessert",
          },
        ],
      },
      menu: {
        title: "A Taste of Tradition",
        description: "Carefully curated dishes bringing you the essence of Latvia.",
        download: "Download Full Menu PDF",
        categories: ["Starters", "Mains", "Traditional", "Desserts", "Drinks"],
        items: [
          { cat: "Starters", name: "Bacon Buns", desc: "Baked bacon and onion rolls", price: "6.90" },
          { cat: "Starters", name: "Pumpkin Soup", desc: "Creamy roasted pumpkin soup with toasted seeds", price: "8.00" },
          { cat: "Mains", name: "Breaded Pork Chop", desc: "Latvian-style pork chop with dill potatoes and creamy mushroom sauce", price: "18.90" },
          { cat: "Mains", name: "Baltic Salmon", desc: "Pan-seared Baltic salmon with asparagus and lemon butter", price: "22.50" },
          { cat: "Traditional", name: "Grey Peas with Bacon", desc: "Grey peas, smoked bacon, and caramelized onions", price: "12.90" },
          { cat: "Traditional", name: "Sour Barley Porridge", desc: "Traditional fermented barley porridge with sour cream", price: "9.50" },
          { cat: "Desserts", name: "Rye Bread Trifle", desc: "Rye bread crumb dessert with berries and cream", price: "8.50" },
          { cat: "Desserts", name: "Sponge Cake", desc: "Latvian sponge cake with fresh fruit compote", price: "7.50" },
        ],
      },
      about: {
        eyebrow: "Our Story",
        title: "Rooted in Heritage. Crafted with Passion.",
        paragraph1:
          "Gongu was born from a desire to preserve and elevate the rich culinary traditions of Latvia. We believe that food is more than sustenance, it is a connection to our ancestors, our land, and each other.",
        paragraph2:
          "Every dish we serve is prepared using time-honored techniques, paired with fresh, locally sourced ingredients from Latvian farms and forests. Whether you're a local or a traveler, our cozy ambiance and hearty meals will make you feel right at home.",
        stats: "Years of bringing authentic recipes to your table.",
        bullets: ["Fresh Ingredients", "Traditional Recipes", "Family-Friendly", "Locally Sourced"],
        cta: "Learn More About Us",
      },
      reasons: {
        title: "Why Choose Gongu",
        description: "The perfect blend of tradition, quality, and hospitality.",
        items: [
          { title: "Authentic Latvian Cuisine", desc: "Recipes passed down through generations, served with modern flair." },
          { title: "Premium Ingredients", desc: "Locally sourced from Latvian farms and forests for unmatched freshness." },
          { title: "Cozy Ambiance", desc: "A warm, intimate atmosphere perfect for any occasion." },
          { title: "Chef-Crafted Dishes", desc: "Every plate is carefully composed by our experienced chefs." },
          { title: "Family-Friendly", desc: "A welcoming space for families, couples, and friends alike." },
          { title: "Trusted Since 2009", desc: "Over 15 years of bringing authentic taste to Riga." },
        ],
      },
      gallery: {
        title: "A Taste of the Atmosphere",
        description:
          "Immerse yourself in our beautifully designed dining spaces where every meal feels like a celebration.",
        follow: "Follow our Instagram",
      },
      testimonials: {
        title: "Guest Experiences",
        basedOn: "Based on 500+ Google Reviews",
        reviews: [
          {
            name: "Anna Berzina",
            date: "2 weeks ago",
            text: "Absolutely stunning experience. The rye bread trifle brought back so many childhood memories, yet felt incredibly modern. Highly recommended!",
          },
          {
            name: "Martins K.",
            date: "1 month ago",
            text: "The finest Latvian cuisine in Riga. The ambiance is dark, romantic, and cozy. Service was impeccable. A must-visit for food lovers.",
          },
          {
            name: "Sarah Jenkins",
            date: "3 months ago",
            text: "We visited as tourists and were blown away. The grey peas with bacon were hearty and delicious. The staff explained the history of each dish!",
          },
        ],
      },
      reservation: {
        title: "Reserve Your Table Tonight",
        description:
          "Experience the warmth of Latvian hospitality. Whether it's a romantic dinner or a family gathering, we're ready to host you.",
        reserve: "Reserve Online",
        call: "Call to Book",
      },
      location: {
        title: "Visit Gongu",
        locationTitle: "Location",
        locationDesc: "Elizabetes iela 24, Riga, LV-1010, Latvia",
        locationHint:
          "Located in the heart of the Art Nouveau district. Paid street parking is available nearby.",
        directions: "Get Directions →",
        hoursTitle: "Opening Hours",
        weekdaysLabel: "Monday - Friday",
        weekendsLabel: "Saturday - Sunday",
        weekdayHours: "12:00 - 22:00",
        weekendHours: "12:00 - 23:00",
        openNow: "Open Now",
        openMaps: "Open Google Maps",
      },
      footer: {
        tagline:
          "Authentic Latvian cuisine served in a warm, premium atmosphere. A true taste of heritage.",
        quickLinksTitle: "Quick Links",
        quickLinks: [
          { label: "Home", href: "#" },
          { label: "Our Menu", href: "#menu" },
          { label: "About Us", href: "#about" },
          { label: "Gallery", href: "#gallery" },
          { label: "Reservations", href: "/book" },
        ],
        formTitle: "Drop us a line",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Email Address",
        messagePlaceholder: "Your Message...",
        send: "Send Message",
        messageSent: "Message sent! We will get back to you shortly.",
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
  },
  lv: {
    notFound: {
      title: "404 Lapa nav atrasta",
      description: "Jūsu pieprasītā lapa nav pieejama.",
    },
    nav: {
      brandTagline: "Latvijas Virtuve",
      links: [
        { label: "Sākums", href: "#" },
        { label: "Ēdienkarte", href: "#menu" },
        { label: "Par mums", href: "#about" },
        { label: "Galerija", href: "#gallery" },
        { label: "Atsauksmes", href: "#reviews" },
        { label: "Kontakti", href: "#contact" },
      ],
      reserve: "Rezervēt galdiņu",
      language: "Valoda",
      callUs: "Zvanīt",
      directions: "Norādes",
    },
    mobileBar: {
      call: "Zvans",
      menu: "Ēdienkarte",
      map: "Karte",
      reserve: "Rezervēt",
    },
    home: {
      hero: {
        badge: "Augstvērtīga maltīte",
        rating: "4.9 (500+ atsauksmes)",
        titleLine1: "Autentiskas Latvijas",
        titleAccent: "garšas jaunā veidolā",
        description:
          "Silta un neaizmirstama maltītes pieredze, kas balstīta Latvijas bagātajās kulinārajās tradīcijās. Katru dienu svaigi gatavots no vietējiem produktiem.",
        reserve: "Rezervēt galdiņu",
        viewMenu: "Skatīt ēdienkarti",
        cardTitle: "Iepazīsti Gongu",
        address: "Elizabetes iela 24, Rīga, LV-1010",
        hours: "P.-Sv.: 12:00 - 23:00",
        services: "Uz vietas • Līdzņemšanai • Piegāde",
      },
      quickInfo: [
        { title: "Darba laiks", desc: "Katru dienu 12:00 - 23:00" },
        { title: "Atrašanās vieta", desc: "Elizabetes iela 24, Rīga" },
        { title: "Sazināties", desc: "+371 6700 0000" },
      ],
      featured: {
        eyebrow: "Īpašie piedāvājumi",
        title: "Nogardi mūsu meistardarbus",
        description:
          "Katrs ēdiens Gongu restorānā tiek gatavots ar aizrautību, atklājot Latvijas lauku garšas elegantā pasniegumā.",
        orderNow: "Pasūtīt",
        explore: "Apskatīt pilno ēdienkarti",
        dishes: [
          {
            name: "Rupjmaizes kārtojums",
            desc: "Kārtains rupjmaizes deserts ar dzērveņu ievārījumu un putukrējumu.",
            price: "8.50",
            badge: "Iecienīts",
          },
          {
            name: "Pelēkie zirņi ar speķi",
            desc: "Tradicionāli pelēkie zirņi ar kūpinātu speķi un karamelizētiem sīpoliem.",
            price: "12.90",
            badge: "Tradicionāls",
          },
          {
            name: "Aukstā zupa",
            desc: "Atsvaidzinoša biešu aukstā zupa ar kefīru, gurķi un dillēm.",
            price: "7.50",
            badge: "Veģetārs",
          },
          {
            name: "Cūkgaļas karbonāde",
            desc: "Panēta karbonāde ar dillēm pārkaisītiem kartupeļiem un sēņu mērci.",
            price: "18.90",
            badge: "Šefpavāra izvēle",
          },
          {
            name: "Cepts lasis",
            desc: "Baltijas lasis ar sparģeļiem un citrona sviesta mērci.",
            price: "22.50",
            badge: "Premium",
          },
          {
            name: "Speķa pīrādziņi",
            desc: "Mīksti cepti pīrādziņi ar kūpinātu speķi un sīpoliem, Latvijas klasika.",
            price: "6.90",
            badge: "Klasika",
          },
          {
            name: "Ķirbju zupa",
            desc: "Krēmīga cepta ķirbju zupa ar grauzdētām sēklām un saldo krējumu.",
            price: "8.00",
            badge: "Veģetārs",
          },
          {
            name: "Biskvīts",
            desc: "Gaisīgs biskvīts ar sezonas ogām un krēmu.",
            price: "7.50",
            badge: "Deserts",
          },
        ],
      },
      menu: {
        title: "Tradīciju garša",
        description: "Rūpīgi veidoti ēdieni, kas atklāj Latvijas būtību.",
        download: "Lejupielādēt pilno ēdienkarti PDF",
        categories: ["Uzkodas", "Pamatēdieni", "Tradicionālie", "Deserti", "Dzērieni"],
        items: [
          { cat: "Uzkodas", name: "Speķa pīrādziņi", desc: "Cepti pīrādziņi ar speķi un sīpoliem", price: "6.90" },
          { cat: "Uzkodas", name: "Ķirbju zupa", desc: "Krēmīga ķirbju zupa ar grauzdētām sēklām", price: "8.00" },
          { cat: "Pamatēdieni", name: "Cūkgaļas karbonāde", desc: "Latviska karbonāde ar dillēm pārkaisītiem kartupeļiem un sēņu mērci", price: "18.90" },
          { cat: "Pamatēdieni", name: "Cepts lasis", desc: "Baltijas lasis ar sparģeļiem un citrona sviestu", price: "22.50" },
          { cat: "Tradicionālie", name: "Pelēkie zirņi ar speķi", desc: "Pelēkie zirņi, kūpināts speķis un karamelizēti sīpoli", price: "12.90" },
          { cat: "Tradicionālie", name: "Skābputra", desc: "Raudzēta miežu putra ar skābo krējumu", price: "9.50" },
          { cat: "Deserti", name: "Rupjmaizes kārtojums", desc: "Rupjmaizes deserts ar ogām un krēmu", price: "8.50" },
          { cat: "Deserti", name: "Biskvīts", desc: "Latviešu biskvīts ar augļu kompotu", price: "7.50" },
        ],
      },
      about: {
        eyebrow: "Mūsu stāsts",
        title: "Sakņots mantojumā. Radīts ar aizrautību.",
        paragraph1:
          "Gongu radās no vēlmes saglabāt un celt godā Latvijas bagātās kulinārās tradīcijas. Mēs ticam, ka ēdiens ir kas vairāk par uzturu, tas ir saikne ar mūsu senčiem, zemi un vienam ar otru.",
        paragraph2:
          "Katrs mūsu ēdiens tiek gatavots ar laika pārbaudītām metodēm un vietējiem produktiem no Latvijas saimniecībām un mežiem. Gan vietējiem, gan ceļotājiem mūsu mājīgā atmosfēra ļauj justies kā mājās.",
        stats: "gadi, kuros pie jūsu galda nonāk autentiskas receptes.",
        bullets: ["Svaigas sastāvdaļas", "Tradicionālas receptes", "Ģimenēm draudzīgi", "Vietējie produkti"],
        cta: "Uzzināt vairāk par mums",
      },
      reasons: {
        title: "Kāpēc izvēlēties Gongu",
        description: "Ideāls tradīciju, kvalitātes un viesmīlības apvienojums.",
        items: [
          { title: "Autentiska Latvijas virtuve", desc: "Receptes, kas nodotas paaudzēs un pasniegtas mūsdienīgā manierē." },
          { title: "Augstvērtīgas sastāvdaļas", desc: "Vietējie produkti no Latvijas saimniecībām un mežiem nepārspējamam svaigumam." },
          { title: "Mājīga atmosfēra", desc: "Silta un intīma vide jebkuram notikumam." },
          { title: "Šefpavāra radīti ēdieni", desc: "Katra porcija ir pārdomāti veidota mūsu pieredzējušo pavāru rokās." },
          { title: "Draudzīgi ģimenēm", desc: "Viesmīlīga vieta ģimenēm, pāriem un draugiem." },
          { title: "Uzticami kopš 2009. gada", desc: "Vairāk nekā 15 gadi autentiskas garšas Rīgā." },
        ],
      },
      gallery: {
        title: "Noskaņas garša",
        description:
          "Ienirstiet mūsu skaisti veidotajā restorāna vidē, kur katra maltīte kļūst par svētkiem.",
        follow: "Sekot Instagram",
      },
      testimonials: {
        title: "Viesu pieredze",
        basedOn: "Balstīts uz 500+ Google atsauksmēm",
        reviews: [
          {
            name: "Anna Bērziņa",
            date: "pirms 2 nedēļām",
            text: "Absolūti lieliska pieredze. Rupjmaizes kārtojums atgādināja bērnības garšas, bet vienlaikus šķita ļoti mūsdienīgs. Noteikti iesaku!",
          },
          {
            name: "Mārtiņš K.",
            date: "pirms 1 mēneša",
            text: "Labākā latviešu virtuve Rīgā. Atmosfēra ir romantiska un mājīga. Apkalpošana bija nevainojama. Obligāti jāapmeklē ēdiena cienītājiem.",
          },
          {
            name: "Sarah Jenkins",
            date: "pirms 3 mēnešiem",
            text: "Apmeklējām kā tūristi un bijām sajūsmā. Pelēkie zirņi ar speķi bija sātīgi un gardi, un personāls izstāstīja katra ēdiena vēsturi.",
          },
        ],
      },
      reservation: {
        title: "Rezervē savu galdiņu šovakar",
        description:
          "Izbaudiet Latvijas viesmīlības siltumu. Vai tās būtu romantiskas vakariņas vai ģimenes tikšanās, mēs esam gatavi jūs uzņemt.",
        reserve: "Rezervēt tiešsaistē",
        call: "Zvanīt rezervācijai",
      },
      location: {
        title: "Apmeklē Gongu",
        locationTitle: "Atrašanās vieta",
        locationDesc: "Elizabetes iela 24, Rīga, LV-1010, Latvija",
        locationHint:
          "Atrodamies pašā jūgendstila rajona sirdī. Tuvumā pieejama maksas ielu autostāvvieta.",
        directions: "Saņemt norādes →",
        hoursTitle: "Darba laiks",
        weekdaysLabel: "Pirmdiena - Piektdiena",
        weekendsLabel: "Sestdiena - Svētdiena",
        weekdayHours: "12:00 - 22:00",
        weekendHours: "12:00 - 23:00",
        openNow: "Atvērts tagad",
        openMaps: "Atvērt Google Maps",
      },
      footer: {
        tagline:
          "Autentiska Latvijas virtuve siltā un augstvērtīgā atmosfērā. Īsta mantojuma garša.",
        quickLinksTitle: "Ātrās saites",
        quickLinks: [
          { label: "Sākums", href: "#" },
          { label: "Ēdienkarte", href: "#menu" },
          { label: "Par mums", href: "#about" },
          { label: "Galerija", href: "#gallery" },
          { label: "Rezervācijas", href: "/book" },
        ],
        formTitle: "Uzraksti mums",
        namePlaceholder: "Jūsu vārds",
        emailPlaceholder: "E-pasta adrese",
        messagePlaceholder: "Jūsu ziņa...",
        send: "Nosūtīt ziņu",
        messageSent: "Ziņa nosūtīta! Mēs ar jums drīz sazināsimies.",
        rights: "Visas tiesības aizsargātas.",
        privacy: "Privātuma politika",
        terms: "Lietošanas noteikumi",
      },
    },
  },
  ru: {
    notFound: {
      title: "404 Страница не найдена",
      description: "Запрошенная страница недоступна.",
    },
    nav: {
      brandTagline: "Латвийская кухня",
      links: [
        { label: "Главная", href: "#" },
        { label: "Меню", href: "#menu" },
        { label: "О нас", href: "#about" },
        { label: "Галерея", href: "#gallery" },
        { label: "Отзывы", href: "#reviews" },
        { label: "Контакты", href: "#contact" },
      ],
      reserve: "Забронировать стол",
      language: "Язык",
      callUs: "Позвонить",
      directions: "Маршрут",
    },
    mobileBar: {
      call: "Звонок",
      menu: "Меню",
      map: "Карта",
      reserve: "Бронь",
    },
    home: {
      hero: {
        badge: "Премиальный ужин",
        rating: "4.9 (500+ отзывов)",
        titleLine1: "Подлинные вкусы",
        titleAccent: "Латвии в новом прочтении",
        description:
          "Теплая и незабываемая атмосфера ужина, вдохновленная богатым кулинарным наследием Латвии. Каждый день готовим из свежих местных продуктов.",
        reserve: "Забронировать стол",
        viewMenu: "Посмотреть меню",
        cardTitle: "Ощутите Gongu",
        address: "Elizabetes iela 24, Рига, LV-1010",
        hours: "Пн-Вс: 12:00 - 23:00",
        services: "В зале • С собой • Доставка",
      },
      quickInfo: [
        { title: "Часы работы", desc: "Ежедневно 12:00 - 23:00" },
        { title: "Адрес", desc: "Elizabetes iela 24, Рига" },
        { title: "Связаться", desc: "+371 6700 0000" },
      ],
      featured: {
        eyebrow: "Фирменные блюда",
        title: "Попробуйте наши шедевры",
        description:
          "Каждое блюдо в Gongu создано с душой, раскрывая яркие и домашние вкусы Латвии в элегантной подаче.",
        orderNow: "Заказать",
        explore: "Открыть полное меню",
        dishes: [
          {
            name: "Десерт из ржаного хлеба",
            desc: "Слоеный десерт из ржаного хлеба с клюквенным вареньем и взбитыми сливками.",
            price: "8.50",
            badge: "Хит",
          },
          {
            name: "Серый горох со шпиком",
            desc: "Традиционный серый горох с копченым шпиком и карамелизированным луком.",
            price: "12.90",
            badge: "Традиция",
          },
          {
            name: "Холодный свекольник",
            desc: "Освежающий холодный суп из свеклы с кефиром, огурцом и укропом.",
            price: "7.50",
            badge: "Вегетарианское",
          },
          {
            name: "Свиная отбивная",
            desc: "Панированная отбивная со сливочным грибным соусом и картофелем с укропом.",
            price: "18.90",
            badge: "Выбор шефа",
          },
          {
            name: "Балтийский лосось",
            desc: "Обжаренный балтийский лосось со спаржей и лимонно-масляным соусом.",
            price: "22.50",
            badge: "Премиум",
          },
          {
            name: "Пирожки со шпиком",
            desc: "Мягкие запеченные пирожки с копченым шпиком и луком, латвийская классика.",
            price: "6.90",
            badge: "Классика",
          },
          {
            name: "Тыквенный суп",
            desc: "Нежный запеченный тыквенный суп с тыквенными семечками и сливками.",
            price: "8.00",
            badge: "Вегетарианское",
          },
          {
            name: "Бисквит",
            desc: "Воздушный бисквит с сезонными ягодами и кремом.",
            price: "7.50",
            badge: "Десерт",
          },
        ],
      },
      menu: {
        title: "Вкус традиций",
        description: "Тщательно подобранные блюда, передающие суть Латвии.",
        download: "Скачать полное меню PDF",
        categories: ["Закуски", "Основные", "Традиционные", "Десерты", "Напитки"],
        items: [
          { cat: "Закуски", name: "Пирожки со шпиком", desc: "Запеченные пирожки со шпиком и луком", price: "6.90" },
          { cat: "Закуски", name: "Тыквенный суп", desc: "Крем-суп из тыквы с поджаренными семечками", price: "8.00" },
          { cat: "Основные", name: "Свиная отбивная", desc: "Латвийская отбивная с картофелем с укропом и грибным соусом", price: "18.90" },
          { cat: "Основные", name: "Балтийский лосось", desc: "Балтийский лосось со спаржей и лимонным маслом", price: "22.50" },
          { cat: "Традиционные", name: "Серый горох со шпиком", desc: "Серый горох, копченый шпик и карамелизированный лук", price: "12.90" },
          { cat: "Традиционные", name: "Кислая ячменная каша", desc: "Традиционная ферментированная ячменная каша со сметаной", price: "9.50" },
          { cat: "Десерты", name: "Десерт из ржаного хлеба", desc: "Десерт из ржаной крошки с ягодами и кремом", price: "8.50" },
          { cat: "Десерты", name: "Бисквит", desc: "Латвийский бисквит с фруктовым компотом", price: "7.50" },
        ],
      },
      about: {
        eyebrow: "Наша история",
        title: "Основано на наследии. Создано с душой.",
        paragraph1:
          "Gongu появился из желания сохранить и возвысить богатые кулинарные традиции Латвии. Мы верим, что еда это не просто насыщение, а связь с предками, землей и друг с другом.",
        paragraph2:
          "Каждое блюдо готовится по проверенным временем техникам из свежих местных продуктов латвийских ферм и лесов. Здесь и местные жители, и путешественники чувствуют себя как дома.",
        stats: "лет мы подаем аутентичные рецепты к вашему столу.",
        bullets: ["Свежие продукты", "Традиционные рецепты", "Подходит для семей", "Местные поставщики"],
        cta: "Узнать больше",
      },
      reasons: {
        title: "Почему выбирают Gongu",
        description: "Идеальное сочетание традиций, качества и гостеприимства.",
        items: [
          { title: "Аутентичная латвийская кухня", desc: "Рецепты, передаваемые из поколения в поколение, в современной подаче." },
          { title: "Премиальные ингредиенты", desc: "Местные продукты с латвийских ферм и из лесов для безупречной свежести." },
          { title: "Уютная атмосфера", desc: "Теплое и камерное пространство для любого повода." },
          { title: "Блюда от шефа", desc: "Каждая тарелка продумана и собрана нашими опытными поварами." },
          { title: "Для семей и друзей", desc: "Гостеприимное место для семей, пар и компаний друзей." },
          { title: "Нам доверяют с 2009 года", desc: "Более 15 лет подлинного вкуса в Риге." },
        ],
      },
      gallery: {
        title: "Вкус атмосферы",
        description:
          "Погрузитесь в пространство ресторана, где каждая трапеза ощущается как маленький праздник.",
        follow: "Подписаться в Instagram",
      },
      testimonials: {
        title: "Впечатления гостей",
        basedOn: "На основе 500+ отзывов Google",
        reviews: [
          {
            name: "Анна Берзиня",
            date: "2 недели назад",
            text: "Потрясающий опыт. Десерт из ржаного хлеба напомнил детство, но при этом ощущался очень современно. Очень рекомендую!",
          },
          {
            name: "Мартиньш К.",
            date: "1 месяц назад",
            text: "Лучшая латвийская кухня в Риге. Атмосфера темная, романтичная и уютная. Сервис безупречный. Обязательно к посещению.",
          },
          {
            name: "Sarah Jenkins",
            date: "3 месяца назад",
            text: "Мы были туристами и остались в восторге. Серый горох со шпиком был сытным и очень вкусным, а персонал рассказал историю каждого блюда.",
          },
        ],
      },
      reservation: {
        title: "Забронируйте столик на сегодня",
        description:
          "Почувствуйте тепло латвийского гостеприимства. Романтический ужин или семейная встреча, мы готовы вас принять.",
        reserve: "Забронировать онлайн",
        call: "Позвонить для брони",
      },
      location: {
        title: "Посетите Gongu",
        locationTitle: "Адрес",
        locationDesc: "Elizabetes iela 24, Рига, LV-1010, Латвия",
        locationHint:
          "Мы находимся в самом сердце района югендстиля. Рядом доступна платная уличная парковка.",
        directions: "Построить маршрут →",
        hoursTitle: "Часы работы",
        weekdaysLabel: "Понедельник - Пятница",
        weekendsLabel: "Суббота - Воскресенье",
        weekdayHours: "12:00 - 22:00",
        weekendHours: "12:00 - 23:00",
        openNow: "Сейчас открыто",
        openMaps: "Открыть Google Maps",
      },
      footer: {
        tagline:
          "Аутентичная латвийская кухня в теплой премиальной атмосфере. Настоящий вкус наследия.",
        quickLinksTitle: "Быстрые ссылки",
        quickLinks: [
          { label: "Главная", href: "#" },
          { label: "Меню", href: "#menu" },
          { label: "О нас", href: "#about" },
          { label: "Галерея", href: "#gallery" },
          { label: "Бронирование", href: "/book" },
        ],
        formTitle: "Напишите нам",
        namePlaceholder: "Ваше имя",
        emailPlaceholder: "Email",
        messagePlaceholder: "Ваше сообщение...",
        send: "Отправить сообщение",
        messageSent: "Сообщение отправлено! Мы скоро свяжемся с вами.",
        rights: "Все права защищены.",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
      },
    },
  },
} as const;

type TranslationTree = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationTree;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (storedLanguage === "en" || storedLanguage === "lv" || storedLanguage === "ru") {
      return storedLanguage;
    }

    return "en";
  });

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}
