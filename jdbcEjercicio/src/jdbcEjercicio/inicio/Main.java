package jdbcEjercicio.inicio;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class Main {

	public static void main(String[] args) {
		String usuarioName="root";
		String password="12345678";
		String urlBD="jdbc:mysql://localhost:3306/sakila";//sakila es una db que ya existia en ,i base.
		
		try{
			Connection conexion=DriverManager.getConnection(urlBD, usuarioName, password);
			System.out.println("Se conecto exitosamente: sussufull.");
			//Ahora voy a hacer una consulta a la db
			//Para eso creo un statement
			Statement st= conexion.createStatement();
			String consulta="SHOW TABLES";
			ResultSet resultadoSQL=st.executeQuery(consulta);

            System.out.println("Tablas en la base de datos:");
            while (resultadoSQL.next()) {
	            String nombreTabla = resultadoSQL.getString(1); // La primera columna contiene los nombres de las tablas
	            System.out.println(nombreTabla);
            } 
			conexion.close();
			System.out.println("Se cerror la conexion.");
		}catch (SQLException e) {
			System.out.println("Error en la conexion: "+e.getMessage());
		}

	}

}
