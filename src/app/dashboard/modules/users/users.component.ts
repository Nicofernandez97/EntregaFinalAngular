import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog'
import { UserDialogComponent } from './dialogcomponents/user-dialog/user-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName=""

  users$: Observable<User[]>

  constructor(
    private usersService: UsersService,
    private matDialog: MatDialog
  ){
    this.users$ = this.usersService.getUsers$()
  }
  openDialog(): void {
    this.matDialog.open(UserDialogComponent).afterClosed().subscribe({ 
      next: (notCancelled) => {
        if(notCancelled){
         this.users$ = this.usersService.addUser$({
            name: notCancelled.name,
            lastName: notCancelled.lastName,
            email: notCancelled.email,
            grade: notCancelled.grade
          })
        }
      }
    })
  }
  
  
  onDeleteUser(userEmail: string):void {
   this.users$ = this.usersService.deleteUser$(userEmail)
  }



  onChangeUser(userEmail: string):void {
    this.matDialog.open(UserDialogComponent,{
      data:userEmail,
    }).afterClosed().subscribe({
      next: (formValue) => {
        if(formValue !== undefined){
          this.users$ = this.usersService.changeUser$(userEmail, formValue)
        }
      }
    })
  }
}
