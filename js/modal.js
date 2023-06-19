document.addEventListener("DOMContentLoaded", function() {
    let newsletterPopup = document.getElementById("newsletterPopup");
    let closeButton = document.querySelector(".close");
    let emailInput = document.getElementById("emailInput");
    let subscribeForm = document.getElementById("subscribeForm");
  
    console.log("ENTRO EN POPUP")
  
    // Verificar si el popup ya se cerró antes
    if (localStorage.getItem("newsletterPopupClosed")) {
        console.log("LOCAL STORAGE YA SE CERRO", localStorage)
      return;
    }
  
    // Función para mostrar el popup/modal
    function showPopup() {
        if(!localStorage.getItem("newsletterPopupClosed"))newsletterPopup.style.display = "block";
    }
  
    // Función para cerrar el popup/modal
    function closePopup() {
      newsletterPopup.style.display = "none";
      localStorage.setItem("newsletterPopupClosed", true);
      console.log("LOCAL STORE CIERRO POR CRUZ", localStorage)
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
  
      let email = emailInput.value;
  
      // Validar la dirección de correo electrónico (puedes utilizar una expresión regular)
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      if (!emailRegex.test(email)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return;
      }
  
      // Aquí puedes enviar la dirección de correo electrónico al servidor (utiliza fetch(), AJAX, u otra técnica)
  
      // Cerrar el popup/modal después de enviar el formulario
      closePopup();
    });
  
    // Mostrar el popup/modal después de 1 segundo
    setTimeout(function() {
      console.log("Abriendo popup...");
      showPopup();
    }, 5000);
  
    // letiable para controlar el porcentaje de desplazamiento
  let scrollPercentage = 0;

  // Función para calcular el porcentaje de desplazamiento
  function calculateScrollPercentage() {
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = window.innerHeight;
    let scrollTop = document.documentElement.scrollTop;
    scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  }

  // Mostrar el popup/modal cuando el usuario baja el 25% de la página
  window.addEventListener("scroll", function() {
    calculateScrollPercentage();

    if (scrollPercentage >= 25  ) {
      showPopup();
      window.removeEventListener("scroll", arguments.callee);
    }
  });

});
  