
import { createContext, useContext, useState } from "react";
import type { UsuarioPerfil } from "../modelos/Usuario";

type UsuarioContextType = {
  perfil: UsuarioPerfil | null;
  setPerfil: (perfil: UsuarioPerfil) => void;
};

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [perfil, setPerfil] = useState<UsuarioPerfil | null>(null);

  return (
    <UsuarioContext.Provider value={{ perfil, setPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) throw new Error("useUsuario debe usarse dentro de UsuarioProvider");
  return context;
};
