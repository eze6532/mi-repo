import { Routes, Route, Navigate } from "react-router-dom";
import RegistroPage from "../paginas/Registro/RegistroPage";
import ProtectedRouter from "./ProtectedRoute";
import LoginPage from "../paginas/Login/LoginPage";
import Layout from "../componentes/Layout/Layout";

const isLoggedIn = () => !!localStorage.getItem("token");

const Router: React.FC = () => {
  return (
      <Routes>
        
        {/* Ruta publica de registro */}
        <Route path="/registro" element={isLoggedIn() ? <Navigate to="/" replace /> : <RegistroPage />} />
        <Route path="/login" element={isLoggedIn() ? <Navigate to="/" replace /> : <LoginPage />} />

        {/* Rutas protegidas */}
        <Route element={<Layout/>}>
          <Route path="/*" element={<ProtectedRouter />} />
        </Route>
        
        
        {/* Redirigir / al home o registro según el estado */}
        <Route path="/" element={isLoggedIn() ? <Navigate to="/" replace /> : <Navigate to="/registro" replace />} />
      </Routes>
  );
};

export default Router;
