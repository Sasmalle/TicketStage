package com.ticketstage.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketstage.entities.Spettacolo;
import com.ticketstage.repos.SpettacoloDAO;

@Service
public class SpettacoloServiceIMPL implements SpettacoloService{

	
	@Autowired
	private SpettacoloDAO dao;
	
	
	@Override
	public List<Spettacolo> getSpettacolo() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}


	@Override
	public List<Spettacolo> getSpettacoloByCod_spettacolo(int cod_teatro) {
		// TODO Auto-generated method stub
		return dao.getSpettacoloByCodTeatro(cod_teatro);
	}


	@Override
	public List<Spettacolo> getSpettacoloByCod_GetTeatro(String cod_spettacolo) {
		// TODO Auto-generated method stub
		return dao.getSpettacoloByCodSpettacolo(cod_spettacolo);
	}



}
