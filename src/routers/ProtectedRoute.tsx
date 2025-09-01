import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../paginas/Home/HomePage";
import Publicacion from "../paginas/Publicacion/Publicacion";
import CrearPublicacion from "../paginas/Publicacion/CrearPublicacion";
import AdminPage from "../paginas/Admin/AdminPage";
import { getUserRol } from "../api/api.auth";
import PerfilEdit from "../paginas/Perfil/PerfilEdit";
import PerfilView from "../paginas/Perfil/PerfilView";

const ProtectedRouter = () => {
 // const isLoggedIn = !!localStorage.getItem("token");
/*
  if (!isLoggedIn) {
    return <Navigate to="/registro" replace />;
  }
*/
  const userRol = getUserRol();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="mi-perfil" element={<PerfilView />} />
      <Route path="perfil-edit" element={<PerfilEdit />} />
      
      {userRol === "USER_ROLE" && (
        <>
          <Route path="publicacion" element={<Publicacion />} />
          <Route path="crear-publicacion" element={<CrearPublicacion />} />
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
