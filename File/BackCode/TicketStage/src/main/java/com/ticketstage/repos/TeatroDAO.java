package com.ticketstage.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.ticketstage.entities.Teatro;

public interface TeatroDAO extends JpaRepository<Teatro, Integer> {

	@Query("SELECT t FROM Teatro t WHERE t.cod_teatro = :codTeatro")
	List<Teatro> getTeatroByCodTeatro(@Param("codTeatro") int codTeatro);
	
}
