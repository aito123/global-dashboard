// ─────────────────────────────────────────────────────────────────────────────
// Public Data Sources:
//   • GDP per capita:        World Bank (CC BY 4.0)
//   • Life Expectancy:       Our World in Data / UN (CC BY 4.0)
//   • CO2 per capita (tonnes): Our World in Data / GCP (CC BY 4.0)
//
// All figures are approximate rounded values for educational/demonstration use.
// ─────────────────────────────────────────────────────────────────────────────

export const COUNTRIES = [
  "United States", "China", "Germany", "Japan", "India",
  "United Kingdom", "France", "Brazil", "Canada", "South Korea",
  "Australia", "Spain", "Italy", "Mexico", "Indonesia",
  "Netherlands", "Sweden", "Norway", "Denmark", "Finland",
  "Nigeria", "South Africa", "Kenya", "Ethiopia", "Egypt",
  "Argentina", "Chile", "Colombia", "Peru", "Venezuela",
  "Thailand", "Vietnam", "Philippines", "Malaysia", "Singapore",
  "Russia", "Turkey", "Poland", "Ukraine", "Romania",
];

export const REGIONS = {
  "United States": "North America",  "Canada": "North America",
  "Mexico": "Latin America",         "Brazil": "Latin America",
  "Argentina": "Latin America",      "Chile": "Latin America",
  "Colombia": "Latin America",       "Peru": "Latin America",
  "Venezuela": "Latin America",
  "Germany": "Europe",               "United Kingdom": "Europe",
  "France": "Europe",                "Spain": "Europe",
  "Italy": "Europe",                 "Netherlands": "Europe",
  "Sweden": "Europe",                "Norway": "Europe",
  "Denmark": "Europe",               "Finland": "Europe",
  "Poland": "Europe",                "Ukraine": "Europe",
  "Romania": "Europe",               "Russia": "Europe",
  "Turkey": "Europe/Asia",
  "China": "Asia",                   "Japan": "Asia",
  "India": "Asia",                   "South Korea": "Asia",
  "Indonesia": "Asia",               "Thailand": "Asia",
  "Vietnam": "Asia",                 "Philippines": "Asia",
  "Malaysia": "Asia",                "Singapore": "Asia",
  "Australia": "Oceania",
  "Nigeria": "Africa",               "South Africa": "Africa",
  "Kenya": "Africa",                 "Ethiopia": "Africa",
  "Egypt": "Africa",
};

