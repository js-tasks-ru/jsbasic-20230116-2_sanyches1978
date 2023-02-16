import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;

  constructor(slides) {
    this.slides = slides;
    
    this.#render();
    this.#initCarousel();

    let listButtons = this.elem.querySelectorAll('.carousel__button');
    let arrButtons = Array.from(listButtons);

    for( let i = 0; i < arrButtons.length; i++ ) {
      arrButtons[i].addEventListener('click', () => {
        this.elem.dispatchEvent( new CustomEvent('product-add', {
        detail: this.slides[i].id,
        bubbles: true 
        }))
      });
    }
  }

  #template() {
    let products = '';

    for( let slide of this.slides ) {
      products += `
                  <div class="carousel__slide" data-id="penang-shrimp">
                    <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
                    <div class="carousel__caption">
                      <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                      <div class="carousel__title">${slide.name}</div>
                      <button type="button" class="carousel__button">
                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                      </button>
                    </div>
                  </div>
                `
    }
    return `
      <div class="carousel">
    
        <div class="carousel__arrow carousel__arrow_right">
           <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
           <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
           ${products}
        </div>
      </div> 
    `
  }

  #render() {
    this.elem = createElement( this.#template() );
  }

  #initCarousel() {
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let slideList = this.elem.querySelectorAll('.carousel__slide'); 
    
    let counter = 0;
    
    arrowLeft.style.display = 'none';

    const slideSwitcherRight = () => {
        counter++;
        carouselInner.style.transform = `translateX(-${this.elem.clientWidth * counter}px)`;
        arrowLeft.style.display = '';

       if( counter == slideList.length - 1 ) arrowRight.style.display = 'none';
    }

    const slideSwitcherLeft = () => {
        counter--;
        carouselInner.style.transform = `translateX(-${this.elem.clientWidth * counter}px)`
        arrowRight.style.display = '';

        if( counter == 0 ) arrowLeft.style.display = 'none';
    }
  
    arrowRight.addEventListener('click', slideSwitcherRight);
    arrowLeft.addEventListener('click', slideSwitcherLeft);
  }
}

