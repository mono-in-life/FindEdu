const mainNavToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

const mainNavToggleClick = () => {
  if (mainNav.classList.contains('is-closed')) {
    mainNav.classList.remove('is-closed');
    mainNav.classList.add('is-opened');
  } else {
    mainNav.classList.remove('is-opened');
    mainNav.classList.add('is-closed');
  }
};

mainNavToggle.addEventListener('click', mainNavToggleClick);
