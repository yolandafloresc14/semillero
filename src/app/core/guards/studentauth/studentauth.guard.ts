import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../../servicios/Token/token.service';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const studentauthGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const cookieService = inject(CookieService);

  const token = tokenService.getToken();
  const userRole = cookieService.get('userRole');

  //verifico que existan ambos
  if (!token || !userRole) {
    if (userRole) {
      // si existe el rol pero no el token entonces se elimina el rol
      cookieService.delete('userRole');
    }

    if (token) {
      // mismo caso pero con el token
      tokenService.removeToken();
    }
    return false;
  }

  if (userRole !== 'student') {
    return false;
  }

  return true;
};
