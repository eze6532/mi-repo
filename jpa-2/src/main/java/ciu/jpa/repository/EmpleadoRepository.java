package ciu.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ciu.jpa.model.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Integer> {

}
