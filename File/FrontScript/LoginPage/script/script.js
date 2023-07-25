document.addEventListener("DOMContentLoaded", function() {
  const signinBtn = document.querySelector("#signinBtn");
  const codiceUtenteInput = document.querySelector("#codiceUtente");
  const rememberCheckbox = document.querySelector("#rememberCheckbox");
  const erroreTesto = document.querySelector("#erroreTesto");

  // Controlla se il codice utente è già stato salvato in precedenza
//   const codiceUtenteSalvato = localStorage.getItem("codiceUtente");
//   if (codiceUtenteSalvato) {
//       codiceUtenteInput.value = codiceUtenteSalvato;
//       rememberCheckbox.checked = true; // Segna automaticamente la casella di controllo "Ricorda credenziali"
//   }

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
        //   if (rememberCheckbox.checked) {
        //       localStorage.setItem("codiceUtente", codiceUtente);
        //   } else {
        //       localStorage.removeItem("codiceUtente");
        //   }

        // Esegui qui la chiamata API per verificare il codice utente e gestire il login
    
    

    fetch("http://localhost:9005/api/cliente")
    .then(data =>{
        return data.json();
    })
    .then(clienti => {
        console.log(clienti);
        let codiceUtente = codiceUtenteInput.value;
        console.log(codiceUtente);
        let CercaCliente = clienti.find(cliente => cliente.cod_cliente == codiceUtente);
        if(CercaCliente){
            console.log(CercaCliente)
            localStorage.clear();
            localStorage.setItem("utente", JSON.stringify(CercaCliente));
            window.location.href = "../MainPage/MainPage.html";
        }else{
            erroreTesto.textContent = "Codice utente non valido";
            erroreTesto.classList.add("error-active");
        }
    });
    
        }
    });
});
