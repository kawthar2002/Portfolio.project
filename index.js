const buttonDarkMode = document.querySelector('.darkmode-button');
buttonDarkMode.onclick = () => {
  buttonDarkMode.classList.toggle('darkmode-button--active');
  document.body.classList.toggle('dark');
};

window.addEventListener('scroll', () => {
  if (window.outerHeight > 768) {
    const header = document.querySelector('.header__wrapper');
    let offSetY = window.scrollY;
    let headerPosition = `translateY(${offSetY * 0.4}px)`;
    console.log(offSetY);
    header.style.transform = headerPosition;
    if (offSetY >= 650) {
      header.style.opacity = 0;
    } else header.style.opacity = 1;
  }
});

