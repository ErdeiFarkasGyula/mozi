let filmek = {
    1: {
        id: 1,
        cim: "A Gyűrűk Ura: A Gyűrű Szövetsége",
        eredetiCim: "The Lord of the Rings: The Fellowship of the Ring",
        leiras: "Egy fiatal hobbit, Frodó Baggins, egy varázslatos gyűrűt örököl, amely hatalmas erővel bír. A gyűrűt el kell pusztítani, mielőtt a gonosz Szauron kezébe kerülne. Frodó és társai egy veszélyes útra indulnak, hogy megsemmisítsék a gyűrűt.",
        ev: 2001,
        rendezoIds: [1],
        iroIds: [2],
        mufajIds: [1, 2],
        hosszPerc: 178,
        korhatar: 12
    },
    2: {
        id: 2,
        cim: "A nyolcadik utas: A Halál",
        eredetiCim: "Alien",
        leiras: "Egy űrhajó legénysége egy ismeretlen bolygón egy halálos idegen lényt talál. Az idegen gyorsan elpusztítja a legénység tagjait, és a túlélőknek meg kell találniuk a módját, hogy megállítsák a gyilkos lényt, mielőtt az teljesen elpusztítja őket.",
        ev: 1979,
        rendezoIds: [3],
        iroIds: [3],
        mufajIds: [3, 9],
        hosszPerc: 117,
        korhatar: 16
    },
    3: {
        id: 3,
        cim: "Grand Budapest Hotel",
        eredetiCim: "The Grand Budapest Hotel",
        leiras: "A Grand Budapest Hotel egy híres szálloda, amely a 20. század elején virágzott. A történet a szálloda legendás concierge-ának, Gustave H.-nek és fiatal tanítványának, Zero Moustafának kalandjait követi nyomon, akik egy lopott festmény és egy családi örökség körül bonyolódó rejtélybe keverednek.",
        ev: 2014,
        rendezoIds: [4],
        iroIds: [4],
        mufajIds: [5, 6],
        hosszPerc: 99,
        korhatar: 12
    },
    4: {
        id: 4,
        cim: "Gyula vitéz télen-nyáron",
        eredetiCim: "Gyula vitéz télen-nyáron",
        leiras: "Prohászka Feri egyszerű, hétköznapi ember, sörgyári munkás volt. Ám egyszer a Magyar Televízió tehetségkutatói véletlenül rátaláltak. Az MTV egy 12 részes történelmi kalandfilmsorozat forgatására készült, és a gyártásvezető ragaszkodott ahhoz, hogy a nép egyszerű gyermeke játssza a főhőst, Gyula vitézt. Az újdonsült amatőr színész eleinte kissé idegenkedett a filmgyártás körülményeitől, de hamarosan kedvét lelte benne, és a sorozat is országos népszerűségre tett szert. A tévéfilm törökverő főszereplője az ország új kedvencévé vált. Gyula vitéz sztárrá emelkedett, majd nemzeti hőssé vált. Különösen az asszonyok és a lányok lelkesedtek érte. A kisemberek megszerették, a magukénak érezték, alakja még a nemzeti illúziókat ápoló értelmiség körében is hódított.",
        ev: 1970,
        rendezoIds: [7],
        iroIds: [8],
        mufajIds: [2],
        hosszPerc: 76,
        korhatar: 12
    }
}

let szemelyek = {
    1: { id: 1, nev: "Peter Jackson" },
    2: { id: 2, nev: "J.R.R. Tolkien" },
    3: { id: 3, nev: "Ridley Scott" },
    4: { id: 4, nev: "Wes Anderson" },
    5: { id: 5, nev: "Andrew Adamson" },
    6: { id: 6, nev: "William Steig" },
    7: { id: 7, nev: "Bácskai Lauró István" },
    8: { id: 8, nev: "Vukán György" }
}

let mufajok = {
    1: { id: 1, nev: "fantasy" },
    2: { id: 2, nev: "kaland" },
    3: { id: 3, nev: "sci-fi" },
    4: { id: 4, nev: "akció" },
    5: { id: 5, nev: "dráma" },
    6: { id: 6, nev: "krimi" },
    7: { id: 7, nev: "animáció" },
    8: { id: 8, nev: "vígjáték" },
    9: { id: 9, nev: "horror" }
}

let vetitesek = {
    1: {
        id: 1,
        filmId: 1,
        teremId: 1,
        kezdes: "2024-06-01T19:00:00",
        ar: 2500,
        nyelv: "hu",
        felirat: null
    },
    2: {
        id: 2,
        filmId: 1,
        teremId: 2,
        kezdes: "2024-06-01T21:00:00",
        ar: 3000,
        nyelv: "en",
        felirat: "hu"
    },
    3: {
        id: 3,
        filmId: 2,
        teremId: 1,
        kezdes: "2024-06-02T20:00:00",
        ar: 2800,
        nyelv: "en",
        felirat: "hu"
    },
    4: {
        id: 4,
        filmId: 3,
        teremId: 1,
        kezdes: "2024-06-02T18:00:00",
        ar: 2700,
        nyelv: "en",
        felirat: "hu"
    },
    5: {
        id: 5,
        filmId: 4,
        teremId: 2,
        kezdes: "2024-06-03T21:30:00",
        ar: 3000,
        nyelv: "en",
        felirat: null
    },
    6: {
        id: 6,
        filmId: 3,
        teremId: 2,
        kezdes: "2024-06-03T16:00:00",
        ar: 2000,
        nyelv: "hu",
        felirat: null
    }
}

let termek = {
    1: {
        id: 1,
        nev: "Kisterem",
        sorok: {
            1: 8,
            2: 12,
            3: 16
        }
    },
    2: {
        id: 2,
        nev: "Főterem",
        sorok: {
            1: 10,
            2: 14,
            3: 18
        }
    }
}

let foglalasok = {
    1: {
        id: 1,
        nev: "Pop Simon",
        vetitesId: 1,
        hely: { sor: 2, szek: 5 },
        bankkartya: "1234 5678 9012 3456", //Most ne foglalkozzunk a kiberbiztonsági tényezőkkel...
        ervenyesseg: "12/24",
        cvv: "123"
    },
    2: {
        id: 2,
        nev: "Tüdő R. Ákos",
        vetitesId: 1,
        hely: { sor: 3, szek: 10 },
        bankkartya: "9876 5432 1098 7654",
        ervenyesseg: "11/25",
        cvv: "456"
    },
    3: {
        id: 3,
        nev: "Agyalá Gyula",
        vetitesId: 3,
        hely: { sor: 1, szek: 3 },
        bankkartya: "1111 2222 3333 4444",
        ervenyesseg: "10/23",
        cvv: "789"
    },
    4: {
        id: 4,
        nev: "Füty Imre",
        vetitesId: 4,
        hely: { sor: 2, szek: 7 },
        bankkartya: "5555 6666 7777 8888",
        ervenyesseg: "09/22",
        cvv: "012"
    },
    5: {
        id: 5,
        nev: "Szék Elek",
        vetitesId: 6,
        hely: { sor: 1, szek: 1 },
        bankkartya: "9999 0000 1111 2222",
        ervenyesseg: "08/24",
        cvv: "345"
    }
}

//Segítő függyvény
function getFilm(id) {
    for (const filmId in filmek) {
        if (filmek[filmId].id === id) {
            return filmek[filmId];
        }
    }
    return null;
}