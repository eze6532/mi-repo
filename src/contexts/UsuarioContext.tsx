import { createContext, useContext, useState, useEffect } from "react";
import type { UsuarioPerfil } from "../modelos/Usuario";

type UsuarioContextType = {
  perfil: UsuarioPerfil | null;
  setPerfil: (perfil: UsuarioPerfil) => void;
  isLoggedIn: boolean;
  userRol: string | null;
  login: (perfil: UsuarioPerfil, rol: string) => void;
  logout: () => void;
};

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [perfil, setPerfil] = useState<UsuarioPerfil | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRol, setUserRol] = useState<string | null>(null);

  // Al iniciar la app, levantar datos de localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const rol = localStorage.getItem("rol");
    const storedPerfil = localStorage.getItem("perfil");

    if (token && rol) {
      setIsLoggedIn(true);
      setUserRol(rol);
      if (storedPerfil) setPerfil(JSON.parse(storedPerfil));
    }
  }, []);

  const login = (perfil: UsuarioPerfil, rol: string) => {
    setPerfil(perfil);
    setUserRol(rol);
    setIsLoggedIn(true);

    localStorage.setItem("token", "fake-token");
    localStorage.setItem("rol", rol);
    localStorage.setItem("perfil", JSON.stringify(perfil));
  };

  const logout = () => {
    setPerfil(null);
    setUserRol(null);
    setIsLoggedIn(false);

    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("perfil");
  };

  return (
    <UsuarioContext.Provider value={{ perfil, setPerfil, isLoggedIn, userRol, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) throw new Error("useUsuario debe usarse dentro de UsuarioProvider");
  return context;
};


/*
export const getUserId = () => "0000001"
export const getUserRol =()=>"USER_ROLE";
export const isLoggedIn = () => "00000";
*/