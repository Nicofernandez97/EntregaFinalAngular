import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesTableComponent } from './employeescomponents/employees-table/employees-table.component';
import { EmployeesModalComponent } from './employeescomponents/employees-modal/employees-modal.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './store/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeature } from './store/inscripciones.reducer';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesTableComponent,
    EmployeesModalComponent,
    
  ],
  imports: [
    CommonModule, SharedModule, EmployeesRoutingModule, StoreModule.forFeature(inscripcionesFeature), EffectsModule.forFeature([InscripcionesEffects])
  ]
})
export class EmployeesModule { }
