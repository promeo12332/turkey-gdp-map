const gdpData = {
  "adana": 32363826000,
  "adiyaman": 5579970000,
  "afyonkarahisar": 6695964000,
  "agri": 3347982000,
  "aksaray": 4463976000,
  "amasya": 4463976000,
  "ankara": 85931538000,
  "antalya": 30131838000,
  "ardahan": 1601000000,
  "artvin": 3347982000,
  "aydin": 15623916000,
  "balikesir": 16739910000,
  "bartin": 3347982000,
  "batman": 4463976000,
  "bayburt": 1275000000,
  "bilecik": 7679970000,
  "bingol": 3347982000,
  "bitlis": 2231988000,
  "bolu": 6695964000,
  "burdur": 3347982000,
  "bursa": 46871748000,
  "canakkale": 8927952000,
  "cankiri": 2231988000,
  "corum": 7811958000,
  "denizli": 17855904000,
  "diyarbakir": 13391928000,
  "duzce": 4463976000,
  "edirne": 6695964000,
  "elazig": 6695964000,
  "erzincan": 3347982000,
  "erzurum": 8927952000,
  "eskisehir": 15623916000,
  "gaziantep": 24551868000,
  "giresun": 5579970000,
  "gumushane": 1115994000,
  "hakkari": 2231988000,
  "hatay": 13391928000,
  "igdir": 1115994000,
  "isparta": 5579970000,
  "istanbul": 239938710000,
  "izmir": 84815544000,
  "kahramanmaras": 8927952000,
  "karabuk": 6695964000,
  "karaman": 3347982000,
  "kars": 3347982000,
  "kastamonu": 4463976000,
  "kayseri": 20087892000,
  "kilis": 2231988000,
  "kirikkale": 5579970000,
  "kirklareli": 8927952000,
  "kirsehir": 3347982000,
  "kocaeli": 52451718000,
  "konya": 31247832000,
  "kutahya": 8927952000,
  "malatya": 8927952000,
  "manisa": 30131838000,
  "mardin": 6695964000,
  "mersin": 30131838000,
  "mugla": 16739910000,
  "mus": 3347982000,
  "nevsehir": 4463976000,
  "nigde": 4463976000,
  "ordu": 8927952000,
  "osmaniye": 4463976000,
  "rize": 4463976000,
  "sakarya": 12275934000,
  "samsun": 16739910000,
  "siirt": 2231988000,
  "sinop": 2231988000,
  "sivas": 7811958000,
  "sanliurfa": 13391928000,
  "sirnak": 2231988000,
  "tekirdag": 14507922000,
  "tokat": 7811958000,
  "trabzon": 10043946000,
  "tunceli": 1609000000,
  "usak": 5579970000,
  "van": 6695964000,
  "yalova": 5579970000,
  "yozgat": 4463976000,
  "zonguldak": 10043946000
};
const countryCodes = {
  "United States": "us",
  "China": "cn",
  "Japan": "jp",
  "Germany": "de",
  "India": "in",
  "United Kingdom": "gb",
  "France": "fr",
  "Italy": "it",
  "Canada": "ca",
  "South Korea": "kr",
  "Russia": "ru",
  "Brazil": "br",
  "Australia": "au",
  "Spain": "es",
  "Mexico": "mx",
  "Turkiye": "tr",
  "Indonesia": "id",
  "Netherlands": "nl",
  "Saudi Arabia": "sa",
  "Poland": "pl",
  "Switzerland": "ch",
  "Belgium": "be",
  "Argentina": "ar",
  "Sweden": "se",
  "Ireland": "ie",
  "Israel": "il",
  "Singapore": "sg",
  "United Arab Emirates": "ae",
  "Thailand": "th",
  "Austria": "at",
  "Norway": "no",
  "Philippines": "ph",
  "Vietnam": "vn",
  "Bangladesh": "bd",
  "Denmark": "dk",
  "Malaysia": "my",
  "Colombia": "co",
  "Hong Kong": "hk",
  "South Africa": "za",
  "Romania": "ro",
  "Czech Republic": "cz",
  "Egypt": "eg",
  "Chile": "cl",
  "Iran": "ir",
  "Pakistan": "pk",
  "Portugal": "pt",
  "Finland": "fi",
  "Peru": "pe",
  "Kazakhstan": "kz",
  "Algeria": "dz",
  "Greece": "gr",
  "Iraq": "iq",
  "New Zealand": "nz",
  "Hungary": "hu",
  "Qatar": "qa",
  "Ukraine": "ua",
  "Nigeria": "ng",
  "Morocco": "ma",
  "Kuwait": "kw",
  "Slovakia": "sk",
  "Uzbekistan": "uz",
  "Kenya": "ke",
  "Dominican Republic": "do",
  "Ecuador": "ec",
  "Guatemala": "gt",
  "Ethiopia": "et",
  "Sudan": "sd",
  "Oman": "om",
  "Puerto Rico": "pr",
  "Bulgaria": "bg",
  "Angola": "ao",
  "Costa Rica": "cr",
  "Luxembourg": "lu",
  "Sri Lanka": "lk",
  "Croatia": "hr",
  "Panama": "pa",
  "Lithuania": "lt",
  "Ghana": "gh",
  "Tanzania": "tz",
  "Uruguay": "uy",
  "Ivory Coast": "ci",
  "Azerbaijan": "az",
  "Belarus": "by",
  "Serbia": "rs",
  "Slovenia": "si",
  "DR Congo": "cd",
  "Myanmar": "mm",
  "Uganda": "ug",
  "Jordan": "jo",
  "Libya": "ly",
  "Cameroon": "cm",
  "Tunisia": "tn",
  "Bahrein": "bh",
  "Nepal": "np",
  "Cyprus": "cy",
  "Estonia": "ee",
  "Latvia": "lv",
  "Paraguay": "py",
  "Honduras": "hn",
  "El Salvador": "sv",
  "Georgia": "ge",
  "Senegal": "sn",
  "Iceland": "is",
  "Papua New Guinea": "pg",
  "Zimbabwe": "zw",
  "Bosnia and Herzegovina": "ba",
  "Trinidad and Tobago": "tt",
  "Zambia": "zm",
  "Malta": "mt",
  "Mali": "ml",
  "Mozambique": "mz",
  "Gabon": "ga",
  "Benin": "bj",
  "Jamaica": "jm",
  "Haiti": "ht",
  "Moldova": "md",
  "Nicaragua": "ni",
  "Guyana": "gy",
  "Niger": "ne",
  "Armenia": "am",
  "Albania": "al",
  "Burkina Faso": "bf",
  "Kyrgyzstan": "kg"
};

