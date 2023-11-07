import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => { //CanActivateFn: Funcion que retorna urlTree, boolean, u observable<boolean>
  
  const router = inject(Router)
  const authService = inject(AuthService)

  return authService.authUser$.pipe( map((user) => {
    return !!user ? true : router.createUrlTree(["/auth/login"]) 
  })); //Se reemplaza el arbol del routing por el valor asignado. La ruta en la que este guard está colocado se redireccionará aquí. El pipe con el operador
  //map se debe a que autnService.authUser retorna un observable<User> y necesito obtener un observable<UrlTree> o booleano.
};
