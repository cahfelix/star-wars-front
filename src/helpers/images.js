const LOCAL_PERSON_IMAGES = {
  "1": "/images/personagens/luke.png",                    // Luke Skywalker
  "2": "/images/personagens/c3po.png",                    // C-3PO
  "3": "/images/personagens/r2d2.jpg",                    // R2-D2
  "4": "/images/personagens/vader.png",                   // Darth Vader
  "5": "/images/personagens/leia.jpg",                    // Leia Organa
  "6": "/images/personagens/owen-lars.jpeg",              // Owen Lars
  "7": "/images/personagens/beru-whitesun-lars.jpg",      // Beru Whitesun Lars
  "8": "/images/personagens/r5d4.jpeg",                   // R5-D4
  "9": "/images/personagens/biggs-darklighter.jpeg",      // Biggs Darklighter
  "10": "/images/personagens/obi-wan.jpg",                // Obi-Wan Kenobi
  "14": "/images/personagens/hansolo.png",                // Han Solo
  "20": "/images/personagens/ioda.png",                   // Yoda
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
