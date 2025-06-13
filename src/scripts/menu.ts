const isMobile = window.matchMedia("(max-width: 1024px)").matches;

if (isMobile) {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const menuItems = document.querySelectorAll<HTMLLIElement>(".mobile-menu li");

  if (hamburger instanceof HTMLElement && navLinks instanceof HTMLElement) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("expanded");
    });

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("expanded");
      });
    });
  } else {
    console.warn(
      "Menu not found."
    );
  }
}
