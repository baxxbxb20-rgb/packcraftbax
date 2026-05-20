/* ============================================
   PACKCRAFT — app.js  COMPLETE
   ============================================ */

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
const cart = [];
let bonusPoints   = 12450;
let bonusDiscount = 0;
let map = null, mapMarker = null;

// ─────────────────────────────────────────────
// LANGUAGE SWITCHER
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// LANGUAGE SWITCHER — FULL PAGE TRANSLATION
// ─────────────────────────────────────────────
const TRANSLATIONS = {
  EN: {
    // Nav
    home:'HOME', backpacks:'BACKPACKS', wallets:'WALLETS', tshirts:'TSHIRTS',
    hoodies:'HOODIES', bonus:'BONUS', business:'FOR BUSINESS',
    // Hero
    heroTitle:'Your Vision,', heroAccent:'Our Craft',
    heroSub:'Precision-engineered carry and apparel, customizable down to the last fiber. Designed for the nocturnal, built for the digital frontier.',
    startConfig:'START CONFIGURATION', exploreLab:'EXPLORE THE LAB',
    // Modules
    systemModules:'SYSTEM MODULES', selectBase:'SELECT A BASE TO BEGIN CUSTOMIZATION',
    customize:'CUSTOMIZE',
    // Competition
    competition:'COMPETITIONS',
    competitionDesc:'Boost your status in the nocturnal frontier. Participate in our ecosystem challenges to earn',
    competitionBullet1:'Participate in bi-weekly design challenges to showcase your aesthetic vision.',
    competitionBullet2:'Submit unique customizations and configurations to the public lab.',
    competitionBullet3:'Stay active on the platform and contribute to the neural forest community.',
    currentReward:'CURRENT SEASON REWARD', joinChallenge:'JOIN CHALLENGE',
    // Process
    masterProcess:'MASTER THE PROCESS',
    processSub:'Four simple steps to bring your vision to life through our advanced fabrication systems.',
    step1Label:'STEP ONE', step1Title:'Choose Your Base',
    step1Desc:'Select your canvas from our core collection: BACKPACKS, WALLETS, TSHIRTS, or HOODIES.',
    step2Label:'STEP TWO', step2Title:'Customize Your Style',
    step2Desc:'Select high-performance materials and tactical colorways.',
    step3Label:'STEP THREE', step3Title:'Personalize',
    step3Desc:'Apply custom text identification via precision laser etching or embroidery.',
    step4Label:'FINAL STEP', step4Title:'Add to Bag & Order',
    step4Desc:'Secure your configuration and initiate the build process in our dark-labs.',
    startCreating:'START CREATING', leadTime:'AVERAGE LEAD TIME: 14 DAYS',
    // Configurators
    materialSystem:'MATERIAL SYSTEM', colorProfile:'COLOR PROFILE',
    closureHardware:'CLOSURE HARDWARE', laserEngraving:'TEXT ON PRODUCT',
    textPlaceholder:'Type text to print...', currentConfig:'CURRENT CONFIGURATION',
    addBackpack:'ADD TO BACKPACK', addWallet:'ADD TO WALLET',
    addTshirt:'ADD TO TSHIRT', addHoodie:'ADD TO HOODIE',
    resetDesign:'RESET DESIGN', selectDimensions:'SELECT DIMENSIONS',
    colorSpectrum:'COLOR SPECTRUM', digitalEmbossing:'TEXT ON PRODUCT',
    fabricTech:'FABRIC TECHNOLOGY', personalization:'PERSONALIZATION',
    sizeGuide:'SIZE GUIDE', subtotal:'SUBTOTAL', msrp:'MSRP', estShip:'EST. SHIP',
    shellMaterial:'SHELL MATERIAL', capacityModules:'CAPACITY MODULES',
    // Checkout
    orderSummary:'ORDER SUMMARY', shipping:'Shipping', tax:'Tax',
    total:'TOTAL', secure:'SECURE ENCRYPTED TERMINAL PROTOCOL ACTIVE',
    deliveryInfo:'DELIVERY INFORMATION', fullName:'FULL NAME',
    phoneNumber:'PHONE NUMBER', deliveryLocation:'DELIVERY LOCATION',
    mapHint:'Click on the map to select your delivery location',
    locationNone:'📍 Location: Not selected', sendOrder:'SEND ORDER',
    // Success
    orderSuccess:'Order Successful!',
    successMsg:'Your order has been placed and sent to Telegram. Our manager will contact you shortly.',
    needAssist:'Order sent to Telegram!',
    assistDesc:'We received your order. Click below to message us directly.',
    openTg:'✈️ Open Telegram Bot', backHome:'Back to Home →',
    totalPaid:'TOTAL PAID', estimatedDelivery:'ESTIMATED DELIVERY',
    // Bonus
    loyaltyProgram:'NEURAL LOYALTY PROGRAM',
    bonusTitle:'Your Synthetic Growth Core.',
    bonusDesc:'Level up your gear acquisition through neural engagement. Every order bridges the gap between hardware and potential.',
    currentBalance:'CURRENT BALANCE', activeBenefits:'Active Benefits & Exchange',
    pointExchange:'POINT EXCHANGE', tacticalCycle:'TACTICAL CYCLE',
    syncProgress:'Sync Progress →', neuralLogs:'Neural Activity Logs',
    // Business
    b2bEyebrow:'B2B SOLUTIONS',
    b2bTitle:'Scale Your Brand.', b2bAccent:'We Handle the Craft.',
    b2bSub:'Custom gear for teams, agencies, and enterprises.',
    getQuote:'GET A QUOTE', viewCatalog:'VIEW CATALOG',
    whyPackcraft:'WHY PACKCRAFT B2B',
    chooseTier:'Choose your level of scale.',
    availableBulk:'Available for bulk customization.',
    // Footer
    products:'PRODUCTS', support:'SUPPORT', contact:'CONTACT',
    warrantyInfo:'Warranty Info', leadTimes:'Lead Times',
    techManuals:'Tech Manuals', configHelp:'Configuration Help',
    checkout:'CHECKOUT',
  },
  RU: {
    home:'ГЛАВНАЯ', backpacks:'РЮКЗАКИ', wallets:'КОШЕЛЬКИ', tshirts:'ФУТБОЛКИ',
    hoodies:'ХУДИ', bonus:'БОНУСЫ', business:'ДЛЯ БИЗНЕСА',
    heroTitle:'Ваше Видение,', heroAccent:'Наше Мастерство',
    heroSub:'Точно спроектированные сумки и одежда, настраиваемые до последнего волокна. Создано для ночных, построено для цифровых.',
    startConfig:'НАЧАТЬ НАСТРОЙКУ', exploreLab:'ИССЛЕДОВАТЬ ЛАБ',
    systemModules:'МОДУЛИ СИСТЕМЫ', selectBase:'ВЫБЕРИТЕ ОСНОВУ ДЛЯ НАСТРОЙКИ',
    customize:'НАСТРОИТЬ',
    competition:'КОНКУРСЫ',
    competitionDesc:'Повышайте свой статус. Участвуйте в соревнованиях и зарабатывайте',
    competitionBullet1:'Участвуйте в двухнедельных конкурсах дизайна.',
    competitionBullet2:'Отправляйте уникальные настройки в публичную лабораторию.',
    competitionBullet3:'Будьте активны и вносите вклад в сообщество.',
    currentReward:'НАГРАДА СЕЗОНА', joinChallenge:'УЧАСТВОВАТЬ',
    masterProcess:'ОСВОЙТЕ ПРОЦЕСС',
    processSub:'Четыре простых шага, чтобы воплотить вашу идею в жизнь.',
    step1Label:'ШАГ ПЕРВЫЙ', step1Title:'Выберите основу',
    step1Desc:'Выберите из нашей коллекции: РЮКЗАКИ, КОШЕЛЬКИ, ФУТБОЛКИ или ХУДИ.',
    step2Label:'ШАГ ВТОРОЙ', step2Title:'Настройте стиль',
    step2Desc:'Выберите материалы и цветовые решения.',
    step3Label:'ШАГ ТРЕТИЙ', step3Title:'Персонализируйте',
    step3Desc:'Добавьте текст через лазерную гравировку или вышивку.',
    step4Label:'ФИНАЛЬНЫЙ ШАГ', step4Title:'Добавить в корзину',
    step4Desc:'Оформите заказ и запустите производство.',
    startCreating:'НАЧАТЬ СОЗДАНИЕ', leadTime:'СРЕДНЕЕ ВРЕМЯ: 14 ДНЕЙ',
    materialSystem:'МАТЕРИАЛ', colorProfile:'ЦВЕТ',
    closureHardware:'ЗАСТЁЖКИ', laserEngraving:'ТЕКСТ НА ТОВАРЕ',
    textPlaceholder:'Введите текст для печати...', currentConfig:'ТЕКУЩАЯ КОНФИГУРАЦИЯ',
    addBackpack:'В КОРЗИНУ', addWallet:'В КОРЗИНУ',
    addTshirt:'В КОРЗИНУ', addHoodie:'В КОРЗИНУ',
    resetDesign:'СБРОСИТЬ ДИЗАЙН', selectDimensions:'ВЫБЕРИТЕ РАЗМЕР',
    colorSpectrum:'ЦВЕТОВАЯ ГАММА', digitalEmbossing:'ТЕКСТ НА ТОВАРЕ',
    fabricTech:'ТКАНЬ', personalization:'ПЕРСОНАЛИЗАЦИЯ',
    sizeGuide:'РАЗМЕРНАЯ СЕТКА', subtotal:'ИТОГО', msrp:'ЦЕНА', estShip:'ДОСТАВКА',
    shellMaterial:'МАТЕРИАЛ КОРПУСА', capacityModules:'ЁМКОСТЬ',
    orderSummary:'СОСТАВ ЗАКАЗА', shipping:'Доставка', tax:'Налог',
    total:'ИТОГО', secure:'БЕЗОПАСНОЕ ЗАШИФРОВАННОЕ СОЕДИНЕНИЕ АКТИВНО',
    deliveryInfo:'ИНФОРМАЦИЯ О ДОСТАВКЕ', fullName:'ПОЛНОЕ ИМЯ',
    phoneNumber:'НОМЕР ТЕЛЕФОНА', deliveryLocation:'АДРЕС ДОСТАВКИ',
    mapHint:'Нажмите на карту чтобы выбрать место доставки',
    locationNone:'📍 Локация: не выбрана', sendOrder:'ОТПРАВИТЬ ЗАКАЗ',
    orderSuccess:'Заказ оформлен!',
    successMsg:'Ваш заказ принят и отправлен в Telegram. Менеджер свяжется с вами в ближайшее время.',
    needAssist:'Заказ отправлен в Telegram!',
    assistDesc:'Мы получили ваш заказ. Нажмите ниже чтобы написать нам напрямую.',
    openTg:'✈️ Открыть Telegram бот', backHome:'На главную →',
    totalPaid:'ИТОГО ОПЛАЧЕНО', estimatedDelivery:'ОЖИДАЕМАЯ ДОСТАВКА',
    loyaltyProgram:'ПРОГРАММА ЛОЯЛЬНОСТИ',
    bonusTitle:'Ваше Синтетическое Ядро Роста.',
    bonusDesc:'Прокачивайте свой статус. Каждый заказ приближает вас к новым уровням.',
    currentBalance:'ТЕКУЩИЙ БАЛАНС', activeBenefits:'Активные бонусы и обмен',
    pointExchange:'ОБМЕН БАЛЛОВ', tacticalCycle:'ТАКТИЧЕСКИЙ ЦИКЛ',
    syncProgress:'Синхронизировать →', neuralLogs:'Журнал активности',
    b2bEyebrow:'B2B РЕШЕНИЯ',
    b2bTitle:'Масштабируйте Бренд.', b2bAccent:'Мы Сделаем Всё.',
    b2bSub:'Корпоративная продукция для команд, агентств и предприятий.',
    getQuote:'ПОЛУЧИТЬ ЦЕНУ', viewCatalog:'КАТАЛОГ',
    whyPackcraft:'ПОЧЕМУ PACKCRAFT B2B',
    chooseTier:'Выберите уровень масштаба.',
    availableBulk:'Доступно для оптовых заказов.',
    products:'ПРОДУКТЫ', support:'ПОДДЕРЖКА', contact:'КОНТАКТЫ',
    warrantyInfo:'Гарантия', leadTimes:'Сроки', techManuals:'Руководства',
    configHelp:'Помощь с настройкой', checkout:'ОФОРМИТЬ',
  },
  UZ: {
    home:'BOSH SAHIFA', backpacks:'RYUKZAKLAR', wallets:'HAMYONLAR',
    tshirts:'FUTBOLKALAR', hoodies:'HUDILAR', bonus:'BONUSLAR', business:'BIZNES UCHUN',
    heroTitle:'Sizning Orzuingiz,', heroAccent:'Bizning Mahoratimiz',
    heroSub:'Aniq ishlab chiqarilgan sumkalar va kiyimlar, oxirgi ipgacha moslashtirilgan.',
    startConfig:'SOZLASHNI BOSHLASH', exploreLab:'LABORATORIYANI OCHISH',
    systemModules:'TIZIM MODULLARI', selectBase:'ASOSNI TANLANG',
    customize:'SOZLASH',
    competition:'TANLOVLAR',
    competitionDesc:'Statusingizni oshiring. Musobakalarda ishtirok eting va',
    competitionBullet1:'Ikki haftada bir dizayn musobaqalarida qatnashing.',
    competitionBullet2:'Noyob konfiguratsiyalarni ommaviy laboratoriyaga yuboring.',
    competitionBullet3:'Faol bo\'ling va hamjamiyatga hissa qo\'shing.',
    currentReward:'MAVSUM MUKOFOTI', joinChallenge:'QATNASHISH',
    masterProcess:'JARAYONNI O\'RGANING',
    processSub:'To\'rtta oddiy qadam bilan g\'oyangizni hayotga tatbiq eting.',
    step1Label:'BIRINCHI QADAM', step1Title:'Asosni tanlang',
    step1Desc:'To\'plamimizdan tanlang: RYUKZAKLAR, HAMYONLAR, FUTBOLKALAR yoki HUDILAR.',
    step2Label:'IKKINCHI QADAM', step2Title:'Uslubni sozlang',
    step2Desc:'Materiallar va ranglarni tanlang.',
    step3Label:'UCHINCHI QADAM', step3Title:'Shaxsiylashtirish',
    step3Desc:'Lazer o\'ymakorlik yoki kashtado\'zlik orqali matn qo\'shing.',
    step4Label:'OXIRGI QADAM', step4Title:'Savatga qo\'shish',
    step4Desc:'Buyurtmangizni rasmiylashtiring.',
    startCreating:'YARATISHNI BOSHLASH', leadTime:'O\'RTACHA MUDDAT: 14 KUN',
    materialSystem:'MATERIAL', colorProfile:'RANG',
    closureHardware:'QULF', laserEngraving:'MAHSULOTDAGI MATN',
    textPlaceholder:'Bosib chiqarish uchun matn kiriting...', currentConfig:'JORIY KONFIGURATSIYA',
    addBackpack:'SAVATGA', addWallet:'SAVATGA', addTshirt:'SAVATGA', addHoodie:'SAVATGA',
    resetDesign:'DIZAYNNI TIKLASH', selectDimensions:'O\'LCHAM TANLANG',
    colorSpectrum:'RANGLAR', digitalEmbossing:'MAHSULOTDAGI MATN',
    fabricTech:'MATO', personalization:'SHAXSIYLASHTIRISH',
    sizeGuide:'O\'LCHAM JADVALI', subtotal:'JAMI', msrp:'NARX', estShip:'YETKAZIB BERISH',
    shellMaterial:'KORPUS MATERIALI', capacityModules:'HAJM',
    orderSummary:'BUYURTMA TARKIBI', shipping:'Yetkazib berish', tax:'Soliq',
    total:'JAMI', secure:'XAVFSIZ SHIFRLANGAN ULANISH FAOL',
    deliveryInfo:'YETKAZIB BERISH MA\'LUMOTI', fullName:'TO\'LIQ ISM',
    phoneNumber:'TELEFON RAQAMI', deliveryLocation:'YETKAZIB BERISH JOYI',
    mapHint:'Yetkazib berish joyini tanlash uchun xaritani bosing',
    locationNone:'📍 Joylashuv: tanlanmagan', sendOrder:'BUYURTMA YUBORISH',
    orderSuccess:'Buyurtma muvaffaqiyatli!',
    successMsg:'Buyurtmangiz qabul qilindi va Telegramga yuborildi.',
    needAssist:'Buyurtma Telegramga yuborildi!',
    assistDesc:'Buyurtmangizni oldik. To\'g\'ridan-to\'g\'ri yozish uchun bosing.',
    openTg:'✈️ Telegram botini ochish', backHome:'Bosh sahifaga →',
    totalPaid:'JAMI TO\'LANGAN', estimatedDelivery:'TAXMINIY YETKAZIB BERISH',
    loyaltyProgram:'SODIQLIK DASTURI',
    bonusTitle:'Sizning Sintetik O\'sish Yadroyingiz.',
    bonusDesc:'Statusingizni oshiring. Har bir buyurtma yangi darajalarga yaqinlashtiradi.',
    currentBalance:'JORIY BALANS', activeBenefits:'Faol bonuslar va almashtirish',
    pointExchange:'BALL ALMASHTIRISH', tacticalCycle:'TAKTIK SIKL',
    syncProgress:'Sinxronlash →', neuralLogs:'Faoliyat jurnali',
    b2bEyebrow:'B2B YECHIMLAR',
    b2bTitle:'Brendni Kengaytiring.', b2bAccent:'Biz Hamma Narsani Qilamiz.',
    b2bSub:'Jamoalar, agentliklar va korxonalar uchun korporativ mahsulotlar.',
    getQuote:'NARX OLISH', viewCatalog:'KATALOG',
    whyPackcraft:'NIMA UCHUN PACKCRAFT B2B',
    chooseTier:'Miqyos darajasini tanlang.',
    availableBulk:'Ulgurji buyurtmalar uchun mavjud.',
    products:'MAHSULOTLAR', support:'YORDAM', contact:'ALOQA',
    warrantyInfo:'Kafolat', leadTimes:'Muddatlar', techManuals:'Qo\'llanmalar',
    configHelp:'Sozlash yordami', checkout:'BUYURTMA',
  },
  DE: {
    home:'STARTSEITE', backpacks:'RUCKSÄCKE', wallets:'GELDBÖRSEN',
    tshirts:'T-SHIRTS', hoodies:'HOODIES', bonus:'BONUS', business:'FÜR UNTERNEHMEN',
    heroTitle:'Ihre Vision,', heroAccent:'Unser Handwerk',
    heroSub:'Präzisionsgefertigte Taschen und Kleidung, bis zur letzten Faser anpassbar.',
    startConfig:'KONFIGURATION STARTEN', exploreLab:'LABOR ERKUNDEN',
    systemModules:'SYSTEMMODULE', selectBase:'BASIS AUSWÄHLEN',
    customize:'ANPASSEN',
    competition:'WETTBEWERBE',
    competitionDesc:'Steigern Sie Ihren Status. Nehmen Sie an Challenges teil und verdienen Sie',
    competitionBullet1:'Nehmen Sie an zweiwöchentlichen Design-Challenges teil.',
    competitionBullet2:'Reichen Sie einzigartige Konfigurationen ein.',
    competitionBullet3:'Bleiben Sie aktiv und tragen Sie zur Community bei.',
    currentReward:'SAISONBELOHNUNG', joinChallenge:'TEILNEHMEN',
    masterProcess:'DEN PROZESS MEISTERN',
    processSub:'Vier einfache Schritte, um Ihre Vision zum Leben zu erwecken.',
    step1Label:'SCHRITT EINS', step1Title:'Basis wählen',
    step1Desc:'Wählen Sie aus unserer Kollektion: RUCKSÄCKE, GELDBÖRSEN, T-SHIRTS oder HOODIES.',
    step2Label:'SCHRITT ZWEI', step2Title:'Stil anpassen',
    step2Desc:'Materialien und Farbvarianten auswählen.',
    step3Label:'SCHRITT DREI', step3Title:'Personalisieren',
    step3Desc:'Text per Lasergravur oder Stickerei hinzufügen.',
    step4Label:'LETZTER SCHRITT', step4Title:'In den Warenkorb',
    step4Desc:'Bestellung aufgeben und Produktion starten.',
    startCreating:'ERSTELLEN STARTEN', leadTime:'DURCHSCHNITTLICHE LIEFERZEIT: 14 TAGE',
    materialSystem:'MATERIAL', colorProfile:'FARBE',
    closureHardware:'VERSCHLUSS', laserEngraving:'TEXT AUF PRODUKT',
    textPlaceholder:'Text zum Drucken eingeben...', currentConfig:'AKTUELLE KONFIGURATION',
    addBackpack:'IN DEN WARENKORB', addWallet:'IN DEN WARENKORB',
    addTshirt:'IN DEN WARENKORB', addHoodie:'IN DEN WARENKORB',
    resetDesign:'DESIGN ZURÜCKSETZEN', selectDimensions:'GRÖSSE WÄHLEN',
    colorSpectrum:'FARBSPEKTRUM', digitalEmbossing:'TEXT AUF PRODUKT',
    fabricTech:'STOFF', personalization:'PERSONALISIERUNG',
    sizeGuide:'GRÖSSENTABELLE', subtotal:'ZWISCHENSUMME', msrp:'PREIS', estShip:'VERSAND',
    shellMaterial:'GEHÄUSEMATERIAL', capacityModules:'KAPAZITÄT',
    orderSummary:'BESTELLÜBERSICHT', shipping:'Versand', tax:'Steuer',
    total:'GESAMT', secure:'SICHERES VERSCHLÜSSELTES TERMINAL AKTIV',
    deliveryInfo:'LIEFERINFORMATIONEN', fullName:'VOLLSTÄNDIGER NAME',
    phoneNumber:'TELEFONNUMMER', deliveryLocation:'LIEFERADRESSE',
    mapHint:'Klicken Sie auf die Karte, um den Lieferort zu wählen',
    locationNone:'📍 Standort: nicht ausgewählt', sendOrder:'BESTELLUNG SENDEN',
    orderSuccess:'Bestellung erfolgreich!',
    successMsg:'Ihre Bestellung wurde aufgenommen und an Telegram gesendet.',
    needAssist:'Bestellung an Telegram gesendet!',
    assistDesc:'Wir haben Ihre Bestellung erhalten. Klicken Sie unten, um uns direkt zu schreiben.',
    openTg:'✈️ Telegram Bot öffnen', backHome:'Zur Startseite →',
    totalPaid:'GESAMT BEZAHLT', estimatedDelivery:'VORAUSSICHTLICHE LIEFERUNG',
    loyaltyProgram:'TREUEPROGRAMM',
    bonusTitle:'Ihr Synthetischer Wachstumskern.',
    bonusDesc:'Steigern Sie Ihren Status. Jede Bestellung bringt Sie näher an neue Levels.',
    currentBalance:'AKTUELLES GUTHABEN', activeBenefits:'Aktive Vorteile & Austausch',
    pointExchange:'PUNKTETAUSCH', tacticalCycle:'TAKTISCHER ZYKLUS',
    syncProgress:'Fortschritt sync →', neuralLogs:'Aktivitätsprotokoll',
    b2bEyebrow:'B2B LÖSUNGEN',
    b2bTitle:'Skalieren Sie Ihre Marke.', b2bAccent:'Wir übernehmen das Handwerk.',
    b2bSub:'Firmenware für Teams, Agenturen und Unternehmen.',
    getQuote:'ANGEBOT EINHOLEN', viewCatalog:'KATALOG',
    whyPackcraft:'WARUM PACKCRAFT B2B',
    chooseTier:'Wählen Sie Ihr Skalierungsniveau.',
    availableBulk:'Für Großbestellungen verfügbar.',
    products:'PRODUKTE', support:'SUPPORT', contact:'KONTAKT',
    warrantyInfo:'Garantie', leadTimes:'Lieferzeiten', techManuals:'Handbücher',
    configHelp:'Konfigurationshilfe', checkout:'KASSE',
  },
  FR: {
    home:'ACCUEIL', backpacks:'SACS À DOS', wallets:'PORTEFEUILLES',
    tshirts:'T-SHIRTS', hoodies:'SWEATS', bonus:'BONUS', business:'POUR ENTREPRISES',
    heroTitle:'Votre Vision,', heroAccent:'Notre Savoir-Faire',
    heroSub:'Équipements et vêtements de précision, personnalisables jusqu\'à la dernière fibre.',
    startConfig:'COMMENCER', exploreLab:'EXPLORER LE LAB',
    systemModules:'MODULES SYSTÈME', selectBase:'CHOISIR UNE BASE',
    customize:'PERSONNALISER',
    competition:'CONCOURS',
    competitionDesc:'Boostez votre statut. Participez aux défis et gagnez',
    competitionBullet1:'Participez aux défis de design bihebdomadaires.',
    competitionBullet2:'Soumettez des configurations uniques au lab public.',
    competitionBullet3:'Restez actif et contribuez à la communauté.',
    currentReward:'RÉCOMPENSE DE SAISON', joinChallenge:'PARTICIPER',
    masterProcess:'MAÎTRISER LE PROCESSUS',
    processSub:'Quatre étapes simples pour donner vie à votre vision.',
    step1Label:'ÉTAPE UNE', step1Title:'Choisissez votre base',
    step1Desc:'Choisissez dans notre collection : SACS À DOS, PORTEFEUILLES, T-SHIRTS ou SWEATS.',
    step2Label:'ÉTAPE DEUX', step2Title:'Personnalisez votre style',
    step2Desc:'Sélectionnez les matériaux et les coloris.',
    step3Label:'ÉTAPE TROIS', step3Title:'Personnalisez',
    step3Desc:'Ajoutez du texte par gravure laser ou broderie.',
    step4Label:'ÉTAPE FINALE', step4Title:'Ajouter au panier',
    step4Desc:'Finalisez votre commande et lancez la production.',
    startCreating:'COMMENCER À CRÉER', leadTime:'DÉLAI MOYEN : 14 JOURS',
    materialSystem:'MATÉRIAU', colorProfile:'COULEUR',
    closureHardware:'FERMETURE', laserEngraving:'TEXTE SUR PRODUIT',
    textPlaceholder:'Tapez le texte à imprimer...', currentConfig:'CONFIGURATION ACTUELLE',
    addBackpack:'AJOUTER AU PANIER', addWallet:'AJOUTER AU PANIER',
    addTshirt:'AJOUTER AU PANIER', addHoodie:'AJOUTER AU PANIER',
    resetDesign:'RÉINITIALISER', selectDimensions:'CHOISIR LA TAILLE',
    colorSpectrum:'SPECTRE DE COULEURS', digitalEmbossing:'TEXTE SUR PRODUIT',
    fabricTech:'TISSU', personalization:'PERSONNALISATION',
    sizeGuide:'GUIDE DES TAILLES', subtotal:'SOUS-TOTAL', msrp:'PRIX', estShip:'LIVRAISON',
    shellMaterial:'MATÉRIAU DE COQUE', capacityModules:'CAPACITÉ',
    orderSummary:'RÉCAPITULATIF', shipping:'Livraison', tax:'Taxe',
    total:'TOTAL', secure:'TERMINAL SÉCURISÉ ET CHIFFRÉ ACTIF',
    deliveryInfo:'INFORMATIONS DE LIVRAISON', fullName:'NOM COMPLET',
    phoneNumber:'NUMÉRO DE TÉLÉPHONE', deliveryLocation:'ADRESSE DE LIVRAISON',
    mapHint:'Cliquez sur la carte pour choisir le lieu de livraison',
    locationNone:'📍 Lieu : non sélectionné', sendOrder:'ENVOYER LA COMMANDE',
    orderSuccess:'Commande réussie !',
    successMsg:'Votre commande a été reçue et envoyée sur Telegram.',
    needAssist:'Commande envoyée sur Telegram !',
    assistDesc:'Nous avons reçu votre commande. Cliquez ci-dessous pour nous écrire directement.',
    openTg:'✈️ Ouvrir le bot Telegram', backHome:'Retour à l\'accueil →',
    totalPaid:'TOTAL PAYÉ', estimatedDelivery:'LIVRAISON ESTIMÉE',
    loyaltyProgram:'PROGRAMME DE FIDÉLITÉ',
    bonusTitle:'Votre Noyau de Croissance Synthétique.',
    bonusDesc:'Améliorez votre statut. Chaque commande vous rapproche de nouveaux niveaux.',
    currentBalance:'SOLDE ACTUEL', activeBenefits:'Avantages actifs & échange',
    pointExchange:'ÉCHANGE DE POINTS', tacticalCycle:'CYCLE TACTIQUE',
    syncProgress:'Synchroniser →', neuralLogs:'Journal d\'activité',
    b2bEyebrow:'SOLUTIONS B2B',
    b2bTitle:'Faites Évoluer Votre Marque.', b2bAccent:'Nous Gérons le Reste.',
    b2bSub:'Équipements corporate pour équipes, agences et entreprises.',
    getQuote:'OBTENIR UN DEVIS', viewCatalog:'CATALOGUE',
    whyPackcraft:'POURQUOI PACKCRAFT B2B',
    chooseTier:'Choisissez votre niveau de déploiement.',
    availableBulk:'Disponible en commandes en gros.',
    products:'PRODUITS', support:'SUPPORT', contact:'CONTACT',
    warrantyInfo:'Garantie', leadTimes:'Délais', techManuals:'Manuels',
    configHelp:'Aide à la configuration', checkout:'COMMANDER',
  },
  ZH: {
    home:'首页', backpacks:'背包', wallets:'钱包', tshirts:'T恤',
    hoodies:'卫衣', bonus:'奖励', business:'商业合作',
    heroTitle:'您的愿景，', heroAccent:'我们的工艺',
    heroSub:'精密制造的背包和服装，可定制到最后一根纤维。',
    startConfig:'开始配置', exploreLab:'探索实验室',
    systemModules:'系统模块', selectBase:'选择基础产品开始定制',
    customize:'定制',
    competition:'比赛',
    competitionDesc:'提升您的地位。参加生态系统挑战并赚取',
    competitionBullet1:'参加两周一次的设计挑战。',
    competitionBullet2:'向公共实验室提交独特配置。',
    competitionBullet3:'保持活跃并为社区做贡献。',
    currentReward:'本季奖励', joinChallenge:'参加挑战',
    masterProcess:'掌握流程',
    processSub:'四个简单步骤，将您的愿景变为现实。',
    step1Label:'第一步', step1Title:'选择基础',
    step1Desc:'从我们的核心系列中选择：背包、钱包、T恤或卫衣。',
    step2Label:'第二步', step2Title:'定制风格',
    step2Desc:'选择高性能材料和战术配色。',
    step3Label:'第三步', step3Title:'个性化',
    step3Desc:'通过激光雕刻或刺绣添加自定义文字。',
    step4Label:'最后一步', step4Title:'加入购物车',
    step4Desc:'确认配置并启动生产流程。',
    startCreating:'开始创建', leadTime:'平均交货时间：14天',
    materialSystem:'材料系统', colorProfile:'颜色',
    closureHardware:'扣件', laserEngraving:'产品上的文字',
    textPlaceholder:'输入要打印的文字...', currentConfig:'当前配置',
    addBackpack:'加入购物车', addWallet:'加入购物车',
    addTshirt:'加入购物车', addHoodie:'加入购物车',
    resetDesign:'重置设计', selectDimensions:'选择尺码',
    colorSpectrum:'颜色系列', digitalEmbossing:'产品上的文字',
    fabricTech:'面料技术', personalization:'个性化',
    sizeGuide:'尺码指南', subtotal:'小计', msrp:'价格', estShip:'运输',
    shellMaterial:'外壳材料', capacityModules:'容量',
    orderSummary:'订单摘要', shipping:'运费', tax:'税费',
    total:'总计', secure:'安全加密终端协议已激活',
    deliveryInfo:'配送信息', fullName:'全名',
    phoneNumber:'电话号码', deliveryLocation:'配送地址',
    mapHint:'点击地图选择配送地点',
    locationNone:'📍 地点：未选择', sendOrder:'发送订单',
    orderSuccess:'订单成功！',
    successMsg:'您的订单已收到并发送至Telegram。我们的客服将尽快联系您。',
    needAssist:'订单已发送至Telegram！',
    assistDesc:'我们已收到您的订单。点击下方直接联系我们。',
    openTg:'✈️ 打开Telegram机器人', backHome:'返回首页 →',
    totalPaid:'已付总额', estimatedDelivery:'预计配送时间',
    loyaltyProgram:'神经忠诚计划',
    bonusTitle:'您的合成成长核心。',
    bonusDesc:'通过神经参与提升您的装备获取。每一笔订单都在拉近硬件与潜力的距离。',
    currentBalance:'当前余额', activeBenefits:'活跃权益与兑换',
    pointExchange:'积分兑换', tacticalCycle:'战术周期',
    syncProgress:'同步进度 →', neuralLogs:'神经活动记录',
    b2bEyebrow:'B2B解决方案',
    b2bTitle:'扩展您的品牌。', b2bAccent:'我们负责工艺。',
    b2bSub:'为团队、代理机构和企业提供定制装备。',
    getQuote:'获取报价', viewCatalog:'查看目录',
    whyPackcraft:'为什么选择PACKCRAFT B2B',
    chooseTier:'选择您的规模级别。',
    availableBulk:'可批量定制。',
    products:'产品', support:'支持', contact:'联系',
    warrantyInfo:'保修信息', leadTimes:'交货时间', techManuals:'技术手册',
    configHelp:'配置帮助', checkout:'结账',
  }
};

