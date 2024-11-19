package ciu.jpa.repository.impl;

import java.util.ArrayList;
import java.util.List;

import ciu.jpa.model.Cliente;
import ciu.jpa.model.Factura;
import ciu.jpa.repository.CustomClienteRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class CustomClienteRepositoryImpl implements CustomClienteRepository {

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<Cliente> findAllClientesCustom() {
		String jpql = "SELECT c FROM Cliente c";
		TypedQuery<Cliente> query = entityManager.createQuery(jpql, Cliente.class);
		return query.getResultList();
	}
	
	@Override
	public List<Cliente> findClientesPorNumeroDeFacturaMayorA(Integer numeroDeFactura) {
		CriteriaBuilder criteriaBuilder = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<Cliente> criteriaQuery = criteriaBuilder.createQuery(Cliente.class);

        Root<Cliente> root = criteriaQuery.from(Cliente.class);
        Join<Cliente, Factura> rootJoinFactura = root.join("facturas", JoinType.INNER);

        List<Predicate> predicates = new ArrayList<Predicate>();
        Predicate predicate1 = criteriaBuilder.greaterThan(rootJoinFactura.get("numero"), numeroDeFactura);
        predicates.add(predicate1);
        criteriaQuery.where(predicates.toArray(new Predicate[predicates.size()]));
        
        TypedQuery<Cliente> query = this.entityManager.createQuery(criteriaQuery);
        List<Cliente> clientes = query.getResultList();
		return clientes;
	}
}
