var link = document.querySelector(".feedback-form");
var popup = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close");
var loginField = popup.querySelector(".input-name");
var emailField = popup.querySelector(".input-email");
var commentField = popup.querySelector("[name=comment]");
var form = popup.querySelector("form");
var linkMap = document.querySelector(".link-modal-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".map-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-display");
  loginField.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-display");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!loginField.value || !emailField.value || !commentField.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  }
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-display");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-display");
});