let currentLang = 'EN';

const langBtn      = document.getElementById('lang-switcher')?.querySelector('.lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

langBtn?.addEventListener('click', e => {
  e.stopPropagation();
  langDropdown?.classList.toggle('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('#lang-switcher')) langDropdown?.classList.remove('open');
});

document.querySelectorAll('.lang-option').forEach(opt => {
  opt.addEventListener('click', e => {
    e.stopPropagation();
    currentLang = opt.dataset.lang;
    document.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    if (langBtn) langBtn.innerHTML = `🌐 ${currentLang}`;
    langDropdown?.classList.remove('open');
    applyLanguage(currentLang);
  });
});

function setText(sel, text) {
  document.querySelectorAll(sel).forEach(el => { if (el) el.textContent = text; });
}
function setPlaceholder(id, text) {
  const el = document.getElementById(id);
  if (el) el.placeholder = text;
}
function setHtml(sel, html) {
  document.querySelectorAll(sel).forEach(el => { if (el) el.innerHTML = html; });
}

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.EN;

  // ── Nav ──
  document.querySelectorAll('.nav-link .nav-label').forEach(label => {
    const page = label.closest('[data-page]')?.dataset.page;
    if (page && t[page]) label.textContent = t[page];
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    const page = link.dataset.page;
    if (page && t[page]) link.textContent = t[page];
  });
  document.querySelectorAll('.bottom-nav-label').forEach(label => {
    const page = label.closest('[data-page]')?.dataset.page;
    if (page && t[page]) label.textContent = t[page].split(' ')[0];
  });

  // ── Hero ──
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.innerHTML = `${t.heroTitle}<br><span class="hero-title-accent">${t.heroAccent}</span>`;
  setText('.hero-sub', t.heroSub);
  document.querySelectorAll('.btn-primary[data-page="backpacks"]').forEach(b => {
    if (!b.closest('.config-panel') && !b.closest('.biz-catalog-card') && !b.closest('.biz-tier-card') && !b.closest('.process-cta') && !b.closest('.mobile-menu-footer')) {
      b.textContent = t.startConfig;
    }
  });
  const exploreBtn = document.getElementById('explore-lab-btn');
  if (exploreBtn) exploreBtn.textContent = t.exploreLab;

  // ── Modules ──
  setText('.section-title', t.systemModules);
  setText('.section-sub', t.selectBase);
  document.querySelectorAll('.btn-customize').forEach(b => b.textContent = t.customize);

  // ── Competition ──
  setText('.competition-title', t.competition);
  const compDesc = document.querySelector('.competition-desc');
  if (compDesc) compDesc.innerHTML = `${t.competitionDesc} <span class="competition-highlight">NEON_POINTS</span>`;
  const bullets = document.querySelectorAll('.competition-list li');
  const bulletTexts = [t.competitionBullet1, t.competitionBullet2, t.competitionBullet3];
  bullets.forEach((li, i) => {
    const bullet = li.querySelector('.comp-bullet');
    if (bullet) li.innerHTML = `<span class="comp-bullet">${bullet.textContent}</span> ${bulletTexts[i]}`;
  });
  setText('.reward-label', t.currentReward);
  const joinBtn = document.getElementById('join-challenge-btn');
  if (joinBtn) joinBtn.textContent = t.joinChallenge;

  // ── Process ──
  setText('.process-big-title', t.masterProcess);
  setText('.process-sub', t.processSub);
  const stepLabels = document.querySelectorAll('.step-label');
  const stepTitles = document.querySelectorAll('.step-title');
  const stepDescs  = document.querySelectorAll('.step-desc');
  const labelKeys  = ['step1Label','step2Label','step3Label','step4Label'];
  const titleKeys  = ['step1Title','step2Title','step3Title','step4Title'];
  const descKeys   = ['step1Desc','step2Desc','step3Desc','step4Desc'];
  stepLabels.forEach((el, i) => { if (labelKeys[i]) el.textContent = t[labelKeys[i]]; });
  stepTitles.forEach((el, i) => { if (titleKeys[i]) el.textContent = t[titleKeys[i]]; });
  stepDescs.forEach((el,  i) => { if (descKeys[i])  el.textContent = t[descKeys[i]]; });
  document.querySelectorAll('.process-cta .btn-primary').forEach(b => b.textContent = t.startCreating);
  setText('.lead-time', t.leadTime);

  // ── Configurator labels ──
  document.querySelectorAll('.config-label').forEach(label => {
    const txt = label.textContent.trim().toUpperCase();
    const map = {
      'MATERIAL SYSTEM': t.materialSystem, 'SHELL MATERIAL': t.shellMaterial,
      'COLOR PROFILE': t.colorProfile, 'COLOR SPECTRUM': t.colorSpectrum,
      'CLOSURE HARDWARE': t.closureHardware, 'CAPACITY MODULES': t.capacityModules,
      'LASER ENGRAVING': t.laserEngraving, 'TEXT ON PRODUCT': t.laserEngraving,
      'DIGITAL EMBOSSING': t.digitalEmbossing,
      'FABRIC TECHNOLOGY': t.fabricTech, 'PERSONALIZATION': t.personalization,
      'SIZE GUIDE': t.sizeGuide, 'SELECT DIMENSIONS': t.selectDimensions,
      'CURRENT CONFIGURATION': t.currentConfig,
      'MSRP': t.msrp, 'EST. SHIP': t.estShip, 'SUBTOTAL': t.subtotal,
    };
    if (map[txt]) label.textContent = map[txt];
  });

  // ── Add to cart buttons ──
  const btnMap = {
    'bp-add': t.addBackpack, 'wl-add': t.addWallet,
    'ts-add': t.addTshirt,  'hd-add': t.addHoodie,
    'pay-btn': t.sendOrder, 'toast-checkout': t.checkout,
  };
  Object.entries(btnMap).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  document.querySelectorAll('.btn-reset').forEach(b => b.textContent = t.resetDesign);

  // ── Text inputs placeholders ──
  document.querySelectorAll('.text-live-input').forEach(inp => {
    inp.placeholder = t.textPlaceholder;
  });

  // ── Checkout ──
  document.querySelectorAll('.checkout-section-title').forEach(el => {
    if (el.textContent.includes('ORDER') || el.textContent.includes('ЗАКАЗ') || el.textContent.includes('BUYURTMA') || el.textContent.includes('BESTELLUNG') || el.textContent.includes('訂單') || el.textContent.includes('RÉCAPITULATIF')) {
      el.textContent = t.orderSummary;
    }
    if (el.textContent.includes('DELIVERY') || el.textContent.includes('ДОСТАВК') || el.textContent.includes('YETKAZIB') || el.textContent.includes('LIVRAISON') || el.textContent.includes('LIEFERINFORMATION') || el.textContent.includes('配送')) {
      el.textContent = t.deliveryInfo;
    }
  });
  document.querySelectorAll('.form-label').forEach(label => {
    const txt = label.textContent.trim().toUpperCase();
    if (txt === 'FULL NAME' || txt === 'ПОЛНОЕ ИМЯ' || txt === 'TO\'LIQ ISM' || txt === 'VOLLSTÄNDIGER NAME' || txt === 'NOM COMPLET' || txt === '全名') label.textContent = t.fullName;
    if (txt === 'PHONE NUMBER' || txt === 'НОМЕР ТЕЛЕФОНА' || txt === 'TELEFON RAQAMI' || txt === 'TELEFONNUMMER' || txt === 'NUMÉRO DE TÉLÉPHONE' || txt === '电话号码') label.textContent = t.phoneNumber;
    if (txt.includes('DELIVERY LOCATION') || txt.includes('АДРЕС') || txt.includes('JOYI') || txt.includes('LIEFERADRESSE') || txt.includes('LIVRAISON') || txt.includes('配送地址')) label.textContent = t.deliveryLocation;
  });
  document.querySelectorAll('.form-hint').forEach(el => el.textContent = t.mapHint);
  const locDisp = document.getElementById('location-display');
  if (locDisp && !document.getElementById('co-latitude')?.value) locDisp.textContent = t.locationNone;
  document.querySelectorAll('.subtotal-row span:first-child').forEach(el => {
    if (el.textContent.trim() === 'Shipping' || el.textContent.trim() === 'Доставка' || el.textContent.trim() === 'Versand' || el.textContent.trim() === 'Livraison' || el.textContent.trim() === '运费' || el.textContent.trim() === 'Yetkazib berish') el.textContent = t.shipping;
    if (el.textContent.trim() === 'Tax' || el.textContent.trim() === 'Налог' || el.textContent.trim() === 'Soliq' || el.textContent.trim() === 'Steuer' || el.textContent.trim() === 'Taxe' || el.textContent.trim() === '税费') el.textContent = t.tax;
  });
  setText('.secure-badge span:last-child', t.secure);
  const checkTotal = document.querySelector('.checkout-total span:first-child');
  if (checkTotal) checkTotal.textContent = t.total;

  // ── Success ──
  setText('.success-title', t.orderSuccess);
  setText('.success-msg', t.successMsg);
  document.querySelectorAll('.success-support strong').forEach(el => el.textContent = t.needAssist);
  document.querySelectorAll('.success-support p').forEach(el => el.textContent = t.assistDesc);
  document.querySelectorAll('.tg-success-btn').forEach(el => el.innerHTML = t.openTg);
  document.querySelectorAll('.btn-ghost-lg[data-page="home"]').forEach(el => el.textContent = t.backHome);
  document.querySelectorAll('.config-price-label').forEach(el => {
    if (el.textContent.trim() === 'TOTAL PAID' || el.textContent.trim() === 'ИТОГО ОПЛАЧЕНО') el.textContent = t.totalPaid;
    if (el.textContent.trim() === 'ESTIMATED DELIVERY' || el.textContent.trim() === 'ОЖИДАЕМАЯ ДОСТАВКА') el.textContent = t.estimatedDelivery;
  });

  // ── Bonus ──
  setText('.bonus-eyebrow', t.loyaltyProgram);
  setText('.bonus-title', t.bonusTitle);
  setText('.bonus-desc', t.bonusDesc);
  document.querySelectorAll('.config-price-label').forEach(el => {
    if (el.textContent.includes('CURRENT BALANCE') || el.textContent.includes('ТЕКУЩИЙ БАЛАНС') || el.textContent.includes('JORIY BALANS') || el.textContent.includes('AKTUELLES') || el.textContent.includes('SOLDE') || el.textContent.includes('当前余额')) el.textContent = t.currentBalance;
  });
  setText('.bonus-section-title', t.activeBenefits);
  document.querySelectorAll('.tactical-card .btn-primary').forEach(b => b.textContent = t.syncProgress);
  setText('.tactical-badge', t.tacticalCycle);
  document.querySelectorAll('.config-price-label').forEach(el => {
    if (el.textContent.trim() === 'POINT EXCHANGE' || el.textContent.trim() === 'ОБМЕН БАЛЛОВ') el.textContent = t.pointExchange;
  });

  // ── Business ──
  setText('.biz-eyebrow', t.b2bEyebrow);
  const bizTitle = document.querySelector('.biz-title');
  if (bizTitle) bizTitle.innerHTML = `${t.b2bTitle}<br><span class="biz-title-accent">${t.b2bAccent}</span>`;
  setText('.biz-sub', t.b2bSub);
  const quoteBtn = document.getElementById('biz-contact-btn');
  if (quoteBtn) quoteBtn.textContent = t.getQuote;
  const catBtn = document.getElementById('biz-catalog-btn');
  if (catBtn) catBtn.textContent = t.viewCatalog;
  setText('.biz-section-title', t.chooseTier);

  // ── Footer ──
  document.querySelectorAll('.footer-col h4').forEach(h4 => {
    const txt = h4.textContent.trim().toUpperCase();
    if (txt === 'PRODUCTS' || txt === 'ПРОДУКТЫ' || txt === 'MAHSULOTLAR' || txt === 'PRODUKTE' || txt === 'PRODUITS' || txt === '产品') h4.textContent = t.products;
    if (txt === 'SUPPORT' || txt === 'ПОДДЕРЖКА' || txt === 'YORDAM') h4.textContent = t.support;
    if (txt === 'CONTACT' || txt === 'КОНТАКТЫ' || txt === 'ALOQA' || txt === 'KONTAKT' || txt === '联系') h4.textContent = t.contact;
  });
}

// ─────────────────────────────────────────────
// NAV CART COUNT SYNC
// ─────────────────────────────────────────────
function updateCartBadge() {
  const badge    = document.getElementById('cart-badge');
  const count    = document.getElementById('cart-count');
  const navCount = document.getElementById('nav-cart-count');
  if (badge)    badge.style.display  = cart.length > 0 ? 'block' : 'none';
  if (count)    count.textContent    = cart.length;
  if (navCount) navCount.textContent = cart.length;
}

// ─────────────────────────────────────────────
// PAGE ROUTER
// ─────────────────────────────────────────────
const PAGES = ['home','backpacks','wallets','tshirts','hoodies',
               'checkout','success','bonus','business'];

function showPage(name) {
  const target = document.getElementById(`page-${name}`);
  if (!target) return;
  PAGES.forEach(p => {
    const el = document.getElementById(`page-${p}`);
    if (el) el.classList.remove('active');
  });
  target.classList.add('active');

  // Sync top nav links
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === name);
  });

  // Sync bottom mobile nav
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === name);
  });

  window.scrollTo(0, 0);
  if (name === 'checkout') { renderCheckout(); setTimeout(initMap, 250); }
}

