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
          
          const datos = await api.usuario.perfil(id);
          setPerfil(datos); 
        } catch (err) {
          console.error("Error al cargar el perfil:", err);
        } finally {
          setLoading(false);
        }
      } 
        setLoading(false);
    };

    cargarPerfil();
  }, []);

  if (loading) {
    return <div>Cargando perfil...</div>;
  }
  if (!obtenerToken) {
    return <Navigate to="/login" />;
  }
  return (
    <FormularioPerfil perfil={perfil} modo="view" />
  );
};


export default PerfilView;