const filmCimElem = document.getElementById("filmCim");
const filmEredetiCimElem = document.getElementById("filmEredetiCim");
const filmLeirasElem = document.getElementById("filmLeiras");
const filmHosszElem = document.getElementById("filmHossz");
const filmKorhatarElem = document.getElementById("filmKorhatar");
const filmRendezokElem = document.getElementById("filmRendezok");
const filmIrokElem = document.getElementById("filmIrok");
const filmMufajokElem = document.getElementById("filmMufajok");
const filmPoszterElem = document.getElementById("filmPoszter");

const vetitesekElem = document.getElementById("vetitesekLista");

function filmInfoBetoltese() {
    const urlParams = new URLSearchParams(window.location.search);
    const filmId = parseInt(urlParams.get("id"));
    const film = getFilm(filmId);

    if (!film) {
        filmCimElem.textContent = "Film nem található";
        filmEredetiCimElem.textContent = "";
        filmLeirasElem.textContent = "";
        filmHosszElem.textContent = "";
        filmKorhatarElem.textContent = "";
        filmRendezokElem.textContent = "";
        filmIrokElem.textContent = "";
        filmMufajokElem.textContent = "";
        filmPoszterElem.src = "";
        filmPoszterElem.alt = "";
        return;
    }

    filmCimElem.textContent = `${film.cim} (${film.ev})`;
    filmEredetiCimElem.textContent = film.eredetiCim;
    filmLeirasElem.textContent = film.leiras;
    filmHosszElem.textContent = `${film.hosszPerc} perc`;
    filmKorhatarElem.textContent = `${film.korhatar}+`;

    const rendezokMapped = film.rendezoIds.map(id => szemelyek[id] ? szemelyek[id].nev : "Ismeretlen").join(", ");
    filmRendezokElem.textContent = rendezokMapped;

    const irokMapped = film.iroIds.map(id => szemelyek[id] ? szemelyek[id].nev : "Ismeretlen").join(", ");
    filmIrokElem.textContent = irokMapped;

    const mufajokMapped = film.mufajIds.map(id => mufajok[id] ? mufajok[id].nev : "Ismeretlen").join(", ");
    filmMufajokElem.textContent = mufajokMapped;

    filmPoszterElem.src = `img/${film.id}.jpg`;
    filmPoszterElem.alt = `${film.cim} poszter`;

    const filmVetitesek = Object.values(vetitesek).filter(v => v.filmId === film.id);
    if (filmVetitesek.length > 0) {
        vetitesekElem.appendChild(UjFilmvetitesElem(filmVetitesek));
    } else {
        vetitesekElem.innerHTML = "<p>Nincsenek vetítések ehhez a filmhez.</p>";
    }
}

function UjFilmvetitesElem(filmVetitesek) {
    const ul = document.createElement("ul");
    filmVetitesek.forEach(vetites => {
        const li = document.createElement("li");
        const terem = termek[vetites.teremId] ? termek[vetites.teremId].nev : "Ismeretlen terem";
        const kezdes = new Date(vetites.kezdes).toLocaleString();
        li.innerHTML = `${terem} - ${kezdes} - ${vetites.nyelv.toUpperCase()}${vetites.felirat ? ` (Felirat: ${vetites.felirat.toUpperCase()})` : ""} - ${vetites.ar} Ft <button onclick="window.location.href='foglalas.html?vetitesId=${vetites.id}'">Foglalás</button>`;
        ul.appendChild(li);
    });
    return ul;
};

//Adatok betöltése
document.addEventListener("DOMContentLoaded", filmInfoBetoltese);