// ─────────────────────────────────────────────
// EXPLORE THE LAB — scroll to process section on home
// ─────────────────────────────────────────────
document.getElementById('explore-lab-btn')?.addEventListener('click', e => {
  e.stopPropagation();
  // Make sure we're on home page first
  showPage('home');
  setTimeout(() => {
    document.getElementById('home-process-section')?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
});

// Also handle "START CREATING" inside the process section
document.querySelectorAll('.process-cta .btn-primary').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    showPage('backpacks');
  });
});

// ─────────────────────────────────────────────
// GLOBAL DATA-PAGE DELEGATION
// Skip: upload inputs, resize panel buttons, exchange/tier btns handled separately
// ─────────────────────────────────────────────
document.addEventListener('click', e => {
  // Never hijack file inputs or panel-internal buttons
  if (e.target.closest('.upload-file-input'))  return;
  if (e.target.closest('.resize-action-btn'))  return;
  if (e.target.closest('.img-resize-panel input')) return;
  if (e.target.closest('.exchange-btn'))       return;
  if (e.target.closest('.biz-tier-btn'))       return;
  if (e.target.closest('#biz-submit-btn'))     return;
  if (e.target.closest('#biz-contact-btn'))    return;
  if (e.target.closest('#biz-catalog-btn'))    return;
  if (e.target.closest('#join-challenge-btn')) return;
  if (e.target.closest('.tactical-card .btn-primary')) return;

  const el = e.target.closest('[data-page]');
  if (!el) return;
  const page = el.dataset.page;
  if (page === 'process') return; // process lives inside home now
  if (page === 'checkout') { renderCheckout(); showPage('checkout'); return; }
  showPage(page);
});

