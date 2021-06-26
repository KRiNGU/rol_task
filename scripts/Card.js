export default class Card {
    constructor(title, link, tmpSelector, handleCardClick) {
        this.title = title;
        this.link = link;
        this.templateSelector = tmpSelector;
        this.handleCardClick = handleCardClick;
    }

    _setEventListeners() {
        this.deleteBtn.addEventListener('click', ()=>this._deleteCard(this.card));
        this.likeBtn.addEventListener('click', ()=>this._toggleLike(this.likeBtn));
        this.cardFoto.addEventListener('click', this.handleCardClick);
    }

    _deleteCard(elem) {
        elem.remove();
    }
    
    _toggleLike(elem) {
        elem.classList.toggle("card__like-button_active");
    }

    _getTemplate() {
        return document.querySelector(this.templateSelector).content;
    }

    getView() {
        this.card = this._getTemplate().querySelector('.card').cloneNode(true);
        this.likeBtn = this.card.querySelector('.card__like-button');
        this.deleteBtn = this.card.querySelector('.card__delete-button');
        this.cardTitle = this.card.querySelector('.card__title');
        this.cardFoto = this.card.querySelector('.card__foto');
        this.cardTitle.textContent = this.title;
        this.cardFoto.src = this.link;
        this._setEventListeners();
        return this.card;
    }
}