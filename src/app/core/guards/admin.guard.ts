import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
export const adminGuard: CanActivateFn = (route, state) => {

  const store = inject(Store)
  const router = inject(Router)
  return store.select(selectAuthUser).pipe(map
    ((user) => {
      if(user?.role === 'estudiante' ){
        alert("Al ser estudiante, usted no podrá acceder a las rutas de cursos e inscripciones, solo podrá ver el listado de integrantes.")
        return router.createUrlTree(["/dashboard/users"])
      }
      else{
        return true
      }
    }));
};
