let mlCodes = [
  {
    code: 'en',
    name: 'English',
  },

  {
    code: 'pl',
    name: 'Polish',
  },
]

let MLstrings = [
  {
    English: 'HOME',
    Polish: 'STRONA GŁÓWNA',
  },
  {
    English: 'ABOUT',
    Polish: 'O PROJEKCIE',
  },
  {
    English: 'MORE',
    Polish: 'WIĘCEJ',
  },
  {
    English: 'ABOUT US',
    Polish: 'O NAS',
  },
  {
    English: 'SIGN UP',
    Polish: 'ZAPISZ SIĘ',
  },
  {
    English: 'HERE COMES APP FOR ECOMANIACS',
    Polish: 'NADCHODZI APLIKACJA DLA ECO MANIAKÓW',
  },
  {
    English: 'FIND A PLACE, WHERE YOU CAN EAT FIT MEALS',
    Polish: 'ZNAJDŹ MIEJSCE, GDZIE MOŻESZ ZJEŚĆ FIT POSIŁKI',
  },
  {
    English: 'BUY NATURAL PRODUCTS',
    Polish: 'KUPUJ NATURALNE PRODUKTY',
  },
  {
    English: 'Be the first',
    Polish: 'BĄDŹ PIERWSZY',
  },
  {
    English: 'ABOUT PROJECT',
    Polish: 'O PPROJEKCIE',
  },
  {
    English: 'RESTAURANTS',
    Polish: 'RESTAURACJE',
  },
  {
    English:
      'Nettle burger? Pita with falafel? On the spot or with delivery? Our interactive map will allow you to find what you fancy! You can look for pubs by location or by dish name.',
    Polish:
      'Burger z pokrzywy? Pita z falafelem? Na miejscu, czy z dowozem? Nasza interaktywna mapa pozwoli Ci znaleźć to, na co masz ochotę! U nas możesz szukać knajpek według lokalizacji lub po nazwie dania. Zdrowa kuchnia w Trójmieście nie ma przed nami żadnych tajemnic!',
  },
  {
    English: 'RECIPES',
    Polish: 'PRZEPISY',
  },
  {
    English:
      'Everyone sometimes wants to cook something themselves. When the mind is empty and ideas none, ZdrowEat comes to the rescue! Salads, power bowle, burgers Vegetable - with us you will find proven recipes to make yours the diet will be tasty and balanced.Cook healthy - live healthy!',
    Polish:
      'Każdy czasem chce coś ugotować sam. Kiedy w głowie pustka i pomysłów brak, ZdrowEat przychodzi z odsieczą! Sałatki, power bowle, burgery roślinne - u nas znajdziesz sprawdzone przepisy, dzięki którym Twoja dieta będzie smaczna i zbilansowana. Gotuj zdrowo - żyj zdrowo!',
  },
  {
    English: 'STORES',
    Polish: 'SKLEPY',
  },

  {
    English:
      'You have already found your dream recipe. You cooking. Flavors and aromas they create perfect harmony. Only the last ingredients. But wait... Where can you find yeast flakes? Where to look for millet flour? In this section you will learn the answers to these questions. Health food stores in the Tri-City - only on ZdrowEat!',
    Polish:
      'Znalazłeś już swój wymarzony przepis. Gotujesz. Smaki i aromaty tworzą idealną harmonię. Już tylko ostatnie składniki. Ale zaraz... Gdzie znaleźć płatki drożdżowe? Gdzie szukać mąki jaglanej? W tej sekcji poznasz odpowiedzi na te pytania. Sklepy ze zdrową żywnością w Trójmieście - tylko na ZdrowEat!',
  },
  {
    English: 'ONLINE STORES',
    Polish: 'SKLEP ONLINE',
  },
  {
    English:
      "Have they closed the store? Is there a war or pandemic? Don't worry - check out our online store! We offer a wide range of BIO products from reliable suppliers. We are open 24 hours a day, 7 days a week, and we deliver free of charge within 1 day of ordering. Check us out!",
    Polish:
      'Sklep zamknęli Ci przed nosem? Trwa wojna lub pandemia? Nie łam się - sprawdź nasz sklep online! Oferujemy szeroki asortyment produktów BIO od sprawdzonych dostawców. Jesteśmy czynni 24h na dobę, 7 dni w tygodniu, a dostawy realizujemy bezpłatnie w ciągu 1 doby od zamówienia. Sprawdź nas!',
  },
  {
    English: 'LEARN MORE',
    Polish: 'DOWIEDZ SIĘ WIĘCEJ',
  },
  {
    English: 'Promotions',
    Polish: 'PROMOCJE',
  },
  {
    English:
      'No more excuses that health is expensive! Only with us can you get attractive discount codes for restaurants as well as for health food stores.',
    Polish:
      'Koniec z wymówkami, że jak zdrowo to zaraz drogo! Tylko u nas możesz zdobyć atrakcyjne kody rabatowe do restauracji jak również do sklepów ze zdrową żywnością.',
  },
  {
    English:
      'Not only that - if you subscribe to our Newsletter you will receive a 10% discount on our assortment at the start!',
    Polish:
      'Mało tego - jeśli zapiszesz się na nasz Newsletter otrzymasz na start 10% rabatu na nasz asortyment!',
  },
  {
    English: 'Do not miss this opportunity!',
    Polish: 'Nie przegap takiej okazji!',
  },
  {
    English: 'BUY LOCALLY',
    Polish: 'KUPUJ LOKALNIE',
  },
  {
    English:
      'Are you fed up with processed foods? After returning from the store, they do not give you peace of mind if the eggs were caged, and the bread did not spend half a year in the freezer?',
    Polish:
      'Masz dosyć przetworzonej żywności? Po powrocie ze sklepu nie dają Ci spokoju myśli czy jajka były z chowu klatkowego, a chleb nie spędził w zamrażarce pół roku?',
  },

  {
    English:
      'Along with us support local producents. Buying at Zdroweat you support not only local bisiness and environment, but also your health.',
    Polish:
      ' Razem z nami wspieraj lokalnych producentów. Kupując u nas wspierasz nie tylko lokalny biznes i ochronę środowiska, ale przede wszystkim swoje zdrowie.',
  },
  {
    English: 'ECOLOGY',
    Polish: 'EKOLOGIA',
  },
  {
    English:
      'We dont stop at healthy food. We use high quality disposable, ecological packaging for transport orders. They are environmentally friendly, fully biodegradable products.',
    Polish:
      'Na zdrowej żywności nie poprzestajemy. Stosujemy wysokiej jakości jednorazowe, ekologiczne opakowania do przewozu zamówień. Są to przyjazne dla środowiska, w pełni biodegradowalne produkty.',
  },
  {
    English: 'OUR EXPERTS',
    Polish: 'NASI EKSPERCI',
  },
  {
    English:
      'You have doubts which product will meet your best expectations? Which restaurant to choose or which vegetable milk is suitable for your diet? Write to our experts! Our team will advise you as best they can.',
    Polish:
      'Masz wątpliwości, który produkt spełni najlepiej Twoje oczekiwania? Którą restaurację wybrać albo które mleko roślinne jest odpowiednie dla Twojej diety? Napisz do naszych Ekspertów! Nasz Zespół Ci doradzi, najlepiej jak potrafi.',
  },
  {
    English: 'STAY UPDATED!',
    Polish: 'BĄDŹ NA BIEŻĄCO!',
  },
  {
    English:
      'By subscribing to the Newsletter you can be sure that we will keep up to date inform you about all nutrition news, events culinary in the Tri-City and about promotions.',
    Polish:
      'Zapisując się na Newsletter masz pewność, że na bieżąco będziemy Cię informować o wszystkich nowinkach żywieniowych, wydarzeniach kulinarnych w Trójmieście oraz o promocjach.',
  },
  {
    English: 'ZDROWEAT APP',
    Polish: 'APLIKACJA ZDROWEAT',
  },
  {
    English:
      'Our application is easy to use, and most importantly - absolutely free! Wait for an email notification. We will let you know right after its premiere.',
    Polish:
      'Nasza aplikacja jest prosta w obsłudze, a co najważniejsze - zupełnie darmowa! Czekaj na powiadomienie na maila. Damy Ci znać zaraz po jej premierze.',
  },
  {
    English: 'LETS MEET',
    Polish: 'POZNAJMY SIĘ',
  },
  {
    English:
      'We organize culinary workshops and meetings! if you are ZdrowoManiakiem like us on Facebook, follow the Newsletter and be sure to come to one of the meetings!',
    Polish:
      'Organizujemy warsztaty i spotkania kulinarne! Jeśli jesteś ZdrowoManiakiem polub nas na facebooku, śledź Newsletter i koniecznie przyjdź na jedno ze spotkań!',
  },
  {
    English: 'SECURITY',
    Polish: 'BEZPIECZEŃSTWO',
  },
  {
    English:
      'In this difficult time related to the epidemic, we are trying to get out of you on the opposite Without giving up healthy habits, still you can order products in our store and take-out food - we ensure compliance with all sanitary recommendations',
    Polish:
      'W tym trudnym czasie związanym z epidemią, staramy się Wam wyjśc na przeciw. Nie rezygnując ze zdrowych przyzwyczajeń, nadal możesz zamawiać produkty w naszym sklepie i jedzenie na wynos - zapewniamy zachowanie wszelkich zaleceń sanitarnych',
  },

  {
    English: 'ABOUT US - WE CREATE ZDROWEAT!',
    Polish: 'O NAS - TO MY TWORZYMY ZDROWEAT!',
  },
  {
    English: 'On daily basis I design renewables.',
    Polish: 'Na codzień projektuję odnawialne źródła energii.',
  },
  {
    English:
      'Personally, I love to travel, sleep under a tent, paint (paintings), and the peak of dreams is an evening with a good book and a mug hot chocolate.',
    Polish:
      'Osobiście zaś uwielbiam podróżować, spać pod namiotem, malować (obrazy), a szczytem marzeń jest wieczór z dobrą książką i kubkiem gorącej czekolady.',
  },
  {
    English:
      'Good food engineer who supervises buildings from concrete, and in his free time watches Thai series and draws  handsome gentlemen. A total fantasy freak spending more part of the day in the clouds.',
    Polish:
      'Inżynier dobrego jedzenia, który na codzień nadzoruje budynki z betonu, a w wolnej chwili ogląda tajlandzkie seriale i rysuje przystojnych panów. Totalny freak fantastyki, spędzający większą część dnia w obłokach.',
  },
  {
    English:
      'Food technologist. I watch the substantive content of the information provided on the website. Privately, I love sport (football, tennis) and everything related to avionics.',
    Polish:
      'Technolog żywności. Pilnuję merytorycznej treści przekazywanych na stronie informacji. Prywatnie uwielbiam sport (piłka nożna, tenis) i wszystko co związane z awioniką.',
  },
  {
    English:
      'Steel structure designer. Privately - a fan of unhealthy food that under pressure and increasing body weight looks for tasty alternatives to fat-dripping meats.',
    Polish:
      'Projektant konstrukcji stalowych. Prywatnie - fan niezdrowego jedzenia, który pod wpływem nacisków i rosnącej masy ciała szuka smakowitych alternatyw dla ociekających tłuszczem mięsiw.',
  },
  {
    English: 'SIGN UP FOR NEWSLETTER!',
    Polish: 'ZAPISZ SIĘ DO NEWSLETTERA!',
  },
  {
    English:
      'Use the form below to keep up to date with all information about the application.',
    Polish:
      'Skorzystaj z poniższego formularza, aby być na bieżąco z wszystkimi informacjami dotyczącymi aplikacji.',
  },
  {
    English:
      'We will send you one e-mail with information that you can now use the ZdrowEat application. By participating in the registration you will get the fastest access to ZdrowEat!',
    Polish:
      'Wyślemy Ci jednego maila z informacją, że możesz już korzystać z aplikacji ZdrowEat. Biorąc udział w zapisie uzyskasz jak najszybszy dostęp do ZdrowEat!',
  },

  {
    English: 'Name',
    Polish: 'Imię',
  },
  {
    English:
      'I agree to receive commercial information by e-mail to the above e-mail address sent by ZdrowEat.',
    Polish:
      'Wyrażam zgodę na otrzymywanie informacji handlowych drogą elektroniczną na podany powyżej adres poczty elektronicznej wysyłanych przez ZdrowEat',
  },
  {
    English: 'SUBMIT',
    Polish: 'WYŚLIJ',
  },
  {
    English: 'Webpage created by Karina, Paulina, Michał and Maciek',
    Polish: 'Strona stworzona przez Karinę, Paulinę, Michała i Maćka',
  },
  {
    English: 'All rights reserved',
    Polish: 'Wszelkie prawa zastrzeżone',
  },
  {
    English:
      'ZdrowEat uses cookies in accordance with the settings of your browser. By using our services, you accept use such files. You can read more about it in',
    Polish:
      ' ZdrowEat wykorzystuje pliki cookie zgodnie z ustawieniami Twojej przeglądarki. Korzystając z naszych usług, akceptujesz używanie takich plików. Więcej na ten temat możesz przeczytać w',
  },
  {
    English: 'Privacy policy.',
    Polish: 'Polityce prywatności.',
  },
  {
    English: 'I Accept',
    Polish: 'Akceptuję',
  },
]

