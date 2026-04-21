document.addEventListener("DOMContentLoaded", () => {
    filmInfoBetoltese();
});

function getFilmById(id) {
    for (const filmId in filmek) {
        if (filmek[filmId].id === id) {
            return filmek[filmId];
        }
    }
    return null;
}

function filmInfoBetoltese() {
    const urlParams = new URLSearchParams(window.location.search);
    const filmId = parseInt(urlParams.get("id"));
    const film = getFilmById(filmId);
    if (film) { 
        document.getElementById("filmCim").textContent = `${film.cim} (${film.ev})`;
        document.getElementById("filmEredetiCim").textContent = film.eredetiCim;
        document.getElementById("filmLeiras").textContent = film.leiras;
        document.getElementById("filmHossz").textContent = `${film.hosszPerc} perc`;
        document.getElementById("filmKorhatar").textContent = `${film.korhatar}+`;
        const rendezokMapped = film.rendezoIds.map(id => szemelyek[id] ? szemelyek[id].nev : "Ismeretlen").join(", ");
        document.getElementById("filmRendezok").textContent = rendezokMapped;
        const irokMapped = film.iroIds.map(id => szemelyek[id] ? szemelyek[id].nev : "Ismeretlen").join(", ");
        document.getElementById("filmIrok").textContent = irokMapped;
        const mufajokMapped = film.mufajIds.map(id => mufajok[id] ? mufajok[id].nev : "Ismeretlen").join(", ");
        document.getElementById("filmMufajok").textContent = mufajokMapped;
        document.getElementById("filmPoszter").src = `img/${film.id}.jpg`;
        document.getElementById("filmPoszter").alt = `${film.cim} poszter`;
    } else {
        document.getElementById("filmCim").textContent = "Film nem található";
        document.getElementById("filmEredetiCim").textContent = "";
        document.getElementById("filmLeiras").textContent = "";
        document.getElementById("filmHossz").textContent = "";
        document.getElementById("filmKorhatar").textContent = "";
        document.getElementById("filmRendezok").textContent = "";
        document.getElementById("filmIrok").textContent = "";
        document.getElementById("filmMufajok").textContent = "";
        document.getElementById("filmPoszter").src = "";
        document.getElementById("filmPoszter").alt = "";
    }
}