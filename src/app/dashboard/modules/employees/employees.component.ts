import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Observable } from 'rxjs';
import { Employee } from './models';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesModalComponent } from './employeescomponents/employees-modal/employees-modal.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  employees$: Observable<Employee[]>

  constructor(private employeesService: EmployeesService, private matDialog: MatDialog ){
  this.employees$ = this.employeesService.getEmployees$();
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

  onChangeEmployee(employeesName: string): void{
    this.matDialog.open(EmployeesModalComponent,{
      data: employeesName,
    }).afterClosed().subscribe({
      next: (formValue) => {
        if(formValue !== undefined){
         this.employees$ = this.employeesService.changeEmployee$(employeesName, formValue)
        }
      }
    })
  }

  OnDeleteEmployee(employeesName: string): void{
    this.employees$= this.employeesService.deleteEmployee$(employeesName) 
  }
  
}







