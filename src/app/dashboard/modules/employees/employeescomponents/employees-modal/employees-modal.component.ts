import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeesService } from '../../employees.service';
import { Employee } from '../../models';
import {permits} from '../../models'
import { Store } from '@ngrx/store';
import { InscripcionesActions } from '../../store/inscripciones.actions';
import { selectCursosChoices, selectUserChoices } from '../../store/inscripciones.selectors';
import { Observable } from 'rxjs';
import { Course } from '../../../courses/models';
import { User } from '../../../users/models';


@Component({
  selector: 'app-employees-modal',
  templateUrl: './employees-modal.component.html',
  styleUrls: ['./employees-modal.component.scss']
})
export class EmployeesModalComponent {
  inscripcionUserIdControl= new FormControl<number|null>(null,Validators.required)
  inscripcionCourseIdControl= new FormControl<number|null>(null,Validators.required)


  inscripcionForm = new FormGroup({
    courseId: this.inscripcionCourseIdControl, 
    userId: this.inscripcionUserIdControl
  });

    cursosChoices$: Observable<Course[]>
    userChoices$: Observable<User[]>


    constructor(private matDialogRef: MatDialogRef<EmployeesModalComponent>, private store: Store, private employeesService: EmployeesService,  @Inject(MAT_DIALOG_DATA) private employeesName?: string, 
    ){
    this.store.dispatch(InscripcionesActions.loadInscripcionesChoices())
    this.cursosChoices$= this.store.select(selectCursosChoices)
    this.userChoices$= this.store.select(selectUserChoices)
    }

  onSubmit(): void {
    if (this.inscripcionForm.invalid) {
     return this.inscripcionForm.markAllAsTouched();
    } 
    else{
      this.store.dispatch(InscripcionesActions.submitInscripciones({data: this.inscripcionForm.getRawValue()}))
      this.matDialogRef.close()
    }
  }
  
}
