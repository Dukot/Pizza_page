let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial';
  menuContent.classList.toogle('on', show);
  show = !show;  
})