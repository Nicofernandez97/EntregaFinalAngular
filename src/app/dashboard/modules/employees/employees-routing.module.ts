import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  {  //Parado sobre el /dashboard/employees
    path: '',
    component: EmployeesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}