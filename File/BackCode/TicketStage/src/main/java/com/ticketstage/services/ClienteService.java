package com.ticketstage.services;

import java.util.List;

import com.ticketstage.entities.Cliente;

public interface ClienteService {
	
	List<Cliente> getCliente();
	Cliente getClienteById(int cod_cliente);
	Cliente addCliente(Cliente cliente);
//	Cliente setNome(String nome);
//	Cliente setCognome(String cognome);
//	Cliente setTelefono(int telefono);
//	Cliente setEmail(String email);
	
}
