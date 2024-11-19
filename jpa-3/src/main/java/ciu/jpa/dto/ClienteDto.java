package ciu.jpa.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import ciu.jpa.model.Cliente;

public class ClienteDto implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String codigo;
	private List<FacturaDto> facturas;
	
	public ClienteDto(Cliente cliente) {
		this.codigo = cliente.getCodigo();
		this.facturas = new ArrayList<FacturaDto>();
		if (cliente.getFacturas()!=null) {
			cliente.getFacturas().forEach(factura -> {
				FacturaDto facturaDto = new FacturaDto(factura);
				this.facturas.add(facturaDto);
			});
		}
	}
	
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public List<FacturaDto> getFacturas() {
		return facturas;
	}
	public void setFacturas(List<FacturaDto> facturas) {
		this.facturas = facturas;
	}
}
