import { obtenerToken } from "../contexts/UsuarioContext";
import type { Publicacion } from "../modelos/Publicacion";
import type { RespuestaPerfil, UsuarioPerfil } from "../modelos/Usuario";
import axiosApi from "./_api";


const api = {
    usuario: {
      
        perfil: async():Promise<UsuarioPerfil>=>{
            const token= obtenerToken();
            const result= await axiosApi.get<UsuarioPerfil>(
                import.meta.env.VITE_URL_USER+"/perfil/",
                {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                }
            )
            console.log(result);
            if (result.status === 200) return result.data;
            throw new Error("No se pudo obtener el perfil");
           
        },
        editarPerfil: async(usuarioId: string, nuevoPrefil:UsuarioPerfil):Promise<RespuestaPerfil>=>{
            try {
                const result = await axiosApi.put<RespuestaPerfil>(
                    import.meta.env.VITE_URL_USER + usuarioId,
                    nuevoPrefil
                    );
                return result.data;
            } catch (error: any) {
                throw new Error(error.response?.data?.error || "Error al actualizar el perfil.");
            }
        },
        crearPublicacion: async (datosPublicacion:Publicacion):Promise<any> => {
            const token= obtenerToken();
            if (!token) throw new Error("No estás logueado");

            const response = await axios.post(
                import.meta.env.VITE_URL_PUBLICACION, 
                datosPublicacion,
                {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                }
            );
            return response.data; 
        },
    
    }
}

export default api;