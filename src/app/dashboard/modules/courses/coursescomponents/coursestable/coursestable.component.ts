import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';

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
}
