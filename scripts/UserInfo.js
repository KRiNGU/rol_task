export default class UserInfo {
    constructor(info, editUserPopup, createCardPopup) {
        this.name = info.name;
        this.description = info.description;
        this.link = info.link;
        this.editUserPopup = editUserPopup;
        this.createCardPopup = createCardPopup;
    }

    _setContent(){
        this.userName.textContent = this.name;
        this.userDescription.textContent = this.description;
        this.userLink.src = this.link;
    }

    _setEventListeners(){
        this.userEditInfoButton.addEventListener('click', ()=>this.editUserPopup.openPopup());
        this.userAddCardButton.addEventListener('click', ()=>this.createCardPopup.openPopup());
    }

    getUserInfoDOMs(){
        return {nickname: this.userName, description: this.userDescription, link: this.userLink};
    }

    getUserInfo(){
        this.user = document.querySelector('.user');
        this.userName = this.user.querySelector('.user__name');
        this.userDescription = this.user.querySelector('.user__description');
        this.userLink = this.user.querySelector('.user__link');
        this.userEditInfoButton = this.user.querySelector('.user__edit-info-button');
        this.userAddCardButton = this.user.querySelector('.user__add-card-button');
        this._setContent();
        this._setEventListeners();
        return this;
    }
}