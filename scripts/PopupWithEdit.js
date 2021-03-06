import PopupAbstract from './PopupAbstract.js';

export default class PopupWithEdit extends PopupAbstract {
    constructor(popupClass, saveFunction) {
        super(popupClass);
        this.saveFunction = saveFunction;
    }

    _getInputs(){
        return [...this.inputs].reduce((result, input) => (result[input.name] = input.value, result), {});
    }

    _setEventListeners() {
        this.closeButton.addEventListener('click', ()=>super.closePopup());
        this.popup.addEventListener('click', (event)=>super.overlayClick(event));
        this.form.addEventListener('submit', (event)=>{
            event.preventDefault();
            this.saveFunction(this._getInputs());
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