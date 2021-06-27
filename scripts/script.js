import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithEdit from './PopupWithEdit.js';
import UserInfo from './UserInfo.js';

// Global scope
const cardList = document.querySelector(".cards");
const editUser = ({nickname, description, link})=>{
   const userInfoDOMs = userInfo.getUserInfoDOMs();
   userInfoDOMs.nickname.textContent = nickname;
   userInfoDOMs.description.textContent = description;
   userInfoDOMs.link.src = link;
}

const createCard = ({title, link})=>{
   const newCard = new Card(title, link, '.card-template', ()=>imagePopup.openImage(link, title)).getView();
   cardList.prepend(newCard);
}

// Initial constants
const initialUser = { nickname: 'Alexander', 
                     description: 'front-end junior',
                     link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
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
const userInfo = new UserInfo(initialUser, editUserPopup, createCardPopup).getUserInfo();
const imagePopup = new PopupWithImage().getPopup();
const addCardValidator = new FormValidator('.modal__input', editUserPopup.getModal());
addCardValidator.enableValidation();
const editUserValidator = new FormValidator('.modal__input', createCardPopup.getModal());
editUserValidator.enableValidation();

initialCards.forEach((card)=>createCard(card));
editUser(initialUser);