// ─────────────────────────────────────────────
// FOOTER / NAV PLAIN LINKS  (prevent scroll jump)
// ─────────────────────────────────────────────
document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const txt = a.textContent.trim();
    const map = { Backpacks:'backpacks', Wallets:'wallets', 'T-Shirts':'tshirts', Hoodies:'hoodies' };
    if (map[txt]) showPage(map[txt]);
    else showToast(`${txt} — coming soon!`);
  });
});

// ─────────────────────────────────────────────
// CONFIGURATOR — Option cards
// ─────────────────────────────────────────────
document.querySelectorAll('.option-cards').forEach(group => {
  group.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      group.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
});

// ─────────────────────────────────────────────
// CONFIGURATOR — Color swatches
// ─────────────────────────────────────────────
document.querySelectorAll('.color-selector').forEach(sel => {
  sel.querySelectorAll('.color-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      sel.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      sw.classList.add('selected');
      sw.animate([{transform:'scale(1.3)'},{transform:'scale(1)'}],{duration:200});
    });
  });
});

// ─────────────────────────────────────────────
// CONFIGURATOR — Tag selectors
// ─────────────────────────────────────────────
document.querySelectorAll('.tag-selector').forEach(group => {
  group.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      group.querySelectorAll('.tag').forEach(t => t.classList.remove('selected'));
      tag.classList.add('selected');
    });
  });
});

