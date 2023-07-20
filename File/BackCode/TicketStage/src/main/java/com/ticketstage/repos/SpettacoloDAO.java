package com.ticketstage.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticketstage.entities.Cliente;
import com.ticketstage.entities.Spettacolo;

public interface SpettacoloDAO  extends JpaRepository<Spettacolo, Integer> {

}