let mlrLangInUse
let mlr = function (_a) {
  let _b = _a === void 0 ? {} : _a,
    _c = _b.dropID,
    dropID = _c === void 0 ? 'mbPOCControlsLangDrop' : _c,
    _d = _b.stringAttribute,
    stringAttribute = _d === void 0 ? 'data-mlr-text' : _d,
    _e = _b.chosenLang,
    chosenLang = _e === void 0 ? 'Polish' : _e,
    _f = _b.mLstrings,
    mLstrings = _f === void 0 ? MLstrings : _f,
    _g = _b.countryCodes,
    countryCodes = _g === void 0 ? false : _g,
    _h = _b.countryCodeData,
    countryCodeData = _h === void 0 ? [] : _h
  let root = document.documentElement
  let listOfLanguages = Object.keys(mLstrings[0])
  mlrLangInUse = chosenLang
  ;(function createMLDrop() {
    let mbPOCControlsLangDrop = document.getElementById(dropID)

    mbPOCControlsLangDrop.innerHTML = ''

    listOfLanguages.forEach(function (lang, langidx) {
      let HTMLoption = document.createElement('option')
      HTMLoption.value = lang
      HTMLoption.textContent = lang
      mbPOCControlsLangDrop.appendChild(HTMLoption)
      if (lang === chosenLang) {
        mbPOCControlsLangDrop.value = lang
      }
    })
    mbPOCControlsLangDrop.addEventListener('change', function (e) {
      mlrLangInUse =
        mbPOCControlsLangDrop[mbPOCControlsLangDrop.selectedIndex].value
      resolveAllMLStrings()

      if (countryCodes === true) {
        if (!Array.isArray(countryCodeData) || !countryCodeData.length) {
          console.warn('Cannot access strings for language codes')
          return
        }
        root.setAttribute('lang', updateCountryCodeOnHTML().code)
      }
    })
  })()
  function updateCountryCodeOnHTML() {
    return countryCodeData.find(function (this2Digit) {
      return this2Digit.name === mlrLangInUse
    })
  }
  function resolveAllMLStrings() {
    let stringsToBeResolved = document.querySelectorAll(
      '[' + stringAttribute + ']',
    )
    stringsToBeResolved.forEach(function (stringToBeResolved) {
      let originaltextContent = stringToBeResolved.innerText
      let resolvedText = resolveMLString(originaltextContent, mLstrings)
      stringToBeResolved.innerText = resolvedText
    })
  }
}
function resolveMLString(stringToBeResolved, mLstrings) {
  let matchingStringIndex = mLstrings.find(function (stringObj) {
    let stringValues = Object.values(stringObj)

    return stringValues.includes(stringToBeResolved)
  })
  if (matchingStringIndex) {
    return matchingStringIndex[mlrLangInUse]
  } else {
    return stringToBeResolved
  }
}
mlr({
  dropID: 'mbPOCControlsLangDrop',
  stringAttribute: 'data-mlr-text',
  chosenLang: 'Polish',
  mLstrings: MLstrings,
  countryCodes: true,
  countryCodeData: mlCodes,
})
