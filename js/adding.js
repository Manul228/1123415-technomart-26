var productList = document.querySelector('.product-list');

var popupAdding = document.querySelector('.popup-adding');
var popupAddingClose = popupAdding.querySelector('.popup-close-adding');
var popupAddingContinue = popupAdding.querySelector('.button-popup-continue');


productList.addEventListener('click', function(evt) {
  var target = evt.target;
  event.preventDefault();
  if (target.className === 'buy') {
    popupAdding.classList.add("modal-show");
  }
});

popupAddingClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupAdding.classList.remove('modal-show');
});

popupAddingContinue.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupAdding.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupAdding.classList.contains('modal-show')) {
      popupAdding.classList.remove('modal-show');
    }
  }
});