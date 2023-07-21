package com.ticketstage.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticketstage.entities.Biglietto;

public interface BigliettoDAO extends JpaRepository<Biglietto, String> {
	
}
