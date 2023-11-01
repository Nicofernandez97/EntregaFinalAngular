import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Employee } from '../../models';
@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent {

  @Input()
  dataSource: Employee[] = [];

  @Output()
  changeEmployee = new EventEmitter()

  @Output()
  deleteEmployee = new EventEmitter();

  displayedColumns = ["name", "email", "privileges", "actions"]
}
