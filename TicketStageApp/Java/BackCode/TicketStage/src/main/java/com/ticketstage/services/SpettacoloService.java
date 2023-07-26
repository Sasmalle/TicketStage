package com.ticketstage.services;

import java.util.List;

import com.ticketstage.entities.Repliche;
import com.ticketstage.entities.Spettacolo;

public interface SpettacoloService {

	
	List<Spettacolo> getSpettacolo();

	List<Spettacolo> getSpettacoloByCod_spettacolo(int cod_teatro);
	
	List<Spettacolo> getSpettacoloByCod_GetTeatro(String cod_spettacolo);

	
}
