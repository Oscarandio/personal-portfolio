document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});

const items = document.querySelectorAll(".mobile-menu li");

document.querySelectorAll(".mobile-menu li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector('.nav-links').classList.remove('expanded');
  });
});

