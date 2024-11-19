package ciu.jpa.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ciu.jpa.model.Cliente;
import ciu.jpa.model.Factura;
import ciu.jpa.repository.ClienteRepository;


@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;
	
	public Cliente guardar(Cliente cliente) {
		return this.clienteRepository.save(cliente);
	}
	
	public Cliente getByIdSinFactura(Integer id) {
		return this.clienteRepository.findById(id).orElse(null);
	}
	@Transactional(readOnly=true)
	public Cliente getByIdConFactura(Integer id) {
		Cliente cliente= this.clienteRepository.findById(id).orElse(null);
		cliente.getFacturas().size();
		return cliente;
	}
	@Transactional(readOnly=true)
	public List<Cliente> getCliente(){
		return this.clienteRepository.findAllClientes();
	}
	
}
