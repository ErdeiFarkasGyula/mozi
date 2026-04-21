const filmTarto = document.getElementById("filmTarto");

function filmekBetoltese(filmek) {
    filmTarto.innerHTML = "";
    for (const filmId in filmek) {
        const film = filmek[filmId];
        const filmElem = document.createElement("div");
        filmElem.dataset.filmId = film.id;
        filmElem.classList.add("film");
        filmElem.innerHTML = `
        <img src="img/${film.id}.jpg" alt="${film.cim} poszter" class="film-poszter">
            <h2>${film.cim} (${film.ev})</h2>
            <p><strong>Eredeti cím:</strong> ${film.eredetiCim}</p>
            <p><strong>Leírás:</strong> ${film.leiras}</p>
            <p><strong>Hossz:</strong> ${film.hosszPerc} perc</p>
            <p><strong>Korhatár:</strong> ${film.korhatar}+</p>
            
        `;
        filmTarto.appendChild(filmElem);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    filmekBetoltese(filmek);
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("film") || event.target.closest(".film")) {
        const filmElem = event.target.closest(".film");
        const filmId = parseInt(filmElem.dataset.filmId);
        const film = getFilm(filmId);
        if (film) {
            window.location.href = `film_nezo.html?id=${film.id}`;
        }
    }
});