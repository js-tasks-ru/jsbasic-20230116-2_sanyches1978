import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  elem = null;

  constructor(categories) {
    this.categories = categories;
    this.#render();
    
    const ribbonInner = this.elem.querySelector('.ribbon__inner');
    const buttonLeft = this.elem.querySelector('.ribbon__arrow_left');
    const buttonRight = this.elem.querySelector('.ribbon__arrow_right');
    
    buttonLeft.addEventListener('click', this.#scrollByLeft);
    buttonRight.addEventListener('click', this.#scrollByRight);

    ribbonInner.addEventListener('scroll', this.#hideArrow);

    const listLinks = this.elem.querySelectorAll('a');
    const arrLinks = Array.from(listLinks);
    
    arrLinks.forEach( link => link.addEventListener('click', this.#selectionCategory) );
  }

  #template() {
    let links = '';
    
    for( let category of this.categories ) {
      if( category.id === '' || category.id === 'on-the-side') {
      links += `<a href="#" class="ribbon__item ribbon__item_active" data-id="${category.id}">${category.name}</a>`;
    } else {
      links += `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`;
    }
    }
    
    return `
            <div class="container">

            <!--Корневой элемент RibbonMenu-->
            <div class="ribbon">
              <!--Кнопка прокрутки влево-->
              <button class="ribbon__arrow ribbon__arrow_left">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
              </button>
          
              <!--Ссылки на категории-->
              <nav class="ribbon__inner">
                ${links}
              </nav>
          
              <!--Кнопка прокрутки вправо-->
              <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
              </button>
            </div>
          
          </div>
    `
  }

  #render() {
    const div = createElement( this.#template() ); 
    this.elem = div.firstElementChild;     
  }

  #scrollByLeft = () => {
    const ribbonInner = this.elem.querySelector('.ribbon__inner');
    ribbonInner.scrollBy(-350, 0);
  }

  #scrollByRight = () => {
    const ribbonInner = this.elem.querySelector('.ribbon__inner');
    ribbonInner.scrollBy(350, 0);
  }

  #hideArrow = () => {
    const ribbonInner = this.elem.querySelector('.ribbon__inner');
    const buttonRight = this.elem.querySelector('.ribbon__arrow_right');
    const buttonLeft = this.elem.querySelector('.ribbon__arrow_left');
  
    let scrollLeft = ribbonInner.scrollLeft;
    let scrollWidth = ribbonInner.scrollWidth;
    let clientWidth = ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    
    if( scrollLeft === 0 ){
      buttonRight.classList.add('ribbon__arrow_visible');
      buttonLeft.classList.remove('ribbon__arrow_visible'); 
    } 
    if( scrollRight < 1 ){
      buttonRight.classList.remove('ribbon__arrow_visible');
      buttonLeft.classList.add('ribbon__arrow_visible');
    } 
   }

  #selectionCategory = (event) => {
    event.preventDefault();

    const targetLink = event.target;
    const listLinks = this.elem.querySelectorAll('a');
    const arrLinks = Array.from(listLinks);

    arrLinks.map( link => link === targetLink ? link.classList.add('ribbon__item_active') : 
                                                link.classList.remove('ribbon__item_active') );
    
    this.elem.dispatchEvent( new CustomEvent('ribbon-select', { 
      detail: targetLink.dataset.id,
      bubbles: true 
    } ) );
  }
}