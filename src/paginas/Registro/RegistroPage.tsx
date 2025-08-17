import React, { useState } from "react";
import RegistroForm from "../../componentes/FormularioRegistro/RegistroForm";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../../api/hoock/useRegistro";

const RegistroPage: React.FC = () => {
  const [nombre, setNombre] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mostrarPassword, setMostrarPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const togglePassword = () => setMostrarPassword(!mostrarPassword);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

    try {
      const data = await registrarUsuario(nombre, correo, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      navigate("/home");
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <RegistroForm
        nombre={nombre}
        correo={correo}
        password={password}
        mostrarPassword={mostrarPassword}
        setNombre={setNombre}
        setCorreo={setCorreo}
        setPassword={setPassword}
        togglePassword={togglePassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegistroPage;
