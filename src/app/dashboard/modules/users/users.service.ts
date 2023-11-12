import { Injectable } from '@angular/core';
import { User } from './models';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {


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
  
  getUsers$(): Observable<User[]> {
    return of (this.users)
  }
  addUser$(payload: User): Observable<User[]>{
  this.users.push(payload)
  return of([...this.users]) 
  }
  deleteUser$(userEmail: string): Observable<User[]>{
  this.users= this.users.filter((user) => user.email !== userEmail)
  return of (this.users)
  }
  findUserByEmail$(userEmail: string) : Observable< User | undefined> {
  return of(this.users.find( (user) => user.email === userEmail))
  }
  changeUser$(userEmail: string, payload: User): Observable<User[]>{
  return of (this.users.map( (user) => user.email === userEmail ? { ...user, ...payload} : user)) 
  }
}