// ─────────────────────────────────────────────
// CONFIGURATOR — Size buttons
// ─────────────────────────────────────────────
document.querySelectorAll('.size-selector').forEach(group => {
  group.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
});

// ─────────────────────────────────────────────
// CONFIGURATOR — Preview controls (zoom/rotate/flip)
// ─────────────────────────────────────────────
const previewStates = {};
document.querySelectorAll('.config-preview').forEach((preview, idx) => {
  previewStates[idx] = { zoom:1, rotate:0, flipX:false };
  const img  = preview.querySelector('.product-img');
  const btns = preview.querySelectorAll('.ctrl-btn');
  if (!img || !btns.length) return;
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const st = previewStates[idx];
      if      (i === 0) { st.zoom   = st.zoom === 1 ? 1.22 : 1; }
      else if (i === 1) { st.rotate = (st.rotate + 90) % 360; }
      else              { st.flipX  = !st.flipX; }
      img.style.transition = 'transform .35s ease';
      img.style.transform  = `scale(${st.flipX ? -st.zoom : st.zoom}, ${st.zoom}) rotate(${st.rotate}deg)`;
    });
  });
});

// ─────────────────────────────────────────────
// CONFIGURATOR — Live prices
// ─────────────────────────────────────────────
document.querySelectorAll('#page-backpacks .option-card').forEach((c,i) =>
  c.addEventListener('click', () => {
    const el = document.getElementById('bp-price');
    if (el) el.textContent = ['$495.00','$395.00'][i] ?? '$495.00';
  }));

document.querySelectorAll('#page-wallets .option-card').forEach((c,i) =>
  c.addEventListener('click', () => {
    const el = document.getElementById('wl-price');
    if (el) el.textContent = ['$145.00','$195.00'][i] ?? '$145.00';
  }));

document.querySelectorAll('#page-hoodies .option-card').forEach((c,i) =>
  c.addEventListener('click', () => {
    const v = ['$24.00','$34.00'][i] ?? '$24.00';
    const p = document.getElementById('hd-price'), s = document.getElementById('hd-sub');
    if (p) p.textContent = v;
    if (s) s.textContent = v;
  }));

document.querySelectorAll('#page-tshirts .size-btn').forEach((b,i) =>
  b.addEventListener('click', () => {
    const el = document.getElementById('ts-price');
    if (el) el.textContent = ['$12.00','$14.00','$14.00','$16.00'][i] ?? '$14.00';
  }));

// ─────────────────────────────────────────────
// CONFIGURATOR — Reset Design
// ─────────────────────────────────────────────
document.querySelectorAll('.btn-reset').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.closest('.config-panel');
    if (!panel) return;
    panel.querySelectorAll('.option-cards .option-card').forEach((c,i) => c.classList.toggle('selected', i===0));
    panel.querySelectorAll('.color-selector .color-swatch').forEach((c,i) => c.classList.toggle('selected', i===0));
    panel.querySelectorAll('.size-selector .size-btn').forEach((b,i) => b.classList.toggle('selected', i===1));
    panel.querySelectorAll('.tag-selector .tag').forEach((t,i) => t.classList.toggle('selected', i===0));
    panel.querySelectorAll('.config-input').forEach(inp => inp.value = '');
    const p = document.getElementById('hd-price'), s = document.getElementById('hd-sub');
    if (p) p.textContent = '$24.00';
    if (s) s.textContent = '$24.00';
    const img = btn.closest('.config-layout')?.querySelector('.product-img');
    if (img) img.style.transform = '';
    showToast('Design reset to defaults.');
  });
});

// ─────────────────────────────────────────────
// CART — Add to cart buttons
// ─────────────────────────────────────────────
function addToCart(item) {
  cart.push(item);
  updateCartBadge();
  showToast(`${item.name} added to cart!`);
}

document.getElementById('bp-add')?.addEventListener('click', () => {
  const mat   = document.querySelector('#page-backpacks .option-card.selected strong')?.textContent || 'DYNEEMA';
  const price = parseFloat(document.getElementById('bp-price')?.textContent.replace('$','')) || 495;
  addToCart({ name:'NOCTURNE_01 Backpack', detail:mat, price, emoji:'🎒' });
});

