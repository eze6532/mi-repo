package ciu.jpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ciu.jpa.model.Cliente;


@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
	public Cliente findByCodigo(String codigo);
	
	@Query(value="SELECT e FROM Cliente c")
	public List<Cliente> findAllClientes();
	
	
}
