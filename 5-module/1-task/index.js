function hideSelf() {
  let button = document.querySelector('.hide-self-button');
  
  function hide() {
    this.hidden = true;
  }
  button.addEventListener("click", hide);
}
