import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../../../interfaces/utilidades/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {
  private apiUrl = 'URL_DEL_BACKEND/respuestas';

  constructor(private http: HttpClient) {}


  obtenerRespuestasPorEnunciado(idEnunciado: number): Observable<Respuesta[]> {
    return this.http.get<Respuesta[]>(`${this.apiUrl}/enunciado/${idEnunciado}`);
  }


  crearRespuesta(respuesta: Respuesta): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.apiUrl, respuesta);
  }
  
}
