import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursestableComponent } from './coursescomponents/coursestable/coursestable.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesmodalComponent } from './coursescomponents/coursesmodal/coursesmodal.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursestableComponent,
    CoursesmodalComponent
  ],
  imports: [
    CommonModule, SharedModule,
  ]
})
export class CoursesModule { }
