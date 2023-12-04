import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog'
import { UserDialogComponent } from './dialogcomponents/user-dialog/user-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName=""

  users$: Observable<User[]>
  userPermits$: Observable<"admin"|"estudiante"|"profesor"| undefined>
  constructor(
    private usersService: UsersService,
    private matDialog: MatDialog,
    private store: Store
  ){
    this.users$ = this.usersService.getUsers$()
    this.userPermits$ = this.store.select(selectAuthUser).pipe(map((user) => user?.role))
  }
  openDialog(): void {
    this.matDialog.open(UserDialogComponent).afterClosed().subscribe({ 
      next: (notCancelled) => {
        if(notCancelled){
          this.usersService.addUser$(notCancelled).subscribe({
          next: () => {
            this.users$ = this.usersService.getUsers$()
          }
         })
        }
      }
    })
  }
  

  onChangeUser(user: User): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: user,
      })
      .afterClosed()
      .subscribe({
        next: (formCompleted) => {
          if (!!formCompleted) {
            this.users$ = this.usersService.changeUser$(user.id, formCompleted);
          }
        },
      });
  }

  onDeleteUser(userId: number): void {
      this.users$ = this.usersService.deleteUser(userId);
  }
}

