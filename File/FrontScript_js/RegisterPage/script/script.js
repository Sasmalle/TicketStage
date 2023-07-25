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
      } else if (!isValidPhoneNumber(telefono)) {
        mostraErrore(erroreTelefono, "numero di telefono non valido");
      } else {
        nascondiErrore(erroreTelefono);
      }
    
  
      // Se tutti i campi sono validi, invia i dati all'API per la registrazione
      if (nome !== "" && cognome !== "" && isValidEmail(email) && telefono !== "") {
        
        
          let nuovoCliente = {
      
            
            cognome: cognome,
            nome: nome,
            telefono: telefono,
            email: email
      
          }
      
      
          fetch('http://localhost:9005/api/cliente', {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify(nuovoCliente )
          })
            .then(data => { return data.json() })
      
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

    // Funzione per verificare se una stringa è un numero di telefono valido
    function isValidPhoneNumber(telefono) {
      const phoneNumberPattern = /^\d+$/;
      return phoneNumberPattern.test(telefono);
    }
  });
  