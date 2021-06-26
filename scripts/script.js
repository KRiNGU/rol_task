import Card from './Card.js';
import FormValidator from './FormValidator.js';
import * as DOMconst from './constants.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithEdit from './PopupWithEdit.js';

// Global scope
const editUser = function editUser({name, secondField}) {
   DOMconst.userName.textContent = name;
   DOMconst.userDescription.textContent = secondField;
}

const createCard = function createCard({name, secondField}) {
   const newCard = new Card(name, secondField, '.card-template', ()=>imagePopup.openImage(secondField, name)).getView();
   DOMconst.cardList.prepend(newCard);
}

// Initial constants
const initialUser = { name: 'Alexander', 
                     secondField: 'front-end junior'
                  };

const initialCards = [
   {  
      name: 'asd',
      secondField: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
   }
];

// Initiate page
const editUserPopup = new PopupWithEdit('.modal__edit-user', document, editUser).getPopup();
const createCardPopup = new PopupWithEdit('.modal__add-card', document, createCard).getPopup();
const imagePopup = new PopupWithImage(document).getPopup();
const addCardValidator = new FormValidator('.modal__input', editUserPopup.getModal());
addCardValidator.enableValidation();
const editUserValidator = new FormValidator('.modal__input', createCardPopup.getModal());
editUserValidator.enableValidation();

initialCards.forEach((card)=>createCard(card));
editUser(initialUser);

// User events
DOMconst.currentUser.querySelector('.user__add-card-button').addEventListener('click', ()=>createCardPopup.openPopup());
DOMconst.currentUser.querySelector('.user__edit-info-button').addEventListener('click', ()=>editUserPopup.openPopup());
