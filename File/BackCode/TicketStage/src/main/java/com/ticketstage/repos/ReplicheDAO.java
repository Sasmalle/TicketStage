package com.ticketstage.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.ticketstage.entities.Repliche;

public interface ReplicheDAO  extends JpaRepository<Repliche, String>{
	
	@Query("SELECT r FROM Repliche r WHERE r.cod_spettacolo = :codReplica")
	List<Repliche> getReplicheByCodRepliche(@Param("codReplica") String codReplica);

	
}
