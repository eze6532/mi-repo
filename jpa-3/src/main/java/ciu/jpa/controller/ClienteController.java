package ciu.jpa.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ciu.jpa.dto.ClienteDto;
import ciu.jpa.dto.FacturaDto;
import ciu.jpa.model.Cliente;
import ciu.jpa.model.Factura;
import ciu.jpa.service.ClienteService;

@RestController
@RequestMapping("/auth")
public class ClienteController {

	@Autowired
	private ClienteService clienteService;
	
	@PostMapping
	public Cliente grabar(@RequestBody Cliente cliente) {
		return this.clienteService.guardar(cliente);
	}
	
	@GetMapping("/{id}")
	public ClienteDto buscar(@PathVariable Integer id) {
		Cliente cliente = this.clienteService.getByIdSinFactura(id);
		ClienteDto clienteDto = new ClienteDto(cliente);
		return clienteDto;
	}
	@GetMapping("/all")
	public List<ClienteDto> buscarTodos() {
		List<Cliente> clientes= this.clienteService.getCliente();
		List<ClienteDto> clienteDtos= new ArrayList<ClienteDto>();
		
		clientes.forEach(c ->{
			ClienteDto clienteDTO =new ClienteDto(c);
			clienteDtos.add(clienteDTO);
		});
		return clienteDtos;
	}
	
	@GetMapping("/{id}")
	public List<FacturaDto> buscarSoloLasMayoresA(@RequestBody Integer id){
		List<Factura> facturas=this.clienteService.getByIdFacturaMayor(id);
		List<FacturaDto> facturasDtos= new ArrayList<FacturaDto>();
		
		facturas.forEach(f ->{
			FacturaDto facturaDto=new FacturaDto(f);
			facturasDtos.add(facturaDto);
		});
		return facturasDtos;
	}
}
