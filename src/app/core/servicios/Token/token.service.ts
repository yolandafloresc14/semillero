import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  // Guardar el token en una cookie
  saveToken(token: string): void {
    this.cookieService.set('authToken', token, 1); // 1 día de expiración
  }

  // Obtener el token desde la cookie
  getToken(): string | null {
    return this.cookieService.get('authToken');
  }

  // Decodificar el token
  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        return null;
      }
    }
    return null;
  }

  // Eliminar el token
  removeToken(): void {
    this.cookieService.delete('authToken','/');
  }
}
