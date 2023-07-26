let carte = document.querySelector("#carte");
const utete = localStorage.getItem("utente");
const codUtente = JSON.parse(utete);
fetch(`http://localhost:9005/api/biglietti/bigliettoreso/${codUtente.cod_cliente}`)
    .then(data => {
      return data.json();
    })
    .then(card=> {
      card.forEach(cards => {
        carte.innerHTML +=
          `
          
  <div class="ticket">
    <div class="stub">
      <div class="top">
        <span class="admit">Admit</span>
        <span class="line"></span>
        <span class="num">
          cliente
          <span>${cards.cognome} ${cards.nome}</span>
        </span>
      </div>
      <div class="number">${cards.quantita}</div>
      <div class="invite">
        ${cards.teatro}
      </div>
    </div>
    <div class="check">
      <div class="big">
        ${cards.titolo}
      </div>
      <div class="number">#1</div>
      <div class="info">
        <section>
          <div class="title">Date</div>
          <div>${cards.data_replica}</div>
        </section>
        <section>
          <div class="title">Issued By</div>
          <div>Ampersand</div>
        </section>
        <section>
          <div class="title">Autore</div>
          <div>${cards.autore}</div>
        </section>
      </div>
    </div>
  
          
  `
          
      });
    });

