import Card from './Card.js';
import FormValidator from './FormValidator.js';
import * as DOMconst from './constants.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithEdit from './PopupWithEdit.js';

// Global scope
const editUser = ({nickname, description})=>{
   DOMconst.userName.textContent = nickname;
   DOMconst.userDescription.textContent = description;
}

const createCard = ({title, link})=>{
   const newCard = new Card(title, link, '.card-template', ()=>imagePopup.openImage(link, title)).getView();
   DOMconst.cardList.prepend(newCard);
}

// Initial constants
const initialUser = { nickname: 'Alexander', 
                     description: 'front-end junior'
                    };

const initialCards = [
   {  
      title: 'asd',
      link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
   }
];

// Initiate page
const editUserPopup = new PopupWithEdit('.modal__edit-user', editUser).getPopup();
const createCardPopup = new PopupWithEdit('.modal__add-card', createCard).getPopup();
const imagePopup = new PopupWithImage().getPopup();
const addCardValidator = new FormValidator('.modal__input', editUserPopup.getModal());
addCardValidator.enableValidation();
const editUserValidator = new FormValidator('.modal__input', createCardPopup.getModal());
editUserValidator.enableValidation();

initialCards.forEach((card)=>createCard(card));
editUser(initialUser);

// User events
DOMconst.currentUser.querySelector('.user__add-card-button').addEventListener('click', ()=>createCardPopup.openPopup());
DOMconst.currentUser.querySelector('.user__edit-info-button').addEventListener('click', ()=>editUserPopup.openPopup());
