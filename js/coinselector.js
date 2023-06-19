
let select = document.getElementById('mySelect');
select.addEventListener('change', ()=>{
    let selectedOption = select.value;
    console.log("SELECTED OPTION:",selectedOption);
  });


  fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores
    console.log(error);
  });
