package ciu.jpa.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import ciu.jpa.model.Cliente;
import ciu.jpa.model.Factura;
import ciu.jpa.repository.FacturaRepository;
import jakarta.transaction.Transactional;

@Service
public class FacturaService {
	private FacturaRepository facturaRepository;
	
	@Transactional(readOnly=true)
	public List<Cliente> getClientePorNumeroDeFacturaMayoaA(Integer num){
		List<Factura> facturas=this.facturaRepository.findGretherThanNumero(num);
		 

		return facturas.stream()
					   .filter(f->f.getNumero>num)
					   .flatMap(Set::stream)
					   .collect(Collectors.toList());;
	}
}
