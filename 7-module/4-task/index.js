export default class StepSlider {
  elem = null;

  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.#render();

    let thumb = this.elem.querySelector('.slider__thumb');

    this.elem.addEventListener('click', this.#changeRange);
    thumb.addEventListener('pointerdown', this.onMouseDown);

    thumb.ondragstart = function() {
      return false;
    }
  }

  

  #template() {
    let templateSteps = '<span class="slider-step slider__step-active"></span>';

    for( let step = 0; step < this.steps - 1; step++ ) {
      templateSteps += '<span class="slider-step"></span>';
    }
    return`
            <!--Ползунок слайдера с активным значением-->
              <div class="slider__thumb">
                <span class="slider__value">0</span>
              </div>
            
              <!--Полоска слайдера-->
              <div class="slider__progress"></div>
            
              <!-- Шаги слайдера (вертикальные чёрточки) -->
              <div class="slider__steps">
                ${templateSteps}
              </div>
          `
  }

  #render = () => {
    let wraper = document.createElement('div');
    wraper.innerHTML = this.#template();

    this.elem = wraper;
    this.elem.classList.add('slider');
  }

  #changeRange = (event) => {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.steps - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    let valuePercents = value / segments * 100;

    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    
    let leftPercents = valuePercents; 

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;

    let sliderValue = this.elem.querySelector('.slider__value');
    sliderValue.textContent = value;

    let listSliderSteps = this.elem.querySelectorAll('.slider-step');
    let arrSliderSteps = Array.from( listSliderSteps );
    
    arrSliderSteps.forEach( ( step, index ) =>  index == value ? step.classList.add('slider__step-active') :
                                                                 step.classList.remove('slider__step-active') );

    this.elem.dispatchEvent( new CustomEvent('slider-change', { 
      detail: value, 
      bubbles: true 
    } ) )
  }

  onMouseDown = (event) => {
    event.preventDefault();
    //this.elem.classList.add('.slider_dragging');
    let value = 0;
    
    let onMouseMove = (event) => {
      this.elem.classList.add('slider_dragging');
      console.log( this.elem );

      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      
      if (leftRelative < 0) {
        leftRelative = 0;
      }
      
      if (leftRelative > 1) {
        leftRelative = 1;
      }

      console.log( leftRelative * 100 );

      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;

      value = Math.round(approximateValue);

      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      
      thumb.style.left = `${leftRelative * 100}%`;
      progress.style.width = `${leftRelative * 100}%`;

      let sliderValue = this.elem.querySelector('.slider__value');
      sliderValue.textContent = value;

      let listSliderSteps = this.elem.querySelectorAll('.slider-step');
      let arrSliderSteps = Array.from( listSliderSteps );
      
      arrSliderSteps.forEach( ( step, index ) =>  index == value ? step.classList.add('slider__step-active') :
                                                                  step.classList.remove('slider__step-active') );
    }

    let onMouseUp = () => {
      this.elem.classList.remove('slider_dragging');

      this.elem.dispatchEvent( new CustomEvent('slider-change', { 
        detail: value, 
        bubbles: true 
      } ) )
      
      document.removeEventListener('pointermove', onMouseMove);
      document.removeEventListener('pointerup', onMouseUp);
    }

    document.addEventListener('pointermove', onMouseMove);
    document.addEventListener('pointerup', onMouseUp);
  }
}
