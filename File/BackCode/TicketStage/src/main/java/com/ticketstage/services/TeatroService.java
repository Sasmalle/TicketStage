package com.ticketstage.services;

import java.util.List;


import com.ticketstage.entities.Teatro;

public interface TeatroService {
	List<Teatro> getTeatro();
	
	List<Teatro> getTeatroByCodTeatro(int cod_teatro);
}
