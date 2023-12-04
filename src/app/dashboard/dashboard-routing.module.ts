import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './modules/courses/courses.component';
import { UsersComponent } from './modules/users/users.component';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../core/guards/admin.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { //Parado sobre el /dashboard
        path: '', 
        component: DashboardComponent,
        children: [
          {
            path: 'courses',
            canActivate: [adminGuard],
            loadChildren: () =>
              import('./modules/courses/courses.module').then((arch) => arch.CoursesModule), 
          },

          {
            path: 'users',
            loadChildren: () =>
              import('./modules/users/users.module').then((arch) => arch.UsersModule),
          },
          {
            path: 'employees',
            canActivate: [adminGuard],
            loadChildren: () =>
              import('./modules/employees/employees.module').then((arch) => arch.EmployeesModule),
          },

          {
            path: '**',
            redirectTo: 'dashboard',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}