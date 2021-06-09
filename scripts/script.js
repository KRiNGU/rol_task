let cardList = document.getElementById("cards");

function deleteElem(elem) {
    let deleteIt = elem.parentNode.parentNode;
    cardList.removeChild(deleteIt);
}

function toggleLike(elem) {
    elem.classList.toggle("like-chose");
}