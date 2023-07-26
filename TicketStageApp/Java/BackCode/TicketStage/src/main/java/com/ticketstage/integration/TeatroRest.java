package com.ticketstage.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ticketstage.entities.Spettacolo;
import com.ticketstage.entities.Teatro;

import com.ticketstage.services.TeatroService;

@RestController
@RequestMapping("api")
public class TeatroRest {

	
	@Autowired
	private TeatroService service;
	
	@CrossOrigin
	@GetMapping("teatro")
	public List<Teatro> getTeatro(){
		return service.getTeatro();
	}
	
	@CrossOrigin
	@GetMapping("teatro/{cod_teatro}")
	public List<Teatro> TeatroByCod_Teatro(@PathVariable int cod_teatro) {
		return service.getTeatroByCodTeatro(cod_teatro);
	}
}
