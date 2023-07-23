package com.ticketstage.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="biglietti")
public class Biglietto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cod_operazione;

	private int cod_cliente;
	@Column(length = 20)
	private String cod_replica;
	@Column(length = 20)
	private String data_ora;
	@Column(length = 40)
	private String tipo_pagamento;
	private int quantita;

	public int getCod_operazione() {
		return cod_operazione;
	}

	public void setCod_operazione(int cod_operazione) {
		this.cod_operazione = cod_operazione;
	}

	public int getCod_cliente() {
		return cod_cliente;
	}

	public void setCod_cliente(int cod_cliente) {
		this.cod_cliente = cod_cliente;
	}

	
	public String getCod_replica() {
		return cod_replica;
	}

	public void setCod_replica(String cod_replica) {
		this.cod_replica = cod_replica;
	}

	public String getData_ora() {
		return data_ora;
	}

	public void setData_ora(String data_ora) {
		this.data_ora = data_ora;
	}

	public String getTipo_pagamento() {
		return tipo_pagamento;
	}

	public void setTipo_pagamento(String tipo_pagamento) {
		this.tipo_pagamento = tipo_pagamento;
	}

	public int getQuantita() {
		return quantita;
	}

	public void setQuantita(int quantita) {
		this.quantita = quantita;
	}
}// Fine class
	
	

