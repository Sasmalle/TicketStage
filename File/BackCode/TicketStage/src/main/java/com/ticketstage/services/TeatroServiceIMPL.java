package com.ticketstage.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketstage.entities.Teatro;
import com.ticketstage.repos.TeatroDAO;



@Service
public class TeatroServiceIMPL implements TeatroService {
	
	@Autowired
	private TeatroDAO dao;
	
	@Override
	public List<Teatro> getTeatro(){
		return dao.findAll();
	}
	
}
