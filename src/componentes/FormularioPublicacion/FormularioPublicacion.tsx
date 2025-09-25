// src/componentes/FormularioPublicacion/FormularioPublicacion.tsx
import React from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";
import { opcionesPreferencias, type PreferenciaOpciones } from "../../modelos/Usuario";

interface FormularioPublicacionProps {
  titulo: string;
  setTitulo: (valor: string) => void;
  ubicacion: string;
  setUbicacion: (valor: string) => void;
  precio: number;
  setPrecio: (valor: number) => void;
  descripcion: string;
  setDescripcion: (valor: string) => void;
  foto: string;
  setFoto: (valor: string) => void;
  reglas: string;
  setReglas: (valor: string) => void;
  preferencia: PreferenciaOpciones[] | undefined;
  setPreferencia: (valor: PreferenciaOpciones[]) => void;
  handleSubmit: (e: React.FormEvent) => void;
}


const FormularioPublicacion: React.FC<FormularioPublicacionProps> = ({
  titulo,
  setTitulo,
  ubicacion,
  setUbicacion,
  precio,
  setPrecio,
  descripcion,
  setDescripcion,
  foto,
  setFoto,
  reglas,
  setReglas,
  preferencia,
  setPreferencia,
  handleSubmit,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600, mx: "auto", mt: 4 }}
    >
      <Typography variant="h5">Crear Publicación</Typography>

      <TextField
        label="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        fullWidth
        required
      />

      <TextField
        label="Ubicación"
        value={ubicacion}
        onChange={(e) => setUbicacion(e.target.value)}
        fullWidth
        required
      />

      <TextField
        label="Precio"
        type="number"
        value={precio}
        onChange={(e) => setPrecio(Number(e.target.value))}
        fullWidth
        required
      />

      <TextField
        label="Descripción"
        multiline
        rows={4}
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        fullWidth
      />

      <TextField
        label="URL de la foto"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
        fullWidth
      />

      <TextField
        label="Reglas de convivencia"
        value={reglas}
        onChange={(e) => setReglas(e.target.value)}
        fullWidth
      />

      <TextField
        label="Preferencias"
        select
        SelectProps={{ multiple: true }}
        value={preferencia || []}
        onChange={(e) =>
          setPreferencia(
            typeof e.target.value === "string"
              ? e.target.value.split(",") as PreferenciaOpciones[]
              : e.target.value
          )
        }
        fullWidth
      >
        {opcionesPreferencias.map((opcion) => (
          <MenuItem key={opcion} value={opcion}>
            {opcion}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="contained" type="submit">
        Publicar
      </Button>
    </Box>
  );
};

export default FormularioPublicacion;
