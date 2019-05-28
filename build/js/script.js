var mainNavToggle = document.querySelector(".main-nav__toggle");
var listToggle = document.querySelector(".main-nav__list");
var logoToggle = document.querySelector(".page-header__logo");
mainNavToggle.classList.remove("main-nav__toggle--nojs");
mainNavToggle.classList.remove("main-nav__toggle--closed");
listToggle.classList.add("site-list--closed");
logoToggle.classList.remove("page-header__logo--mobile");
mainNavToggle.addEventListener("click", function(evt) {
	evt.preventDefault();
	mainNavToggle.classList.toggle("main-nav__toggle--closed");
	listToggle.classList.toggle("site-list--closed");
	logoToggle.classList.toggle("page-header__logo--mobile");
});
var form = document.querySelector("#feedback-form");
var feedbackName = document.querySelector("#name");
var feedbackSurname = document.querySelector("#surname");
var feedbackTel = document.querySelector("#tel");
var feedbackEmail = document.querySelector("#email");
var feedbackField = document.querySelector("#feedback");
var storageName = localStorage.getItem("name");
var storageSurname = localStorage.getItem("surname");
var storageTel = localStorage.getItem("tel");
var storageEmail = localStorage.getItem("email");
if (feedbackName) {
	feedbackName.focus();
}
