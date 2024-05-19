function insertRow() {
    const cellHead = document.querySelectorAll('#rowHead th');
    const rowBodyLength = document.querySelectorAll('#tBody tr').length;

    const row = document.createElement('tr');
    Array.from(cellHead).forEach((e, i) => {
        const cell = document.createElement('td');
        cell.textContent = `Row ${rowBodyLength + 1} cell ${i + 1}`;
        row.append(cell);
    });
    const tBody = document.querySelector('#tBody');
    tBody.append(row);
}

function insertColumn() {
    const cellHead = document.querySelectorAll('#rowHead th').length;
    const tHeader = document.createElement('th');
    tHeader.textContent = `Header ${cellHead + 1}`;
    const head = document.querySelector('#rowHead');
    head.append(tHeader);

    const rowBody = document.querySelectorAll('#tBody tr');
    Array.from(rowBody).forEach((e, i) => {
        const cell = document.createElement('td');
        cell.textContent = `Row ${i + 1} cell ${cellHead + 1}`;
        e.append(cell);
    });
}

function update() {
    const colIndex = document.getElementById('colIndex').value;
    const rowIndex = document.getElementById('rowIndex').value;
    const tBody = document.getElementById('tBody');
    const row = Array.from(tBody.querySelectorAll('tr'))[rowIndex];
    if (row) {
        const cell = Array.from(row.querySelectorAll('td'))[colIndex];
        if (cell) {
            cell.innerText = document.getElementById('value').value
        }
    }
}
