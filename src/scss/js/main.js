document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Móvil Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('open');
    });
  }

  // 2. Dropdown en móviles (Toggle al hacer clic)
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('a');
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });

  // 3. Botones de Acción (Redirección a WhatsApp)
  const buttons = document.querySelectorAll('.card-btn, .btn-primary');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      let serviceName = "Servicios SaltaSimple";

      if (card) {
        const title = card.querySelector('h3');
        if (title) serviceName = title.textContent.trim();
      }

      const phone = "5493876154675"; // WhatsApp de contacto
      const message = encodeURIComponent(`¡Hola! Quisiera consultar sobre el servicio: *${serviceName}* publicado en SaltaSimple.`);
      
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
  });
});