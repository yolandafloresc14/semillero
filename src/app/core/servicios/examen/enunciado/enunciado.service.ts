import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enunciado } from '../../../interfaces/utilidades/enunciado.interface';

@Injectable({
  providedIn: 'root'
})
export class EnunciadoService {
  private apiUrl = 'URL_DEL_BACKEND/enunciados';

  constructor(private http: HttpClient) {}

  // Obtener los enunciados de un examen
  obtenerEnunciadosPorExamen(idExamen: number): Observable<Enunciado[]> {
    return this.http.get<Enunciado[]>(`${this.apiUrl}/examen/${idExamen}`);
  }

  // Crear un enunciado
  crearEnunciado(enunciado: Enunciado): Observable<Enunciado> {
    return this.http.post<Enunciado>(this.apiUrl, enunciado);
  }
}
