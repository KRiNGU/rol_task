// Global scope
const keyPressFunction = (event)=>{
   if (event.key === "Escape") {
      closePopup(document.querySelector('.modal_open'));
   }
};
const cardTemplate = document.querySelector('.card-template').content;
const cardList = document.querySelector(".cards");
const modalList = document.querySelectorAll('.modal');

// card constants
const modalAddCard = document.querySelector(".modal_add-card");
const modalAddCardCloseButton = modalAddCard.querySelector('.modal__close-button');
const modalAddCardCreateButton = modalAddCard.querySelector('.modal__save-button');
const modalAddCardCreateForm = modalAddCard.querySelector('.modal__form');
const newCardName = modalAddCard.querySelector('.modal__input-title');
const newCardPhotoUrl = modalAddCard.querySelector('.modal__input-url');

// user constants
let currentUser = document.querySelector('.user');
const userName = currentUser.querySelector('.user__name');
const userDescription = currentUser.querySelector('.user__description');
const userAvatarUrl = currentUser.querySelector('.user__foto');

// edit user modal constants
const modalEditUser = document.querySelector('.modal_edit-user');
const modalUserName = modalEditUser.querySelector('.modal__input-name');
const modalUserDescription = modalEditUser.querySelector('.modal__input-description');
const modalEditUserClosePopup = modalEditUser.querySelector('.modal__close-button');
const modalEditUserSaveForm = modalEditUser.querySelector('.modal__form');

// Open image constants
const openImg = document.querySelector('.modal__open-img');
const openImgImage = openImg.querySelector('.modal__open-img-image');
const openImgTitle = openImg.querySelector('.modal__open-img-title');

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

initialCards.forEach(createCard);
editUser(initialUser);

// global events
modalList.forEach((modal)=> {
   modal.addEventListener('click', (event)=>overlayClick(event, modal));
})

// modalAddCard events
modalAddCardCloseButton.addEventListener('click', ()=>closePopup(modalAddCard));

modalAddCardCreateForm.addEventListener('submit', function(event){
   event.preventDefault();
   createCard({
      name: newCardName.value,
      link: newCardPhotoUrl.value
   })
   closePopup(modalAddCard);
});

// User events
currentUser.querySelector('.user__add-card-button').addEventListener('click', ()=>openPopup(modalAddCard));
currentUser.querySelector('.user__edit-info-button').addEventListener('click', ()=>openPopup(modalEditUser));

modalEditUserClosePopup.addEventListener('click', ()=>closePopup(modalEditUser));

modalEditUserSaveForm.addEventListener('submit', function(event){
   event.preventDefault();
   editUser({
      name: modalUserName.value,
      description: modalUserDescription.value
   })
   closePopup(modalEditUser);
})

// Open img events
openImg.querySelector('.modal__close-button').addEventListener('click', ()=>closePopup(openImg))

// Functions

function overlayClick(event, modal) {
   if (event.target === event.currentTarget) {
      closePopup(modal);
   }
}

function openImage({link, title}) {
   openImgImage.src = link;
   openImgTitle.textContent = title;
   openPopup(openImg);
}

function editUser({name, description}) {
   userName.textContent = name;
   userDescription.textContent = description;
}

function openPopup(elem) {
   document.addEventListener('keydown', keyPressFunction);
   elem.classList.add('modal_open');
}

function closePopup(elem) {
   document.removeEventListener('keydown', keyPressFunction);
   elem.classList.remove('modal_open');
}

function createCard({ name, link }) {
   const card = cardTemplate.querySelector('.card').cloneNode(true);
   const likeBtn = card.querySelector('.card__like-button');
   const deleteBtn = card.querySelector('.card__delete-button');
   const cardTitle = card.querySelector('.card__title');
   const cardFoto = card.querySelector('.card__foto');
   cardTitle.textContent = name;
   cardFoto.src = link;
   deleteBtn.addEventListener('click', ()=>deleteElem(card));
   likeBtn.addEventListener('click', ()=>toggleLike(likeBtn));
   cardFoto.addEventListener('click', ()=>openImage({link: link, title: name}));
   cardList.prepend(card);
}

function deleteElem(elem) {
   elem.remove();
}

function toggleLike(elem) {
   elem.classList.toggle("card__like-button_active");
}