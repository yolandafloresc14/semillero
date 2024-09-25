import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userRole: string = 'student';

  constructor() { }
  
  isTeacher(): boolean {
    return this.userRole === 'teacher';
  }

  isStudent(): boolean {
    return this.userRole === 'student';
  }

  // Método para setear el rol, si obtienes el rol de otro lugar.
  setRole(role: string) {
    this.userRole = role;
  }

  verEstado() {
    console.log('funciona')
  }
}
