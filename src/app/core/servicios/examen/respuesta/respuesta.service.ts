import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../../../interfaces/utilidades/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {
  private apiUrl = 'http://109.199.104.41:3001/api_semillero/respuestas';  // Ajusta esta URL según sea necesario

  constructor(private http: HttpClient) {}

  // Obtener todas las respuestas asociadas a un enunciado
  obtenerRespuestasPorEnunciado(idEnunciado: number): Observable<Respuesta[]> {
    return this.http.get<Respuesta[]>(`${this.apiUrl}/enunciado/${idEnunciado}`);
  }

  // Crear una nueva respuesta
  crearRespuesta(respuesta: Respuesta): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.apiUrl, respuesta);
  }

  // Actualizar una respuesta existente
  actualizarRespuesta(id: number, respuesta: Respuesta): Observable<Respuesta> {
    return this.http.put<Respuesta>(`${this.apiUrl}/${id}`, respuesta);
  }

  // Eliminar una respuesta
  eliminarRespuesta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
