package ciu.jpa.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import ciu.jpa.model.Cliente;

@Repository
public interface CustomClienteRepository {

	public List<Cliente> findAllClientesCustom();
	
	public List<Cliente> findClientesPorNumeroDeFacturaMayorA(Integer numeroDeFactura);

}
