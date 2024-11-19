package ciu.jpa.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="Empleado", schema = "persistencia1")
public class Empleado extends Persona {

	private Integer numeroDeLegajo;

	public Integer getNumeroDeLegajo() {
		return numeroDeLegajo;
	}

	public void setNumeroDeLegajo(Integer numeroDeLegajo) {
		this.numeroDeLegajo = numeroDeLegajo;
	}
}
