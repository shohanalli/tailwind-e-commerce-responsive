  function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const backdrop = document.getElementById('backdrop');
    const isOpen = menu.classList.contains('-translate-x-full');

    if (isOpen) {
      menu.classList.remove('-translate-x-full');
      backdrop.classList.remove('hidden');
    } else {
      menu.classList.add('-translate-x-full');
      backdrop.classList.add('hidden');
    }
  }

  const productNav = document.getElementById("productNav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      productNav.classList.remove("-translate-y-full");
    } else {
      productNav.classList.add("-translate-y-full");
    }
  });