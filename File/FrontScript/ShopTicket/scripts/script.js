let teatroSel = document.querySelector("#teatro");
let spettacoloSel = document.querySelector("#spettacolo");
let replicaSel = document.querySelector("#replica");
let numBiglietti = document.querySelector("#numBiglietti");
let riduciBiglietti = document.querySelector("#riduciB");
let aumentaBiglietti = document.querySelector("#aumentaB");
let pagamento = document.querySelector("#pagamento");
let compra = document.querySelector("#CompraBiglietto");

teatroSel.innerHTML = `<option value="null" >-Seleziona un teatro-</option>`
spettacoloSel.innerHTML = `<option value="null" > - </option>`
replicaSel.innerHTML = `<option value="null" > - </option>`

let CodReplica;

fetch("http://localhost:9005/api/teatro")
  .then(data => {
    return data.json();
  })
  .then(teatro => {
    console.log(teatro);
    teatro.forEach(teatri => {
      teatroSel.innerHTML +=
        `<option value="${teatri.cod_teatro}" id="${teatri.nome}">${teatri.nome}</option>`


    });

  });

teatroSel.addEventListener("change", function () {
  // Svuota la select delle repliche prima di aggiungere le nuove opzioni
  spettacoloSel.innerHTML = `<option value="null" > - </option>`;

  fetch(`http://localhost:9005/api/spettacoli/${teatroSel.value}`)
    .then(data => {
      return data.json();
    })
    .then(spettacolo => {
      console.log(spettacolo);
      spettacolo.forEach(speccoli => {
        spettacoloSel.innerHTML +=
          `<option value="${speccoli.cod_spettacolo}" id="${speccoli.titolo}">${speccoli.titolo}</option>`
      });
    });
})


spettacoloSel.addEventListener("change", function () {
  // Svuota la select delle repliche prima di aggiungere le nuove opzioni
  replicaSel.innerHTML = `<option value="null" > - </option>`;

  fetch(`http://localhost:9005/api/repliche/${spettacoloSel.value}`)
    .then(data => {
      return data.json();
    })
    .then(replica => {
      console.log(replica);
      replica.forEach(repliche => {
        replicaSel.innerHTML +=
          `<option value="${repliche.cod_repliche}" id="${repliche.cod_repliche}">${repliche.data_replica}</option>`;

        
      });  
      
    });
    replicaSel.addEventListener("blur", function(){
      CodReplica = replicaSel.value;
      console.log(CodReplica)
    })
    
})

riduciBiglietti.addEventListener("click", function(){
  let numeroBiglietti = numBiglietti.value;
  if ( numeroBiglietti != 0){
    numeroBiglietti--;
    numBiglietti.value =  numeroBiglietti;
  }
});

aumentaBiglietti.addEventListener("click", function(){
  let numeroBiglietti = numBiglietti.value;
    numeroBiglietti++;
    numBiglietti.value =  numeroBiglietti;
});



compra.addEventListener("click", function() {
  let nuovoBiglietto = {
        
    cod_cliente: 1,
    cod_replica: CodReplica,
    data_ora: "28/11/1997",
    tipo_pagamento: pagamento.value,
    quantita:  numBiglietti.value

}


fetch('http://localhost:9005/api/biglietti',{
    method: "POST",
    headers: {"content-type": "application/json",},
    body: JSON.stringify(nuovoBiglietto)
})
.then(data =>{return data.json()})

});