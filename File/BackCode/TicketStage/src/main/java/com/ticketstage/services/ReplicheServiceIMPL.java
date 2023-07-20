package com.ticketstage.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketstage.entities.Repliche;
import com.ticketstage.repos.ReplicheDAO;

@Service
public class ReplicheServiceIMPL implements ReplicheService{

	
	@Autowired
	private ReplicheDAO dao;
	
	
	@Override
	public List<Repliche> getRepliche() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Repliche getReplicheById(int cod_repliche) {
		// TODO Auto-generated method stub
		return dao.getReferenceById(cod_repliche);
	}

	@Override
	public Repliche addRepliche(Repliche repliche) {
		// TODO Auto-generated method stub
		return dao.save(repliche);
	}


}
