function teremVizualizalas(teremId) {
    const terem = termek[teremId];
    const teremElem = document.getElementById("teremVizualizacio");
    teremElem.innerHTML = "";
    if (terem) {
        const table = document.createElement("table");
        for (const sor in terem.sorok) {
            const tr = document.createElement("tr");
            for (let szek = 1; szek <= terem.sorok[sor]; szek++) {
                const td = document.createElement("td");
                td.classList.add("szek");
                td.dataset.sor = sor;
                td.dataset.szek = szek;
                td.textContent = `${sor}-${szek}`;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        teremElem.appendChild(table);
    } else {
        teremElem.textContent = "Nincs ilyen terem.";
    }
}

function foglalasVizualizalas(vetitesId) {
    const foglalasokVetitesre = Object.values(foglalasok).filter(f => f.vetitesId === vetitesId);
    foglalasokVetitesre.forEach(foglalas => {
        const helyElem = document.querySelector(`.szek:nth-child(${foglalas.hely.szek}):nth-child(${foglalas.hely.sor})`);
        if (helyElem) {
            helyElem.classList.add("foglalt");
            helyElem.title = foglalas.nev;
        }
    });
}

function szekValasztas(event) {
    const target = event.target;
    if (target.classList.contains("szek") && !target.classList.contains("foglalt")) {
        const sor = target.dataset.sor;
        const szek = target.dataset.szek;
        alert(`Kiválasztott hely: Sor ${sor}, Szek ${szek}`);
        const nev = prompt("Kérem adja meg a nevét:");
        if (nev) {
            const urlParams = new URLSearchParams(window.location.search);
            const vetitesId = parseInt(urlParams.get("vetitesId"));
            foglalasMentese(vetitesId, sor, szek, nev);
            target.classList.add("foglalt");
            target.title = nev;
        }
    }
}

function foglalasMentese(vetitesId, sor, szek, nev) {
    const ujFoglalasId = Object.keys(foglalasok).length + 1;
    foglalasok[ujFoglalasId] = {
        id: ujFoglalasId,
        nev: nev,
        vetitesId: vetitesId,
        hely: { sor: sor, szek: szek }
    };
    alert("Foglalás sikeres!");
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const vetitesId = parseInt(urlParams.get("vetitesId"));
    const vetites = vetitesek[vetitesId];
    if (vetites) {
        teremVizualizalas(vetites.teremId);
        foglalasVizualizalas(vetitesId);
    } else {
        document.getElementById("teremVizualizacio").textContent = "Nincs ilyen vetítés.";
    }
});

document.addEventListener("click", szekValasztas);