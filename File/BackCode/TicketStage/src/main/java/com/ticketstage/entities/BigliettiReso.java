package com.ticketstage.entities;

import jakarta.persistence.Entity;


public class BigliettiReso {
	
	private String cognome;
	private String nome;
	private int quantita;
	private String data_replica;
	private String titolo;
	private String autore;
	private String teatro;
	
	

	public BigliettiReso(String cognome2, String nome2, int quantita, String data_replica2, String titolo2,
			String autore2, String teatro2) {
		this.cognome = cognome2;
		this.nome = nome2;
		this.quantita = quantita;
		this.data_replica = data_replica2;
		this.titolo = titolo2;
		this.autore = autore2;
		this.teatro = teatro2;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getQuantita() {
		return quantita;
	}
	public void setQuantita(int quantita) {
		this.quantita = quantita;
	}
	public String getData_replica() {
		return data_replica;
	}
	public void setData_replica(String data_replica) {
		this.data_replica = data_replica;
	}
	public String getTitolo() {
		return titolo;
	}
	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}
	public String getAutore() {
		return autore;
	}
	public void setAutore(String autore) {
		this.autore = autore;
	}
	public String getTeatro() {
		return teatro;
	}
	public void setTeatro(String teatro) {
		this.teatro = teatro;
	}
	
	
	
	
}
