import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Examen } from '../../../interfaces/utilidades/examen.interface'; 
import { Enunciado } from '../../../interfaces/utilidades/enunciado.interface'; // Asegúrate de que estas interfaces están bien definidas.

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl = 'http://109.199.104.41:3001/api_semillero/examenAlumno';

  constructor(private http: HttpClient) {}

  // Obtener todos los exámenes
  obtenerExamenes(): Observable<Examen[]> {
    return this.http.get<Examen[]>(`${this.apiUrl}/getExamen`);
  }

  // Obtener el examen por su ID, con preguntas y respuestas
  obtenerExamenPorId(id: number): Observable<Enunciado[]> {
    return this.http.get<any>(`${this.apiUrl}/getExamen/${id}`).pipe(
      map(response => {
        return response.examen.preguntas.map((pregunta: any) => ({
          id: pregunta.id,
          idExamen: response.examen.id,
          descripcion: pregunta.descripcion,
          puntaje: pregunta.puntaje,
          respuestas: pregunta.respuestas // Asegúrate de que respuestas están correctamente tipadas en la interfaz Enunciado
        }));
      })
    );
  }
}
