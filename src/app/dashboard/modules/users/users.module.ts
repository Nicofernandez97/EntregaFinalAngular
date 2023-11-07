import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDialogComponent } from './dialogcomponents/user-dialog/user-dialog.component';
import { MaintableComponent } from './dialogcomponents/maintable/maintable.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    UserDialogComponent,
    MaintableComponent,
  ],
  imports: [
    CommonModule, SharedModule, UsersRoutingModule
  ],
  exports: [    UsersComponent  ]
})
export class UsersModule { }
