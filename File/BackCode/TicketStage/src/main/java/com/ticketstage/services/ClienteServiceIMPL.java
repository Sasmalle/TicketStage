package com.ticketstage.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketstage.entities.Cliente;
import com.ticketstage.repos.ClienteDAO;

@Service
public class ClienteServiceIMPL implements ClienteService {

	@Autowired
	private ClienteDAO dao;
	
	@Override
	public List<Cliente> getCliente() {
		return dao.findAll();
	}

	@Override
	public Cliente getClienteById(int cod_cliente) {
		
		return dao.getReferenceById(cod_cliente);
	}

	@Override
	public Cliente addCliente(Cliente cliente) {
		// TODO Auto-generated method stub
		return dao.save(cliente);
	}

//	@Override
//	public Cliente setNome(String nome) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Cliente setCognome(String cognome) {
//		// TODO Auto-generated method stub
//		return dao.updatate(cognome);
//	}
//
//	@Override
//	public Cliente setTelefono(int telefono) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Cliente setEmail(String email) {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
