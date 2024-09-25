import { Injectable } from '@angular/core';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private tokenService: TokenService) {}

  // Método para obtener la información del usuario desde el token
  getUserInfo(): any {
    return this.tokenService.decodeToken(); // Decodificamos el token para obtener la información del usuario
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = this.tokenService.getToken();
    // Verifica si el token existe y no ha expirado
    if (token) {
      const decoded = this.tokenService.decodeToken();
      return decoded && decoded.exp * 1000 > Date.now(); // Verifica la fecha de expiración
    }
    return false;
  }

  // Método opcional: Puedes agregar un método para obtener un campo específico
  getUserName(): string | null {
    const userInfo = this.getUserInfo();
    return userInfo ? `${userInfo.nombres} ${userInfo.apellidos}` : null;
  }

  // Método opcional: Puedes agregar un método para obtener el grado del usuario
  getUserGrade(): string | null {
    const userInfo = this.getUserInfo();
    return userInfo ? `${userInfo.grado.NIVEL} - ${userInfo.grado.NUMERO}` : null;
  }
}
