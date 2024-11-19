package ciu.hibernate.ejemplo2;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import ciu.hibernate.Personaje;

public class Main {

	public static void main(String[] args) {
	    SessionFactory sessionFactory = null;
	    Session session = null;
		try {
		    Configuration configuration = new Configuration();
		    configuration.configure();
		    // Agrego entities
		    configuration.addAnnotatedClass(Personaje.class);
		    // Cargo configuracion hibernate
		    ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
		    		.applySettings(configuration.getProperties()).build();
		    // Obtengo session factory
		    sessionFactory = configuration.buildSessionFactory(serviceRegistry);
		    // Obtengo session de la factory
		    session = sessionFactory.openSession();
		    // ATOMIC
		    session.beginTransaction();
		    Personaje karl = new Personaje(1, "Karl", "Karl el Comunista", 99, 10);
		    session.save(karl);
		    Personaje engels = new Personaje(2, "Engels", "Engels el Comunista", 91, 7);
		    session.save(engels);
		    session.getTransaction().commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		    session.getTransaction().rollback();
		} finally {
		    if (session != null)
		        session.close();
		   
		    if (sessionFactory != null)
		    	sessionFactory.close();
		}
	}
	
}
