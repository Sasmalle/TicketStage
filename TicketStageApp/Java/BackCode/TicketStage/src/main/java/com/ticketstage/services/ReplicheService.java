package com.ticketstage.services;

import java.util.List;

import com.ticketstage.entities.Biglietto;
import com.ticketstage.entities.Repliche;


public interface ReplicheService {

	List<Repliche> getRepliche();
	
	List<Repliche> getReplicheByCod_spettacolo(String cod_spettacolo);
	
}
