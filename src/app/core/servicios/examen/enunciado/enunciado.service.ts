import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Para transformar la respuesta
import { Enunciado } from '../../../interfaces/utilidades/enunciado.interface';

@Injectable({
  providedIn: 'root'
})
export class EnunciadoService {

  private apiUrl = 'http://109.199.104.41:3001/api_semillero/examenAlumno/getExamen';

  constructor(private http: HttpClient) { }

  obtenerEnunciadosPorExamen(idExamen: number): Observable<Enunciado[]> {
    return this.http.get<any>(`${this.apiUrl}/${idExamen}`).pipe(
      map(response => {
        // Extraemos las preguntas (enunciados) del objeto examen
        return response.examen.preguntas.map((pregunta: any) => ({
          id: pregunta.id,
          idExamen: response.examen.id,
          descripcion: pregunta.descripcion,
          puntaje: pregunta.puntaje,
          respuestas: pregunta.respuestas
        }));
      })
    );
  }

  crearEnunciado(enunciado: Enunciado): Observable<Enunciado> {
    return this.http.post<Enunciado>(this.apiUrl, enunciado);
  }

  // Actualizar un enunciado existente
  actualizarEnunciado(id: number, enunciado: Enunciado): Observable<Enunciado> {
    return this.http.put<Enunciado>(`${this.apiUrl}/${id}`, enunciado);
  }

  // Eliminar un enunciado
  eliminarEnunciado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

