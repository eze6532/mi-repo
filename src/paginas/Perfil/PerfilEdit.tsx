import type { UsuarioPerfil } from "../../modelos/Usuario";
import FormularioPerfil from "../../componentes/FormularioPerfil/FormularioPerfil";
import { useUsuario } from "../../contexts/UsuarioContext";
import api from "../../api/api.compartoDeptoAR";
import { useNavigate } from "react-router-dom";


const PerfilEdit = () => {
  const { id ,perfil, setPerfil } = useUsuario();
  const navigate = useNavigate();

  const handleSave = async (nuevoPerfil: UsuarioPerfil) => {
    try {
      if (!id) throw new Error("No se encontró el ID del usuario.");

      console.log("Guardar en backend:", nuevoPerfil);

      const respuesta = await api.usuario.editarPerfil(id, nuevoPerfil);

      console.log("Respuesta del servidor:", respuesta.mensaje); 
      setPerfil(nuevoPerfil);

      alert("Perfil actualizado correctamente ✅");
      navigate("/mi-perfil")
    } catch (error: any) {
      console.error("Error al guardar el perfil:", error);
      alert(error.message || "Ocurrió un error al guardar.");
    }
  };

  if (!perfil) return <div>Cargando...</div>;

  return (
    <FormularioPerfil perfil={perfil} modo="editar" onSubmit={handleSave} />
  );
};



export default PerfilEdit;