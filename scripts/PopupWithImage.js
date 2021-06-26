import PopupAbstract from './PopupAbstract.js';

export default class PopupWithImage extends PopupAbstract {
    constructor(document) {
        super('.modal__open-img', document);
    }

    _setEventListeners() {
        this.closeButton.addEventListener('click', ()=>super.closePopup());
        this.popup.addEventListener('click', (event)=>super.overlayClick(event));
    }

    openImage(link, title) {
        this.image.src = link;
        this.title.textContent = title;
        super.openPopup();
    }

    getPopup() {
        super.getPopup();
        this.image = this.popup.querySelector('.modal__open-img-image');
        this.title = this.popup.querySelector('.modal__open-img-title');
        this.closeButton = this.popup.querySelector('.modal__close-button');
        this._setEventListeners();
        return this;
    }
}