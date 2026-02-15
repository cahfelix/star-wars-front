const LOCAL_PERSON_IMAGES = {
  "1": "/images/personagens/luke-skywalker.jpg",          // Luke Skywalker
  "2": "/images/personagens/c-3po.jpg",                   // C-3PO
  "3": "/images/personagens/r2-d2.jpg",                   // R2-D2
  "4": "/images/personagens/darth-vader.jpg",             // Darth Vader
  "5": "/images/personagens/leia-organa.jpg",             // Leia Organa
  "6": "/images/personagens/owen-lars.jpg",               // Owen Lars
  "7": "/images/personagens/beru-whitesun-lars.jpg",      // Beru Whitesun Lars
  "8": "/images/personagens/r5-d4.jpg",                   // R5-D4
  "9": "/images/personagens/biggs-darklighter.jpg",       // Biggs Darklighter
  "10": "/images/personagens/obi-wan-kenobi.jpg",         // Obi-Wan Kenobi
  "11": "/images/personagens/anakin-skywalker.jpg",       // Anakin Skywalker
  "12": "/images/personagens/wilhuff-tarkin.jpg",         // Wilhuff Tarkin
  "13": "/images/personagens/chewbacca.jpg",              // Chewbacca
  "14": "/images/personagens/han-solo.jpg",               // Han Solo
  "15": "/images/personagens/greedo.jpg",                 // Greedo
  "16": "/images/personagens/jabba-desilijic-tiure.jpg",  // Jabba Desilijic Tiure
  "18": "/images/personagens/wedge-antilles.jpg",         // Wedge Antilles
  "19": "/images/personagens/jek-tono-porkins.jpg",       // Jek Tono Porkins
  "20": "/images/personagens/yoda.jpg",                   // Yoda
  "21": "/images/personagens/palpatine.jpg",              // Palpatine
  "22": "/images/personagens/boba-fett.jpg",              // Boba Fett
  "23": "/images/personagens/ig-88.jpg",                  // IG-88
  "24": "/images/personagens/bossk.jpg",                  // Bossk
  "25": "/images/personagens/lando-calrissian.jpg",       // Lando Calrissian
  "26": "/images/personagens/lobot.jpg",                  // Lobot
  "27": "/images/personagens/ackbar.jpg",                 // Ackbar
  "28": "/images/personagens/mon-mothma.jpg",             // Mon Mothma
  "29": "/images/personagens/arvel-crynyd.jpg",           // Arvel Crynyd
  "30": "/images/personagens/wicket-systri-warrick.jpg",  // Wicket Systri Warrick
  "31": "/images/personagens/nien-nunb.jpg",              // Nien Nunb
  "32": "/images/personagens/qui-gon-jinn.jpg",           // Qui-Gon Jinn
  "33": "/images/personagens/nute-gunray.jpg",            // Nute Gunray
  "34": "/images/personagens/finis-valorum.jpg",          // Finis Valorum
  "35": "/images/personagens/padme-amidala.jpg",          // Padmé Amidala
  "36": "/images/personagens/jar-jar-binks.jpg",          // Jar Jar Binks
  "37": "/images/personagens/roos-tarpals.jpg",           // Roos Tarpals
  "38": "/images/personagens/rugor-nass.jpg",             // Rugor Nass
  "39": "/images/personagens/ric-olie.jpg",               // Ric Olié
  "40": "/images/personagens/watto.jpg",                  // Watto
  "41": "/images/personagens/sebulba.jpg",                // Sebulba
  "42": "/images/personagens/quarsh-panaka.jpg",          // Quarsh Panaka
  "43": "/images/personagens/shmi-skywalker.jpg",         // Shmi Skywalker
  "44": "/images/personagens/darth-maul.jpg",             // Darth Maul
  "45": "/images/personagens/bib-fortuna.jpg",            // Bib Fortuna
  "46": "/images/personagens/ayla-secura.jpg",            // Ayla Secura
  "47": "/images/personagens/ratts-tyerel.jpg",           // Ratts Tyerel
  "48": "/images/personagens/dud-bolt.jpg",               // Dud Bolt
  "49": "/images/personagens/gasgano.jpg",                // Gasgano
  "50": "/images/personagens/ben-quadinaros.jpg",         // Ben Quadinaros
  "51": "/images/personagens/mace-windu.jpg",             // Mace Windu
  "52": "/images/personagens/ki-adi-mundi.jpg",           // Ki-Adi-Mundi
  "53": "/images/personagens/kit-fisto.jpg",              // Kit Fisto
  "54": "/images/personagens/eeth-koth.jpg",              // Eeth Koth
  "55": "/images/personagens/adi-gallia.jpg",             // Adi Gallia
  "56": "/images/personagens/saesee-tiin.jpg",            // Saesee Tiin
  "57": "/images/personagens/yarael-poof.jpg",            // Yarael Poof
  "58": "/images/personagens/plo-koon.jpg",               // Plo Koon
  "59": "/images/personagens/mas-amedda.jpg",             // Mas Amedda
  "60": "/images/personagens/gregar-typho.jpg",           // Gregar Typho
  "61": "/images/personagens/corde.jpg",                  // Cordé
  "62": "/images/personagens/cliegg-lars.jpg",            // Cliegg Lars
  "63": "/images/personagens/poggle-the-lesser.jpg",      // Poggle the Lesser
  "64": "/images/personagens/luminara-unduli.jpg",        // Luminara Unduli
  "65": "/images/personagens/barriss-offee.jpg",          // Barriss Offee
  "66": "/images/personagens/dorme.jpg",                  // Dormé
  "67": "/images/personagens/dooku.jpg",                  // Dooku
  "68": "/images/personagens/bail-prestor-organa.jpg",    // Bail Prestor Organa
  "69": "/images/personagens/jango-fett.jpg",             // Jango Fett
  "70": "/images/personagens/zam-wesell.jpg",             // Zam Wesell
  "71": "/images/personagens/dexter-jettster.jpg",        // Dexter Jettster
  "72": "/images/personagens/lama-su.jpg",                // Lama Su
  "73": "/images/personagens/taun-we.jpg",                // Taun We
  "74": "/images/personagens/jocasta-nu.jpg",             // Jocasta Nu
  "75": "/images/personagens/r4-p17.jpg",                 // R4-P17
  "76": "/images/personagens/wat-tambor.jpg",             // Wat Tambor
  "77": "/images/personagens/san-hill.jpg",               // San Hill
  "78": "/images/personagens/shaak-ti.jpg",               // Shaak Ti
  "79": "/images/personagens/grievous.jpg",               // Grievous
  "80": "/images/personagens/tarfful.jpg",                // Tarfful
  "81": "/images/personagens/raymus-antilles.jpg",        // Raymus Antilles
  "82": "/images/personagens/sly-moore.jpg",              // Sly Moore
  "83": "/images/personagens/tion-medon.jpg",             // Tion Medon
}

