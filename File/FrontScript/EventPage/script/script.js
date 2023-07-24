document.addEventListener("DOMContentLoaded", function() {
    const spettacoliList = document.querySelector(".spettacoli-list");
    const spettacoloInfo = document.querySelector(".spettacolo-info");
    const spettacoloNome = document.getElementById("spettacolo-nome");
    const spettacoloAutore = document.getElementById("spettacolo-autore");
    const spettacoloRegista = document.getElementById("spettacolo-regista");
    const spettacoloPrezzo = document.getElementById("spettacolo-prezzo");
    const teatriAssociati = document.getElementById("teatri-associati");
  
    // URL dell'API degli spettacoli e dei teatri (sostituisci con i tuoi URL effettivi)
    const apiURLSpettacoli = "https://example.com/api/spettacoli";
    const apiURLTeatri = "https://example.com/api/teatri";
  
    // Funzione per ottenere gli spettacoli dall'API
    function getSpettacoli() {
      fetch(apiURLSpettacoli)
        .then(response => response.json())
        .then(spettacoli => {
          // Aggiungi gli spettacoli alla lista
          spettacoli.forEach(spettacolo => {
            const spettacoloItem = document.createElement("li");
            spettacoloItem.textContent = spettacolo.nome;
            spettacoloItem.addEventListener("click", () => showSpettacoloInfo(spettacolo));
            spettacoliList.appendChild(spettacoloItem);
          });
        })
        .catch(error => console.error("Errore durante il recupero degli spettacoli:", error));
    }
  
    // Funzione per mostrare le informazioni dello spettacolo selezionato
    function showSpettacoloInfo(spettacolo) {
      spettacoloNome.textContent = spettacolo.nome;
      spettacoloAutore.textContent = "Autore: " + spettacolo.autore;
      spettacoloRegista.textContent = "Regista: " + spettacolo.regista;
      spettacoloPrezzo.textContent = "Prezzo: " + spettacolo.prezzo + "€";
      spettacoloInfo.style.display = "block";
  
      // Effettua una richiesta API per ottenere i teatri associati allo spettacolo
      fetch(`${apiURLTeatri}?codiceTeatro=${spettacolo.codiceTeatro}`)
        .then(response => response.json())
        .then(teatri => {
          // Mostra i teatri associati nello spettacolo
          teatriAssociati.textContent = "Teatri associati:";
          teatri.forEach(teatro => {
            const teatroItem = document.createElement("li");
            teatroItem.textContent = teatro.nome;
            teatriAssociati.appendChild(teatroItem);
          });
        })
        .catch(error => console.error("Errore durante il recupero dei teatri associati:", error));
    }
  
    // Inizializza la pagina recuperando gli spettacoli dall'API
    getSpettacoli();
  });
  