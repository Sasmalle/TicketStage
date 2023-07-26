document.addEventListener("DOMContentLoaded", function () {
    localStorage.removeItem("utente");
    const signinBtn = document.querySelector("#signinBtn");
    const codiceUtenteInput = document.querySelector("#codiceUtente");
    const erroreTesto = document.querySelector("#erroreTesto");

    codiceUtenteInput.addEventListener("input", function () {
        erroreTesto.textContent = "";
        erroreTesto.classList.remove("error-active");
    });

    signinBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const codiceUtente = codiceUtenteInput.value.trim();

        if (codiceUtente === "") {
            erroreTesto.textContent = "Inserisci il codice utente";
            erroreTesto.classList.add("error-active");
        } else {
            erroreTesto.textContent = "";
            erroreTesto.classList.remove("error-active");

            fetch("http://localhost:9005/api/cliente")
                .then(data => {
                    return data.json();
                })
                .then(clienti => {
                    console.log(clienti);
                    let codiceUtente = codiceUtenteInput.value;
                    console.log(codiceUtente);
                    let CercaCliente = clienti.find(cliente => cliente.cod_cliente == codiceUtente);
                    if (CercaCliente) {
                        console.log(CercaCliente)
                        localStorage.clear();
                        localStorage.setItem("utente", JSON.stringify(CercaCliente));
                        window.location.href = "../../3-MainPage/mainPage.html";
                    } else {
                        erroreTesto.textContent = "Codice utente non valido";
                        erroreTesto.classList.add("error-active");
                    }
                });

        }
    });
});
