import type { Roles } from "./Roles";

export interface LoginRespuesta{
    ID: string;
    rol: [Roles];
    token: string;

}

export interface LoginDatos{
    correo: string;
    contrasena: string;
}
