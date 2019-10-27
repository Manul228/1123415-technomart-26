var link = document.querySelector('.button-stray');
var popup = document.querySelector('.popup-feedback');
var close = document.querySelector('.popup-close');

var form = popup.querySelector('form');
var username = popup.querySelector('.feedback-username');
var email = popup.querySelector('.feedback-email');
var message = popup.querySelector('.feedback-message');

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});