document.addEventListener("DOMContentLoaded", function() {
    var newsletterPopup = document.getElementById("newsletterPopup");
    var closeButton = document.querySelector(".close");
    var emailInput = document.getElementById("emailInput");
    var subscribeForm = document.getElementById("subscribeForm");
  
    // Verificar si el popup ya se cerró antes
    if (localStorage.getItem("newsletterPopupClosed")) {
      return;
    }
  
    // Función para mostrar el popup/modal
    function showPopup() {
      newsletterPopup.style.display = "block";
    }
  
    // Función para cerrar el popup/modal
    function closePopup() {
      newsletterPopup.style.display = "none";
      localStorage.setItem("newsletterPopupClosed", true);
    }
  
    // Evento para cerrar el popup/modal al hacer clic en la 'X'
    closeButton.addEventListener("click", closePopup);
  
    // Evento para cerrar el popup/modal al hacer clic fuera de él
    window.addEventListener("click", function(event) {
      if (event.target === newsletterPopup) {
        closePopup();
      }
    });
  
    // Evento para cerrar el popup/modal al presionar la tecla ESC
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        closePopup();
      }
    });
  
    // Evento para enviar el formulario de suscripción
    subscribeForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var email = emailInput.value;
  
      // Validar la dirección de correo electrónico (puedes utilizar una expresión regular)
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Aquí puedes enviar la dirección de correo electrónico al servidor (utiliza fetch(), AJAX, u otra técnica)
  
      // Cerrar el popup/modal después de enviar el formulario
      closePopup();
    });
  
    // Mostrar el popup/modal después de 5 segundos
    setTimeout(showPopup, 5000);
  
    // Mostrar el popup/modal cuando el usuario baja el 25% de la página
    window.addEventListener("scroll", function() {
      var scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 25) {
        showPopup();
      }
    });
  });