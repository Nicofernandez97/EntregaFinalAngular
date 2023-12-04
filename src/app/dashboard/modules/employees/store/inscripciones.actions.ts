import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscripcion, ResponseDialogInscripcion } from '../models';
import { Course } from '../../courses/models';
import { User } from '../../users/models';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {

    //Cargar inscripciones
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: Inscripcion[] }>(),
    'Load Inscripciones Failure': props<{ error: unknown }>(),
    
    //Cargar opciones (Desde el modal)
    'Load Inscripciones Choices': emptyProps(),
    'Load Inscripciones Choices Success': props<{ courses: Course[]; users: User[]}>(),
    'Load Inscripciones Choices Failure': props<{ error: unknown}>(),
    
    //Upload de inscripcion
    'Submit Inscripciones': props<{ data:ResponseDialogInscripcion}>(),
    'Submit Inscripciones Failure': props<{error: unknown}>(),
    
    //Borrar inscripciones (Desde actions de la tabla, no el modal)
    'Delete Inscripciones': props<{id:number}>(),
    'Delete Inscripciones Success': props<{ id:number}>(),
    'Delete Inscripciones Failure': props<{error: unknown}>(),

    //Cambiar inscripciones (Desde actions de la tabla)
    
    'Edit Inscripciones': props<{ data: Inscripcion}>(),
    'Edit Inscripciones Success': props<{ data: Inscripcion}>(),
    'Edit Inscripciones Failure': props<{error: unknown}>(),
  
      
 
  }   
});
