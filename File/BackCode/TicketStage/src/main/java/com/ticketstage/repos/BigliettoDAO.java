package com.ticketstage.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticketstage.entities.Biglietto;

public interface BigliettoDAO extends JpaRepository<Biglietto, String> {
	
}
