import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {//Parado sobre el /dashboard/courses
    path: '',
    component: CoursesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}