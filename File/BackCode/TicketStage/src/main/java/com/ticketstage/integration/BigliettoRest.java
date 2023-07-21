package com.ticketstage.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ticketstage.entities.Biglietto;
import com.ticketstage.services.BigliettoService;

@RestController
@RequestMapping("api")
public class BigliettoRest {
	
	@Autowired
	private BigliettoService service;
	
	@GetMapping("biglietti")
	public List<Biglietto> getBiglietto(){
		return service.getBiglietto();
	}
	
	@GetMapping("biglietti/{cod_cliente}")
	List<Biglietto> getBigliettiByCodCliente(@PathVariable int cod_cliente) {
		return service.getBigliettoByCod_cliente(cod_cliente);
	}
	
	
	
}
