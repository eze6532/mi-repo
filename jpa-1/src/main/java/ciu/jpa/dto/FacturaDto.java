package ciu.jpa.dto;

import java.io.Serializable;

import ciu.jpa.model.Factura;

public class FacturaDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer numero;

	public FacturaDto(Factura factura) {
		this.numero = factura.getNumero();
	}
	
	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}
}
