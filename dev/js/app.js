let makeMatrix = (size, matrix) =>
{
    for (let rowM = 0; rowM < size; rowM++) {
        matrix[rowM] = [];
        for (let colM = 0; colM < size; colM++) {
            matrix[rowM][colM] = rowM * size + colM + 1;
        }
    }
    return matrix;
};
let swap = (rowM, colM, matrix, size) =>
{
    let temp = matrix[rowM][colM];
    matrix[rowM][colM] = matrix[size - 1 - rowM][size - 1 - colM];
    matrix[size - 1 - rowM][size - 1 - colM] = temp;
};

window.onload = () =>
{
    let size = window.prompt(`Enter the size of the matrix`);
    //if size not a number or less then 2
    while (isNaN(parseInt(size)) || parseInt(size) < 2)
    {
        if (isNaN(parseInt(size)))
        {
            alert(`Input needs to be a number`);
        }
        else
        {
            alert(`Input needs to be bigger then 1`);
        }

        size = window.prompt(`Enter the size of the matrix`);
    }
    let matrix = [];
    makeMatrix(size, matrix);
    // printing the table
    let table = document.createElement(`table`);
    table.id = `matrix-table`;
    for (let rowM = 0; rowM < size; rowM++)
    {
        let row = document.createElement(`tr`);
        for (let colM = 0; colM < size; colM++)
        {
            let cell = document.createElement(`td`);
            //color the diaganal yellow
            if (rowM + colM === size - 1)
            {
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
    for (let rowM = 0; rowM < size; rowM++)
    {
        for (let colM = 0; colM < size-rowM; colM++)
        {
            swap(rowM, colM, matrix, size);
        }
    }
    //print the reversed table
    let reversedTable = document.createElement(`table`);
    reversedTable.style.margin = `20px auto`;
    for (let rowM = 0; rowM < size; rowM++)
    {
        let row = document.createElement(`tr`);
        for (let colM = 0; colM < size; colM++)
        {
            let cell = document.createElement(`td`);
            if (rowM + colM === size - 1)
            {
                cell.style.backgroundColor = `yellow`;
            }
            cell.innerText = matrix[rowM][colM];
            row.appendChild(cell);
        }
        reversedTable.appendChild(row);
    }
    container.appendChild(reversedTable);
};