// GDP per capita (USD, current prices) — selected years
export const GDP_DATA = {
  years: [2000, 2005, 2010, 2015, 2018, 2020, 2022],
  series: {
    "United States": [36450, 44308, 48374, 56803, 63051, 63544, 76329],
    "China":         [959,   1753,  4550,  8067,  9976,  10409, 12720],
    "Germany":       [23708, 34584, 41785, 41365, 47811, 46468, 48432],
    "Japan":         [38532, 36434, 44508, 34524, 39294, 40113, 33821],
    "India":         [443,   718,   1358,  1606,  2017,  1901,  2389],
    "United Kingdom":[28121, 40853, 39435, 44305, 42944, 40284, 45850],
    "France":        [22365, 34810, 40704, 36565, 41761, 39907, 43658],
    "Brazil":        [3749,  4791,  11286, 8814,  8921,  7010,  8917],
    "Canada":        [23930, 35105, 47447, 43521, 46259, 43242, 55522],
    "South Korea":   [12257, 18640, 23087, 27222, 31762, 31496, 32250],
    "Australia":     [21083, 34274, 57353, 56554, 57305, 51693, 64491],
    "Spain":         [14413, 26060, 30527, 25680, 30389, 27059, 29891],
    "Italy":         [19800, 31977, 35845, 30054, 33958, 31288, 34776],
    "Mexico":        [5933,  8197,  9281,  9005,  9673,  8328,  10046],
    "Indonesia":     [857,   1272,  3122,  3346,  3894,  3870,  4788],
    "Netherlands":   [25657, 39338, 50338, 44598, 53583, 52331, 57768],
    "Sweden":        [28906, 43477, 52071, 50813, 55566, 52274, 60029],
    "Norway":        [38066, 67415, 87141, 74449, 82711, 67969, 106149],
    "Denmark":       [30634, 47623, 57930, 53020, 62256, 60909, 68007],
    "Finland":       [23879, 37469, 46408, 42440, 50021, 48681, 53654],
    "Nigeria":       [375,   824,   2294,  2729,  2028,  2097,  2184],
    "South Africa":  [3020,  5261,  7359,  5723,  6374,  5090,  6776],
    "Kenya":         [399,   546,   816,   1335,  1714,  1838,  2081],
    "Ethiopia":      [124,   173,   324,   619,   855,   936,   1021],
    "Egypt":         [1557,  1355,  2645,  3580,  2549,  3569,  4136],
    "Argentina":     [7694,  5097,  10385, 13428, 11633, 8432,  13722],
    "Chile":         [4867,  7641,  12785, 13653, 15923, 12999, 16079],
    "Colombia":      [2502,  3388,  6250,  6039,  6667,  5339,  6533],
    "Peru":          [1980,  2868,  5175,  6121,  6947,  5915,  7126],
    "Venezuela":     [4848,  5967,  13615, 7535,  3388,  1479,  1535],
    "Thailand":      [2008,  2760,  4993,  5815,  7274,  7186,  7066],
    "Vietnam":       [402,   639,   1310,  2066,  2567,  2786,  4163],
    "Philippines":   [1058,  1199,  2155,  2908,  3103,  3299,  3623],
    "Malaysia":      [4005,  5270,  9069,  9503,  11239, 10401, 12364],
    "Singapore":     [23793, 29942, 46570, 53629, 64582, 59797, 82808],
    "Russia":        [1775,  5323,  11635, 9313,  11289, 10003, 15345],
    "Turkey":        [4316,  7297,  10669, 10945, 9346,  8538,  10674],
    "Poland":        [4454,  7964,  12600, 12494, 15431, 15625, 18038],
    "Ukraine":       [636,   1826,  2974,  2125,  3095,  3726,  4534],
    "Romania":       [1650,  4571,  7636,  8987,  12301, 12931, 14862],
  }
};

