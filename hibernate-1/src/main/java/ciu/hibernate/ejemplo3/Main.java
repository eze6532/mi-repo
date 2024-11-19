package ciu.hibernate.ejemplo3;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import ciu.hibernate.Cliente;
import ciu.hibernate.Factura;

/*
 * relaciones
 */
public class Main {

	public static void main(String[] args) {
		SessionFactory sessionFactory = null;
	    Session session = null;
		try {
		    Configuration configuration = new Configuration();
		    configuration.configure();
		    // Agrego entities
		    configuration.addAnnotatedClass(Cliente.class);
		    configuration.addAnnotatedClass(Factura.class);
		    // Cargo configuracion hibernate
		    ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
		    		.applySettings(configuration.getProperties()).build();
		    // Obtengo session factory
		    sessionFactory = configuration.buildSessionFactory(serviceRegistry);
		    // Obtengo session de la factory
		    session = sessionFactory.openSession();
		    // ATOMIC
		    session.beginTransaction();
		    Factura f1 = new Factura();
		    f1.setId(10);
		    f1.setNumero(100);
		    Cliente karl = new Cliente();
		    karl.setId(1);
		    karl.setCodigo("KARL");
		    karl.addFactura(f1);
		    session.save(karl);
		    session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
		    session.getTransaction().rollback();
		} finally {
		    if (session != null)
		        session.close();
		   
		    if (sessionFactory != null)
		    	sessionFactory.close();
		}
	}

}