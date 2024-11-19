package ciu.hibernate.ejemplo1;

import org.hibernate.Session;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import ciu.hibernate.Personaje;

public class Main {

	/**
	 * DTD bajar de: https://hibernate.org/dtd/
	 * 
	 * https://datos.codeandcoke.com/apuntes:hibernate
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
	    Configuration configuration = new Configuration();
	    configuration.configure();
	    configuration.addAnnotatedClass(Personaje.class);
	    
	    ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
	    		.applySettings(configuration.getProperties()).build();
	    SessionFactory sessionFactory = 
	    		configuration.buildSessionFactory(serviceRegistry);
	    
	    Session session = sessionFactory.openSession(); // Obtengo session de la factory
	    session.beginTransaction();
	    Personaje karl = new Personaje(1, "Karl", "Karl el Comunista", 99, 10);
	    session.save(karl);
	    session.getTransaction().commit();
	    
	    if (session != null)
	        session.close();
	   
	    if (sessionFactory != null)
	    	sessionFactory.close();
	}

}