// Life expectancy at birth (years)
export const LIFE_EXP_DATA = {
  years: [2000, 2005, 2010, 2015, 2018, 2020, 2022],
  series: {
    "United States": [77.0, 77.8, 78.7, 78.7, 78.9, 77.0, 76.1],
    "China":         [71.4, 72.6, 74.8, 76.1, 77.0, 77.9, 78.2],
    "Germany":       [78.2, 79.2, 80.3, 81.0, 81.2, 80.9, 80.6],
    "Japan":         [81.2, 82.1, 83.0, 83.8, 84.2, 84.7, 84.3],
    "India":         [62.3, 64.3, 66.8, 68.3, 69.4, 70.0, 67.2],
    "United Kingdom":[77.9, 79.1, 80.5, 81.2, 81.3, 80.4, 80.7],
    "France":        [79.2, 80.7, 81.7, 82.4, 82.5, 82.3, 82.3],
    "Brazil":        [70.5, 71.9, 73.5, 75.0, 75.7, 76.1, 74.0],
    "Canada":        [79.2, 80.3, 81.2, 82.0, 82.2, 82.3, 82.6],
    "South Korea":   [76.5, 78.5, 80.7, 82.3, 82.7, 83.5, 83.6],
    "Australia":     [79.5, 81.1, 82.0, 82.8, 83.2, 83.4, 83.3],
    "Spain":         [79.4, 80.6, 82.2, 83.0, 83.5, 83.3, 83.2],
    "Italy":         [79.8, 81.1, 82.1, 82.7, 83.2, 82.3, 83.2],
    "Mexico":        [74.1, 75.1, 76.7, 75.0, 75.1, 75.1, 70.2],
    "Indonesia":     [66.4, 67.8, 69.3, 70.8, 71.5, 71.7, 72.0],
    "Netherlands":   [78.2, 79.8, 80.8, 81.7, 82.1, 81.6, 81.6],
    "Sweden":        [79.8, 80.6, 81.6, 82.3, 82.5, 82.4, 82.3],
    "Norway":        [78.9, 80.2, 81.2, 82.4, 82.7, 83.3, 83.2],
    "Denmark":       [77.0, 78.2, 79.7, 80.8, 81.0, 81.4, 81.5],
    "Finland":       [77.8, 79.0, 80.1, 81.4, 81.8, 81.9, 82.1],
    "Nigeria":       [46.3, 48.3, 51.7, 53.6, 54.3, 54.7, 55.2],
    "South Africa":  [57.2, 54.5, 58.0, 63.7, 64.1, 64.3, 64.9],
    "Kenya":         [52.0, 55.0, 60.3, 65.7, 66.7, 66.7, 67.3],
    "Ethiopia":      [50.6, 55.3, 61.3, 64.9, 66.6, 67.0, 67.8],
    "Egypt":         [69.5, 70.7, 71.8, 72.1, 72.1, 72.5, 72.0],
    "Argentina":     [74.2, 75.2, 76.0, 76.5, 76.7, 76.6, 76.7],
    "Chile":         [77.2, 78.4, 79.5, 80.5, 80.7, 80.4, 80.9],
    "Colombia":      [71.2, 72.5, 74.0, 75.5, 77.1, 77.3, 74.9],
    "Peru":          [70.2, 72.2, 74.3, 76.1, 76.7, 77.1, 73.5],
    "Venezuela":     [72.2, 73.7, 74.1, 73.5, 72.1, 72.1, 72.4],
    "Thailand":      [72.1, 73.4, 74.3, 75.5, 77.2, 77.8, 79.4],
    "Vietnam":       [73.3, 74.1, 75.2, 75.6, 75.8, 76.3, 73.7],
    "Philippines":   [67.1, 68.1, 68.5, 69.3, 71.2, 72.7, 68.9],
    "Malaysia":      [72.9, 73.8, 74.5, 75.1, 76.0, 76.1, 74.7],
    "Singapore":     [78.0, 80.0, 82.1, 82.6, 83.5, 83.5, 83.9],
    "Russia":        [65.3, 65.4, 68.9, 71.4, 72.9, 71.5, 66.1],
    "Turkey":        [71.6, 73.4, 75.0, 77.2, 77.9, 76.0, 76.8],
    "Poland":        [74.1, 75.0, 76.4, 77.5, 77.9, 76.2, 76.7],
    "Ukraine":       [68.0, 68.2, 71.0, 71.4, 72.1, 71.8, 69.6],
    "Romania":       [71.2, 72.2, 73.7, 75.0, 75.5, 74.0, 73.8],
  }
};

