const gridContainer = document.querySelector(".grid-container");
// Creo una griglia con celle 40x40
// Uso un ciclo per creare le celle
// Creo un div per ogni cella
// Appendo la cell a grid-container

/**numero di celle in orizzontale
 * @param {number} xCells - numero di celle in orizzontale
 * @param {number} yCells - numero di celle in verticale
 */
function createGrid(xCells, yCells) {
    const cellsNumber = xCells * yCells;

    console.log(cellsNumber);
    // Definisco la larghez<a del grid-container in base al numero di celle orizzontali 
    // @ts-ignore
    gridContainer.style.width = `calc(var(--cell-size) * ${xCells})`;

    for (let i = 0; i < cellsNumber; i++) {
        // Creo un numero che incrementa di 1 a ogni ciclo.
        const cellNumber = i + 1 ;
        // Creo un div per ogni cella.
        const cell = document.createElement("div");
        // Finché non assegno la classe "cell" ai div, essi rimangono contenitori vuoti e invisibili.
        cell.classList.add("cell");
        // Inserisco il numero incrementale nella cella.
        cell.append(cellNumber.toString());
        // Inserisco il div nel grid-container.
        gridContainer.append(cell);
        // Se clickata, la cella diventa blu.
        cell.addEventListener("click", function(){
            cell.classList.add("click-blue");
        })
    }
}

createGrid (10, 10);