document.getElementById('wl-add')?.addEventListener('click', () => {
  const mat   = document.querySelector('#page-wallets .option-card.selected strong')?.textContent || 'CARBON FIBER';
  const price = parseFloat(document.getElementById('wl-price')?.textContent.replace('$','')) || 145;
  addToCart({ name:'CIPHER_W1 Wallet', detail:mat, price, emoji:'👜' });
});

document.getElementById('ts-add')?.addEventListener('click', () => {
  const size  = document.querySelector('#page-tshirts .size-btn.selected')?.textContent || 'M';
  const price = parseFloat(document.getElementById('ts-price')?.textContent.replace('$','')) || 14;
  addToCart({ name:'NT-01 CHASSIS Tshirt', detail:`SIZE: ${size}`, price, emoji:'👕' });
});

document.getElementById('hd-add')?.addEventListener('click', () => {
  const fab   = document.querySelector('#page-hoodies .option-card.selected strong')?.textContent || 'Premium Fleece';
  const price = parseFloat(document.getElementById('hd-price')?.textContent.replace('$','')) || 24;
  addToCart({ name:'NOCTURNE_H1 Hoodie', detail:fab, price, emoji:'🧥' });
});

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
const toastEl  = document.getElementById('cart-toast');
const toastMsg = document.getElementById('toast-msg');
let toastTimer = null;

function showToast(msg) {
  toastMsg.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3500);
}

document.getElementById('toast-checkout')?.addEventListener('click', () => {
  toastEl.classList.remove('show');
  showPage('checkout');
});

// ─────────────────────────────────────────────
// CART BADGE — handled above in updateCartBadge
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// CHECKOUT — Render
// ─────────────────────────────────────────────
function renderCheckout() {
  const itemsEl    = document.getElementById('checkout-items');
  const subtotalEl = document.getElementById('co-subtotal');
  const taxEl      = document.getElementById('co-tax');
  const totalEl    = document.getElementById('co-total');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div style="text-align:center;padding:2rem 0">
        <div style="font-size:2rem;margin-bottom:.5rem">🛒</div>
        <p style="color:var(--muted);font-size:.8rem;font-family:var(--font-mono);margin-bottom:1rem">Cart is empty.</p>
        <button class="btn-primary" style="font-size:.65rem" data-page="backpacks">SHOP NOW</button>
      </div>`;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (taxEl)      taxEl.textContent      = '$0.00';
    if (totalEl)    totalEl.textContent    = '$0.00';
    return;
  }

  itemsEl.innerHTML = cart.map((item, idx) => `
    <div class="checkout-item">
      <div class="checkout-item-thumb">${item.emoji}</div>
      <div class="checkout-item-info">
        <div class="checkout-item-name">${item.name}</div>
        <div class="checkout-item-qty">${item.detail} · QTY: 1</div>
      </div>
      <div style="display:flex;align-items:center;gap:.4rem">
        <div class="checkout-item-price">$${item.price.toFixed(2)}</div>
        <button class="remove-item-btn" data-idx="${idx}" title="Remove">✕</button>
      </div>
    </div>`).join('');

  itemsEl.querySelectorAll('.remove-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.splice(parseInt(btn.dataset.idx), 1);
      updateCartBadge();
      renderCheckout();
    });
  });

  const subtotal = cart.reduce((s,i) => s + i.price, 0);
  const tax      = subtotal * 0.08;
  const total    = Math.max(0, subtotal + tax - bonusDiscount);
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (taxEl)      taxEl.textContent      = `$${tax.toFixed(2)}`;
  if (totalEl)    totalEl.textContent    = `$${total.toFixed(2)}`;

  // Bonus discount row
  let discRow = document.getElementById('co-discount-row');
  if (bonusDiscount > 0) {
    if (!discRow) {
      discRow = document.createElement('div');
      discRow.id = 'co-discount-row';
      discRow.className = 'subtotal-row';
      discRow.innerHTML = `<span style="color:var(--green)">Bonus Discount</span><span style="color:var(--green)" id="co-disc-val"></span>`;
      document.querySelector('.checkout-subtotals')?.appendChild(discRow);
    }
    const dv = document.getElementById('co-disc-val');
    if (dv) dv.textContent = `-$${bonusDiscount.toFixed(2)}`;
  } else if (discRow) {
    discRow.remove();
  }
}

// ─────────────────────────────────────────────
// MAP — Checkout delivery
// ─────────────────────────────────────────────
function initMap() {
  if (map) { map.invalidateSize(); return; }
  const container = document.getElementById('map-container');
  if (!container || !window.L) return;

  map = L.map('map-container').setView([41.2995, 69.2401], 11);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CARTO', maxZoom: 19
  }).addTo(map);

  const greenIcon = L.divIcon({
    html: `<div style="width:16px;height:16px;background:#2dff6e;border-radius:50%;border:2px solid #fff;box-shadow:0 0 8px rgba(45,255,110,.7)"></div>`,
    iconSize:[16,16], iconAnchor:[8,8], className:''
  });

  map.on('click', e => {
    const { lat, lng } = e.latlng;
    if (mapMarker) map.removeLayer(mapMarker);
    mapMarker = L.marker([lat, lng], { icon: greenIcon }).addTo(map);
    const latEl  = document.getElementById('co-latitude');
    const lngEl  = document.getElementById('co-longitude');
    const locEl  = document.getElementById('co-location-text');
    const dispEl = document.getElementById('location-display');
    if (latEl)  latEl.value  = lat.toFixed(6);
    if (lngEl)  lngEl.value  = lng.toFixed(6);
    const txt = `${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E`;
    if (locEl)  locEl.value  = txt;
    if (dispEl) { dispEl.textContent = `📍 ${txt}`; dispEl.style.color = 'var(--green)'; }
  });

  map.invalidateSize();
}

// ─────────────────────────────────────────────
// CHECKOUT — Send Order button
// ─────────────────────────────────────────────
document.getElementById('pay-btn')?.addEventListener('click', async () => {
  if (cart.length === 0) { showToast('Your cart is empty — add items first!'); return; }

  const nameEl  = document.getElementById('co-name');
  const phoneEl = document.getElementById('co-phone');
  const latEl   = document.getElementById('co-latitude');
  const locText = document.getElementById('co-location-text');
  let ok = true;

  [nameEl, phoneEl].forEach(inp => {
    if (!inp) return;
    const empty = !inp.value.trim();
    inp.style.borderColor = empty ? 'rgba(255,80,80,.6)' : '';
    if (empty) ok = false;
  });

  if (!latEl?.value) {
    const disp = document.getElementById('location-display');
    if (disp) { disp.style.color = 'rgba(255,80,80,.8)'; disp.textContent = '📍 Please tap the map to select your location'; }
    ok = false;
  }

  if (!ok) { showToast('Please fill all fields and select a location.'); return; }

  const snapshot = [...cart];
  const name     = nameEl?.value.trim() || '—';
  const phone    = phoneEl?.value.trim() || '—';
  const location = locText?.value || `${document.getElementById('co-latitude')?.value}, ${document.getElementById('co-longitude')?.value}`;
  const total    = snapshot.reduce((s, i) => s + i.price, 0);

  // ── Send to Telegram ──
  const TG_BOT    = 'https://t.me/contespackcraft_bot';
  const TG_API    = 'https://api.telegram.org/bot';
  // Replace these with your real token & chat id:
  const TG_TOKEN   = '8862827587:AAGVS-HykE7tp9gG2nKOI6AERzFUqWf4KkE';
  const TG_CHAT_ID = '912568809';

  const lines = snapshot.map(i => `• ${i.emoji} ${i.name} — $${i.price.toFixed(2)}`).join('\n');
  const msg = [
    '🛍 НОВЫЙ ЗАКАЗ — Packcraft!',
    '─────────────────',
    lines,
    '─────────────────',
    `💰 Итого: $${total.toFixed(2)}`,
    `👤 Имя: ${name}`,
    `📞 Телефон: ${phone}`,
    `📍 Локация: ${location}`,
    `🕐 Время: ${new Date().toLocaleString('ru-RU')}`
  ].join('\n');

  // Send message silently (don't block UI on failure)
  fetch(`${TG_API}${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text: msg })
  }).catch(() => {});

  // Clear cart & go to success
  cart.length   = 0;
  bonusDiscount = 0;
  bonusPoints  += 1250;
  updateCartBadge();
  renderSuccess(snapshot);
  showPage('success');

  // Toast pointing to Telegram
  setTimeout(() => {
    showToast('✅ Заказ отправлен в Telegram!');
  }, 600);
});

// ─────────────────────────────────────────────
// SUCCESS PAGE — Render
// ─────────────────────────────────────────────
function renderSuccess(snapshot) {
  const items      = document.getElementById('success-items');
  const subtotalEl = document.getElementById('su-subtotal');
  const totalEl    = document.getElementById('su-total');
  const orderEl    = document.querySelector('.success-order');
  if (!items) return;

  const displayCart = (snapshot?.length > 0) ? snapshot : [
    { name:'Custom Leather Backpack', detail:'QTY: 1', price:145, emoji:'🎒' },
    { name:'Minimalist Wallet',       detail:'QTY: 1', price:20,  emoji:'👜' }
  ];

  if (orderEl) orderEl.textContent = `ORDER #CYO-${Math.floor(100000 + Math.random()*900000)}`;

  items.innerHTML = displayCart.map(item => `
    <div class="checkout-item">
      <div class="checkout-item-thumb">${item.emoji}</div>
      <div class="checkout-item-info">
        <div class="checkout-item-name">${item.name}</div>
        <div class="checkout-item-qty">${item.detail}</div>
      </div>
      <div class="checkout-item-price">$${item.price.toFixed(2)}</div>
    </div>`).join('');

  const total = displayCart.reduce((s,i) => s + i.price, 0);
  if (subtotalEl) subtotalEl.textContent = `$${total.toFixed(2)}`;
  if (totalEl)    totalEl.textContent    = `$${total.toFixed(2)}`;
}

// ─────────────────────────────────────────────
// BONUS PAGE
// ─────────────────────────────────────────────
function renderBonusBalance() {
  const el = document.querySelector('.balance-num');
  if (el) el.innerHTML = `${bonusPoints.toLocaleString()} <span class="balance-unit">NP</span>`;
}

// Exchange buttons
document.querySelectorAll('.exchange-btn').forEach((btn, i) => {
  const costs = [100, 200], discounts = [5, 12];
  btn.addEventListener('click', e => {
    e.stopPropagation();
    if (bonusPoints < costs[i]) { showToast(`You need ${costs[i]} NP for this exchange.`); return; }
    bonusPoints   -= costs[i];
    bonusDiscount  = discounts[i];
    renderBonusBalance();
    btn.textContent = '✓'; btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = '⇄'; btn.style.color = ''; }, 2000);
    showToast(`$${discounts[i]} discount applied to your next order! ✓`);
  });
});

