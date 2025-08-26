import { Routes, Route, Navigate } from "react-router-dom";
import RegistroPage from "../paginas/Registro/RegistroPage";
import LoginPage from "../paginas/Login/LoginPage";
import Layout from "../componentes/Layout/Layout";
import ProtectedRouter from "./ProtectedRoute";

const isLoggedIn = () => !!localStorage.getItem("token");

const Router: React.FC = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/registro" element={!isLoggedIn() ? <RegistroPage /> : <Navigate to="/" replace />} />
      <Route path="/login" element={!isLoggedIn() ? <LoginPage /> : <Navigate to="/" replace />} />

      {/* Rutas protegidas */}
      <Route element={<Layout />}>
        <Route path="/*" element={<ProtectedRouter />} />
      </Route>

      {/* Ruta fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
