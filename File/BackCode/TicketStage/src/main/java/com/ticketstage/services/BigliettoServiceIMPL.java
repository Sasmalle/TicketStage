package com.ticketstage.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.catalina.startup.ClassLoaderFactory.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketstage.entities.BigliettiReso;

import com.ticketstage.entities.Biglietto;
import com.ticketstage.repos.BigliettoDAO;
import com.ticketstage.repos.ClienteDAO;

@Service
public class BigliettoServiceIMPL implements BigliettoService{
	
	@Autowired
	private BigliettoDAO dao;

	
	@Override
	public List<Biglietto> getBiglietto() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
    public List<Biglietto> getBigliettoByCod_cliente(int cod_cliente) {
        return dao.getBigliettoByCodCliente(cod_cliente);
    }

	@Override
	public Biglietto addBiglietto(Biglietto b) {
		// TODO Auto-generated method stub
		return dao.save(b);
	}

	@Override
	public List<BigliettiReso> getBigliettoByCod_cliente1(int cod_cliente) {
		List<String[]> biglietti = dao.getBigliettoByCodCliente1(cod_cliente);
		List<BigliettiReso> bigliettiReso = new ArrayList<>();

		for (String[] b : biglietti) {
			BigliettiReso br = new BigliettiReso(b[0], b[1], Integer.parseInt(b[3]), b[4], b[5], b[6], b[8]);
			bigliettiReso.add(br);
		}

		return bigliettiReso;
	}

	
	
	

}
