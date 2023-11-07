import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { dashboardGuard } from './core/guards/dashboard.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [dashboardGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((arch) => arch.DashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((arch) => arch.AuthModule),
  },
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
