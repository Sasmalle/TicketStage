package com.ticketstage.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ticketstage.entities.Biglietto;
import com.ticketstage.entities.Repliche;
import com.ticketstage.services.ReplicheService;

@RestController
@RequestMapping("api")
public class ReplicheRest {
	
	@Autowired
	private ReplicheService service;
	
	@CrossOrigin
	@GetMapping("repliche")
	public List<Repliche> getRepliche(){
		return service.getRepliche();
	}
	
	@CrossOrigin
	@GetMapping("repliche/{cod_spettacolo}")
	public List<Repliche> getReplicheByCodSpettacolo(@PathVariable String cod_spettacolo) {
		return service.getReplicheByCod_spettacolo(cod_spettacolo);
	}
	
}
