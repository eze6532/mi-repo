package ciu.persistencia.jdbc2.ejemplo2;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Main {

	/**
	 * Ejemplo: PreparedStatement
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		try {
			cargarDriver();
			consultarClientePorCodigo("C0002");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static void cargarDriver() throws ClassNotFoundException {
		Class.forName("org.postgresql.Driver");
	}

	private static Connection obtenerConnection() throws SQLException {
		return DriverManager.getConnection("jdbc:postgresql://localhost:5433/persistencia1", "postgres", "postgres");
	}

	private static void consultarClientePorCodigo(String codigo) throws SQLException {
		PreparedStatement pstBuscarCodigo = null;
		String sqlBusqueda = "SELECT * FROM persistencia1.cuenta WHERE codigo=?";
		Connection cnn = obtenerConnection();
		pstBuscarCodigo = cnn.prepareStatement(sqlBusqueda);
		pstBuscarCodigo.setString(1, codigo);
		ResultSet rs = pstBuscarCodigo.executeQuery();
		if (rs.next()) {
		    System.out.println (rs.getString ("cliente") + " " + rs.getString(2)+ " " + rs.getDouble("saldo"));
		}
		rs.close();
		pstBuscarCodigo.close();
		cnn.close();
	}
}