const countryGdpData = {
  
    "United States": 27360935000000,
    "China": 17794782000000,
    "Japan": 4212945000000,
    "Germany": 4456081000000,
    "India": 3549919000000,
    "United Kingdom": 3340032000000,
    "France": 3030904000000,
    "Italy": 2254851000000,
    "Canada": 2140086000000,
    "South Korea": 1712793000000,
    "Russia": 2021421000000,
    "Brazil": 2173666000000,
    "Australia": 1723827000000,
    "Spain": 1580695000000,
    "Mexico": 1788887000000,
    "Turkiye": 1169450748000,
    "Indonesia": 1371171000000,
    "Netherlands": 1118125000000,
    "Saudi Arabia": 1067583000000,
    "Poland": 811229000000,
    "Switzerland": 884940000000,
    "Belgium": 632217000000,
    "Argentina": 640591000000,
    "Sweden": 593268000000,
    "Ireland": 545629000000,
    "Israel": 509902000000,
    "Singapore": 501428000000,
    "United Arab Emirates": 504173000000,
    "Thailand": 514945000000,
    "Austria": 516034000000,
    "Norway": 485513000000,
    "Philippines": 437146000000,
    "Vietnam": 429717000000,
    "Bangladesh": 437415000000,
    "Denmark": 404199000000,
    "Malaysia": 399649000000,
    "Colombia": 363540000000,
    "Hong Kong": 382055000000,
    "South Africa": 377782000000,
    "Romania": 351003000000,
    "Czech Republic": 330858000000,
    "Egypt": 395926000000,
    "Chile": 335533000000,
    "Iran": 401505000000,
    "Pakistan": 338368000000,
    "Portugal": 287080000000,
    "Finland": 300187000000,
    "Peru": 267603000000,
    "Kazakhstan": 261421000000,
    "Algeria": 239899000000,
    "Greece": 238206000000,
    "Iraq": 250843000000,
    "New Zealand": 253466000000,
    "Hungary": 212389000000,
    "Qatar": 235770000000,
    "Ukraine": 178757000000,
    "Nigeria": 362815000000,
    "Morocco": 141109000000,
    "Kuwait": 161772000000,
    "Slovakia": 132794000000,
    "Uzbekistan": 90889000000,
    "Kenya": 107441000000,
    "Dominican Republic": 121444000000,
    "Ecuador": 118845000000,
    "Guatemala": 102050000000,
      "Ethiopia": 163698000000,
      "Sudan": 109327000000,
      "Oman": 108192000000,
      "Kenya": 107441000000,
      "Dominican Republic": 121444000000,
      "Ecuador": 118845000000,
      "Puerto Rico": 117902000000,
      "Guatemala": 102050000000,
      "Bulgaria": 101584000000,
      "Angola": 84773000000,
      "Costa Rica": 86498000000,
      "Luxembourg": 85755000000,
      "Sri Lanka": 84357000000,
      "Croatia": 82689000000,
      "Panama": 83382000000,
      "Lithuania": 77836000000,
      "Ghana": 76370000000,
      "Tanzania": 79158000000,
      "Uruguay": 77241000000,
      "Ivory Coast": 78789000000,
      "Azerbaijan": 72356000000,
      "Belarus": 71857000000,
      "Serbia": 75187000000,
      "Slovenia": 68217000000,
      "DR Congo": 66383000000,
      "Myanmar": 64815000000,
      "Uganda": 49273000000,
      "Jordan": 50814000000,
      "Libya": 50492000000,
      "Cameroon": 47946000000,
      "Tunisia": 48530000000,
      "Bahrein": 43205000000,
      "Bangladesh": 437415000000,
      "Philippines": 437146000000,
      "Vietnam": 429717000000,
      "Nepal": 40908000000,
      "Denmark": 404199000000,
      "Malaysia": 399649000000,
      "Iran": 401505000000,
      "Egypt": 395926000000,
      "South Africa": 377782000000,
      "Hong Kong": 382055000000,
      "Colombia": 363540000000,
      "Nigeria": 362815000000,
      "Romania": 351003000000,
      "Pakistan": 338368000000,
      "Chile": 335533000000,
      "Czech Republic": 330858000000,
      "Portugal": 287080000000,
      "Finland": 300187000000,
      "Peru": 267603000000,
      "Kazakhstan": 261421000000,
      "New Zealand": 253466000000,
      "Iraq": 250843000000,
      "Algeria": 239899000000,
      "Greece": 238206000000,
      "Qatar": 235770000000,
      "Hungary": 212389000000,
      "Morocco": 141109000000,
      "Kuwait": 161772000000,
      "Slovakia": 132794000000,
      "Cyprus": 32230000000,
      "Estonia": 40745000000,
      "Latvia": 43627000000,
      "Paraguay": 42956000000,
      "Honduras": 34401000000,
      "El Salvador": 34016000000,
      "Georgia": 30536000000,
      "Senegal": 31014000000,
      "Iceland": 31020000000,
      "Papua New Guinea": 30933000000,
      "Zimbabwe": 26538000000,
      "Bosnia and Herzegovina": 27055000000,
      "Trinidad and Tobago": 28140000000,
      "Zambia": 28163000000,
      "Malta": 20957000000,
      "Mali": 20905000000,
      "Mozambique": 20625000000,
      "Gabon": 20516000000,
      "Benin": 19673000000,
      "Jamaica": 19423000000,
      "Haiti": 19851000000,
      "Moldova": 16539000000,
      "Nicaragua": 17829000000,
      "Guyana": 16786000000,
      "Niger": 16819000000,
      "Armenia": 24212000000,
      "Albania": 22978000000,
      "Burkina Faso": 20325000000,
      "Kyrgyzstan": 13782000000,
      "Uzbekistan": 90889000000,
      "Tuvalu": 62000000,
      "Nauru": 154000000,
      "Palau": 263000000,
      "Kiribati": 279000000,
      "Marshall Islands": 284000000,
      "Micronesia (Federated States of)": 460000000,
      "Tonga": 500000000,
      "São Tomé and Príncipe": 603000000,
      "Dominica": 654000000,
      "Samoa": 934000000,
      "Saint Vincent and the Grenadines": 1066000000,
      "Saint Kitts and Nevis": 1077000000,
      "Vanuatu": 1126000000,
      "Grenada": 1320000000,
      "Comoros": 1352000000,
      "Turks and Caicos Islands": 1402000000,
      "Sint Maarten": 1623000000,
      "Solomon Islands": 1631000000,
      "San Marino": 1855000000,
      "Guinea-Bissau": 1966000000,
      "Antigua and Barbuda": 2033000000,
      "Lesotho": 2046000000,
      "Seychelles": 2141000000,
      "Timor-Leste": 2243000000,
      "Gambia": 2340000000,
      "Saint Lucia": 2520000000,
      "Central African Republic": 2555000000,
      "Cape Verde": 2587000000,
      "Burundi": 2642000000,
      "Bhutan": 2898000000,
      "Curaçao": 3074000000,
      "Greenland": 2926000000,
      "Belize": 3282000000,
      "Aruba": 3545000000,
      "Andorra": 3728000000,
      "Suriname": 3782000000,
      "Sierra Leone": 3810000000,
      "Djibouti": 4099000000,
      "Liberia": 4332000000,
      "Eswatini": 4598000000,
      "Fiji": 5495000000,
      "French Polynesia": 5815000000,
      "Barbados": 6394000000,
      "Maldives": 6600000000,
      "Cayman Islands": 6601000000,
      "Liechtenstein": 7365000000,
      "Montenegro": 7405000000,
      "Bermuda": 7828000000,
      "Monaco": 8784000000,
      "Syria": 8980000000,
      "Togo": 9171000000,
      "New Caledonia": 9623000000,
      "Kosovo": 10438000000,
      "Mauritania": 10453000000,
      "Somalia": 11680000000,
      "Tajikistan": 12061000000,
      "Equatorial Guinea": 12117000000,
      "Namibia": 12351000000,
      "Chad": 13149000000
};

