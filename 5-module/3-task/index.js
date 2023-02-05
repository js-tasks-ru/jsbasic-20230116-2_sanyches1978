function initCarousel() {
    let arrowLeft = document.querySelector('.carousel__arrow_left');
    let arrowRight = document.querySelector('.carousel__arrow_right');
    let carouselInner = document.querySelector('.carousel__inner');
    let slideList = document.querySelectorAll('.carousel__slide');
    
    let slideWidth = slideList[0].offsetWidth;
    let counter = 0;
    
    arrowLeft.style.display = 'none';

    function slideSwitcherRight() {
        counter++;
        carouselInner.style.transform = `translateX(-${slideWidth * counter}px)`;
        arrowLeft.style.display = '';

       if( counter == slideList.length - 1 ) arrowRight.style.display = 'none';
    }

    function slideSwitcherLeft() {
        counter--;
        carouselInner.style.transform = `translateX(-${slideWidth * counter}px)`
        arrowRight.style.display = '';

        if( counter == 0 ) arrowLeft.style.display = 'none';
    }
  
    arrowRight.addEventListener('click', slideSwitcherRight);
    arrowLeft.addEventListener('click', slideSwitcherLeft);
}
