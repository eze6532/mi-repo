package ciu.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ciu.jpa.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}

