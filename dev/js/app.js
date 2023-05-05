const printMatrix = () => {
    let size = parseInt(document.getElementById(`matrix-size`).value);
    if (isNaN(size) || size <= 0) {
        alert(`Please enter a positive integer.`);
        return;
    }

    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = i * size + j + 1;
        }
    }

    let table = document.createElement(`table`);
    table.id = `matrix-table`;
    for (let i = 0; i < size; i++) {
        let row = document.createElement(`tr`);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement(`td`);
            cell.innerText = matrix[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    let container = document.getElementById(`matrix-container`);
    container.innerHTML = ``;
    container.appendChild(table);

    // Reverse the matrix along the diagonal from top left to bottom right
    for (let i = 0; i < size - 1; i++) {
        for (let j = i + 1; j < size; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse the matrix along the diagonal from bottom left to top right
    for (let i = 0; i < Math.floor(size/2); i++) {
        for (let j = 0; j < size; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[size - 1 - i][size - 1 - j];
            matrix[size - 1 - i][size - 1 - j] = temp;
        }
    }

    let reversedTable = document.createElement(`table`);
    reversedTable.style.margin = `20px auto`;
    for (let i = 0; i < size; i++) {
        let row = document.createElement(`tr`);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement(`td`);
            cell.innerText = matrix[i][j];
            row.appendChild(cell);
        }
        reversedTable.appendChild(row);
    }
    container.appendChild(reversedTable);
}