const provincePopulationData = {
  "adana": 2238980,
  "adiyaman": 632459,
  "afyonkarahisar": 736912,
  "agri": 536199,
  "aksaray": 423011,
  "amasya": 337800,
  "ankara": 5639076,
  "antalya": 2548308,
  "ardahan": 99265,
  "artvin": 169501,
  "aydin": 1119081,
  "balikesir": 1241086,
  "bartin": 198999,
  "batman": 620278,
  "bayburt": 78550,
  "bilecik": 500000,
  "bingol": 281768,
  "bitlis": 349396,
  "bolu": 600000,
  "burdur": 267092,
  "bursa": 3056120,
  "canakkale": 540662,
  "cankiri": 180945,
  "corum": 530864,
  "denizli": 1053732,
  "diyarbakir": 1773042,
  "duzce": 395679,
  "edirne": 412115,
  "elazig": 591098,
  "erzincan": 234431,
  "erzurum": 762321,
  "eskisehir": 887475,
  "gaziantep": 2135984,
  "giresun": 448400,
  "gumushane": 162748,
  "hakkari": 278775,
  "hatay": 1637567,
  "igdir": 199442,
  "isparta": 441412,
  "istanbul": 15636243,
  "izmir": 4367251,
  "kahramanmaras": 1161984,
  "karabuk": 600000,
  "karaman": 253279,
  "kars": 284923,
  "kastamonu": 376945,
  "kayseri": 1429616,
  "kilis": 142541,
  "kirikkale": 278749,
  "kirklareli": 361737,
  "kirsehir": 243042,
  "kocaeli": 3000000,
  "konya": 2273756,
  "kutahya": 579257,
  "malatya": 806156,
  "manisa": 1467485,
  "mardin": 854716,
  "mersin": 1891612,
  "mugla": 1031143,
  "mus": 406501,
  "nevsehir": 303010,
  "nigde": 362861,
  "ordu": 760872,
  "osmaniye": 538759,
  "rize": 343212,
  "sakarya": 1031562,
  "samsun": 1359680,
  "siirt": 331980,
  "sinop": 219733,
  "sivas": 635889,
  "sanliurfa": 2077215,
  "sirnak": 537762,
  "tekirdag": 1099542,
  "tokat": 597920,
  "trabzon": 811901,
  "tunceli": 83443,
  "usak": 369433,
  "van": 1229851,
  "yalova": 291001,
  "yozgat": 419440,
  "zonguldak": 591204
};

