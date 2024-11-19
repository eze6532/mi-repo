package ciu.jpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ciu.jpa.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer>, CustomClienteRepository {

	//public Cliente findByCodigo(String codigo);
	
	@Query(value = "SELECT c FROM Cliente c")
	public List<Cliente> findAllClientes();
	
	@EntityGraph(value = "Cliente.detalle")
	public Cliente findByCodigo(String codigo);
}

