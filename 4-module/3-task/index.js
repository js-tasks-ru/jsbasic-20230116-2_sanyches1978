function highlight(table) {
  let rows = table.rows;
  
  for( let tr = 1; tr < rows.length; tr++ ) {
    let cells = rows[tr].cells;
    
    if( cells[1].textContent < 18 ) rows[tr].style.textDecoration = 'line-through';

    if( cells[2].textContent == 'm' ) {
      rows[tr].classList.add('male');
    } else {
      rows[tr].classList.add('female');
    }

    if( cells[3].getAttribute('data-available')  == 'true' ) {
      rows[tr].classList.add('available');
    } else if ( cells[3].getAttribute('data-available')  == 'false' ) {
      rows[tr].classList.add('unavailable');
    } else {
      rows[tr].setAttribute('hidden', 'null');
    }
  }    
}

