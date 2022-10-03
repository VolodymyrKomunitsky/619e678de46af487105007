// open menu
document.querySelector(".header__menu-button").addEventListener('click', function(event) {
  document.querySelector(".header__menu").classList.add("active");
  document.querySelector(".header__menu-shadow").classList.add("active");
});

// close menu
document.querySelector(".header__menu .close").addEventListener('click', function(event) {
  document.querySelector(".header__menu").classList.remove("active");
  document.querySelector(".header__menu-shadow").classList.remove("active");
});
