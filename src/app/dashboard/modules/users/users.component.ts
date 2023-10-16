import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog'
import { UserDialogComponent } from './dialogcomponents/user-dialog/user-dialog.component';
import { User } from './models';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName=""

  users: User[] = [
    {
      name:"jose",
      lastName: "perez",
      email: "joselu@hotmail.com",
      grade: 7,
    },
    {
      name:"martina",
      lastName: "lopez",
      email: "martu23@hotmail.com",
      grade: 2,
    },
    {
      name:"alvaro",
      lastName: "fernandez",
      email: "alvaro@gmail.com",
      grade: 9,
    },
    {
      name:"julian",
      lastName: "diaz",
      email: "elJulchu@hotmail.com",
      grade: 3,
    },
    {
      name:"damian",
      lastName: "estrada",
      email: "damidami@gmail.com",
      grade: 8,
    },
  ]
  constructor(
    
    private matDialog: MatDialog
  ){}
  openDialog(): void {
    this.matDialog.open(UserDialogComponent).afterClosed().subscribe({ 
      next: (va) =>{
        console.log("valor:", va )
        if(!!va){
          this.users=[
            ...this.users,
            {            
                ...va           //No se puede hacer un push directo, solamente agregar al array de users vía el spread operator.
            }
          ]
        }
      },
    })
  }
  onDelete(userMail: string):void {
   this.users = this.users.filter((data) => data.email !== userMail)
    
   
  }
}