const LOCAL_STARSHIP_IMAGES = {
  "2": "/images/naves/cr90-corvette.jpg",                  // CR90 corvette
  "3": "/images/naves/star-destroyer.jpg",                 // Star Destroyer
  "5": "/images/naves/sentinel-class-landing-craft.jpg",   // Sentinel-class landing craft
  "9": "/images/naves/death-star.jpg",                     // Death Star
  "10": "/images/naves/millennium-falcon.jpg",             // Millennium Falcon
  "11": "/images/naves/y-wing.jpg",                        // Y-wing
  "12": "/images/naves/x-wing.jpg",                        // X-wing
  "13": "/images/naves/tie-advanced-x1.jpg",               // TIE Advanced x1
  "15": "/images/naves/executor.jpg",                      // Executor
  "17": "/images/naves/rebel-transport.jpg",               // Rebel transport
  "21": "/images/naves/slave-1.jpg",                       // Slave 1
  "22": "/images/naves/imperial-shuttle.jpg",              // Imperial shuttle
  "23": "/images/naves/death-star-2.jpg",                  // Death Star II
  "28": "/images/naves/a-wing.jpg",                        // A-wing
  "29": "/images/naves/b-wing.jpg",                        // B-wing
  "31": "/images/naves/republic-cruiser.jpg",              // Republic Cruiser
  "32": "/images/naves/naboo-fighter.jpg",                 // Naboo fighter
  "39": "/images/naves/naboo-royal.jpg",                   // Naboo Royal Starship
  "40": "/images/naves/scimitar.jpg",                      // Scimitar
  "41": "/images/naves/j-type.jpg",                        // J-type diplomatic barge
  "43": "/images/naves/aa9.jpg",                           // AA-9 Coruscant freighter
  "47": "/images/naves/v-wing.jpg",                        // V-wing
  "48": "/images/naves/jedi-starfighter.jpg",              // Jedi starfighter
  "49": "/images/naves/h-type.jpg",                        // H-type Nubian yacht
  "58": "/images/naves/solar-sailer.jpg",                  // Solar Sailer
  "59": "/images/naves/trade-federation.jpg",              // Trade Federation cruiser
  "61": "/images/naves/theta.jpg",                         // Theta-class T-2c shuttle
  "63": "/images/naves/republic-attack.jpg",               // Republic attack cruiser
  "64": "/images/naves/naboo-star-skiff.jpg",              // Naboo star skiff
  "65": "/images/naves/jedi-interceptor.jpg",              // Jedi Interceptor
  "66": "/images/naves/arc-170.jpg",                       // arc-170
  "68": "/images/naves/banking-clan.jpg",                  // Banking clan frigte
  "74": "/images/naves/belbullab.jpg",                     // Belbullab-22 starfighter
  "75": "/images/naves/v-19.jpg",                          // V-19 Torrent starfighter
}

