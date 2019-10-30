var link = document.querySelector('.button-stray');
var popup = document.querySelector('.popup-feedback');
var close = document.querySelector('.popup-close-feedback');

var form = popup.querySelector('form');
var username = popup.querySelector('.feedback-username');
var email = popup.querySelector('.feedback-email');
var message = popup.querySelector('.feedback-message');

var isStorageSupport = true;
var storage = "";

try {
  storageUsername = localStorage.getItem('username');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');

  if (storageUsername) {
    username.value = storageUsername;
    email.focus();
  }

  if (storageEmail) {
    email.value = storageEmail;
    message.focus();
  }
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt) {
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('email', email.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});