import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from './modules/forms/forms.module';
import { SharedModule } from '../shared/shared.module';
import {MatList, MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardRoutingModule } from './dashboard-routing.module';

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
    SharedModule,
    MatListModule,
    RouterModule,
    MatNativeDateModule,
    DashboardRoutingModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
