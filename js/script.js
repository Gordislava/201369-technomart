var link = document.querySelector(".feedback-form");
var popup = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close");
var loginField = popup.querySelector(".input-name");
var emailField = popup.querySelector(".input-email");
var commentField = popup.querySelector("[name=comment]");
var form = popup.querySelector("form");

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
  popup.classList.add("modal-error");
  }
});
