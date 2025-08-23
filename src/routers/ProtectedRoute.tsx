import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../paginas/Home/HomePage";
import { getUserRol } from "../api/api.auth";
import AdminPage from "../paginas/Admin/AdminPage";
import Perfil from "../paginas/Perfil/Perfil";


const ProtectedRouter =()=>{

    const isLoggedIn = !!localStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to="/registro" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/MiPerfil" element={<Perfil/>}></Route>
      <Route path="/admin" element={getUserRol() === "ADMIN_ROLE" ? <AdminPage /> : <Navigate to="/" replace />} />
    </Routes>
  );
};

export default ProtectedRouter;