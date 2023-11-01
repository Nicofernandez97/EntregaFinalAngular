import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from './modules/forms/forms.module';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from '../shared/shared.module';
import {MatList, MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoursesModule } from './modules/courses/courses.module';
import { MatNativeDateModule } from '@angular/material/core';
import { EmployeesModule } from './modules/employees/employees.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    UsersModule,
    SharedModule,
    MatListModule,
    RouterModule,
    CoursesModule,
    MatNativeDateModule,
    EmployeesModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
