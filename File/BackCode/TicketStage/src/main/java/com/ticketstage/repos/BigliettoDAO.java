package com.ticketstage.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.ticketstage.entities.Biglietto;

public interface BigliettoDAO extends JpaRepository<Biglietto, Integer> {
	
	@Query("SELECT b FROM Biglietto b WHERE b.cod_cliente = :codCliente")
	List<Biglietto> getBigliettoByCodCliente(@Param("codCliente") int codCliente);
	
	@Query(value = "SELECT c.COGNOME, c.NOME, b.TIPO_PAGAMENTO, b.QUANTITA, r.DATA_REPLICA, s.TITOLO, s.AUTORE, s.REGISTA, t.NOME AS NOME_TEATRO " +
		    "FROM Clienti c " +
		    "JOIN Biglietti b ON c.COD_CLIENTE = b.COD_CLIENTE " +
		    "JOIN Repliche r ON b.COD_REPLICA = r.COD_REPLICA " +
		    "JOIN Spettacoli s ON r.COD_SPETTACOLO = s.COD_SPETTACOLO " +
		    "JOIN Teatri t ON s.COD_TEATRO = t.COD_TEATRO " +
		    "WHERE c.COD_CLIENTE = :cod_cliente", nativeQuery = true)
		List<String[]> getBigliettoByCodCliente1(@Param("cod_cliente") int codCliente);
	

}
