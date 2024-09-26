import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../../../interfaces/utilidades/examen.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl = 'URL_DEL_BACKEND/examenes';

  constructor(private http: HttpClient) {}

  obtenerExamenes(): Observable<Examen[]> {
    return this.http.get<Examen[]>(this.apiUrl);
  }

  
  obtenerExamenPorId(id: number): Observable<Examen> {
    return this.http.get<Examen>(`${this.apiUrl}/${id}`);
  }


  crearExamen(examen: Examen): Observable<Examen> {
    return this.http.post<Examen>(this.apiUrl, examen);
  }

  actualizarExamen(id: number, examen: Examen): Observable<Examen> {
    return this.http.put<Examen>(`${this.apiUrl}/${id}`, examen);
  }

  eliminarExamen(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
