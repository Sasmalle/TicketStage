package com.ticketstage.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticketstage.entities.Teatro;

public interface TeatroDAO extends JpaRepository<Teatro, Integer> {

}
