document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.getElementById("signupBtn");
    const nomeInput = document.getElementById("nome");
    const cognomeInput = document.getElementById("cognome");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");
    const erroreNome = document.getElementById("erroreNome");
    const erroreCognome = document.getElementById("erroreCognome");
    const erroreEmail = document.getElementById("erroreEmail");
    const erroreTelefono = document.getElementById("erroreTelefono");
  
    signupBtn.addEventListener("click", function(event) {
      event.preventDefault();
  
      const nome = nomeInput.value.trim();
      const cognome = cognomeInput.value.trim();
      const email = emailInput.value.trim();
      const telefono = telefonoInput.value.trim();
  
      // Verifica se tutti i campi sono stati inseriti
      if (nome === "") {
        mostraErrore(erroreNome, "Inserisci il nome");
      } else {
        nascondiErrore(erroreNome);
      }
  
      if (cognome === "") {
        mostraErrore(erroreCognome, "Inserisci il cognome");
      } else {
        nascondiErrore(erroreCognome);
      }
  
      if (email === "") {
        mostraErrore(erroreEmail, "Inserisci l'email");
      } else if (!isValidEmail(email)) {
        mostraErrore(erroreEmail, "Email non valida");
      } else {
        nascondiErrore(erroreEmail);
      }
  
      if (telefono === "") {
        mostraErrore(erroreTelefono, "Inserisci il numero di telefono");
      } else {
        nascondiErrore(erroreTelefono);
      }
  
      // Se tutti i campi sono validi, invia i dati all'API per la registrazione
      if (nome !== "" && cognome !== "" && isValidEmail(email) && telefono !== "") {
        const url = "http://localhost:9005/api/registrazione"; // Sostituisci con l'URL dell'API di registrazione
        const data = {
          nome: nome,
          cognome: cognome,
          email: email,
          telefono: telefono,
        };
  
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((result) => {
            // Gestisci la risposta dell'API qui (ad esempio, mostra un messaggio di successo)
            console.log(result);
          })
          .catch((error) => {
            console.error("Errore durante la chiamata API:", error);
          });
      }
    });
  
    // Funzione per mostrare un messaggio di errore sotto l'input
    function mostraErrore(elemento, messaggio) {
      elemento.textContent = messaggio;
      elemento.style.display = "block";
    }
  
    // Funzione per nascondere il messaggio di errore sotto l'input
    function nascondiErrore(elemento) {
      elemento.textContent = "";
      elemento.style.display = "none";
    }
  
    // Funzione per verificare se una stringa è un'email valida (semplificata)
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  