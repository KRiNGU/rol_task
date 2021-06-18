// Global scope

const cardTemplate = document.querySelector('.card-template').content;
const cardList = document.querySelector(".cards");
const modalAddCard = document.querySelector(".modal_add-card");
const modalAddCardCloseButton = modalAddCard.querySelector('.modal__close-button');
const modalAddCardCreateButton = modalAddCard.querySelector('.modal__save-button');
let currentUser = document.querySelector('.user');
const userName = currentUser.querySelector('.user__name');
const userDescription = currentUser.querySelector('.user__description');
const userAvatarUrl = currentUser.querySelector('.user__foto');

// Initial constants

const initialUser = { name: 'Alexander', 
                     description: 'front-end junior',
                     avatarUrl: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
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

// modalAddCard events
modalAddCardCloseButton.addEventListener('click', ()=>closePopup(modalAddCard));
modalAddCardCreateButton.addEventListener('click', function(event){
   event.preventDefault();
   createCard({
      name: modalAddCard.querySelector('.modal__input-title').value,
      link: modalAddCard.querySelector('.modal__input-url').value
   })
   closePopup(modalAddCard);
});

// User events
currentUser.querySelector('.user__add-card-button').addEventListener('click', ()=>openPopup(modalAddCard));

// Functions

function editUser({name, description, avatarUrl}) {
   userName.textContent = name;
   userDescription.textContent = description;
   userAvatarUrl.src = avatarUrl;
}

function openPopup(elem) {
   elem.classList.add('modal_open');
}

function closePopup(elem) {
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
   cardList.prepend(card);
}

function deleteElem(elem) {
   elem.remove();
}

function toggleLike(elem) {
   elem.classList.toggle("card__like-button_active");
}