const countryGdpPerCapitaData = {
  "United States": 76245,
  "China": 12541,
  "Japan": 33827,
  "Germany": 53383,
  "India": 2500,
  "United Kingdom": 46510,
  "France": 43518,
  "Italy": 35657,
  "Canada": 51987,
  "South Korea": 34997,
  "Russia": 13896,
  "Brazil": 6796,
  "Australia": 64700,
  "Spain": 30904,
  "Mexico": 10495,
  "Turkiye": 13632.5,
  "Indonesia": 4823,
  "Netherlands": 57767,
  "Saudi Arabia": 30036,
  "Poland": 17800,
  "Switzerland": 91425,
  "Belgium": 48424,
  "Argentina": 13687,
  "Sweden": 51875,
  "Ireland": 79325,
  "Israel": 43626,
  "Singapore": 82807,
  "United Arab Emirates": 43800,
  "Thailand": 7278,
  "Austria": 48436,
  "Norway": 74882,
  "Philippines": 3597,
  "Vietnam": 4110,
  "Bangladesh": 2591,
  "Denmark": 61015,
  "Malaysia": 11972,
  "Colombia": 6426,
  "Hong Kong": 49700,
  "South Africa": 6374,
  "Romania": 14258,
  "Czech Republic": 27566,
  "Egypt": 3854,
  "Chile": 16469,
  "Iran": 4780,
  "Pakistan": 1541,
  "Portugal": 23186,
  "Finland": 48585,
  "Peru": 6699,
  "Kazakhstan": 10158,
  "Algeria": 4243,
  "Greece": 17891,
  "Iraq": 5971,
  "New Zealand": 42084,
  "Hungary": 17831,
  "Qatar": 62210,
  "Ukraine": 4532,
  "Nigeria": 2230,
  "Morocco": 3651,
  "Kuwait": 33039,
  "Slovakia": 21383,
  "Uzbekistan": 2230,
  "Kenya": 2081,
  "Dominican Republic": 8910,
  "Ecuador": 6350,
  "Guatemala": 4660,
  "Ethiopia": 1028,
  "Sudan": 2450,
  "Oman": 17973,
  "Puerto Rico": 32700,
  "Bulgaria": 12327,
  "Angola": 3030,
  "Costa Rica": 12570,
  "Luxembourg": 112875,
  "Sri Lanka": 3850,
  "Croatia": 17405,
  "Panama": 15830,
  "Lithuania": 23003,
  "Ghana": 2202,
  "Tanzania": 1132,
  "Uruguay": 17278,
  "Ivory Coast": 2270,
  "Azerbaijan": 4800,
  "Belarus": 6660,
  "Serbia": 9230,
  "Slovenia": 28675,
  "DR Congo": 584,
  "Myanmar": 1400,
  "Uganda": 915,
  "Jordan": 4250,
  "Libya": 7800,
  "Cameroon": 1520,
  "Tunisia": 3490,
  "Bahrein": 24000,
  "Nepal": 1190,
  "Cyprus": 28900,
  "Estonia": 27390,
  "Latvia": 19820,
  "Paraguay": 5400,
  "Honduras": 2540,
  "El Salvador": 4050,
  "Georgia": 4700,
  "Senegal": 1600,
  "Iceland": 66950,
  "Papua New Guinea": 2860,
  "Zimbabwe": 1460,
  "Bosnia and Herzegovina": 6140,
  "Trinidad and Tobago": 16940,
  "Zambia": 1300,
  "Malta": 30700,
  "Mali": 900,
  "Mozambique": 500,
  "Gabon": 7480,
  "Benin": 1210,
  "Jamaica": 5350,
  "Haiti": 1250,
  "Moldova": 4570,
  "Nicaragua": 2100,
  "Guyana": 4890,
  "Niger": 540,
  "Armenia": 4600,
  "Albania": 5280,
  "Burkina Faso": 840,
  "Kyrgyzstan": 1280
};

