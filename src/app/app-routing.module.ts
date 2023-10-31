import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './dashboard/modules/users/users.component';
import { CoursesComponent } from './dashboard/modules/courses/courses.component';
import { EmployeesComponent } from './dashboard/modules/employees/employees.component';

const routes: Routes = [
  {path: "dashboard",
     component: DashboardComponent,
     children:[
      {
          path:"users",
          component: UsersComponent
      },
      {
        path:"courses",
        component: CoursesComponent
      },
      {
        path:"employees",
        component:EmployeesComponent
      }
     
      
   ],
  },
    {
     path: "login",
     component: AuthComponent // No utilizado
    }
    ,
    {
      path: "**",
      component: DashboardComponent
    }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
