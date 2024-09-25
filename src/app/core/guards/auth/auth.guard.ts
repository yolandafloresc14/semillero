import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../../servicios/Token/token.service';
import { CookieService } from 'ngx-cookie-service';

//Este guardia se encargara de verificar si el usuario esta autenticado al ingresar a cualquiera de los 2 login que hay
export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const cookieService = inject(CookieService);

  const token = tokenService.getToken();
  const userRole = cookieService.get('userRole');

  if (!token || !userRole) {
    return true;
  }

  if (userRole === 'student') {
    router.navigate(['/student']);
  }
  if (userRole === 'teacher') {
    router.navigate(['/teacher']);
  }
  return false;
};
