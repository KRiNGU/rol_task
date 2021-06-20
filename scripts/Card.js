class Card {
    constructor(data, tmpSelector) {
        this.title = data.title;
        this.imgLink = data.imgLink;
        this.templateSelector = tmpSelector;
    }

    _setEventListeners() {
        const card = _getTemplate.querySelector('.card').cloneNode(true);
        const likeBtn = card.querySelector('.card__like-button');
        const deleteBtn = card.querySelector('.card__delete-button');
        const cardTitle = card.querySelector('.card__title');
        const cardFoto = card.querySelector('.card__foto');
        cardTitle.textContent = this.title;
        cardFoto.src = this.imgLink;
        deleteBtn.addEventListener('click', this._deleteElem(card));
        likeBtn.addEventListener('click', this._toggleLike(likeBtn));
        cardFoto.addEventListener('click', this._openImage({link: this.imgLink, title: this.title}));
    }

    _deleteElem(elem) {
        elem.remove();
    }
    
    _toggleLike(elem) {
        elem.classList.toggle("card__like-button_active");
    }

    // Здесь не понимаю. Что вообще должно быть под _openImage, тут два поля изменяются,
    // которых нету в классе, при экспорте они смогут к глобалам обращаться, 
    // или я что-то не так делаю?
    _openImage({link, title}) {
        openImgImage.src = link;
        openImgTitle.textContent = title;
        openPopup(openImg);
    }

    _getTemplate() {
        return document.querySelector(templateSelector).content;
    }

    getView() {
        _setEventListeners();
        return this;
    }
}