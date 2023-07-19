package com.ticketstage.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ticketstage.entities.Cliente;
import com.ticketstage.services.ClienteService;

@RestController
@RequestMapping("api")
public class ClienteRest {
	
	@Autowired
	private ClienteService service;
	
	@GetMapping("cliente")
	public List<Cliente> getCliente(){
		return service.getCliente();
	}
	
	
}
