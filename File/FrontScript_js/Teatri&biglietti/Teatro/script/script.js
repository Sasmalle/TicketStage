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
    <div class="show-image">
       <img src="img/${spettacoli.titolo}.jpg" alt="Spettacolo 1">
    </div>
    <div class="show-details">
       <h2>Titolo ${spettacoli.titolo}</h2>
       <p>Autore: ${spettacoli.autore}</p>
       <p>Regista: ${spettacoli.regista}</p>
       <p>prezzo: ${spettacoli.prezzo}</p>
       <button class="btn-buy" id="${spettacoli.nome}" onclick="passaCod('${spettacoli.cod_spettacolo}')">Acquista biglietto</button>
    </div>
    </div>  
 `
    });

  });

function passaCod(codSpettacoli) {
  localStorage.setItem("cod_spettacolo", codSpettacoli);
}