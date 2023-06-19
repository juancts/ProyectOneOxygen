import { fetchData } from "./fetchdata.js";

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let nombreInput = document.getElementById("nombre");
  let emailInput = document.getElementById("email");

  let nombre = nombreInput.value;
  let email = emailInput.value;

  console.log(nombre + email)

  var regexNombre = /^[a-zA-Z\s]+$/;
  var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regexNombre.test(nombre)) {console.log(nombreInput);
    nombreInput.style.border="2px solid red";
    console.log(nombreInput);
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  if (!regexEmail.test(email)) {
    console.log(emailInput);
    emailInput.style.border="2px solid red";
    console.log(emailInput);
    alert("Por favor, ingrese un email válido.");
    return;
  }

  fetchData(nombre, email);  
  alert("¡Formulario enviado con éxito!");
  
});
