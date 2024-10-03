import { Respuesta } from "./respuesta.interface";

export interface Enunciado {
    id: number;
    idExamen: number;
    descripcion: string;
    numero: number;
    respuestas: Respuesta[];
  }
  