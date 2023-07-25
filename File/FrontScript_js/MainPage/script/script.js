//Impostazioni del tempo di cambio foto nel carrosello
localStorage.removeItem("cod_spettacolo");
localStorage.removeItem("cod_teatro");
const myCarouselElement = document.querySelector('#carouselExampleFade')
const bottoni = document.querySelector('#bottoni')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: false
});

fetch("http://localhost:9005/api/teatro")
  .then(data => {
    return data.json();
  })
  .then(teatro => {
    teatro.forEach(teatri => {
      bottoni.innerHTML += 
      `
      <div id="card1" class="card">
      <div class="content">
        <h2 class="title">${teatri.nome}</h2>
        <p class="copy">Esplora gli spettacoli in questa sede</p>
        <button class="btn" id="${teatri.cod_teatro}" onclick="passaCod(${teatri.cod_teatro})">Acquista biglietti</button>
      </div>
      </div>
      </div>
      </div> 
      `
    });
  });

function passaCod(codTeatro) {
  localStorage.setItem("cod_teatro", codTeatro);
}