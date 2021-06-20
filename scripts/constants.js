// global constants
export const cardTemplate = document.querySelector('.card-template').content;
export const cardList = document.querySelector(".cards");
export const modalList = document.querySelectorAll('.modal');

// card constants
export const modalAddCard = document.querySelector(".modal_add-card");
export const modalAddCardCloseButton = modalAddCard.querySelector('.modal__close-button');
export const modalAddCardCreateButton = modalAddCard.querySelector('.modal__save-button');
export const modalAddCardCreateForm = modalAddCard.querySelector('.modal__form');
export const newCardName = modalAddCard.querySelector('.modal__input-title');
export const newCardPhotoUrl = modalAddCard.querySelector('.modal__input-url');

// user constants
export const currentUser = document.querySelector('.user');
export const userName = currentUser.querySelector('.user__name');
export const userDescription = currentUser.querySelector('.user__description');
export const userAvatarUrl = currentUser.querySelector('.user__foto');

// edit user modal constants
export const modalEditUser = document.querySelector('.modal_edit-user');
export const modalUserName = modalEditUser.querySelector('.modal__input-name');
export const modalUserDescription = modalEditUser.querySelector('.modal__input-description');
export const modalEditUserClosePopup = modalEditUser.querySelector('.modal__close-button');
export const modalEditUserSaveForm = modalEditUser.querySelector('.modal__form');

// Open image constants
export const openImg = document.querySelector('.modal__open-img');
export const openImgImage = openImg.querySelector('.modal__open-img-image');
export const openImgTitle = openImg.querySelector('.modal__open-img-title');