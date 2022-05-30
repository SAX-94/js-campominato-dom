// Creo una griglia con celle 30x30
// Creo una array con numeri random che rappresentano le bombe
// Uso un ciclo per creare le celle
// Creo un div per ogni cella
// Appendo la cell al grid-container


let score = 0;
let gameOver = false;

const difficultyLevel = document.querySelector("[name='difficulty']");
const btnNewGame = document.getElementById("btn-new-game");

// Pulante Nuova partita. Resetta il punteggio e rigenera la griglia da capo.
btnNewGame.addEventListener("click", function () {
    score = 0;
    gameOver = false;
    generateGrid();
})

// Devo creare una funzione che generi le bombe, ovvero N numeri random unici.
function generateBombsList(maxNumber) {
    const bombsList = []

    do {
        // Creo il numro random
        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        // Lo aggoungo all'array solo se non esiste già al suo interno
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

const chosenlevel = difficultyLevel.value;

    // Numero totale di celle da creare
    const totCells = 10 * 10;

    // Lista con le bombe. Ad ogni numero corrisponde una bomba.
    const bombsList = generateBombsList(totCells);
    // Verifico che la lista contenga 16 elementi, tutti diversi
    console.log(bombsList);

    // Stampa in HTML la griglia
    renderGrid(totCells, bombsList);
}

/*
    - Avvisa l'utente che ha perso la partita
    - Mostra il punteggio
*/
function alertGameOver() {
    alert(`Game over! Hai totalizzato ${score} punti.`)
}

// Creo la funzione che stampa in HTMl la griglia.
function renderGrid(totCells, bombsList) {
    const gridContainer = document.querySelector(".grid-container")
    gridContainer.innerHTML = "";
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
        /* if (bombsList.includes(i)) {
            // L'attributo seguente "data-bomb" permette di identificare le celle con le bombe aprendo l'inspector, ma pemetterebbe ad un utente competente di barare.
            cell.dataset.bomb = true;
        } */
        // Aggiungo l'event listener al click sulla cella
        cell.addEventListener("click", function () {
            if (
                this.classList.contains("bomb") ||
                this.classList.contains("click-blue") ||
                gameOver
            ) {
                // Inibisco l'azione del click, impedendo all'utente di continuare a giocare.
                return;
            }
            // const cellIndex = parseInt(this.dataset.indice) | parseInt e parseFloat posono essere sostituiti dal + davanti alla  variabile che vogliamo convertire in number (di solito da stringa)
            const cellIndex = +this.dataset.indice;

            // Controllo se il numero della cella cliccata fa parte della lista delle bombe.
            if (bombsList.includes(cellIndex)) {
                cell.classList.add("bomb");
                gameOver = true;
                alertGameOver()
            } else {
                cell.classList.add("click-blue");
                score++;
            }
            // aggiungo il console.log per verificare che l'event-listener funzioni
            console.log("Cliccato cella numero " + cellIndex)
        })
        // Aggiungo la cella alla griglia
        gridContainer.append(cell);
    }
}

// @ts-ignore
generateGrid(10, 10);