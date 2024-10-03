import { Enunciado } from "./enunciado.interface";

export interface Examen {
  id: number;
  idCurso: number;
  fecha: string;
  horaInicio: string;
  horaFinalizado: string;
  enunciados: Enunciado[];  // Agregamos la lista de enunciados dentro del examen
}
