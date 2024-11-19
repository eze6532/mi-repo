package ciu.jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ciu.jpa.model.Cliente;
import ciu.jpa.service.PersonaService;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

	@Autowired
	private PersonaService personaService;
	
	@PostMapping
	public Cliente grabar(@RequestBody Cliente cliente) {
		return this.personaService.guardar(cliente);
	}
	
	@GetMapping("/{id}")
	public Cliente buscar(@PathVariable Integer id) {
		Cliente cliente = this.personaService.getClienteById(id);
		return cliente;
	}
}