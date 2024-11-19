package ciu.jpa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ciu.jpa.model.Cliente;
import ciu.jpa.model.Factura;
import ciu.jpa.repository.FacturaRepository;

@Service
public class FacturaService {

	@Autowired
	private FacturaRepository facturaRepository;
	
	@Transactional(readOnly = true)
	public List<Cliente> getJPAClientesPorNumeroDeFacturaMayorA(Integer numero) {
		List<Factura> facturas = this.facturaRepository.findByNumeroGreaterThan(numero);
		return facturas.stream()
				.map(Factura::getCliente)
				.distinct()
				.collect(Collectors.toList());
	}
}
