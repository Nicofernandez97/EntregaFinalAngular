import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { InscripcionesActions } from './inscripciones.actions';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../courses/models';
import { User } from '../../users/models';
import { Inscripcion, ResponseDialogInscripcion } from '../models';


@Injectable()
export class InscripcionesEffects {

  loadInscripciones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.loadInscripciones),
      concatMap(() =>
        this.getInscripciones().pipe(
          map(data => InscripcionesActions.loadInscripcionesSuccess({ data })),
          catchError(error => of(InscripcionesActions.loadInscripcionesFailure({ error }))))
      )
    );
  });

  loadInscripcionesChoices$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.loadInscripcionesChoices),
      concatMap(() =>
        this.getInscripcionesChoices().pipe(
          map(data => InscripcionesActions.loadInscripcionesChoicesSuccess(data)),
          catchError(error => of(InscripcionesActions.loadInscripcionesChoicesFailure({ error }))))
      )
    );
  })

  submitInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.submitInscripciones),
      concatMap((data) =>
        this.submitInscripcion(data.data).pipe(
          map(data => InscripcionesActions.loadInscripciones()),
          catchError(error => of(InscripcionesActions.submitInscripcionesFailure({ error }))))
      )
    );
  })

  deleteInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.deleteInscripciones),
      concatMap((data) =>
        this.deleteInscripcion(data.id).pipe(
          map(data => InscripcionesActions.deleteInscripcionesSuccess({id : data.id})),
          catchError(error => of(InscripcionesActions.deleteInscripcionesFailure({ error }))))
      )
    );
  })
 
  editInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.editInscripciones),
      concatMap((data) =>
        this.editInscripcion(data.data).pipe(
          map(data => InscripcionesActions.editInscripcionesSuccess({data})),
          catchError(error => of(InscripcionesActions.editInscripcionesFailure({ error }))))
      )
    );
  })


  constructor(private actions$: Actions, private httpClient: HttpClient) { }
    
  getInscripciones(): Observable<any[]>{
      return this.httpClient.get<any[]>("http://localhost:3000/inscripciones?_expand=course&_expand=user")
    }

  submitInscripcion(payload: ResponseDialogInscripcion): Observable<Inscripcion>{
      return this.httpClient.post<Inscripcion>("http://localhost:3000/inscripciones",payload)
  }
    
  deleteInscripcion(payload: number): Observable<Inscripcion>{
      return this.httpClient.delete<Inscripcion>(`http://localhost:3000/inscripciones/${payload}`)
  }

  editInscripcion(payload: Inscripcion): Observable<any>{
    return this.httpClient.put<Object>(`http://localhost:3000/inscripciones/${payload.id}`,payload)
  }

    getInscripcionesChoices(): Observable<{courses: Course[]; users: User[]}>{
      return forkJoin([this.httpClient.get<Course[]>("http://localhost:3000/courses"),this.httpClient.get<User[]>("http://localhost:3000/users?role=estudiante")])
      .pipe(map((tupla) => { return {
        courses: tupla[0],
        users: tupla[1]  
      } 
    }))
    }

  }
