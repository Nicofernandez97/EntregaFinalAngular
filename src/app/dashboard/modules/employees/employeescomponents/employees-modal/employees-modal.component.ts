import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeesService } from '../../employees.service';
import { Employee } from '../../models';
import {permits} from '../../models'


@Component({
  selector: 'app-employees-modal',
  templateUrl: './employees-modal.component.html',
  styleUrls: ['./employees-modal.component.scss']
})
export class EmployeesModalComponent {
  employeeName= new FormControl("",[Validators.required,Validators.minLength(4)])
  employeeEmail= new FormControl("",[Validators.required,Validators.email])
  employeePrivileges= new FormControl("",Validators.required)

  employeeForm = new FormGroup({
    name: this.employeeName, 
    email: this.employeeEmail,
    privileges: this.employeePrivileges
  });

  permisos: permits[] = [
    {value: 'admin', viewValue: 'admin'},
    {value: 'empleado', viewValue: 'empleado'},
  ];



    constructor(private matDialogRef: MatDialogRef<EmployeesModalComponent>, private employeesService: EmployeesService,  @Inject(MAT_DIALOG_DATA) private employeesName?: string ){

      if(employeesName){
        this.employeesService.findEmployeeByName$(employeesName).subscribe({
          next:(employee) =>{
            if (employee){
              this.employeeForm.patchValue(employee)
            }
          }
        })
      }
    }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
     return this.employeeForm.markAllAsTouched();
    } 
    else{
      this.matDialogRef.close(this.employeeForm.value)
    }
  }
  
}
