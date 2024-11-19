package ciu.jpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ciu.jpa.model.Factura;

public interface FacturaRepository extends JpaRepository<Factura, Integer> {

	public List<Factura> findByNumeroGreaterThan(Integer numero);
}
