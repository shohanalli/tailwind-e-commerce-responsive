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
const mobileHeader = document.getElementById('mobileHeader');
let lastScroll = 0;

function handleScroll() {
  const currentScroll = window.scrollY;

  // === Desktop Sticky ===
  if (window.innerWidth >= 1024) {
    if (currentScroll === 0) {
      topBar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'bg-white', 'shadow-md');
    } else if (currentScroll < lastScroll) {
      topBar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'bg-white', 'shadow-md');
    } else {
      topBar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'bg-white', 'shadow-md');
    }

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
  }

  // === Mobile Header Sticky ===
  if (window.innerWidth < 1024) {
    bottomMenu.classList.add('hidden'); // Always hidden on mobile
  }
  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
}

window.addEventListener('scroll', handleScroll);

// Initial hide for mobile
if (window.innerWidth < 1024) {
  bottomMenu.classList.add('hidden');

}

//product filter for mobile device
    function toggleFilter() {
      const filter = document.getElementById("mobileFilter");
      filter.classList.toggle("-translate-x-full");
      filter.classList.toggle("translate-x-0");
    }