export default class PopupAbstract {
    keyPressFunction = (event)=>{
        if (event.key === "Escape") {
           this.closePopup(document.querySelector('.modal_open'));
        }
     }

    constructor(popupClass) {
        this.popupClass = popupClass;
    }

    getModal() {
        return this.popup;
    }

    overlayClick(event) {
        if (event.target === event.currentTarget) {
           this.closePopup();
        }
    }

    openPopup() {
        document.addEventListener('keydown', this.keyPressFunction);
        this.popup.classList.add('modal_open');
    }

    closePopup() {
        document.removeEventListener('keydown', this.keyPressFunction);
        this.popup.classList.remove('modal_open');
    }

    getPopup() {
        this.popup = document.querySelector(this.popupClass);
    }
}