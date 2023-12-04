import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Employee, Inscripcion } from '../../models';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { selectInscripciones } from '../../store/inscripciones.selectors';
@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class  EmployeesTableComponent {

  @Input()
  dataSource: Employee[] = [];

  @Output()
  editInscripcion = new EventEmitter()

  @Output()
  deleteEmployee = new EventEmitter();

  displayedColumns = ["user", "course", "dates", "actions"]

  inscripciones$: Observable<Inscripcion[]>
  constructor(private store: Store){
    this.inscripciones$= this.store.select(selectInscripciones)
  }


  
}
