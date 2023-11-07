import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from "../dashboard/dashboard.module";
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule, SharedModule,
        DashboardModule, RouterModule, AuthRoutingModule, SharedModule
    ]
})
export class AuthModule { }
