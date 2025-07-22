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

    window.addEventListener("DOMContentLoaded", () => {
      fetch("header.html")
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => {
          console.error("Fetch error:", error);
        });
    });