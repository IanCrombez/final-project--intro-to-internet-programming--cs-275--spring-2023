let printMatrix = () => {
    let size = parseInt(document.getElementById(`matrix-size`).value);
    if (isNaN(size) || size <= 0) {
        alert(`Please enter a positive integer.`);
        return;
    }

    let matrix = [];
    for (let rowM = 0; rowM < size; rowM++) {
        matrix[rowM] = [];
        for (let colM = 0; colM < size; colM++) {
            matrix[rowM][colM] = rowM * size + colM + 1;
        }
    }

    let table = document.createElement(`table`);
    table.id = `matrix-table`;
    for (let rowM = 0; rowM < size; rowM++) {
        let row = document.createElement(`tr`);
        for (let colM = 0; colM < size; colM++) {
            let cell = document.createElement(`td`);
            if (rowM + colM === size - 1) {
                cell.style.backgroundColor = `yellow`;
            }
            cell.innerText = matrix[rowM][colM];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    let container = document.getElementById(`matrix-container`);
    container.innerHTML = ``;
    container.appendChild(table);

    // Reverse the matrix along the diagonal from bottom left to top right
    for (let rowM = 0; rowM < size; rowM++) {
        for (let colM = 0; colM < size-rowM; colM++) {
            let temp = matrix[rowM][colM];
            matrix[rowM][colM] = matrix[size - 1 - rowM][size - 1 - colM];
            matrix[size - 1 - rowM][size - 1 - colM] = temp;
        }
    }

    let reversedTable = document.createElement(`table`);
    reversedTable.style.margin = `20px auto`;
    for (let rowM = 0; rowM < size; rowM++) {
        let row = document.createElement(`tr`);
        for (let colM = 0; colM < size; colM++) {
            let cell = document.createElement(`td`);
            if (rowM + colM === size - 1) {
                cell.style.backgroundColor = `yellow`;
            }
            cell.innerText = matrix[rowM][colM];
            row.appendChild(cell);
        }
        reversedTable.appendChild(row);
    }
    container.appendChild(reversedTable);
};
