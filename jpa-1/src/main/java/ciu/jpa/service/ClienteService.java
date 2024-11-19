package ciu.jpa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ciu.jpa.model.Cliente;
import ciu.jpa.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;
	
	public Cliente guardar(Cliente cliente) {
		return this.clienteRepository.save(cliente);
	}

	public Cliente getByIdSinFacturas(Integer id) {
		return this.clienteRepository.findById(id).orElse(null);
	}

	@Transactional(readOnly = true)
	public Cliente getByIdConFacturas(Integer id) {
		Cliente cliente = this.clienteRepository.findById(id).orElse(null);
		cliente.getFacturas().size();
		return cliente;
	}

	@Transactional(readOnly = true)
	public List<Cliente> getClientes() {
//		return this.clienteRepository.findAllClientes();
		return this.clienteRepository.findAllClientesCustom();
	}
	
	@Transactional(readOnly = true)
	public List<Cliente> getClientesPorNumeroDeFacturaMayorA(Integer numeroDeFactura) {
		return this.clienteRepository.findClientesPorNumeroDeFacturaMayorA(numeroDeFactura);
	}

	@Transactional(readOnly = true)
	public Cliente getByCodigoEG(String codigo) {
		return this.clienteRepository.findByCodigo(codigo);
	}
}
