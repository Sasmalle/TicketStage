const BTNSUBMIT = document.querySelector('#btnSubmit');
const logged = document.querySelector('#logged');

const emailCliente = document.querySelector('#emailCliente');
const codiceCliente = document.querySelector('#codiceCliente');

BTNSUBMIT.addEventListener('click', login);

function login(){
    fetch('http://localhost:9007/api/cliente')
    .then(data => {
        return data.json();
    })
    .then(clienti => {
            console.log(clienti);
            const email = emailCliente.value;
            const codice = codiceCliente.value;
            const clienteTrovato = clienti.find(cliente => cliente.email == email && cliente.cod_cliente == codice);
            if(clienteTrovato){
                console.log(clienteTrovato);
                renderTo(clienteTrovato);
            }else{
                alert("Inserire indirizzo email e codice cliente validi");
                event.preventDefault();
            }
        });
        }


// function login() {
            //     if (emailCliente == "" || codiceCliente == "") {
            //         alert("Inserire indirizzo email e codice cliente validi");
            //     } else if (emailCliente.value && codiceCliente.value) {
            //         return renderTo();
            //     }
            // }
    

function closeCard() {
    logged.classList.remove('logOn');
}

function renderTo(cliente) {
    logged.classList.add('logOn');
    logged.innerHTML = `<h3>Bentornato, ${cliente.nome}.</h3> <br>
    <h4>Il tuo indirizzo email: ${cliente.email}</h4>
    <button onclick="closeCard()">Log out</button>`;
}