// Sync Progress (tactical cycle)
document.querySelectorAll('.tactical-card .btn-primary').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const dots   = document.querySelectorAll('.tdot');
    const filled = document.querySelectorAll('.tdot-filled').length;
    if (filled >= dots.length) {
      dots.forEach(d => d.classList.remove('tdot-filled'));
      bonusPoints += 250;
      renderBonusBalance();
      showToast('Cycle complete! +250 NP awarded 🎉');
    } else {
      dots[filled]?.classList.add('tdot-filled');
      showToast('Progress synced!');
    }
  });
});

// ─────────────────────────────────────────────
// IMAGE UPLOAD + RESIZE SYSTEM
// ─────────────────────────────────────────────
const imgState = {};
['backpack','wallet','tshirt','hoodie'].forEach(p => {
  imgState[p] = { size:55, x:0, y:0 };
});

function applyImgTransform(product) {
  const preview = document.getElementById(`preview-${product}`);
  if (!preview) return;
  const { size, x, y } = imgState[product];
  preview.style.width     = `${size}%`;
  preview.style.height    = 'auto';
  preview.style.top       = `calc(50% + ${y}%)`;
  preview.style.left      = `calc(50% + ${x}%)`;
  preview.style.transform = 'translate(-50%, -50%)';
  const sv = document.getElementById(`rv-size-${product}`);
  const xv = document.getElementById(`rv-x-${product}`);
  const yv = document.getElementById(`rv-y-${product}`);
  if (sv) sv.textContent = `${size}%`;
  if (xv) xv.textContent = x > 0 ? `+${x}` : `${x}`;
  if (yv) yv.textContent = y > 0 ? `+${y}` : `${y}`;
}

function loadImage(file, area, preview, product) {
  const reader = new FileReader();
  reader.onload = e => {
    preview.src = e.target.result;
    area.classList.add('has-image');
    imgState[product] = { size:55, x:0, y:0 };
    ['size','x','y'].forEach(axis => {
      const sl = document.getElementById(`rs-${axis}-${product}`);
      if (sl) sl.value = imgState[product][axis];
    });
    applyImgTransform(product);
  };
  reader.readAsDataURL(file);
}

function clearImage(areaEl, previewEl, fileEl, product) {
  areaEl.classList.remove('has-image');
  previewEl.src = '';
  fileEl.value  = '';
  imgState[product] = { size:55, x:0, y:0 };
}

['backpack','wallet','tshirt','hoodie'].forEach(product => {
  const areaEl    = document.getElementById(`upload-area-${product}`);
  const fileEl    = document.getElementById(`file-${product}`);
  const previewEl = document.getElementById(`preview-${product}`);
  const removeEl  = document.getElementById(`remove-${product}`);
  if (!areaEl || !fileEl || !previewEl || !removeEl) return;

  fileEl.addEventListener('change', () => {
    if (fileEl.files[0]) loadImage(fileEl.files[0], areaEl, previewEl, product);
  });

  areaEl.addEventListener('dragover',  e => { e.preventDefault(); areaEl.classList.add('drag-over'); });
  areaEl.addEventListener('dragleave', ()  => areaEl.classList.remove('drag-over'));
  areaEl.addEventListener('drop', e => {
    e.preventDefault(); areaEl.classList.remove('drag-over');
    const f = e.dataTransfer.files[0];
    if (f?.type.startsWith('image/')) loadImage(f, areaEl, previewEl, product);
  });

  removeEl.addEventListener('click', e => {
    e.stopPropagation(); e.preventDefault();
    clearImage(areaEl, previewEl, fileEl, product);
  });

  // Sliders
  ['size','x','y'].forEach(axis => {
    const slider = document.getElementById(`rs-${axis}-${product}`);
    if (!slider) return;
    slider.addEventListener('input', () => {
      imgState[product][axis] = parseInt(slider.value);
      applyImgTransform(product);
    });
  });

  // Panel buttons
  document.getElementById(`rb-change-${product}`)?.addEventListener('click', e => {
    e.stopPropagation(); fileEl.click();
  });
  document.getElementById(`rb-reset-${product}`)?.addEventListener('click', e => {
    e.stopPropagation();
    imgState[product] = { size:55, x:0, y:0 };
    ['size','x','y'].forEach(axis => {
      const sl = document.getElementById(`rs-${axis}-${product}`);
      if (sl) sl.value = imgState[product][axis];
    });
    applyImgTransform(product);
  });
  document.getElementById(`rb-del-${product}`)?.addEventListener('click', e => {
    e.stopPropagation();
    clearImage(areaEl, previewEl, fileEl, product);
  });
});

// ─────────────────────────────────────────────
// HAMBURGER MENU
// ─────────────────────────────────────────────
const menuBtn     = document.querySelector('.nav-menu-btn');
const mobileMenu  = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu()  { mobileMenu.classList.add('open');    menuOverlay.classList.add('open');    menuBtn.classList.add('active'); }
function closeMenu() { mobileMenu.classList.remove('open'); menuOverlay.classList.remove('open'); menuBtn.classList.remove('active'); }

menuBtn?.addEventListener('click', () => mobileMenu.classList.contains('open') ? closeMenu() : openMenu());
menuOverlay?.addEventListener('click', closeMenu);

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const page = link.dataset.page;
    closeMenu();
    setTimeout(() => showPage(page), 300);
  });
});

// ─────────────────────────────────────────────
// FOR BUSINESS PAGE
// ─────────────────────────────────────────────

// Hero CTA buttons
document.getElementById('biz-contact-btn')?.addEventListener('click', e => {
  e.stopPropagation();
  document.getElementById('biz-contact-section')?.scrollIntoView({ behavior:'smooth' });
});

document.getElementById('biz-catalog-btn')?.addEventListener('click', e => {
  e.stopPropagation();
  document.querySelector('.biz-catalog')?.scrollIntoView({ behavior:'smooth' });
});

// Pricing tier buttons — each navigates differently
document.querySelectorAll('.biz-tier-btn').forEach((btn, i) => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    if (i === 0) {
      // Starter — go to shop
      showPage('backpacks');
    } else if (i === 1) {
      // Professional — show toast + go to shop
      showToast('Starting Professional onboarding... 🚀');
      setTimeout(() => showPage('backpacks'), 800);
    } else {
      // Enterprise — scroll to contact form
      document.getElementById('biz-contact-section')?.scrollIntoView({ behavior:'smooth' });
    }
  });
});

// Business inquiry form — tag selector
document.getElementById('biz-order-size')?.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.getElementById('biz-order-size').querySelectorAll('.tag').forEach(t => t.classList.remove('selected'));
    tag.classList.add('selected');
  });
});

// Business inquiry — submit
document.getElementById('biz-submit-btn')?.addEventListener('click', e => {
  e.stopPropagation();
  const company = document.getElementById('biz-company');
  const name    = document.getElementById('biz-name');
  const email   = document.getElementById('biz-email');
  const msg     = document.getElementById('biz-message');
  let ok = true;

  [company, name, email].forEach(el => {
    if (!el) return;
    const empty = !el.value.trim();
    el.style.borderColor = empty ? 'rgba(255,80,80,.6)' : '';
    if (empty) ok = false;
  });

  if (!ok) { showToast('Please fill in all required fields.'); return; }

  const submitBtn = document.getElementById('biz-submit-btn');
  submitBtn.textContent = '✓ INQUIRY SENT!';
  submitBtn.style.background = '#1a9940';
  showToast('Inquiry sent! B2B team will contact you within 24h 🤝');
  [company, name, email, msg].forEach(el => { if (el) el.value = ''; });
  setTimeout(() => {
    submitBtn.textContent = 'SEND INQUIRY';
    submitBtn.style.background = '';
  }, 3000);
});

// ─────────────────────────────────────────────
// NAV LABEL EDITING  (double-click to rename)
// ─────────────────────────────────────────────
document.querySelectorAll('.nav-label').forEach(label => {
  // Add hint tooltip
  const hint = document.createElement('span');
  hint.className = 'nav-label-hint';
  hint.textContent = 'Double-click to rename';
  label.parentElement.style.position = 'relative';
  label.parentElement.appendChild(hint);

  label.addEventListener('dblclick', e => {
    e.preventDefault();
    e.stopPropagation();
    label.contentEditable = 'true';
    label.focus();
    // Select all text
    const range = document.createRange();
    range.selectNodeContents(label);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  });

  label.addEventListener('blur', () => {
    label.contentEditable = 'false';
    if (!label.textContent.trim()) label.textContent = 'UNTITLED';
    label.textContent = label.textContent.trim().toUpperCase();
  });

  label.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); label.blur(); }
    if (e.key === 'Escape') { e.preventDefault(); label.contentEditable = 'false'; }
    // Stop navigation keys from bubbling
    e.stopPropagation();
  });

  // Prevent click navigation while editing
  label.addEventListener('click', e => {
    if (label.contentEditable === 'true') e.stopPropagation();
  });
});

// ─────────────────────────────────────────────
// TEXT ON PRODUCT OVERLAY SYSTEM
// ─────────────────────────────────────────────
const textState = {
  backpack: { text:'', font:"'Barlow Condensed', sans-serif", size:28, color:'#2dff6e', bold:false, italic:false, upper:false, pos:'center' },
  wallet:   { text:'', font:"'Barlow Condensed', sans-serif", size:22, color:'#2dff6e', bold:false, italic:false, upper:false, pos:'center' },
  tshirt:   { text:'', font:"'Barlow Condensed', sans-serif", size:32, color:'#2dff6e', bold:false, italic:false, upper:false, pos:'center' },
  hoodie:   { text:'', font:"'Barlow Condensed', sans-serif", size:28, color:'#2dff6e', bold:false, italic:false, upper:false, pos:'center' },
};

function applyTextOverlay(product) {
  const st      = textState[product];
  const overlay = document.getElementById(`text-overlay-${product}`);
  const render  = document.getElementById(`text-render-${product}`);
  if (!overlay || !render) return;

  const displayText = st.upper ? st.text.toUpperCase() : st.text;
  render.textContent = displayText;

  // Position class
  overlay.className = `product-text-overlay pos-${st.pos}`;

  // Styles
  render.style.fontFamily   = st.font;
  render.style.fontSize     = `${st.size}px`;
  render.style.color        = st.color;
  render.style.fontWeight   = st.bold ? '800' : '600';
  render.style.fontStyle    = st.italic ? 'italic' : 'normal';
  render.style.display      = displayText ? 'block' : 'none';
}

