import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface onExitDeactivate {
  onExit: () => boolean | Observable<boolean>;
}

/*
  Este guard es para saber si el usuario puede salir de la página o no, por ende es perfecto para aplicar en el momento del examen
  La interface se debe implementar en el componente, ademas que en ese componente se debe aplicar la logica del metodo
  Ojo que tomará la ruta del componente asi que si se tiene rutas hijas se debe aplicar en cada una de ellas segun sea necesario
*/

export const exitGuard: CanDeactivateFn<onExitDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.onExit ? component.onExit() : true;
};
