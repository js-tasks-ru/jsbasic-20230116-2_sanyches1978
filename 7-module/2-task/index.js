import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  modalTitle = null;
  modalBody  = null;
  elemModal = null;

  constructor() {
    this.#render();
    this.open();
    this.close();

    let buttonModalClose = this.elemModal.querySelector('.modal__close');
    buttonModalClose.addEventListener('click', this.close);

    document.addEventListener('keydown', (event) => {
      if ( event.code == 'Escape' ) {
        this.close();
      }
    } );
  }

  #template() {
    return `
            <div class="modal">
              <div class="modal__overlay">
                <div class="modal__inner">
                  <div class="modal__header">
                    <button class="modal__close">
                      <img src="/assets/images/icons/cross-icon.svg" alt="close-icon">
                    </button>
                    <h3 class="modal__title"></h3>
                  </div>
                  <div class="modal__body"></div>
                </div>
              </div>
            </div>
         `
  }

  #render() {
    this.elemModal = createElement( this.#template() );
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.elemModal);
  }

  setTitle(title) {
    this.elemModal.querySelector('.modal__title').textContent = title;
  }

  setBody(node) {
    let modalBody = this.elemModal.querySelector('.modal__body');
    modalBody.innerHTML = '';
    modalBody.append(node);
  }

  close = () => {
    this.elemModal.remove();
    document.body.classList.remove('is-modal-open');
  } 
}

