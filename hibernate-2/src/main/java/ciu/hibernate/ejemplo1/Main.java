package ciu.hibernate.ejemplo1;

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

	private static SessionFactory sessionFactory = null;

	public static void main(String[] args) {
		iniciarHibernate();
		crearContextoNegocio();

		
	    // Obtengo session de la factory
	    Session session = sessionFactory.openSession();
		Cliente cliente = session.get(Cliente.class, Integer.valueOf(1));

		System.out.println("Cliente Id: " + cliente.getId() + " Código: " + cliente.getCodigo());
		cliente.getFacturas().stream()
								.forEach( factura -> System.out.println("  Factura Id: " + factura.getId() + " Número: " + factura.getNumero()));
		session.close();
		
	    if (sessionFactory != null)
	    	sessionFactory.close();
	}

	private static void iniciarHibernate() {
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
	}
	
	private static void crearContextoNegocio() {
	    Session session = null;
		try {
		    // Obtengo session de la factory
		    session = sessionFactory.openSession();
		    // ATOMIC
		    session.beginTransaction();
		    Factura f1 = new Factura();
		    f1.setId(10);
		    f1.setNumero(100);
		    Factura f2 = new Factura();
		    f2.setId(11);
		    f2.setNumero(101);
		    Cliente karl = new Cliente();
		    karl.setId(1);
		    karl.setCodigo("KARL");
		    karl.addFactura(f1);
		    karl.addFactura(f2);
		    session.save(karl);
		    session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
		    session.getTransaction().rollback();
		} finally {
		    if (session != null)
		        session.close();
		}
	}
}