// Veri yapıları


const turkeyTotalGdp = Object.values(gdpData).reduce((sum, gdp) => sum + gdp, 0);
const turkeyTotalPopulation = Object.values(provincePopulationData).reduce((sum, pop) => sum + pop, 0);
const turkeyGdpPerCapita = turkeyTotalGdp / turkeyTotalPopulation;

// DOM elements
const tooltip = document.getElementById("tooltip");
const selectionCanvas = document.getElementById("selection-canvas");
const mapContainer = document.getElementById("map-container");
const ctx = selectionCanvas.getContext("2d");
const totalGdpElement = document.getElementById("total-gdp");
const closestCountryElement = document.getElementById("closest-country");
const closestCountryGdpElement = document.getElementById("closest-country-gdp");
const selectedCitiesElement = document.getElementById("selected-cities");
const averageGdpElement = document.getElementById("average-gdp");
const cityCountElement = document.getElementById("city-count");
const gdpDifferenceElement = document.getElementById("gdp-difference");
const totalPopulationElement = document.getElementById("total-population");
const percentageOfTurkeyGdpElement = document.getElementById("percentage-of-turkey-gdp");
const countryFlagElement = document.getElementById("country-flag");

// GDP Per Capita elements
const gdpPerCapitaElement = document.getElementById("gdp-per-capita");
const closestCountryPerCapitaElement = document.getElementById("closest-country-per-capita");
const closestCountryPerCapitaValueElement = document.getElementById("closest-country-per-capita-value");
const gdpPerCapitaDifferenceElement = document.getElementById("gdp-per-capita-difference");
const highestGdpPerCapitaCityElement = document.getElementById("highest-gdp-per-capita-city");
const highestGdpPerCapitaValueElement = document.getElementById("highest-gdp-per-capita-value");
const turkeyComparisonElement = document.getElementById("turkey-comparison");
const countryFlagPerCapitaElement = document.getElementById("country-flag-per-capita");

// State variables
let isSelecting = false;
let selectionPath = [];
let selectedCities = [];
let mode = "select";
let showingCityNames = false;

// Resize canvas to fit container
function resizeCanvas() {
  selectionCanvas.width = mapContainer.offsetWidth;
  selectionCanvas.height = mapContainer.offsetHeight;
}

// Check if point is inside polygon
function isPointInPolygon(point, polygon) {
  let isInside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x, yi = polygon[i].y;
    const xj = polygon[j].x, yj = polygon[j].y;

    const intersect = ((yi > point.y) !== (yj > point.y)) &&
      (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
    if (intersect) isInside = !isInside;
  }
  return isInside;
}

// Find closest country by total GDP
function findClosestCountry(totalGdp) {
  let closestCountry = null;
  let smallestDifference = Infinity;

  for (const [country, gdp] of Object.entries(countryGdpData)) {
    const difference = Math.abs(gdp - totalGdp);
    if (difference < smallestDifference) {
      smallestDifference = difference;
      closestCountry = { name: country, gdp: gdp };
    }
  }
  return closestCountry;
}

