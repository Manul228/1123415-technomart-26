var productList=document.querySelector(".product-list"),popupAdding=document.querySelector(".popup-adding"),popupAddingClose=popupAdding.querySelector(".popup-close-adding"),popupAddingContinue=popupAdding.querySelector(".button-popup-continue");productList.addEventListener("click",function(e){var o=e.target;event.preventDefault(),"buy"===o.className&&popupAdding.classList.add("modal-show")}),popupAddingClose.addEventListener("click",function(e){e.preventDefault(),popupAdding.classList.remove("modal-show")}),popupAddingContinue.addEventListener("click",function(e){e.preventDefault(),popupAdding.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupAdding.classList.contains("modal-show")&&popupAdding.classList.remove("modal-show"))});