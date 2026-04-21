function teremVizualizalas(teremId) {
    const terem = termek[teremId];
    const teremElem = document.getElementById("teremVizualizacio");
    teremElem.innerHTML = "";
    if (terem) {
        const vaszon = document.createElement("h1");
        vaszon.textContent = `______________________________________________`;
        vaszon.classList.add("vaszon");
        teremElem.appendChild(vaszon);

        const table = document.createElement("table");
        table.classList.add("teremTabla");
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

function foglalasokBetoltese(vetitesId) {
    const storedFoglalasok = localStorage.getItem("foglalasok");
    if (storedFoglalasok) {
        foglalasok = JSON.parse(storedFoglalasok);
    }

    const foglalasokVetitesre = Object.values(foglalasok).filter(f => f.vetitesId === vetitesId);
    foglalasokVetitesre.forEach(foglalas => {
        const helyElem = document.querySelector(`.szek[data-sor="${foglalas.hely.sor}"][data-szek="${foglalas.hely.szek}"]`);
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
        const bankkartya = prompt("Kérem adja meg a bankkártya számát:");
        const ervenyesseg = prompt("Kérem adja meg a bankkártya érvényességét (MM/YY):");
        const cvv = prompt("Kérem adja meg a bankkártya CVV kódját:");

        const veglegesites = confirm(`Foglalás véglegesítése:\nNév: ${nev}\nHely: Sor ${sor}, Szek ${szek}\nBankkártya: ${bankkartya}\nÉrvényesség: ${ervenyesseg}\nCVV: ${cvv}`);

        if (!veglegesites) {
            alert("Foglalás megszakítva.");
            return;
        }

        if (nev && bankkartya && ervenyesseg && cvv) {
            const urlParams = new URLSearchParams(window.location.search);
            const vetitesId = parseInt(urlParams.get("vetitesId"));
            foglalasMentese(vetitesId, sor, szek, nev, bankkartya, ervenyesseg, cvv);
            target.classList.add("foglalt");
            target.title = nev;
        }
    }
}

function foglalasMentese(vetitesId, sor, szek, nev, bankkartya, ervenyesseg, cvv) {
    const ujFoglalasId = Object.keys(foglalasok).length + 1;
    foglalasok[ujFoglalasId] = {
        id: ujFoglalasId,
        nev: nev,
        vetitesId: vetitesId,
        hely: { sor: sor, szek: szek },
        bankkartya: bankkartya,
        ervenyesseg: ervenyesseg,
        cvv: cvv
    };

    localStorage.setItem("foglalasok", JSON.stringify(foglalasok));
    alert("Foglalás sikeres!");
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const vetitesId = parseInt(urlParams.get("vetitesId"));
    const vetites = vetitesek[vetitesId];
    if (vetites) {
        teremVizualizalas(vetites.teremId);
        foglalasokBetoltese(vetitesId);
    } else {
        document.getElementById("teremVizualizacio").textContent = "Nincs ilyen vetítés.";
    }
});

document.addEventListener("click", szekValasztas);