let carte = document.querySelector("#cards");

fetch(`http://localhost:9005/api/biglietti/bigliettoreso/2`)
    .then(data => {
      return data.json();
    })
    .then(card=> {
      card.forEach(cards => {
        carte.innerHTML +=
          `<div class="border"> 
          <li>teatro: ${cards.teatro}</li>
          <li>titolo: ${cards.titolo}</li>
          <li>autore: ${cards.autore}</li>
          <li>data della replica: ${cards.data_replica}</li>
          <li>quantità: ${cards.quantita}</li>
          <li>cognome: ${cards.cognome}</li>
          <li>nome: ${cards.nome}</li>
          </div>`
      });
    });

