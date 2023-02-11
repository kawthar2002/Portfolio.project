const buttonDarkMode = document.querySelector('.darkmode-button');

buttonDarkMode.onclick = () => {
  buttonDarkMode.classList.toggle('darkmode-button--active');
  document.body.classList.toggle('dark');
};

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header__title')
    let offSetY = window.scrollY;
    header.style.transform = `translateY(${offSetY * 0.3}px)`;
    
  });