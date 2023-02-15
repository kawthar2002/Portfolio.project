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
    header.style.transform = headerPosition;
    if (offSetY >= 650) {
      header.style.opacity = 0;
    } else header.style.opacity = 1;
  }
});

const projects = document.querySelectorAll('.project');
projects.forEach((project) => {
  project.addEventListener('click', () => {
    window.addEventListener('click', function (e) {
      if (!e.composedPath().includes(project)) {
        projects.forEach((project) => {
          project.classList.remove('scale');
        });
      } else if (project.classList.contains('scale')) {
        project.classList.remove('scale');
      } else project.classList.add('scale');
    });
  });
});
