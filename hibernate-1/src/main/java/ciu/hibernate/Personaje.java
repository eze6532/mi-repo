package ciu.hibernate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

	
@Entity
@Table(name="personaje", schema = "persistencia1")
public class Personaje {
	
	@Id
	@Column(name="id")
	private int id;

	@Column(name="nombre")
	private String nombre;
  
	@Column(name="descripcion")
	private String descripcion;
  
	@Column(name="vida")
	private int vida;
  
	@Column(name="ataque")
	private int ataque;

	public Personaje() {
	}
	
	public Personaje(int id, String nombre, String descripcion, int vida, int ataque) {
		this.id=id;
		this.nombre=nombre;
		this.descripcion=descripcion;
		this.vida=vida;
		this.ataque=ataque;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getVida() {
		return vida;
	}

	public void setVida(int vida) {
		this.vida = vida;
	}

	public int getAtaque() {
		return ataque;
	}

	public void setAtaque(int ataque) {
		this.ataque = ataque;
	}
}