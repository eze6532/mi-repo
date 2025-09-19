import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../paginas/Home/HomePage";
import PerfilView from "../paginas/Perfil/PerfilView";
import Publicacion from "../paginas/Publicacion/Publicacion";
import CrearPublicacion from "../paginas/Publicacion/CrearPublicacion";
import AdminPage from "../paginas/Admin/AdminPage";
import { useUsuario } from "../contexts/UsuarioContext";

const ProtectedRouter = () => {
  const { isLoggedIn, userRol } = useUsuario();

  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <Routes>
      {userRol === "USER_ROLE" && (
        <>
          <Route path="publicacion" element={<Publicacion />} />
          <Route path="crear-publicacion" element={<CrearPublicacion />} />
          <Route path="mi-perfil" element={<PerfilView />} />
        </>
      )}

      {userRol === "ADMIN_ROLE" && (
        <Route path="admin" element={<AdminPage />} />
      )}

      {/* Ruta por defecto si no matchea nada */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ProtectedRouter;
