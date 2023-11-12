import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';

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
  changeUser = new EventEmitter()

  displayedColumns = ["name","email","grade","actions"] //Array de strings en el que pondremos nombres a cada columna.

}
