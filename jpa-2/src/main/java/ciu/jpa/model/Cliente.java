package ciu.jpa.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="Cliente", schema = "persistencia1")
public class Cliente extends Persona {

	private String codigo;
	private LocalDate fechaDeAlta;
	
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public LocalDate getFechaDeAlta() {
		return fechaDeAlta;
	}
	public void setFechaDeAlta(LocalDate fechaDeAlta) {
		this.fechaDeAlta = fechaDeAlta;
	}
}
