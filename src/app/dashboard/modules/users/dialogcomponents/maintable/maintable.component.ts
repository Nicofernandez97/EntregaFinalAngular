import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';



@Component({
  selector: 'app-maintable',
  templateUrl: './maintable.component.html',
  styleUrls: ['./maintable.component.scss']
})
export class MaintableComponent {
  @Input()
  dataSource: User[] = [] 

  @Output()
  deleteUser = new EventEmitter()

  @Output()
  changeUser = new EventEmitter<User>()

  displayedColumns = ["name","email","grade","actions"] 

  userPermits$: Observable<"admin"|"estudiante"|"profesor"| undefined>
  constructor(private store: Store){
   this.userPermits$ = this.store.select(selectAuthUser).pipe(map((user) => user?.role))
  }
}
