import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../componentes/Layout/Layout";
import ProtectedRouter from "./ProtectedRoute";
import AuthPage from "../paginas/Auth/AuthPage";
import { useUsuario } from "../contexts/UsuarioContext";
import HomePage from "../paginas/Home/HomePage";
import Publicacion from "../paginas/Publicacion/Publicacion";


const Router: React.FC = () => {
  const { isLoggedIn } = useUsuario();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/auth" element={!isLoggedIn ? <AuthPage /> : <Navigate to="/" replace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/publicacion" element={<Publicacion />} />

        <Route path="/*" element={<ProtectedRouter />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};


export default Router;
