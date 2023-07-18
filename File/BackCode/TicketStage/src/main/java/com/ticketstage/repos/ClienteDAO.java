package com.ticketstage.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticketstage.entities.Cliente;

public interface ClienteDAO extends JpaRepository<Cliente, Integer> {

}
