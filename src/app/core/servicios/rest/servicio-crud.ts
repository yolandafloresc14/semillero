import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCrud<T> {
  private apiUrl = 'https://api.tuendpoint.com/'; // URL de tu API

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/todos`);
  }

  obtenerPorId(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/id/${id}`);
  }

  crear(item: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/crear`, item);
  }

  actualizar(id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/actualizar/${id}`, item);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }

  obtenerActivos(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/activos`);
  }
}
