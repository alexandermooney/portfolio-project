const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const intro = document.querySelector('.intro');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  intro.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    intro.classList.toggle('active');
  })
})