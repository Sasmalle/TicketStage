package com.ticketstage.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="spettacoli")
public class Spettacolo {



	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cod_spettacolo;
	
	
	@Column(nullable = false, length = 20)
	private String titolo;
	
	@Column(nullable = false, length = 20)
	private String autore;
	
	@Column(nullable = false, length = 14)
	private String registra;
	
	@Column(nullable = false, length = 30)
	private double prezzo;

	
	
	
	public int getCod_spettacolo() {
		return cod_spettacolo;
	}

	public void setCod_spettacolo(int cod_spettacolo) {
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
		return registra;
	}

	public void setRegistra(String registra) {
		this.registra = registra;
	}

	public double getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}
	
	
}
