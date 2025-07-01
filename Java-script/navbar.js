 const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const dropdowns = document.querySelectorAll('.dropdown');
  const submenus = document.querySelectorAll('.submenu');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Toggle dropdowns on mobile
  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropbtn');
    button.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });

  submenus.forEach(submenu => {
    const link = submenu.querySelector('a');
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        submenu.classList.toggle('active');
      }
    });
  });

  // Close menu on outside click (mobile)
  document.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('show');
      dropdowns.forEach(d => d.classList.remove('active'));
      submenus.forEach(s => s.classList.remove('active'));
    }
  });