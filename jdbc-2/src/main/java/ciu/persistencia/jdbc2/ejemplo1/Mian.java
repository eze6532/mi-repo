package ciu.persistencia.jdbc2.ejemplo1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Mian {

	/**
	 * 
	 * Ejemplo: Statement
	 * Link: https://programandoointentandolo.com/2013/09/tutorial-jdbc-con-aplicaciones-de-ejemplo.html
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		Connection connection = null;
		try {
			cargarDriver();
			connection = DriverManager.getConnection("jdbc:postgresql://localhost:5433/persistencia1", "postgres", "postgres");
			
			// Creamos el Statement para poder hacer consultas
			Statement statement = connection.createStatement();

			// La consulta es un String con código SQL
			String sql1 = "SELECT * FROM persistencia1.cuenta";

			// Ejecuta una consulta que devuelve resultados                
			ResultSet resultSet = statement.executeQuery(sql1);   
			while (resultSet.next()) {
			    System.out.println (resultSet.getString ("cliente") + " " + resultSet.getString(3)+ " " + resultSet.getDouble("saldo"));
			}
			resultSet.close();
			statement.close();
			connection.close();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	private static void cargarDriver() throws ClassNotFoundException {
	    Class.forName("org.postgresql.Driver");
	}
}
