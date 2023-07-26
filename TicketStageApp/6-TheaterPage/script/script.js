//Impostazioni del tempo di cambio foto nel carrosello
localStorage.removeItem("cod_spettacolo");
const myCarouselElement = document.querySelector('#carouselExampleFade')
const carte = document.querySelector('#carte')

fetch(`http://localhost:9005/api/spettacoli/${localStorage.getItem("cod_teatro")}`)
  .then(data => {
    return data.json();
  })
  .then(spettacolo => {
    spettacolo.forEach(spettacoli => {
      carte.innerHTML +=
       `

       <div class="container">
       <div class="show-item">        
           <div class="show-details">
           <h2 class="titolo">${spettacoli.titolo}</h2>
           <p class="p2">Autore:  ${spettacoli.autore}</p>
           <p class="p2">Spettacolo: ${spettacoli.titolo}</p>
           <p class="p2">Regista:  ${spettacoli.regista}</p>
           <p class="p2">Prezzo: ${spettacoli.prezzo}</p>        
           <button class="btn-buy" id="${spettacoli.nome}" onclick="passaCod('${spettacoli.cod_spettacolo}')">Acquista biglietto</button>
         </div>
       </div>

 
 `
    });

  });

function passaCod(codSpettacoli) {
  localStorage.setItem("cod_spettacolo", codSpettacoli);
}