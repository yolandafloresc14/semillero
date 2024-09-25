import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://109.199.104.41:3001/api_semillero/alumnos/login';  // URL de Login

  constructor(private http: HttpClient, private tokenService: TokenService) {}  // Inyectar el TokenService

  // Método para iniciar sesión
  login(usuario: string, clave: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { usuario, clave }).pipe(
      map(response => {
        // Si el login es exitoso, guardar el token utilizando el TokenService
        if (response && response.token) {
          this.tokenService.saveToken(response.token);
          const decodedToken = this.tokenService.decodeToken();
          console.log('Información del usuario decodificada:', decodedToken);
        }
        return response;
      }),
      catchError(this.handleError)
    );
  }

  // Método para cerrar sesión
  logout(): void {
    this.tokenService.removeToken();
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error desconocido.';
    
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error del cliente: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código del servidor: ${error.status}\nMensaje: ${error.message}`;
    }


    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}