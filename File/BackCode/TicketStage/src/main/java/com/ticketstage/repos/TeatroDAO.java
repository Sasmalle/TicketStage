package com.ticketstage.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ticketstage.entities.Spettacolo;
import com.ticketstage.entities.Teatro;

public interface TeatroDAO extends JpaRepository<Teatro, Integer> {

	@Query("SELECT s FROM Spettacolo s WHERE s.cod_spettacolo = :codSpettacolo")
	List<Spettacolo> getSpettacoloByCodSpettacolo(@Param("codSpettacolo") String codSpettacolo);
	
}
