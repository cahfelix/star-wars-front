/**
 * Mapeamento de IDs para nomes de Planetas e Espécies
 * Baseado na SWAPI (https://swapi.dev/api)
 */

// Planetas principais de Star Wars
export const PLANETAS = {
  "1": "Tatooine",
  "2": "Alderaan",
  "3": "Yavin IV",
  "4": "Hoth",
  "5": "Dagobah",
  "6": "Bespin",
  "7": "Endor",
  "8": "Naboo",
  "9": "Coruscant",
  "10": "Kamino",
  "11": "Geonosis",
  "12": "Utapau",
  "13": "Mustafar",
  "14": "Kashyyyk",
  "15": "Polis Massa",
  "16": "Mygeeto",
  "17": "Felucia",
  "18": "Cato Neimoidia",
  "19": "Saleucami",
  "20": "Stewjon",
  "21": "Eriadu",
  "22": "Corellia",
  "23": "Rodia",
  "24": "Nal Hutta",
  "25": "Dantooine",
  "26": "Bestine IV",
  "27": "Ord Mantell",
  "28": "Unknown",
  "29": "Trandosha",
  "30": "Socorro",
  "31": "Mon Cala",
  "32": "Chandrila",
  "33": "Sullust",
  "34": "Toydaria",
  "35": "Malastare",
  "36": "Dathomir",
  "37": "Ryloth",
  "38": "Aleen Minor",
  "39": "Vulpter",
  "40": "Troiken",
  "41": "Tund",
  "42": "Haruun Kal",
  "43": "Cerea",
  "44": "Glee Anselm",
  "45": "Iridonia",
  "46": "Tholoth",
  "47": "Iktotch",
  "48": "Quermia",
  "49": "Dorin",
  "50": "Champala",
  "51": "Mirial",
  "52": "Serenno",
  "53": "Concord Dawn",
  "54": "Zolan",
  "55": "Ojom",
  "56": "Skako",
  "57": "Muunilinst",
  "58": "Shili",
  "59": "Kalee",
  "60": "Umbara"
}

// Espécies de Star Wars
export const ESPECIES = {
  "1": "Humano",
  "2": "Droid",
  "3": "Wookiee",
  "4": "Rodian",
  "5": "Hutt",
  "6": "Yoda's species",
  "7": "Trandoshan",
  "8": "Mon Calamari",
  "9": "Ewok",
  "10": "Sullustan",
  "11": "Neimodian",
  "12": "Gungan",
  "13": "Toydarian",
  "14": "Dug",
  "15": "Twi'lek",
  "16": "Aleena",
  "17": "Vulptereen",
  "18": "Xexto",
  "19": "Toong",
  "20": "Cerean",
  "21": "Nautolan",
  "22": "Zabrak",
  "23": "Tholothian",
  "24": "Iktotchi",
  "25": "Quermian",
  "26": "Kel Dor",
  "27": "Chagrian",
  "28": "Geonosian",
  "29": "Mirialan",
  "30": "Clawdite",
  "31": "Besalisk",
  "32": "Kaminoan",
  "33": "Skakoan",
  "34": "Muun",
  "35": "Togruta",
  "36": "Kaleesh",
  "37": "Pau'an"
}

export function obterNomePlaneta(id) {
  return PLANETAS[id] || "Desconhecido"
}

export function obterNomeEspecie(id) {
  return ESPECIES[id] || "Humano"
}

