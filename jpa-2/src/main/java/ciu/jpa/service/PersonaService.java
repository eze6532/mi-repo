package ciu.jpa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ciu.jpa.model.Cliente;
import ciu.jpa.model.Empleado;
import ciu.jpa.repository.ClienteRepository;
import ciu.jpa.repository.EmpleadoRepository;

@Service
public class PersonaService {

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private EmpleadoRepository empleadoRepository;

	public Cliente guardar(Cliente cliente) {
		return this.clienteRepository.save(cliente);
	}

	public Cliente getClienteById(Integer id) {
		return this.clienteRepository.findById(id).orElse(null);
	}
	
	public Empleado guardar(Empleado empleado) {
		return this.empleadoRepository.save(empleado);
	}

	public Empleado getEmpleadoById(Integer id) {
		return this.empleadoRepository.findById(id).orElse(null);
	}
}