document.addEventListener("DOMContentLoaded", function() {
  const signinBtn = document.getElementById("signinBtn");
  const codiceUtenteInput = document.getElementById("codiceUtente");
  const rememberCheckbox = document.getElementById("rememberCheckbox");
  const erroreTesto = document.getElementById("erroreTesto");

  // Controlla se il codice utente è già stato salvato in precedenza
  const codiceUtenteSalvato = localStorage.getItem("codiceUtente");
  if (codiceUtenteSalvato) {
      codiceUtenteInput.value = codiceUtenteSalvato;
      rememberCheckbox.checked = true; // Segna automaticamente la casella di controllo "Ricorda credenziali"
  }

  // Event listener per rimuovere il messaggio di errore quando l'utente inizia a scrivere nel campo del codice utente
  codiceUtenteInput.addEventListener("input", function() {
      erroreTesto.textContent = "";
      erroreTesto.classList.remove("error-active");
  });

  signinBtn.addEventListener("click", function(event) {
      event.preventDefault();

      const codiceUtente = codiceUtenteInput.value.trim();

      if (codiceUtente === "") {
          // Mostra il messaggio di errore e aggiungi la classe per lo stile
          erroreTesto.textContent = "Inserisci il codice utente";
          erroreTesto.classList.add("error-active");
      } else {
          // Rimuovi il messaggio di errore e la classe di stile se il campo è valido
          erroreTesto.textContent = "";
          erroreTesto.classList.remove("error-active");

          // Salva il codice utente in localStorage se la casella "Ricorda credenziali" è selezionata
          if (rememberCheckbox.checked) {
              localStorage.setItem("codiceUtente", codiceUtente);
          } else {
              localStorage.removeItem("codiceUtente");
          }

        // Esegui qui la chiamata API per verificare il codice utente e gestire il login
    const url = "http://localhost:9005/api/";
    const data = { COD_CLIENTE: codiceUtente };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((result) => {
        if (result.valid) {
            // Codice utente valido, esegui il login
            // Puoi aggiungere qui il codice per il login e reindirizzare l'utente alla dashboard
        }   
        else {
            // Codice utente non valido, mostra un messaggio di errore
            erroreTesto.textContent = "Codice utente non valido";
            erroreTesto.classList.add("error-active");
        }
    })
    .catch((error) => {
    console.error("Errore durante la chiamata API:", error);
    });

        }
    });
});