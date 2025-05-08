// JavaScript för att toggla navigationsmenyn
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.getElementById('nav-list');

hamburgerMenu.addEventListener('click', () => {
  navList.classList.toggle('active');  // Lägg till eller ta bort "active"-klassen
});
