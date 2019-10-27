var slides = document.querySelectorAll('.slide');

function swapSlides() {
  var n = 0;
  n = (n + slides.length) % slides.length;
  slides[n].classList.toggle('show');
}

var slider = document.querySelector('.offers-card-slider');

slider.addEventListener('click', function(evt) {
  var target = evt.target;

  if (target.tagName === 'BUTTON') {
    swapSlides()
  }
});