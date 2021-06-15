const cardTemplate = document.querySelector('.card-template').content;
const cardList = document.querySelector(".cards");

const initialCards = [ 
    { 
       name: 'qwe', 
       link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
    }, 
    { 
       name: 'asd', 
       link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
    }, 
    { 
       name: 'asd', 
       link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
    }, 
    { 
       name: 'asd', 
       link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
    }, 
    { 
       name: 'asd', 
       link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
    }, 
    { 
       name: 'asd', 
       link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
    }, 
    { 
       name: 'asd', 
       link: 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg'
    }, 
];

initialCards.forEach(createCard);

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