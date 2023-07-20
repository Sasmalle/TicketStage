package com.ticketstage.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name="spettacoli")
public class Repliche {

		
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int cod_repliche;
		
		
		@Column(nullable = false, length = 20)
		private String cod_spettacolo;
		
		@Column(nullable = false, length = 20)
		private String data_replica;

		public int getCod_repliche() {
			return cod_repliche;
		}

		public void setCod_repliche(int cod_repliche) {
			this.cod_repliche = cod_repliche;
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

	
	

