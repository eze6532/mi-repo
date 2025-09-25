// src/paginas/publicaciones/CrearPublicacion.tsx
import { useState } from "react";
import FormularioPublicacion from "../../componentes/FormularioPublicacion/FormularioPublicacion";
import type { PreferenciaOpciones } from "../../modelos/Usuario";

const CrearPublicacion = () => {
  const [titulo, setTitulo] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState('');
  const [reglas, setReglas] = useState('');
  const [preferencia, setPreferencia] = useState<PreferenciaOpciones[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const publicacion = {
      titulo,
      ubicacion,
      precio,
      descripcion,
      foto,
      reglas,
      preferencia,
    };

    console.log("Publicación a enviar:", publicacion);

    // Aquí podrías enviar los datos al backend con api.publicacion.crear(publicacion)
  };

  return (
    <FormularioPublicacion
      titulo={titulo}
      setTitulo={setTitulo}
      ubicacion={ubicacion}
      setUbicacion={setUbicacion}
      precio={precio}
      setPrecio={setPrecio}
      descripcion={descripcion}
      setDescripcion={setDescripcion}
      foto={foto}
      setFoto={setFoto}
      reglas={reglas}
      setReglas={setReglas}
      preferencia={preferencia}
      setPreferencia={setPreferencia}
      handleSubmit={handleSubmit}
    />
  );
};

export default CrearPublicacion;
