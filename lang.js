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
    Polish: 'O PROJEKCIE ',
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
    English: 'Here comes App for ecomaniacs',
    Polish: '',
  },
  {
    English: 'Find a place, where you can eat fit meals',
    Polish: 'Znajdź miejsce, gdzie możesz zjeść fit posiłki',
  },
  {
    English: 'Buy natural products',
    Polish: 'Kupuj naturalne produkty',
  },
  {
    English: 'Be the first',
    Polish: 'Bądź pierwszy',
  },
  {
    English: 'About project',
    Polish: 'O projekcie',
  },
  {
    English: 'Restaurants',
    Polish: 'Restauracje',
  },
  {
    English: 'Lorem',
    Polish:
      'Burger z pokrzywy? Pita z falafelem? Na miejscu, czy z dowozem? Nasza interaktywna mapa pozwoli Ci znaleźć to, na co masz ochotę! U nas możesz szukać knajpek według lokalizacji lub po nazwie dania. Zdrowa kuchnia w Trójmieście nie ma przed nami żadnych tajemnic!',
  },
  {
    English: 'Recipes',
    Polish: 'Przepisy',
  },
  {
    English: 'lorem',
    Polish:
      'Każdy czasem chce coś ugotować sam. Kiedy w głowie pustka i pomysłów brak, ZdrowEat przychodzi z odsieczą! Sałatki, power bowle, burgery roślinne - u nas znajdziesz sprawdzone przepisy, dzięki którym Twoja dieta będzie smaczna i zbilansowana.Gotuj zdrowo - żyj zdrowo!',
  },
  {
    English: 'Stores',
    Polish: 'Sklepy',
  },

  {
    English: 'lorem',
    Polish:
      'Znalazłeś już swój wymarzony przepis. Gotujesz. Smaki i aromaty tworzą idealną harmonię. Już tylko ostatnie składniki. Ale zaraz... Gdzie znaleźć płatki drożdżowe? Gdzie szukać mąki jaglanej? W tej sekcji poznasz odpowiedzi na te pytania. Sklepy ze zdrową żywnością w Trójmieście - tylko na ZdrowEat!',
  },
  {
    English: 'Online shops',
    Polish: 'Sklepy online',
  },
  {
    English: 'lorem',
    Polish:
      'Znalazłeś już swój wymarzony przepis. Gotujesz. Smaki i aromaty tworzą idealną harmonię. Już tylko ostatnie składniki. Ale zaraz... Gdzie znaleźć płatki drożdżowe? Gdzie szukać mąki jaglanej? W tej sekcji poznasz odpowiedzi na te pytania. Sklepy ze zdrową żywnością w Trójmieście - tylko na ZdrowEat!',
  },
  {
    English: 'Learn More',
    Polish: 'Dowiedz się więcej',
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
