import { Injectable } from '@angular/core';
import { User } from './models';
import { Observable, concatMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
    
 constructor(private httpClient: HttpClient){}
 
  
  getUsers$(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:3000/users")
   }

   addUser$(payload: User): Observable<User[]>{
     return this.httpClient.post<User>("http://localhost:3000/users", payload).pipe(concatMap(() => this.getUsers$()));
   }

   changeUser$(userId: number, payload: User): Observable<User[]> {
    return this.httpClient
      .put<User>(`http://localhost:3000/users/${userId}`, payload)
      .pipe(concatMap(() => this.getUsers$()));
  }

   deleteUser(id: number): Observable<User[]> {
    return this.httpClient.delete<Object>(`http://localhost:3000/users/${id}`).pipe(concatMap(() => this.getUsers$())
      );
  }
}