// Find closest country by GDP per capita
function findClosestCountryByPerCapita(gdpPerCapita) {
  let closestCountry = null;
  let smallestDifference = Infinity;

  for (const [country, perCapita] of Object.entries(countryGdpPerCapitaData)) {
    const difference = Math.abs(perCapita - gdpPerCapita);
    if (difference < smallestDifference) {
      smallestDifference = difference;
      closestCountry = { name: country, perCapita: perCapita };
    }
  }
  return closestCountry;
}

// Find city with highest GDP per capita
function findHighestGdpPerCapitaCity(cities) {
  let highestCity = null;
  let highestValue = 0;

  cities.forEach(cityName => {
    const gdp = gdpData[cityName];
    const population = provincePopulationData[cityName];
    if (gdp && population) {
      const perCapita = gdp / population;
      if (perCapita > highestValue) {
        highestValue = perCapita;
        highestCity = cityName;
      }
    }
  });

  return highestCity ? { 
    name: highestCity, 
    value: highestValue 
  } : null;
}

// Reset selection
function resetSelection() {
  ctx.clearRect(0, 0, selectionCanvas.width, selectionCanvas.height);
  document.querySelectorAll(".city").forEach(city => {
    city.style.fill = "";
    city.classList.remove("selected");
  });
  if (tooltip) tooltip.style.opacity = "0";
  selectedCities = [];
  updateComparisonSection(0, []);
}

// Show country flag
function showCountryFlag(countryName, elementId = 'country-flag') {
  const flagElement = document.getElementById(elementId);
  const countryCode = countryCodes[countryName]?.toLowerCase();
  
  if (countryCode && flagElement) {
    flagElement.src = `https://flagcdn.com/${countryCode}.svg`;
    flagElement.alt = `${countryName} flag`;
    flagElement.style.display = 'inline-block';
  } else if (flagElement) {
    flagElement.style.display = 'none';
  }
}

// Format numbers
function formatNumber(num, decimals = 1) {
  return new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num);
}

