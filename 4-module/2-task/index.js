function makeDiagonalRed(table) {
  let rows = table.rows;
  
  for( let row = 0; row < rows.length; row++ ) {
    let cells = rows[row].cells;
    cells[row].style.backgroundColor = 'red';
  }
}
