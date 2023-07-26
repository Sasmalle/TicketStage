package com.ticketstage.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ticketstage.entities.Cliente;
import com.ticketstage.entities.Teatro;

public interface ClienteDAO extends JpaRepository<Cliente, Integer> {

	@Query("SELECT c FROM Cliente c WHERE c.email = :email")
	List<Cliente> getClienteByEmail(@Param("email") String email);
	
}
