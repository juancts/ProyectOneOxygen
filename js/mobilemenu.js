const toggleButton = document.getElementById("button_menu");
const navWrapper = document.getElementById("nav");
import  {btncerrar, hambur} from "./xtras.js";
//import hambur from "./xtras.js";

//const { btncerrar, hambur } = require("./xtras.js")


const cierre = () => {
  navWrapper.addEventListener("click", (e) => {
    if (e.target.id === "nav") {
      navWrapper.classList.remove("show");
      toggleButton.classList.remove("close");
      hambur();
    }
  });
};

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
  if (toggleButton.classList.contains("close")) {
    // Reemplazar el contenido del botón por el SVG de cruz
    btncerrar();
  } else {
    // Reemplazar el contenido del botón por el SVG de menú hamburguesa
    hambur();
  }
  cierre();
});
