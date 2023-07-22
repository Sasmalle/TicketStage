package com.ticketstage.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ticketstage.entities.Biglietto;

public interface BigliettoDAO extends JpaRepository<Biglietto, Integer> {
	
	@Query("SELECT b FROM Biglietto b WHERE b.cod_cliente = :codCliente")
	List<Biglietto> getBigliettoByCodCliente(@Param("codCliente") int codCliente);
}
