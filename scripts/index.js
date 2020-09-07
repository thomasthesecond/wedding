var icon = document.querySelector('.scroll');

window.addEventListener('scroll', (event) => {
  var scrollYPos = this.scrollY;

  if (scrollYPos === 0) {
    icon.classList.remove('gone');
  } else {
    icon.classList.add('gone');
  }
});
