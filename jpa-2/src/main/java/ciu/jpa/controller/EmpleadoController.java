package ciu.jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ciu.jpa.model.Empleado;
import ciu.jpa.service.PersonaService;

@RestController
@RequestMapping("/empleado")
public class EmpleadoController {

	@Autowired
	private PersonaService personaService;
	
	@PostMapping
	public Empleado grabar(@RequestBody Empleado empleado) {
		return this.personaService.guardar(empleado);
	}
	
	@GetMapping("/{id}")
	public Empleado buscar(@PathVariable Integer id) {
		Empleado empleado = this.personaService.getEmpleadoById(id);
		return empleado;
	}
}