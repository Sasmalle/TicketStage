package com.ticketstage.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ticketstage.entities.Spettacolo;
import com.ticketstage.services.SpettacoloService;

@RestController
@RequestMapping("api")
public class SpettacoloRest {
	
	@Autowired
	private SpettacoloService service;
	
	@CrossOrigin
	@GetMapping("spettacoli")
	public List<Spettacolo> getSpettacolo(){
		return service.getSpettacolo();
	}
}
