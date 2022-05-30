// Creo una griglia con celle 30x30
// Creo una array con numeri random che rappresentano le bombe
// Uso un ciclo per creare le celle
// Creo un div per ogni cella
// Appendo la cell al grid-container


// Devo creare una funzione che generi le bombe, ovvero N numeri random unici.
function generateBombsList(maxNumber) {
    const bombsList = []

    do {
        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if (!bombsList.includes(randomNumber)) {
            bombsList.push(randomNumber);
        }
    } while (bombsList.length < 16);
    return bombsList;
}

/**
 * Genera una griglia di 10 x 10
 * con le eventuai bombe
 */
function generateGrid() {
    // Numero totale di celle da creare
    const totCells = 10 * 10;

    // Lista con le bombe. Ad ogni numero corrisponde una bomba.
    const bombsList = generateBombsList(totCells);
    // Verifico che la lista contenga 16 elementi, tutti diversi
    console.log(bombsList);

    // Stampa in HTML la griglia
    renderGrid(totCells, bombsList);
}


// Creo la funzione che stampa in HTMl la griglia.
function renderGrid(totCells, bombsList) {
    const gridContainer = document.querySelector(".grid-container")
    // @ts-ignore
    gridContainer.style.width = `calc(var(--cell-size) * 10)`;
    // Ciclo che genera il numero di celle richieste
    for (let i = 1; i <= totCells; i++) {
        // Creo un div per ogni cella.
        const cell = document.createElement("div");
        // Finché non assegno la classe "cell" ai div, essi rimangono contenitori vuoti e invisibili.
        cell.classList.add("cell");
        // Il comando seguente creerà un attributo data-indice che conterrà il numero della cella (i)
        // @ts-ignore
        cell.dataset.indice = i;
        // Aggiungo l'event listener al click sulla cella
        cell.addEventListener("click", function () {
            // const cellIndex = parseInt(this.dataset.indice) | parseInt e parseFloat posono essere sostituiti dal + davanti alla  variabile che vogliamo convertire in number (di solito da stringa)
            const cellIndex = +this.dataset.indice;
            // aggungo il console.log per verificare che il listener funzioni
            console.log("Cliccato cella numero " + cellIndex)
        })
        // Aggiungo la cella alla griglia
        gridContainer.append(cell);
    }
}

// @ts-ignore
generateGrid(10, 10);