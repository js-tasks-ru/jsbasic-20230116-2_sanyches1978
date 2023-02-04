function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let elem = document.querySelector('#text');
 
  /*function hide() {
    elem.hidden = true;
  }

  function show() {
    elem.hidden = false;
  }*/

  function toggle() {
    //elem.hidden == false ? hide() : show();
    elem.hidden = !elem.hidden
  }

  button.addEventListener('click', toggle);
  }
