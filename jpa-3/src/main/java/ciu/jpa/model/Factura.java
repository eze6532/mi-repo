package ciu.jpa.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="factura", schema = "persistencia1")
public class Factura {

	@Id
	private Integer id;
	private Integer numero;
	private Cliente cliente;
	
	/*
	 * Por un numero de factura debe encontrar las factura del cliente 
	 * mayor al numero num 
	 */
	public List<Factura> findGretherThanNumero(Integer num) {
		
		return null;
	}
	
	
	public Cliente getCliente() {
		return cliente;
	}
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getNumero() {
		return numero;
	}
	public void setNumero(Integer numero) {
		this.numero = numero;
	}
}
