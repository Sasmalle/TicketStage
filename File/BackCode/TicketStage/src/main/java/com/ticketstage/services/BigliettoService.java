package com.ticketstage.services;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.ticketstage.entities.Biglietto;


public interface BigliettoService {
	
	
	List<Biglietto> getBiglietto();
	

	List<Biglietto> getBigliettoByCod_cliente(int cod_cliente);
	

	
}
