function makeDiagonalRed(table) {
  let rows = table.rows;
  
  mark: for( let row = 0; row < rows.length; row++ ) {
    let cells = rows[row].cells;
    
    for( let cell = row; cell < cells.length; cell++ ) {
      cells[cell].style.backgroundColor = 'red';
      continue mark;
    }
  }
}
