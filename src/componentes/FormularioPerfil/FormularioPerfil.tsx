import React, { useState } from "react";
import { opcionesHabitos, opcionesPreferencias, type UsuarioPerfil } from "../../modelos/Usuario";


interface FormularioPerfilProps {
  perfil: UsuarioPerfil;
  onGuardar: (m: UsuarioPerfil) => void;
  onCancelar: () => void;
}

const FormularioPerfil: React.FC<FormularioPerfilProps> = ({perfil, onGuardar, onCancelar}) => {
  
  const perfilDefault: UsuarioPerfil = {
    nombreCompleto: "",
    edad: 0,
    genero: "Prefiero no decir",
    descripcion: "",
    habitos: [],
    preferencias: [],
  };

  const [formData, setFormData] = useState<UsuarioPerfil>(perfil ?? perfilDefault);


const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: name === "edad" ? parseInt(value) : value,
  }));
};


  const toggleCheckbox = (nombreCampo: "habitos" | "preferencias", valor: string) => {
    setFormData(prev => {
      const actual = prev[nombreCampo] as string[];
      const nuevo = actual!.includes(valor)
        ? actual!.filter(item => item !== valor)
        : [...actual!, valor];

      return {
        ...prev,
        [nombreCampo]: nuevo,
      };
    });
  };

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();
    onGuardar(formData);
  };

  return (
    <form onSubmit={handleGuardar} className="form-container">
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Edad</label>
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          required
          min={18}
          max={100}
        />
      </div>

      <div>
        <label>Género</label>
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
        >
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Prefiero no decir">Prefiero no decir</option>
        </select>
      </div>

      <div>
        <label>Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Hábitos</label>
        {opcionesHabitos.map((habito) => (
          <div key={habito}>
            <label>
              <input
                type="checkbox"
                checked={formData.habitos!.includes(habito)}
                onChange={() => toggleCheckbox("habitos", habito)}
              />
              {habito}
            </label>
          </div>
        ))}
      </div>

      <div>
        <label>Preferencias</label>
        {opcionesPreferencias.map((pref) => (
          <div key={pref}>
            <label>
              <input
                type="checkbox"
                checked={formData.preferencias!.includes(pref)}
                onChange={() => toggleCheckbox("preferencias", pref)}
              />
              {pref}
            </label>
          </div>
        ))}
      </div>

      <div>
        <button type="submit" onClick={handleGuardar}>Guardar</button>
        <button type="button" onClick={onCancelar}>Cancelar</button>
      </div>
    </form>
  );
};

export default FormularioPerfil;
