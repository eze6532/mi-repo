import React from "react";

interface RegistroFormProps {
  nombre: string;
  correo: string;
  password: string;
  mostrarPassword: boolean;
  setNombre: (value: string) => void;
  setCorreo: (value: string) => void;
  setPassword: (value: string) => void;
  togglePassword: () => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const RegistroForm: React.FC<RegistroFormProps> = ({
  nombre,
  correo,
  password,
  mostrarPassword,
  setNombre,
  setCorreo,
  setPassword,
  togglePassword,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} >
      <h2 >Crear cuenta</h2>

      {/* Nombre */}
      <div >
        <label>Nombre completo</label>
        <input
          type="text"
          placeholder="Ej: Juan Pérez"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      {/* Correo */}
      <div>
        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="Ej: usuario@email.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </div>

      {/* Contraseña */}
      <div >
        <label>Contraseña</label>
        <div >
          <input
            type={mostrarPassword ? "text" : "password"}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={togglePassword}
          >
            {mostrarPassword ? "Ocultar" : "Ver"}
          </button>
        </div>
      </div>

      {/* Botón */}
      <button type="submit">
        Registrarse
      </button>

      <p>
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
      </p>
    </form>
  );
};

export default RegistroForm;
