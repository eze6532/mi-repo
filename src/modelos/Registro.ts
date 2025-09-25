import type { Genero, HabitosOpciones, PreferenciaOpciones } from "./Usuario";

export interface DatosRegistro {
  nombreCompleto: string;
  correo: string;
  contraseña: string;
  edad: number;
  genero?: Genero;
  descripcion?: string;
  habitos?: HabitosOpciones[];
  preferencia?: PreferenciaOpciones[];
}

export interface RegistroRespuesta {
  mensaje: string;
}