// Update comparison section
function updateComparisonSection(totalGdp, cities = []) {
  // Basic info
  if (totalGdpElement) totalGdpElement.textContent = formatNumber(totalGdp, 0);
  
  const cityNames = cities.map(c => c.charAt(0).toUpperCase() + c.slice(1));
  if (selectedCitiesElement) selectedCitiesElement.textContent = cityNames.join(", ") || "-";
  if (cityCountElement) cityCountElement.textContent = cities.length;

  // Average GDP
  const averageGdp = cities.length > 0 ? Math.round(totalGdp / cities.length) : 0;
  if (averageGdpElement) averageGdpElement.textContent = formatNumber(averageGdp, 0);

  // Total population and GDP per capita
  const totalPopulation = cities.reduce((sum, city) => sum + (provincePopulationData[city] || 0), 0);
  if (totalPopulationElement) totalPopulationElement.textContent = formatNumber(totalPopulation, 0);
  const gdpPerCapita = totalPopulation > 0 ? totalGdp / totalPopulation : 0;

  if (totalGdp > 0) {
    // 1. Total GDP comparison
    const closestCountry = findClosestCountry(totalGdp);
    if (closestCountryElement) closestCountryElement.textContent = closestCountry.name;
    if (closestCountryGdpElement) closestCountryGdpElement.textContent = formatNumber(closestCountry.gdp, 0);
    showCountryFlag(closestCountry.name);

    const difference = totalGdp - closestCountry.gdp;
    if (gdpDifferenceElement) {
      gdpDifferenceElement.textContent = formatNumber(Math.abs(difference), 0);
      gdpDifferenceElement.className = difference >= 0 ? "positive-difference" : "negative-difference";
    }

    const percentageOfTurkeyGdp = ((totalGdp / turkeyTotalGdp) * 100).toFixed(2);
    if (percentageOfTurkeyGdpElement) percentageOfTurkeyGdpElement.textContent = percentageOfTurkeyGdp;

    // 2. GDP per capita comparison
    if (gdpPerCapitaElement) gdpPerCapitaElement.textContent = formatNumber(gdpPerCapita);
    
    const closestCountryPerCapita = findClosestCountryByPerCapita(gdpPerCapita);
    if (closestCountryPerCapitaElement) closestCountryPerCapitaElement.textContent = closestCountryPerCapita.name;
    if (closestCountryPerCapitaValueElement) {
      closestCountryPerCapitaValueElement.textContent = formatNumber(closestCountryPerCapita.perCapita);
    }
    showCountryFlag(closestCountryPerCapita.name, 'country-flag-per-capita');

    const perCapitaDifference = ((gdpPerCapita - closestCountryPerCapita.perCapita) / closestCountryPerCapita.perCapita * 100).toFixed(2);
    if (gdpPerCapitaDifferenceElement) {
      gdpPerCapitaDifferenceElement.textContent = Math.abs(perCapitaDifference);
      gdpPerCapitaDifferenceElement.className = perCapitaDifference >= 0 ? "positive-difference" : "negative-difference";
    }

    // 3. Highest GDP per capita city
    const highestPerCapitaCity = findHighestGdpPerCapitaCity(cities);
    if (highestPerCapitaCity) {
      if (highestGdpPerCapitaCityElement) {
        highestGdpPerCapitaCityElement.textContent = highestPerCapitaCity.name.charAt(0).toUpperCase() + highestPerCapitaCity.name.slice(1);
      }
      if (highestGdpPerCapitaValueElement) {
        highestGdpPerCapitaValueElement.textContent = formatNumber(highestPerCapitaCity.value);
      }
    } else {
      if (highestGdpPerCapitaCityElement) highestGdpPerCapitaCityElement.textContent = "-";
      if (highestGdpPerCapitaValueElement) highestGdpPerCapitaValueElement.textContent = "-";
    }

    // 4. Comparison with Turkey average
    const turkeyComparison = ((gdpPerCapita - turkeyGdpPerCapita) / turkeyGdpPerCapita * 100).toFixed(2);
    if (turkeyComparisonElement) {
      turkeyComparisonElement.textContent = Math.abs(turkeyComparison);
      turkeyComparisonElement.className = turkeyComparison >= 0 ? "positive-difference" : "negative-difference";
    }
  } else {
    // Reset state
    if (closestCountryElement) closestCountryElement.textContent = "-";
    if (closestCountryGdpElement) closestCountryGdpElement.textContent = "-";
    if (gdpDifferenceElement) gdpDifferenceElement.textContent = "-";
    if (percentageOfTurkeyGdpElement) percentageOfTurkeyGdpElement.textContent = "-";
    if (countryFlagElement) countryFlagElement.style.display = 'none';

    if (gdpPerCapitaElement) gdpPerCapitaElement.textContent = "0";
    if (closestCountryPerCapitaElement) closestCountryPerCapitaElement.textContent = "-";
    if (closestCountryPerCapitaValueElement) closestCountryPerCapitaValueElement.textContent = "-";
    if (gdpPerCapitaDifferenceElement) gdpPerCapitaDifferenceElement.textContent = "-";
    if (countryFlagPerCapitaElement) countryFlagPerCapitaElement.style.display = 'none';
    if (highestGdpPerCapitaCityElement) highestGdpPerCapitaCityElement.textContent = "-";
    if (highestGdpPerCapitaValueElement) highestGdpPerCapitaValueElement.textContent = "-";
    if (turkeyComparisonElement) turkeyComparisonElement.textContent = "-";
    if (totalPopulationElement) totalPopulationElement.textContent = "0";
  }
}

// Mouse selection functions
function handleMouseDown(e) {
  const rect = selectionCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  isSelecting = true;
  selectionPath = [{ x, y }];
  ctx.clearRect(0, 0, selectionCanvas.width, selectionCanvas.height);
}

function handleMouseMove(e) {
  if (!isSelecting) return;
  
  const rect = selectionCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  selectionPath.push({ x, y });
  ctx.clearRect(0, 0, selectionCanvas.width, selectionCanvas.height);
  
  ctx.beginPath();
  ctx.moveTo(selectionPath[0].x, selectionPath[0].y);
  selectionPath.forEach(point => ctx.lineTo(point.x, point.y));
  ctx.closePath();
  
  ctx.strokeStyle = "rgba(0, 0, 255, 0.7)";
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.stroke();
}

function handleMouseUp(e) {
  if (!isSelecting) return;
  isSelecting = false;
  
  const rect = selectionCanvas.getBoundingClientRect();
  let totalGdp = 0;
  const selected = [];

  document.querySelectorAll(".city").forEach(city => {
    const cityRect = city.getBoundingClientRect();
    const cityCenter = {
      x: cityRect.left + cityRect.width / 2 - rect.left,
      y: cityRect.top + cityRect.height / 2 - rect.top
    };

    const isInside = isPointInPolygon(cityCenter, selectionPath);
    if (isInside) {
      const cityName = city.getAttribute("data-city-name").toLowerCase();
      const gdp = gdpData[cityName];
      if (gdp) {
        totalGdp += gdp;
        city.style.fill = "rgba(255, 0, 0, 0.5)";
        city.classList.add("selected");
        selected.push(cityName);
      }
    }
  });

  selectedCities = selected;
  updateComparisonSection(totalGdp, selectedCities);
}

