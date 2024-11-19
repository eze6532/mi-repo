package ciu.hibernate;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="cliente", schema = "persistencia1")
public class Cliente {

	@Id
	private Integer id;
	private String codigo;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_cliente")
	private Set<Factura> facturas;
	
	public void addFactura(Factura f) {
		if (this.facturas==null) {
			this.facturas = new HashSet<Factura>();
		}
		this.facturas.add(f);
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public Set<Factura> getFacturas() {
		return facturas;
	}
	public void setFacturas(Set<Factura> facturas) {
		this.facturas = facturas;
	}
}
