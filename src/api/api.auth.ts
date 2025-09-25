import { handleApiError } from "../helpers/handleApiError";
import type { LoginDatos, LoginRespuesta } from "../modelos/Login";
import type { DatosRegistro, RegistroRespuesta } from "../modelos/Registro";
import axiosApi from "./_api";




const apiAuth ={
    auth:{
        registrar: async (datosRegistro: DatosRegistro): Promise<RegistroRespuesta> => {
            try {
            const datos: any = { 
                nombreCompleto: datosRegistro.nombreCompleto , 
                correo:datosRegistro.correo, 
                contraseña:datosRegistro.contraseña, 
                edad: datosRegistro.edad, 
            };
            if (datosRegistro.genero) datos.genero = datosRegistro.genero;
            if (datosRegistro.descripcion) datos.descripcion = datosRegistro.descripcion;
            if (datosRegistro.habitos) datos.habitos= datosRegistro.habitos;
            if (datosRegistro.preferencia) datos.preferencia = datosRegistro.preferencia;

            console.log(datos);
            const result = await axiosApi.post<RegistroRespuesta>(
                import.meta.env.VITE_URL_USER,
                datos
            );

            if (result.status === 201) return result.data;
            handleApiError(result.status, "No se pudo registrar el usuario");
            } catch (error: any) {
            if (error.response) {
                throw new Error(error.response.data.message || "Error al registrarse");
            }
            throw new Error("Error de conexión");
            }
        },
        login: async (loginDatos:LoginDatos):Promise<LoginRespuesta> => {
            try {
            const result = await axiosApi.post<LoginRespuesta>(
                import.meta.env.VITE_URL_AUTH + "/login",
                loginDatos
            );

            if (result.status === 200){
                 console.log(result.data) 

                 return result.data;
            }
            throw new Error("Error al iniciar sesión");
            } catch (error: any) {
            if (error.response) {
                alert(error.message);
                throw new Error(error.response.data.message || "Credenciales inválidas");
            }
            throw new Error("Error de conexión");
            }
        },

    }
}

export default apiAuth;