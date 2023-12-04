import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { Inscripcion } from '../models';
import { Course } from '../../courses/models';
import { User } from '../../users/models';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
    inscripciones: Inscripcion[]
    courseChoices: Course[],
    userChoices: User[]
    error: unknown
}

export const initialState: State = {
  inscripciones : [],
  error: null,
  courseChoices:[],
    userChoices:[]
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.loadInscripciones, state => state),
  on(InscripcionesActions.loadInscripcionesSuccess, (state, {data}) => ({...state , inscripciones: data})),
  on(InscripcionesActions.loadInscripcionesFailure, (state, {error}) => ({...state , error})),
  on(InscripcionesActions.loadInscripcionesChoicesSuccess, (state, action) => ({ ...state, courseChoices: action.courses, userChoices: action.users})),
  on(InscripcionesActions.loadInscripcionesFailure, (state, {error}) => ({...state , error})),
  on(InscripcionesActions.deleteInscripcionesSuccess, (state, {id}) => ({...state , id})),
  on(InscripcionesActions.deleteInscripcionesFailure, (state, {error}) => ({...state , error})),
  
  )

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

