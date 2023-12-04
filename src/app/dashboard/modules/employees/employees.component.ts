import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Observable } from 'rxjs';
import { Employee, Inscripcion } from './models';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesModalComponent } from './employeescomponents/employees-modal/employees-modal.component';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  employees$: Observable<Employee[]>

  constructor(private employeesService: EmployeesService, private matDialog: MatDialog, private store: Store){
  this.employees$ = this.employeesService.getEmployees$();
  this.store.dispatch(InscripcionesActions.loadInscripciones())
  }
  openEmployeeDialog():void {
    this.matDialog.open(EmployeesModalComponent).afterClosed().subscribe({
      next: (notCancelled) => {
        if(notCancelled){
         this.employees$ = this.employeesService.addEmployee$({
            name: notCancelled.name,
            email: notCancelled.email,
            privileges: notCancelled.privileges
          })
        }
      }
    })
  }

  OnDeleteInscription(id: number): void{
    this.store.dispatch(InscripcionesActions.deleteInscripciones({id}))
    this.store.dispatch(InscripcionesActions.loadInscripciones())
  }

  OnChangeInscription(payload: Inscripcion): void{
    this.matDialog.open(EmployeesModalComponent,
      {
      data: payload,
      }).afterClosed().subscribe({
      next: (formValue) => {
        if(formValue !== undefined){
          
        }
      }
    })
  }
  }
  








