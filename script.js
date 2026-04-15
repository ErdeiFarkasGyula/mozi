const filmek = {
    1: {
        id: 1,
        cim: "A Gyűrűk Ura: A Gyűrű Szövetsége",
        eredetiCim: "The Lord of the Rings: The Fellowship of the Ring",
        ev: 2001,
        rendezoIds: [1],
        iroIds: [2],
        mufajIds: [1, 2],
        hosszPerc: 178,
        korhatar: 12
    },
    2: {
        id: 2,
        cim: "Eredet",
        eredetiCim: "Inception",
        ev: 2010,
        rendezoIds: [3],
        iroIds: [3],
        mufajIds: [3, 4],
        hosszPerc: 148,
        korhatar: 12
    },
    3: {
        id: 3,
        cim: "Interstellar",
        eredetiCim: "Interstellar",
        ev: 2014,
        rendezoIds: [3],
        iroIds: [3],
        mufajIds: [3, 5],
        hosszPerc: 169,
        korhatar: 12
    },
    4: {
        id: 4,
        cim: "A sötét lovag",
        eredetiCim: "The Dark Knight",
        ev: 2008,
        rendezoIds: [3],
        iroIds: [3, 4],
        mufajIds: [6, 4],
        hosszPerc: 152,
        korhatar: 16
    },
    5: {
        id: 5,
        cim: "Shrek",
        eredetiCim: "Shrek",
        ev: 2001,
        rendezoIds: [5],
        iroIds: [6],
        mufajIds: [7, 2],
        hosszPerc: 90,
        korhatar: 6
    }
}

const szemelyek = {
    1: { id: 1, nev: "Peter Jackson" },
    2: { id: 2, nev: "J.R.R. Tolkien" },
    3: { id: 3, nev: "Christopher Nolan" },
    4: { id: 4, nev: "Jonathan Nolan" },
    5: { id: 5, nev: "Andrew Adamson" },
    6: { id: 6, nev: "William Steig" }
}

const mufajok = {
    1: { id: 1, nev: "fantasy" },
    2: { id: 2, nev: "kaland" },
    3: { id: 3, nev: "sci-fi" },
    4: { id: 4, nev: "akció" },
    5: { id: 5, nev: "dráma" },
    6: { id: 6, nev: "krimi" },
    7: { id: 7, nev: "animáció" }
}

const vetitesek = {
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
        teremId: 3,
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
        filmId: 5,
        teremId: 3,
        kezdes: "2024-06-03T16:00:00",
        ar: 2000,
        nyelv: "hu",
        felirat: null
    }
}

const termek = {
    1: {
        id: 1,
        sorok: {
            1: 8,
            2: 12,
            3: 16
        }
    },
    2: {
        id: 2,
        sorok: {
            1: 10,
            2: 14,
            3: 18
        }
    }
}

const foglalasok = {
    1: {
        id: 1,
        nev: "Pop Simon",
        vetitesId: 1,
        hely: { sor: 2, szek: 5 }
    },
    2: {
        id: 2,
        nev: "Tüdő R. Ákos",
        vetitesId: 1,
        hely: { sor: 3, szek: 10 }
    },
    3: {
        id: 3,
        nev: "Agyalá Gyula",
        vetitesId: 3,
        hely: { sor: 1, szek: 3 }
    },
    4: {
        id: 4,
        nev: "Füty Imre",
        vetitesId: 4,
        hely: { sor: 2, szek: 7 }
    },
    5: {
        id: 5,
        nev: "Szék Elek",
        vetitesId: 6,
        hely: { sor: 1, szek: 1 }
    }
}