import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-coursestable',
  templateUrl: './coursestable.component.html',
  styleUrls: ['./coursestable.component.scss']
})
export class CoursestableComponent {

  @Input()
  dataSource: Course[] = [];

  @Output()
  changeCourse = new EventEmitter()

  @Output()
  deleteCourse = new EventEmitter();
  
  displayedColumns = ["name", "startDate", "endDate", "actions"]
  userPermits$: Observable<"admin"|"estudiante"|"profesor"| undefined>
  constructor(private store: Store){
   this.userPermits$ = this.store.select(selectAuthUser).pipe(map((user) => user?.role))
  }
}
