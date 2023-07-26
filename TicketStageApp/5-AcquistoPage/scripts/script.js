// let teatroSel = document.querySelector("#teatro");
// let spettacoloSel = document.querySelector("#spettacolo");
let replicaSel = document.querySelector("#replica");
let numBiglietti = document.querySelector("#numBiglietti");
let riduciBiglietti = document.querySelector("#riduciB");
let aumentaBiglietti = document.querySelector("#aumentaB");
let pagamento = document.querySelector("#pagamento");
let compra = document.querySelector("#CompraBiglietto");
let formBiglietto = document.querySelector("#formBiglietto")

// teatroSel.innerHTML = `<option value="null" >-Seleziona un teatro-</option>`
// spettacoloSel.innerHTML = `<option value="null" > - </option>`
replicaSel.innerHTML = `<option value="null" > - </option>`

let CodReplica;
let dataReplicaSelezionata;

let postiDisponibili = JSON.parse(localStorage.getItem('postiDisponibili'));

if (!postiDisponibili) {
  postiDisponibili = [
    0, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875,
    1592, 1592, 1592, 1592, 1592, 1592, 1592, 1592, 1592, 1592,
    1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500
  ];
}

const dataOraCorrenti = new Date();

replicaSel.innerHTML = `<option value="null" > Seleziona data della replica </option>`;

fetch(`http://localhost:9005/api/repliche/${localStorage.getItem("cod_spettacolo")}`)
  .then(data => {
    return data.json();
  })
  .then(replica => {
    console.log(replica);
    replica.forEach(repliche => {
      replicaSel.innerHTML +=
        `<option value="${repliche.cod_repliche}" id="${repliche.cod_repliche}">${convertiInEuropeo(repliche.data_replica)}</option>`;
    });

  });


replicaSel.addEventListener("blur", function () {
  CodReplica = replicaSel.value;
})


riduciBiglietti.addEventListener("click", function () {
  let numeroBiglietti = numBiglietti.value;
  if (numeroBiglietti != 0) {
    numeroBiglietti--;
    numBiglietti.value = numeroBiglietti;
  }
});

aumentaBiglietti.addEventListener("click", function () {
  let numeroBiglietti = numBiglietti.value;
  numeroBiglietti++;
  numBiglietti.value = numeroBiglietti;
});

compra.addEventListener("click", function () {

  const utete = localStorage.getItem("utente");
  const codUtente = JSON.parse(utete);
  const dataCorrente = dataOraCorrenti.toLocaleDateString(); // Formato: MM/GG/AAAA
  const oraCorrente = dataOraCorrenti.toLocaleTimeString(); // Formato: hh:mm:ss
  const postiDisponibiliReplica = postiDisponibili[ottieniPosizioneArray(CodReplica)];
  if (CodReplica.trim() != "null" && pagamento.value.trim() != "null" && numBiglietti.value.trim() != 0) {
    postiDisponibili[ottieniPosizioneArray(CodReplica)] -= numBiglietti.value;
    updatePostiDisponibiliInStorage();
    if (postiDisponibili[ottieniPosizioneArray(CodReplica)] > 0) {

      let nuovoBiglietto = {

        cod_cliente: codUtente.cod_cliente,
        cod_replica: CodReplica,
        data_ora: convetiInAmericano(dataCorrente) + " " + oraCorrente,
        tipo_pagamento: pagamento.value,
        quantita: numBiglietti.value

      }

      fetch('http://localhost:9005/api/biglietti', {
        method: "POST",
        headers: { "content-type": "application/json", },
        body: JSON.stringify(nuovoBiglietto)
        
      })
        .then(data =>  window.location.href = '../4-BigliettoPage/bigliettoPage.html')

    } else {
      postiDisponibili[ottieniPosizioneArray(CodReplica)] = postiDisponibiliReplica;
      updatePostiDisponibiliInStorage()
      alert(`posti esauiriti`)
      
    } 

  }
  

});

function convertiInEuropeo(date) {
  const dateParti = date.split('-');
  const formatoEuropeo = `${dateParti[2]}/${dateParti[1]}/${dateParti[0]}`;
  return formatoEuropeo;
}

function convetiInAmericano(date) {
  const dateParti = date.split('/');
  // (MM 1 /DD 0/YYYY 2)
  const formatoAmericano = `${dateParti[2]}-${dateParti[0]}-${dateParti[1]}`;
  return formatoAmericano;
}

function ottieniPosizioneArray(datoStringa) {
  // Rimuovi la "s" dalla stringa utilizzando il metodo slice()
  const numeroStringa = datoStringa.slice(1);

  // Converti la stringa in un numero intero utilizzando parseInt() specificando la base 10
  const posizioneArray = parseInt(numeroStringa, 10);

  return posizioneArray;
}

function updatePostiDisponibiliInStorage() {
  localStorage.setItem('postiDisponibili', JSON.stringify(postiDisponibili));
}