document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
  
    // Resaltar la sección activa
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Espaciado
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  
    // Validación del formulario
    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevenir envío
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const formMessage = document.getElementById("formMessage");
  
      if (name && email && message) {
        formMessage.textContent = "¡Mensaje enviado con éxito!";
        formMessage.style.color = "green";
        this.reset();
      } else {
        formMessage.textContent = "Por favor, completa todos los campos.";
        formMessage.style.color = "red";
      }
    });
  });
  
