package com.ticketstage.services;

import java.util.List;


import com.ticketstage.entities.Spettacolo;

public interface SpettacoloService {

	
	List<Spettacolo> getSpettacolo();
	Spettacolo getSpettacoloById(int cod_spettacolo);
	Spettacolo addSpettacolo(Spettacolo spettacolo);
//	Cliente setNome(String nome);
//	Cliente setCognome(String cognome);
//	Cliente setTelefono(int telefono);
//	Cliente setEmail(String email);
	
	
	
}
