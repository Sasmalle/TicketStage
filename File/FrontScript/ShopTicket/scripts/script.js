let teatroSel = document.querySelector("#teatro");
let spettacoloSel = document.querySelector("#spettacolo");
let replicaSel = document.querySelector("#replica");
let numBiglietti = document.querySelector("#numBiglietti");



spettacoloSel.innerHTML = `<option value="seleziona spettacolo" >seleziona spettacolo</option>` 

    fetch("http://localhost:9005/api/spettacoli")
    .then(data =>{
        return data.json();
    })
    .then(spettacolo => {
        console.log(spettacolo);
        spettacolo.forEach(speccoli => {
            spettacoloSel.innerHTML += 
            `<option value="${speccoli.cod_spettacolo}" id="${speccoli.titolo}">${speccoli.titolo}</option>`    
            
           
        });

    }); 

    spettacoloSel.addEventListener("change", function () {
        // Svuota la select delle repliche prima di aggiungere le nuove opzioni
        replicaSel.innerHTML = "";
      
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
        })