// CO2 emissions per capita (tonnes)
export const CO2_DATA = {
  years: [2000, 2005, 2010, 2015, 2018, 2020, 2022],
  series: {
    "United States": [20.2, 19.4, 17.3, 15.5, 15.2, 13.7, 14.9],
    "China":         [2.7,  4.4,  6.6,  7.7,  7.9,  7.6,  8.3],
    "Germany":       [10.3, 10.0, 9.7,  8.9,  8.7,  7.3,  8.1],
    "Japan":         [9.6,  9.6,  9.1,  9.5,  8.7,  8.0,  8.1],
    "India":         [1.0,  1.3,  1.6,  1.8,  1.9,  1.7,  1.9],
    "United Kingdom":[9.4,  9.0,  7.9,  6.3,  5.6,  4.7,  5.0],
    "France":        [6.3,  6.2,  5.8,  4.7,  4.6,  4.1,  4.6],
    "Brazil":        [1.9,  2.0,  2.5,  2.6,  2.3,  2.0,  2.2],
    "Canada":        [17.7, 17.1, 15.3, 15.3, 15.6, 13.6, 14.2],
    "South Korea":   [9.3,  10.0, 11.4, 11.7, 12.0, 11.2, 11.6],
    "Australia":     [17.6, 18.2, 17.0, 15.4, 15.5, 14.8, 14.8],
    "Spain":         [7.8,  8.1,  6.7,  5.6,  5.8,  5.0,  5.4],
    "Italy":         [7.8,  8.0,  7.1,  5.7,  5.5,  4.8,  5.0],
    "Mexico":        [3.7,  3.9,  3.9,  3.7,  3.8,  3.1,  3.3],
    "Indonesia":     [1.4,  1.6,  2.0,  2.2,  2.6,  2.5,  2.7],
    "Netherlands":   [11.0, 11.7, 11.0, 9.8,  9.9,  8.5,  8.9],
    "Sweden":        [6.2,  6.0,  5.6,  4.5,  4.2,  3.6,  3.3],
    "Norway":        [8.6,  8.5,  8.9,  8.3,  8.0,  7.2,  7.6],
    "Denmark":       [9.2,  9.4,  8.5,  6.8,  6.4,  5.3,  4.8],
    "Finland":       [10.5, 11.6, 10.4, 8.6,  8.4,  6.8,  6.3],
    "Nigeria":       [0.4,  0.5,  0.5,  0.5,  0.5,  0.4,  0.4],
    "South Africa":  [8.4,  9.5,  9.0,  8.7,  8.1,  7.1,  7.5],
    "Kenya":         [0.2,  0.3,  0.3,  0.4,  0.4,  0.4,  0.4],
    "Ethiopia":      [0.1,  0.1,  0.1,  0.1,  0.1,  0.2,  0.2],
    "Egypt":         [2.1,  2.4,  2.7,  2.3,  2.6,  2.4,  2.6],
    "Argentina":     [3.6,  3.9,  4.5,  4.5,  4.3,  3.7,  4.0],
    "Chile":         [3.5,  4.1,  4.3,  4.8,  5.0,  4.4,  4.5],
    "Colombia":      [1.4,  1.5,  1.6,  1.7,  1.8,  1.5,  1.6],
    "Peru":          [1.1,  1.3,  1.8,  2.0,  2.2,  1.9,  2.1],
    "Venezuela":     [5.8,  5.3,  5.9,  4.5,  2.9,  2.3,  2.4],
    "Thailand":      [2.9,  3.8,  4.5,  4.6,  4.8,  4.3,  4.5],
    "Vietnam":       [0.7,  1.1,  1.7,  2.3,  3.3,  3.3,  3.7],
    "Philippines":   [0.9,  0.9,  0.9,  1.2,  1.5,  1.3,  1.4],
    "Malaysia":      [5.6,  6.6,  7.7,  7.9,  8.4,  7.8,  8.1],
    "Singapore":     [14.6, 12.2, 8.4,  9.4,  9.0,  8.3,  7.9],
    "Russia":        [10.4, 10.9, 11.2, 10.7, 11.0, 10.0, 11.6],
    "Turkey":        [3.5,  4.1,  4.2,  4.7,  5.3,  4.7,  5.5],
    "Poland":        [8.0,  8.1,  8.2,  7.9,  8.6,  7.3,  7.7],
    "Ukraine":       [7.5,  6.9,  6.6,  5.8,  5.3,  4.9,  4.2],
    "Romania":       [4.5,  4.2,  4.0,  3.7,  4.0,  3.4,  3.7],
  }
};

// Latest snapshot (2022) — for scatter plots and overview
export const SNAPSHOT_2022 = COUNTRIES.map(country => ({
  country,
  region: REGIONS[country] || "Other",
  gdp:      GDP_DATA.series[country]?.at(-1)     ?? null,
  lifeExp:  LIFE_EXP_DATA.series[country]?.at(-1) ?? null,
  co2:      CO2_DATA.series[country]?.at(-1)      ?? null,
  gdpGrowth: (() => {
    const s = GDP_DATA.series[country];
    if (!s) return null;
    return (((s.at(-1) - s[0]) / s[0]) * 100).toFixed(1);
  })(),
})).filter(d => d.gdp !== null);

export const REGION_COLORS = {
  "North America": "#f5a623",
  "Latin America": "#fb7185",
  "Europe":        "#38bdf8",
  "Europe/Asia":   "#818cf8",
  "Asia":          "#34d399",
  "Oceania":       "#a3e635",
  "Africa":        "#f472b6",
};
