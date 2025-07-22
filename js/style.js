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
  const topBar = document.getElementById('topBar');
  const bottomMenu = document.getElementById('bottomMenu');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // === Top Bar ===
    if (currentScroll === 0) {
      topBar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'bg-white', 'shadow-md');
    } else if (currentScroll < lastScroll) {
      topBar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'bg-white', 'shadow-md');
    } else {
      topBar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'bg-white', 'shadow-md');
    }

    // === Bottom Menu (stick under Top Bar) ===
    if (currentScroll === 0) {
      bottomMenu.classList.remove('fixed', 'top-[70px]', 'left-0', 'right-0', 'z-40', 'shadow', 'bg-[#F1F9F2]');
      bottomMenu.classList.add('hidden');
    } else if (currentScroll < lastScroll) {
      bottomMenu.classList.remove('hidden');
      bottomMenu.classList.add('fixed', 'top-[70px]', 'left-0', 'right-0', 'z-40', 'shadow', 'bg-[#F1F9F2]');
    } else {
      bottomMenu.classList.remove('fixed', 'top-[70px]', 'left-0', 'right-0', 'z-40', 'shadow', 'bg-[#F1F9F2]');
      bottomMenu.classList.add('hidden');
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });





