import Card from './Card.js';
import FormValidator from './FormValidator.js';
import * as DOMconst from './constants.js';

// Global scope
const keyPressFunction = (event)=>{
   if (event.key === "Escape") {
      closePopup(document.querySelector('.modal_open'));
   }
}
// Initial constants
const initialUser = { name: 'Alexander', 
                     description: 'front-end junior'
                  };

const initialCards = [
   {  
      name: 'asd',
      link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
   }
];

// Initiate page

const addCardValidator = new FormValidator('.modal__input', DOMconst.modalAddCard);
addCardValidator.enableValidation();
const editUserValidator = new FormValidator('.modal__input', DOMconst.modalEditUser);
editUserValidator.enableValidation();

initialCards.forEach((card)=>createCard(card));
editUser(initialUser);

// global events
DOMconst.modalList.forEach((modal)=> {
   modal.addEventListener('click', (event)=>overlayClick(event, modal));
})

// modalAddCard events
DOMconst.modalAddCardCloseButton.addEventListener('click', ()=>closePopup(DOMconst.modalAddCard));

DOMconst.modalAddCardCreateForm.addEventListener('submit', function(event){
   event.preventDefault();
   createCard({
      name: DOMconst.newCardName.value,
      link: DOMconst.newCardPhotoUrl.value
   })
   closePopup(DOMconst.modalAddCard);
});

// User events
DOMconst.currentUser.querySelector('.user__add-card-button').addEventListener('click', ()=>openPopup(DOMconst.modalAddCard));
DOMconst.currentUser.querySelector('.user__edit-info-button').addEventListener('click', ()=>openPopup(DOMconst.modalEditUser));

DOMconst.modalEditUserClosePopup.addEventListener('click', ()=>closePopup(DOMconst.modalEditUser));

DOMconst.modalEditUserSaveForm.addEventListener('submit', function(event){
   event.preventDefault();
   editUser({
      name: DOMconst.modalUserName.value,
      description: DOMconst.modalUserDescription.value
   })
   closePopup(DOMconst.modalEditUser);
})

// Open img events
DOMconst.openImg.querySelector('.modal__close-button').addEventListener('click', ()=>closePopup(DOMconst.openImg))

// Functions

function createCard(card) {
   const newCard = new Card(card.name, card.link, '.card-template', openImage).getView();
   DOMconst.cardList.prepend(newCard);
}

function overlayClick(event, modal) {
   if (event.target === event.currentTarget) {
      closePopup(modal);
   }
}

function openImage({link, title}) {
   DOMconst.openImgImage.src = link;
   DOMconst.openImgTitle.textContent = title;
   openPopup(DOMconst.openImg);
}

function editUser({name, description}) {
   DOMconst.userName.textContent = name;
   DOMconst.userDescription.textContent = description;
}

function openPopup(elem) {
   document.addEventListener('keydown', keyPressFunction);
   elem.classList.add('modal_open');
}

function closePopup(elem) {
   document.removeEventListener('keydown', keyPressFunction);
   elem.classList.remove('modal_open');
}