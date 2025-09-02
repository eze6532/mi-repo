import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../componentes/Layout/Layout";
import ProtectedRouter from "./ProtectedRoute";
import AuthPage from "../paginas/Auth/AuthPage";

const isLoggedIn = () => !!localStorage.getItem("token");

const Router: React.FC = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/auth" element={!isLoggedIn() ? <AuthPage /> : <Navigate to="/" replace />}/>


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