// City click handler
function handleCityClick(event) {
  const rect = selectionCanvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  
  let clickedCity = null;
  document.querySelectorAll(".city").forEach(city => {
    const cityRect = city.getBoundingClientRect();
    const cityCenterX = cityRect.left + cityRect.width/2 - rect.left;
    const cityCenterY = cityRect.top + cityRect.height/2 - rect.top;
    
    const distance = Math.sqrt(
      Math.pow(clickX - cityCenterX, 2) + 
      Math.pow(clickY - cityCenterY, 2)
    );
    
    if (distance <= cityRect.width/2) {
      clickedCity = city;
    }
  });

  if (clickedCity) {
    document.querySelectorAll(".city").forEach(c => {
      c.style.fill = "";
      c.classList.remove("selected");
    });

    const cityName = clickedCity.getAttribute("data-city-name").toLowerCase();
    const gdp = gdpData[cityName];
    
    clickedCity.style.fill = "rgba(255, 0, 0, 0.7)";
    clickedCity.classList.add("selected");
    selectedCities = [cityName];
    updateComparisonSection(gdp, selectedCities);

    if (tooltip) {
      tooltip.innerHTML = `
        <strong>${cityName.charAt(0).toUpperCase() + cityName.slice(1)}</strong><br>
        Toplam GSYİH: ${formatNumber(gdp, 0)}
      `;
      tooltip.style.opacity = "1";
      setTimeout(() => tooltip.style.opacity = "0", 3000);
    }
  }
}

// Add/remove city labels
function addCityLabels() {
  const svgMap = document.getElementById("svg-turkey-map");
  const cities = document.querySelectorAll(".city");

  cities.forEach(city => {
    const cityName = city.getAttribute("data-city-name");
    const cityBox = city.getBBox();

    if (!document.querySelector(`.city-label[data-city="${cityName}"]`)) {
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", cityBox.x + cityBox.width/2);
      text.setAttribute("y", cityBox.y + cityBox.height/2);
      text.setAttribute("class", "city-label");
      text.setAttribute("data-city", cityName);
      text.textContent = cityName;
      svgMap.appendChild(text);
    }
  });
}

function removeCityLabels() {
  document.querySelectorAll(".city-label").forEach(label => label.remove());
}

// Initialize
document.addEventListener("DOMContentLoaded", function() {
  // Set up event listeners
  const selectModeBtn = document.getElementById("select-mode");
  const clickModeBtn = document.getElementById("click-mode");
  const toggleNamesBtn = document.getElementById("toggle-city-names");
  const resetBtn = document.getElementById("reset-selection");

  if (selectModeBtn && clickModeBtn) {
    selectModeBtn.addEventListener("click", () => {
      mode = "select";
      selectModeBtn.classList.add("active");
      clickModeBtn.classList.remove("active");
    });

    clickModeBtn.addEventListener("click", () => {
      mode = "click";
      clickModeBtn.classList.add("active");
      selectModeBtn.classList.remove("active");
    });
  }

  if (toggleNamesBtn) {
    toggleNamesBtn.addEventListener("click", () => {
      showingCityNames = !showingCityNames;
      toggleNamesBtn.textContent = showingCityNames ? "Hide Names" : "Show Names";
      
      if (showingCityNames) addCityLabels();
      else removeCityLabels();
    });
  }

  if (resetBtn) resetBtn.addEventListener("click", resetSelection);

  // Mouse events
  if (selectionCanvas) {
    selectionCanvas.addEventListener("mousedown", handleMouseDown);
    selectionCanvas.addEventListener("mousemove", handleMouseMove);
    selectionCanvas.addEventListener("mouseup", handleMouseUp);
    
    // Click mode handler
    selectionCanvas.addEventListener("click", (e) => {
      if (mode === "click") {
        handleCityClick(e);
      }
    });
  }

  // City hover interactions
  document.querySelectorAll(".city").forEach(city => {
    city.addEventListener("mouseenter", () => {
      const cityName = city.getAttribute("data-city-name").toLowerCase();
      const gdp = gdpData[cityName];
      if (gdp && tooltip) {
        tooltip.innerHTML = `<strong>${cityName.charAt(0).toUpperCase() + cityName.slice(1)}</strong><br>Toplam GSYİH: ${formatNumber(gdp, 0)}`;
        tooltip.style.opacity = "1";
      }
    });

    city.addEventListener("mousemove", (event) => {
      if (tooltip && mapContainer) {
        const rect = mapContainer.getBoundingClientRect();
        tooltip.style.left = `${event.clientX - rect.left + 10}px`;
        tooltip.style.top = `${event.clientY - rect.top + 10}px`;
      }
    });

    city.addEventListener("mouseleave", () => {
      if (tooltip && !city.classList.contains("selected")) {
        tooltip.style.opacity = "0";
      }
    });
  });

  // Initial setup
  resizeCanvas();
  updateComparisonSection(0, []);
});

window.addEventListener("resize", resizeCanvas);