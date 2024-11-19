package ciu.persistencia.jdbc1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Main {

	/**
	 * Ejemplo de conexión a base de datos postgresql.
	 * 
	  * @param args
	 */
	public static void main(String[] args) {
		try {
		    Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		try {
			Connection cn = DriverManager.getConnection("jdbc:postgresql://localhost:3306/localhost", "root", "12345");
			System.out.println(cn.getSchema());
			cn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
