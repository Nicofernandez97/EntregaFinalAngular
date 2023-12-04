import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/dashboard/modules/users/models';
import { LoginData } from '../models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from 'src/app/store/auth/auth.actions';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  
  public authUser$ = this.store.select(selectAuthUser);


  constructor(private httpClient: HttpClient, private router: Router, private store: Store) {}


  login(data: LoginData): void {
    this.httpClient.get<User[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`).subscribe({
      next: (resp) => {
        if(!resp.length){
          alert ("Usuario o contraseña invalidos")
        }
        else {
         const userChecked = resp[0]
         this.store.dispatch(authActions.setAsAuthUser( { data:userChecked}))
         //this.authUserSubject$.next(userChecked)
         this.router.navigate(['/dashboard/users']);
        }
      },
    })
    
  }


    logOut(): void {
      this.store.dispatch(authActions.deleteAuthUser())
      this.router.navigate([`/auth/login`])
    }
}
