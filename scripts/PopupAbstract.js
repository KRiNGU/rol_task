export default class PopupAbstract {
    keyPressFunction = (event)=>{
        if (event.key === "Escape") {
           this.closePopup(this.document.querySelector('.modal_open'));
        }
     }

    constructor(popupClass, document) {
        this.popupClass = popupClass;
        this.document = document;
    }

    overlayClick(event) {
        if (event.target === event.currentTarget) {
           this.closePopup();
        }
    }

    openPopup() {
        this.document.addEventListener('keydown', this.keyPressFunction);
        this.popup.classList.add('modal_open');
    }

    closePopup() {
        this.document.removeEventListener('keydown', this.keyPressFunction);
        this.popup.classList.remove('modal_open');
    }

    getPopup() {
        this.popup = this.document.querySelector(this.popupClass);
    }
}