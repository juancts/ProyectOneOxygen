

const spanProfPrice = document.getElementById("prof-price");
const spanpremPrice = document.getElementById("premium-price");

let select = document.getElementById('mySelect');
select.addEventListener('change', ()=>{
  //console.log(profPrice + premPrice)
    let selectedOption = select.value;
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
    .then(response => response.json())
    .then(data => {
      if (selectedOption === "option2"){
       
        spanProfPrice.textContent = "$" + Math.round(25 * data.eur.usd);
        spanpremPrice.textContent = "$" + Math.round(60 * data.eur.usd);
        console.log(data.eur.usd);

      }else if(selectedOption==="option3"){
        spanpremPrice.textContent = "£" + Math.round(60 * data.eur.gbp);
        spanProfPrice.textContent = "£" + Math.round(25 * data.eur.gbp);
        console.log(data.eur.gbp)
      }else{
        spanProfPrice.textContent ="$" + 25;
        spanpremPrice.textContent = "$" + 60;
      }
    })
    .catch(error => {
      // Manejo de errores
      console.log(error);
    });

    console.log("SELECTED OPTION:",selectedOption);
  });


  