['backpack','wallet','tshirt','hoodie'].forEach(product => {
  // Live text input
  const input = document.getElementById(`text-input-${product}`);
  if (input) {
    input.addEventListener('input', () => {
      textState[product].text = input.value;
      applyTextOverlay(product);
    });
  }

  // Font select
  const fontSel = document.getElementById(`text-font-${product}`);
  if (fontSel) {
    fontSel.addEventListener('change', () => {
      textState[product].font = fontSel.value;
      applyTextOverlay(product);
    });
  }

  // Size slider
  const sizeSlider = document.getElementById(`text-size-${product}`);
  const sizeVal    = document.getElementById(`text-size-val-${product}`);
  if (sizeSlider) {
    sizeSlider.addEventListener('input', () => {
      textState[product].size = parseInt(sizeSlider.value);
      if (sizeVal) sizeVal.textContent = `${sizeSlider.value}px`;
      applyTextOverlay(product);
    });
  }

  // Color buttons
  document.querySelectorAll(`.text-tool-wrap[data-target="${product}"] .text-color-btn`).forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll(`.text-tool-wrap[data-target="${product}"] .text-color-btn`)
        .forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      textState[product].color = btn.dataset.color;
      applyTextOverlay(product);
    });
  });

  // Style buttons (Bold / Italic / Uppercase)
  ['bold','italic','upper'].forEach(style => {
    const btn = document.getElementById(`text-${style}-${product}`);
    if (!btn) return;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      textState[product][style] = !textState[product][style];
      btn.classList.toggle('active', textState[product][style]);
      applyTextOverlay(product);
    });
  });

  // Position buttons
  document.querySelectorAll(`.text-pos-btn[data-product="${product}"]`).forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll(`.text-pos-btn[data-product="${product}"]`)
        .forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      textState[product].pos = btn.dataset.pos;
      applyTextOverlay(product);
    });
  });
});

// ─────────────────────────────────────────────
// BULK ORDER CONFIGURATOR (Business tab only)
// ─────────────────────────────────────────────

const BULK_PRODUCTS = {
  backpack: {
    name: 'Backpacks', emoji: '🎒', moq: 10,
    tiers: [{ min: 10,  max: 99,   price: 320 },
            { min: 100, max: 499,  price: 275 },
            { min: 500, max: Infinity, price: 220 }]
  },
  wallet: {
    name: 'Wallets', emoji: '👜', moq: 25,
    tiers: [{ min: 25,  max: 99,   price: 95 },
            { min: 100, max: 499,  price: 78 },
            { min: 500, max: Infinity, price: 60 }]
  },
  tshirt: {
    name: 'T-Shirts', emoji: '👕', moq: 50,
    tiers: [{ min: 50,  max: 199,  price: 9 },
            { min: 200, max: 999,  price: 7 },
            { min: 1000, max: Infinity, price: 5 }]
  },
  hoodie: {
    name: 'Hoodies', emoji: '🧥', moq: 25,
    tiers: [{ min: 25,  max: 99,   price: 18 },
            { min: 100, max: 499,  price: 15 },
            { min: 500, max: Infinity, price: 12 }]
  }
};

const bulkCart = {}; // { product: { qty, unitPrice, total } }

function getBulkPrice(product, qty) {
  const tiers = BULK_PRODUCTS[product].tiers;
  for (const tier of tiers) {
    if (qty >= tier.min && qty <= tier.max) return tier.price;
  }
  return tiers[tiers.length - 1].price;
}

function formatMoney(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function updateBulkTotal(product) {
  const input  = document.getElementById(`qty-${product}`);
  const totalEl = document.getElementById(`bulk-total-${product}`);
  const priceEl = document.getElementById(`biz-price-${product}`);
  if (!input || !totalEl) return;

  let qty = parseInt(input.value) || BULK_PRODUCTS[product].moq;
  const moq = BULK_PRODUCTS[product].moq;
  if (qty < moq) { qty = moq; input.value = moq; }

  const unitPrice = getBulkPrice(product, qty);
  const total     = qty * unitPrice;

  totalEl.textContent = formatMoney(total);
  if (priceEl) priceEl.innerHTML = `$${unitPrice}<span class="biz-catalog-unit">/unit</span>`;

  // Highlight the active tier badge
  const card = input.closest('.biz-catalog-card');
  if (card) {
    card.querySelectorAll('.bulk-tier').forEach(t => t.classList.remove('bulk-tier-active'));
    const tiers = BULK_PRODUCTS[product].tiers;
    const idx   = tiers.findIndex(t => qty >= t.min && qty <= t.max);
    const badges = card.querySelectorAll('.bulk-tier');
    if (badges[idx]) badges[idx].classList.add('bulk-tier-active');
  }
}

// Wire quantity inputs & +/- buttons
Object.keys(BULK_PRODUCTS).forEach(product => {
  const input   = document.getElementById(`qty-${product}`);
  const minuses = document.querySelectorAll(`.bulk-qty-btn[data-product="${product}"][data-action="minus"]`);
  const pluses  = document.querySelectorAll(`.bulk-qty-btn[data-product="${product}"][data-action="plus"]`);

  if (!input) return;

  const step = product === 'tshirt' ? 50 : product === 'backpack' ? 10 : 25;

  input.addEventListener('input', () => updateBulkTotal(product));
  input.addEventListener('change', () => updateBulkTotal(product));

  minuses.forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const moq = BULK_PRODUCTS[product].moq;
    input.value = Math.max(moq, (parseInt(input.value) || moq) - step);
    updateBulkTotal(product);
  }));

  pluses.forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    input.value = (parseInt(input.value) || BULK_PRODUCTS[product].moq) + step;
    updateBulkTotal(product);
  }));

  // Init
  updateBulkTotal(product);
});

// Wire bulk swatch selectors (business tab only)
document.querySelectorAll('.bulk-swatches').forEach(group => {
  group.querySelectorAll('.bulk-swatch').forEach(sw => {
    sw.addEventListener('click', e => {
      e.stopPropagation();
      group.querySelectorAll('.bulk-swatch').forEach(s => s.classList.remove('selected'));
      sw.classList.add('selected');
    });
  });
});

// Wire bulk size toggle (multi-select)
document.querySelectorAll('.bulk-size-btns').forEach(group => {
  group.querySelectorAll('.bulk-size-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.classList.toggle('selected');
      // At least one must stay selected
      const anySelected = [...group.querySelectorAll('.bulk-size-btn')].some(b => b.classList.contains('selected'));
      if (!anySelected) btn.classList.add('selected');
    });
  });
});

// ADD TO BULK ORDER buttons
document.querySelectorAll('.bulk-order-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const product = btn.dataset.product;
    if (!product) return;
    const input     = document.getElementById(`qty-${product}`);
    const qty       = parseInt(input?.value) || BULK_PRODUCTS[product].moq;
    const unitPrice = getBulkPrice(product, qty);
    const total     = qty * unitPrice;

    bulkCart[product] = { qty, unitPrice, total };

    // Button feedback
    const orig = btn.textContent;
    btn.textContent = '✓ ADDED!';
    btn.style.background = '#1a9940';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 1800);

    renderBulkSummary();
    showToast(`${BULK_PRODUCTS[product].name} × ${qty.toLocaleString()} units added to bulk order!`);
  });
});

function renderBulkSummary() {
  const summaryEl   = document.getElementById('bulk-order-summary');
  const itemsEl     = document.getElementById('bulk-summary-items');
  const grandTotalEl = document.getElementById('bulk-grand-total');
  if (!summaryEl || !itemsEl) return;

  const entries = Object.entries(bulkCart);
  if (entries.length === 0) {
    summaryEl.style.display = 'none';
    return;
  }

  summaryEl.style.display = 'block';
  summaryEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  itemsEl.innerHTML = entries.map(([product, { qty, unitPrice, total }]) => {
    const info = BULK_PRODUCTS[product];
    return `
      <div class="bulk-summary-item">
        <span class="bulk-summary-item-emoji">${info.emoji}</span>
        <div>
          <div class="bulk-summary-item-name">${info.name}</div>
          <div class="bulk-summary-item-meta">$${unitPrice}/unit · ${qty >= 1000 ? (qty/1000).toFixed(1)+'K' : qty} units</div>
        </div>
        <span class="bulk-summary-item-qty">QTY: ${qty.toLocaleString()}</span>
        <span class="bulk-summary-item-price">${formatMoney(total)}</span>
      </div>`;
  }).join('');

  const grandTotal = entries.reduce((s, [, v]) => s + v.total, 0);
  if (grandTotalEl) grandTotalEl.textContent = formatMoney(grandTotal);
}

// Clear all
document.getElementById('bulk-clear-btn')?.addEventListener('click', e => {
  e.stopPropagation();
  Object.keys(bulkCart).forEach(k => delete bulkCart[k]);
  renderBulkSummary();
  showToast('Bulk order cleared.');
});

// Request quote
document.getElementById('bulk-submit-btn')?.addEventListener('click', e => {
  e.stopPropagation();
  if (Object.keys(bulkCart).length === 0) { showToast('Add items to your bulk order first.'); return; }
  // Pre-fill business contact form
  const msgEl = document.getElementById('biz-message');
  if (msgEl) {
    const lines = Object.entries(bulkCart).map(([p, { qty, unitPrice, total }]) =>
      `• ${BULK_PRODUCTS[p].name}: ${qty.toLocaleString()} units @ $${unitPrice}/unit = ${formatMoney(total)}`);
    const grand = Object.values(bulkCart).reduce((s, v) => s + v.total, 0);
    msgEl.value = `Bulk order request:\n${lines.join('\n')}\n\nEstimated total: ${formatMoney(grand)}\n\nPlease contact me with a final quote.`;
  }
  document.getElementById('biz-contact-section')?.scrollIntoView({ behavior: 'smooth' });
  showToast('Order details copied to inquiry form — complete your details below!');
});

// ─────────────────────────────────────────────
// JOIN CHALLENGE (Home page competition section)
// ─────────────────────────────────────────────
document.getElementById('join-challenge-btn')?.addEventListener('click', e => {
  e.stopPropagation();
  // Open Telegram bot
  window.open('https://t.me/contespackcraft_bot', '_blank');
  const btn = document.getElementById('join-challenge-btn');
  btn.textContent = '✓ JOINED!';
  btn.style.background = '#1a9940';
  bonusPoints += 500;
  renderBonusBalance();
  showToast('Вы присоединились! +500 NP начислено 🏆');
  setTimeout(() => { btn.textContent = 'JOIN CHALLENGE'; btn.style.background = ''; }, 3000);
});

// ─────────────────────────────────────────────
// INJECT STYLES
// ─────────────────────────────────────────────
const injectedStyle = document.createElement('style');
injectedStyle.textContent = `
  .remove-item-btn {
    background: none; border: 1px solid rgba(255,80,80,.3); border-radius: 50%;
    width: 22px; height: 22px; color: rgba(255,80,80,.6); font-size: .65rem;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: all .2s; flex-shrink: 0;
  }
  .remove-item-btn:hover { background: rgba(255,80,80,.15); border-color: rgba(255,80,80,.8); color: #ff5555; }
`;
document.head.appendChild(injectedStyle);

// ─────────────────────────────────────────────
// STAGGER ENTRY ANIMATIONS
// ─────────────────────────────────────────────
['module-card','process-card','biz-feature-card','biz-tier-card','biz-catalog-card'].forEach(cls =>
  document.querySelectorAll(`.${cls}`).forEach((el, i) =>
    el.style.animation = `slideUp .5s ${i * 0.07}s ease both`));

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
showPage('home');
renderBonusBalance();
