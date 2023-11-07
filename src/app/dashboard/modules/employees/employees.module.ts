import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesTableComponent } from './employeescomponents/employees-table/employees-table.component';
import { EmployeesModalComponent } from './employeescomponents/employees-modal/employees-modal.component';
import { EmployeesRoutingModule } from './employees-routing.module';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesTableComponent,
    EmployeesModalComponent,
    
  ],
  imports: [
    CommonModule, SharedModule, EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
