menu = document.querySelector(".z .menu");
nav = document.querySelector("nav");
menu.onclick = function() {
    nav.classList.toggle("active");
}

const navLinks = document.querySelectorAll('.container nav a');
const pages = document.querySelectorAll('.container .page');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetPage = document.querySelector(targetId);

    pages.forEach(page => {
      if (page.classList.contains('activee')) {
        page.classList.remove('activee');
      }
    });

    targetPage.classList.add('activee');
  });
});
