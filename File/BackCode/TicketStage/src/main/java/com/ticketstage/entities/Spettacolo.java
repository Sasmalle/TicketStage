package com.ticketstage.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="spettacoli")
public class Spettacolo {



	
	
	@Id
	private String cod_spettacolo;
	
	@Column(length = 80)
	private String titolo;
	
	@Column(length = 25)
	private String autore;
	
	@Column(length = 25)
	private String regista;
	
	private double prezzo;

	
	
	
	public String getCod_spettacolo() {
		return cod_spettacolo;
	}

	public void setCod_spettacolo(String cod_spettacolo) {
		this.cod_spettacolo = cod_spettacolo;
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

	public String getRegistra() {
		return regista;
	}

	public void setRegistra(String regista) {
		this.regista = regista;
	}

	public double getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}
	
	
}
