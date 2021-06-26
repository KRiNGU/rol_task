import PopupAbstract from './PopupAbstract.js';

export default class PopupWithEdit extends PopupAbstract {
    constructor(popupClass, document, saveFunction) {
        super(popupClass, document);
        this.saveFunction = saveFunction;
    }

    _setEventListeners() {
        this.closeButton.addEventListener('click', ()=>super.closePopup());
        this.popup.addEventListener('click', (event)=>super.overlayClick(event));
        this.form.addEventListener('submit', (event)=>{
            event.preventDefault();
            this.saveFunction({name: this.inputs[0].value, secondField: this.inputs[1].value});
            super.closePopup();
        });
    }

    getPopup() {
        super.getPopup();
        this.inputs = this.popup.querySelectorAll('.modal__input');
        this.form = this.popup.querySelector('.modal__form');
        this.closeButton = this.popup.querySelector('.modal__close-button');
        this._setEventListeners();
        return this;
    }
}