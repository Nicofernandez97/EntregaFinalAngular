import { Injectable } from '@angular/core';
import { Employee } from './models';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  employees: Employee[] = [
  
  {
    name: "Javier Nicolás Fernandez",
    email: "nicoEmail@hotmail.com",
    privileges:"admin"
  },
  {  
     name: "Jose Vargas",
     email: "joselu@hotmail.com",
     privileges:"empleado"
  }
  ]


  getEmployees$(): Observable<Employee[]> {
    return of (this.employees)
  }
  addEmployee$(payload: Employee): Observable<Employee[]>{
  this.employees.push(payload)
  return of([...this.employees]) 
  }
  deleteEmployee$(employeeName: string): Observable<Employee[]>{
  this.employees= this.employees.filter((emp) => emp.name !== employeeName)
  return of (this.employees)
  }
  findEmployeeByName$(employeeName: string) : Observable< Employee | undefined> {
  return of(this.employees.find( (emp) => emp.name === employeeName))
  }
  changeEmployee$(employeeName: string, payload: Employee): Observable<Employee[]>{
  return of (this.employees.map( (emp) => emp.name === employeeName ? { ...emp, ...payload} : emp)) 
  }
}
