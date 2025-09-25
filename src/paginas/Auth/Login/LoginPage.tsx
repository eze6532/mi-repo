import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../../api/api.auth";
import'../../../styles/auth.css'
import type { LoginDatos } from "../../../modelos/Login";
import { useUsuario } from "../../../contexts/UsuarioContext";

const LoginPage = ({ onSwitch }: { onSwitch: () => void }) => {
  const { login, loading } = useUsuario();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContraseña] = useState("");
  const navigate = useNavigate();

  if (loading) return <div>Cargando sesión...</div>;
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data:LoginDatos = {
        correo:correo,
        contrasena:contrasena,
      };
      const respuesta = await apiAuth.auth.login(data);
      login(respuesta);

      navigate("/home");
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
  };

 return (
  <form onSubmit={handleLogin} className="form-container page-transition">
    <h2 className="form-title">Iniciar sesión</h2>

    <div>
      <label>Email</label>
      <input
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="Email"
        required
      />
    </div>

    <div>
      <label>Contraseña</label>
      <input
        type="password"
        value={contrasena}
        onChange={(e) => setContraseña(e.target.value)}
        placeholder="Contraseña"
        required
      />
    </div>

    <button type="submit">
      Ingresar
    </button>

    <p>
      ¿No tenés cuenta? <a href="#" onClick={e => { e.preventDefault(); onSwitch(); }}>Registrate</a>
    </p>
  </form>
);

};

export default LoginPage;
