var mapLink = document.querySelector('.map-hidden-link');

var map = document.querySelector('.popup-map');
var mapClose = map.querySelector('.popup-close-map');

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.add('modal-show');
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains('modal-show')) {
      map.classList.remove('modal-show');
    }
  }
});