const LOCAL_SPECIES_IMAGES = {
  "1": "/images/especies/human.jpg",             // Human
  "2": "/images/especies/droid.jpg",             // Droid
  "3": "/images/especies/wookiee.jpg",           // Wookiee
  "4": "/images/especies/rodian.jpg",            // Rodian
  "5": "/images/especies/hutt.jpg",              // Hutt
  "6": "/images/especies/yodas.jpg",              // Yoda's species
  "7": "/images/especies/trandoshan.jpg",        // Trandoshan
  "8": "/images/especies/mon-calamari.jpg",      // Mon Calamari
  "9": "/images/especies/ewok.jpg",              // Ewok
  "10": "/images/especies/sullustan.jpg",        // Sullustan
  "11": "/images/especies/neimodian.jpg",        // Neimodian
  "12": "/images/especies/gungan.jpg",           // Gungan
  "13": "/images/especies/toydarian.jpg",        // Toydarian
  "14": "/images/especies/dug.jpg",              // Dug
  "15": "/images/especies/twilek.jpg",           // Twi'lek
  "16": "/images/especies/aleena.jpg",           // Aleena
  "17": "/images/especies/vulptereen.jpg",       // Vulptereen
  "18": "/images/especies/xexto.jpg",            // Xexto
  "19": "/images/especies/toong.jpg",            // Toong
  "20": "/images/especies/cerean.jpg",           // Cerean
  "21": "/images/especies/nautolan.jpg",         // Nautolan
  "22": "/images/especies/zabrak.jpg",           // Zabrak
  "23": "/images/especies/tholothian.jpg",       // Tholothian
  "24": "/images/especies/iktotchi.jpg",         // Iktotchi
  "25": "/images/especies/quermian.jpg",         // Quermian
  "26": "/images/especies/keldor.jpg",           // Kel Dor
  "27": "/images/especies/chagrian.jpg",         // Chagrian
  "28": "/images/especies/geonosian.jpg",        // Geonosian
  "29": "/images/especies/mirialan.jpg",         // Mirialan
  "30": "/images/especies/clawdite.jpg",         // Clawdite
  "31": "/images/especies/besalisk.jpg",         // Besalisk
  "32": "/images/especies/kaminoan.jpg",         // Kaminoan
  "33": "/images/especies/skakoan.jpg",          // Skakoan
  "34": "/images/especies/muun.jpg",             // Muun
  "35": "/images/especies/togruta.jpg",          // Togruta
  "36": "/images/especies/kaleesh.jpg",          // Kaleesh
  "37": "/images/especies/pau.jpg",              // Pau'an
}

export function getPersonImage(id) {
  return (
    LOCAL_PERSON_IMAGES[id] ||
    "/images/personagens/placeholder.jpg"
  )
}

export function getStarshipImage(id) {
  return (
    LOCAL_STARSHIP_IMAGES[id] ||
    "/images/naves/placeholder-naves.png"
  )
}

export function getSpeciesImage(id) {
  return (
    LOCAL_SPECIES_IMAGES[id] ||
    "/images/especies/placeholder.png"
  )
}
