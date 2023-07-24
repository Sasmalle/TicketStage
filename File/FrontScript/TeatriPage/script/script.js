document.addEventListener("DOMContentLoaded", function() {
    const teatriList = document.querySelector(".teatri-list");
    const teatroInfo = document.querySelector(".teatro-info");
    const teatroNome = document.getElementById("teatro-nome");
    const teatroIndirizzo = document.getElementById("teatro-indirizzo");
    const teatroCitta = document.getElementById("teatro-citta");
    const teatroProvincia = document.getElementById("teatro-provincia");
    const teatroTelefono = document.getElementById("teatro-telefono");
    const teatroPosti = document.getElementById("teatro-posti");
    const eventiAssociati = document.getElementById("eventi-associati");
  
    // URL dell'API dei teatri e degli eventi (sostituisci con i tuoi URL effettivi)
    const apiURLTeatri = "https://example.com/api/teatri";
    const apiURLEventi = "https://example.com/api/eventi";
  
    // Funzione per ottenere i teatri dall'API
    function getTeatri() {
      fetch(apiURLTeatri)
        .then(response => response.json())
        .then(teatri => {
          // Aggiungi i teatri alla lista
          teatri.forEach(teatro => {
            const teatroItem = document.createElement("li");
            teatroItem.textContent = teatro.nome;
            teatroItem.addEventListener("click", () => showTeatroInfo(teatro));
            teatriList.appendChild(teatroItem);
          });
        })
        .catch(error => console.error("Errore durante il recupero dei teatri:", error));
    }
  
    // Funzione per mostrare le informazioni del teatro selezionato
    function showTeatroInfo(teatro) {
      teatroNome.textContent = teatro.nome;
      teatroIndirizzo.textContent = "Indirizzo: " + teatro.indirizzo;
      teatroCitta.textContent = "Città: " + teatro.citta;
      teatroProvincia.textContent = "Provincia: " + teatro.provincia;
      teatroTelefono.textContent = "Telefono: " + teatro.telefono;
      teatroPosti.textContent = "Posti: " + teatro.posti;
      teatroInfo.style.display = "block";
  
      // Effettua una richiesta API per ottenere gli eventi associati al teatro
      fetch(`${apiURLEventi}?codiceTeatro=${teatro.codiceTeatro}`)
        .then(response => response.json())
        .then(eventi => {
          // Mostra gli eventi associati al teatro
          eventiAssociati.textContent = "Eventi associati:";
          eventi.forEach(evento => {
            const eventoItem = document.createElement("li");
            eventoItem.textContent = evento.nomeSpettacolo;
            eventiAssociati.appendChild(eventoItem);
          });
        })
        .catch(error => console.error("Errore durante il recupero degli eventi associati:", error));
    }
  
    // Inizializza la pagina recuperando i teatri dall'API
    getTeatri();
  });
  