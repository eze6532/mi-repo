import { useEffect } from "react";
import FormularioPerfil from "../../componentes/FormularioPerfil/FormularioPerfil";
import { obtenerToken, useUsuario } from "../../contexts/UsuarioContext";
import api from "../../api/api.compartoDeptoAR";
import { Navigate } from "react-router-dom";


const PerfilView = () => {
  const { id ,perfil, setPerfil, setLoading, loading } = useUsuario();
  

  useEffect(() => {
    const cargarPerfil = async () => {
      setLoading(true); 
      if (!perfil && id) {
        try {
          const datos = await api.usuario.perfil();
          setPerfil(datos); 
        } catch (err) {
          console.error("Error al cargar el perfil:", err);
        } finally {
          setLoading(false);
        }
      }
    };

    cargarPerfil();
  }, [perfil]);

  if (loading) {
    return  <div>Cargando perfil...</div>;
  }
  try {
    obtenerToken(); 
  } catch {
    return <Navigate to="/login" />;
  }

  return (
    <FormularioPerfil perfil={perfil} modo="view" />
  );
};


export default PerfilView;