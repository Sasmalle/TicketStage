package com.ticketstage.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ticketstage.entities.Repliche;
import com.ticketstage.entities.Spettacolo;

public interface SpettacoloDAO  extends JpaRepository<Spettacolo, String> {

	@Query("SELECT s FROM Spettacolo s WHERE s.cod_teatro = :codTeatro")
	List<Spettacolo> getSpettacoloByCodTeatro(@Param("codTeatro") int codTeatro);
	
}
