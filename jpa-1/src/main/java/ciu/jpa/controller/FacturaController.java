package ciu.jpa.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ciu.jpa.dto.ClienteDto;
import ciu.jpa.model.Cliente;
import ciu.jpa.service.FacturaService;

@RestController
@RequestMapping("/factura")
public class FacturaController {

	@Autowired
	private FacturaService facturaService;
	
	@GetMapping("/findNumeroMayorA/{numero}")
	public List<ClienteDto> buscar(@PathVariable Integer numero) {
		List<Cliente> clientes = this.facturaService.getJPAClientesPorNumeroDeFacturaMayorA(numero);
		List<ClienteDto> clientesDtos = new ArrayList<ClienteDto>();
		clientes.forEach(cliente -> {
			ClienteDto clienteDto = new ClienteDto(cliente, false);
			clientesDtos.add(clienteDto);
		});
		return clientesDtos;
	}
}
