package ciu.hibernate.ejemplo1;

import java.util.List;

import org.hibernate.Query;
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
//	    Session session = sessionFactory.openSession();
//		Factura f = session.get(Factura.class, Integer.valueOf(10));
//		System.out.println("Número factura: " + f.getNumero());
//		session.close();

	    Session session = sessionFactory.openSession();
		Query query = session.createQuery("from Factura f where f.cliente.codigo=:lama");
		query.setString("lama", "C002");
		List<Factura> facturas = query.list();
		facturas.stream().forEach( f -> System.out.println("Factura número: " + f.getNumero()));
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
		    Cliente c1 = new Cliente();
		    c1.setId(1);
		    c1.setCodigo("C001");
		    Cliente c2 = new Cliente();
		    c2.setId(2);
		    c2.setCodigo("C002");
		    Factura f1 = new Factura();
		    f1.setId(10);
		    f1.setNumero(100);
		    f1.setCliente(c1);
		    Factura f2 = new Factura();
		    f2.setId(11);
		    f2.setNumero(101);
		    f2.setCliente(c1);
		    Factura f3 = new Factura();
		    f3.setId(12);
		    f3.setNumero(102);
		    f3.setCliente(c2);
		    session.save(f1);
		    session.save(f2);
		    session.save(f3);
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