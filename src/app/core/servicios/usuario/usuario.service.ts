import { Injectable } from '@angular/core';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private tokenService: TokenService) {}


  getUserInfo(): any {
    return this.tokenService.decodeToken(); 
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = this.tokenService.getToken();
    if (token) {
      const decoded = this.tokenService.decodeToken();
      return decoded && decoded.exp * 1000 > Date.now(); // Verifica la fecha de expiración
    }
    return false;
  }

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
