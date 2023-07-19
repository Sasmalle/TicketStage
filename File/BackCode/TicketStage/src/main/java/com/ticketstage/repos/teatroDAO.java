package com.ticketstage.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticketstage.entities.Teatro;

public interface teatroDAO extends JpaRepository<Teatro, Integer> {

}
