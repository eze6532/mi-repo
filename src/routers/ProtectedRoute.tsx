import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../paginas/Home/HomePage";
import Perfil from "../paginas/Perfil/PerfilView";
import Publicacion from "../paginas/Publicacion/Publicacion";
import CrearPublicacion from "../paginas/Publicacion/CrearPublicacion";
import AdminPage from "../paginas/Admin/AdminPage";
import { getUserRol } from "../api/api.auth";

const ProtectedRouter = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (!isLoggedIn) {
  return <Navigate to="/auth" replace />;
}

  const userRol = getUserRol();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="mi-perfil" element={<Perfil />} />

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
