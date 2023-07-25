package com.ticketstage.services;

import java.util.List;


import com.ticketstage.entities.BigliettiReso;

import com.ticketstage.entities.Biglietto;


public interface BigliettoService {
	
	
	List<Biglietto> getBiglietto();

	List<Biglietto> getBigliettoByCod_cliente(int cod_cliente);
	
	List<BigliettiReso> getBigliettoByCod_cliente1(int cod_cliente);
	
	Biglietto addBiglietto(Biglietto b);
	
	
	
}
