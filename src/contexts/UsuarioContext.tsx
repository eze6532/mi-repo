import { createContext, useContext, useState, useEffect } from "react";
import type {  LoginRespuesta } from "../modelos/Login";
import type { UsuarioPerfil } from "../modelos/Usuario";

type UsuarioContextType = {
  id: string | null;
  setId: (id: string) => void;
  isLoggedIn: boolean;
  userRol: string | null;
  login: (loginRespuesta: LoginRespuesta) => void;
  logout: () => void;
  perfil: UsuarioPerfil | null;
  setPerfil: (perfil: UsuarioPerfil | null) => void;
  loading:boolean;
  setLoading:(b:boolean)=>void;
};


const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const [userRol, setUserRol] = useState<string | null>(null);
  const [perfil, setPerfil] = useState<UsuarioPerfil | null>(null);

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");
  const storedId = localStorage.getItem("id");

  if (token && (rol === 'ADMIN_ROLE' || rol === 'USER_ROLE') && storedId) {
    setIsLoggedIn(true);
    setUserRol(rol);
    setId(storedId);
  }
   setLoading(false);
}, []);


const login = (loginRespuesta: LoginRespuesta) => {
  setUserRol(loginRespuesta.rol[0]);
  setId(loginRespuesta.ID);
  setIsLoggedIn(true);

  localStorage.setItem("token", loginRespuesta.token);
  localStorage.setItem("rol", loginRespuesta.rol[0]);
  localStorage.setItem("id", loginRespuesta.ID);
};

const logout = () => {
  setId(null);
  setUserRol(null);
  setIsLoggedIn(false);

  localStorage.clear();
};


  return (
    <UsuarioContext.Provider value={{ 
        id, 
        setId,
        isLoggedIn, 
        userRol, 
        login, 
        logout, 
        perfil, 
        setPerfil,
        loading,
        setLoading, }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) throw new Error("useUsuario debe usarse dentro de UsuarioProvider");
  return context;
};
export const obtenerToken = () => {
  const token= localStorage.getItem("token") 
  if (!token) throw new Error("No estás logueado")
  return token;  
};
