package com.ticketstage.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name="repliche")
public class Repliche {

		
		
		@Id
		private String cod_replica;
		
		@Column(nullable = false)
		private String data_replica;
		
		@Column(nullable = false, length = 4)
		private String cod_spettacolo;
		
		
		public String getCod_repliche() {
			return cod_replica;
		}

		public void setCod_repliche(String cod_replica) {
			this.cod_replica = cod_replica;
		}

		public String getCod_spettacolo() {
			return cod_spettacolo;
		}

		public void setCod_spettacolo(String cod_spettacolo) {
			this.cod_spettacolo = cod_spettacolo;
		}

		public String getData_replica() {
			return data_replica;
		}

		public void setData_replica(String data_replica) {
			this.data_replica = data_replica;
		}
		
	
		
		
	}

	
	

