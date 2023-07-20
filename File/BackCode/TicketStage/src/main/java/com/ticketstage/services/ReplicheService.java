package com.ticketstage.services;

import java.util.List;

import com.ticketstage.entities.Repliche;


public interface ReplicheService {

	List<Repliche> getRepliche();
	Repliche getReplicheById(int cod_repliche);
	Repliche addRepliche(Repliche repliche);
	
	
	
//	Cliente setNome(String nome);
//	Cliente setCognome(String cognome);
//	Cliente setTelefono(int telefono);
//	Cliente setEmail(String email);
	
	
	
}
