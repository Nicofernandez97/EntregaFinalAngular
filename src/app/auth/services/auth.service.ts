import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/dashboard/modules/users/models';
import { LoginData } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  private authUserSubject$ = new BehaviorSubject <User | null>(null);
  public authUser$ = this.authUserSubject$.asObservable();


  constructor(private httpClient: HttpClient, private router: Router) {}


  login(data: LoginData): void {
    this.httpClient.get<User[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`).subscribe({
      next: (resp) => {
        if(!resp.length){
          alert ("Usuario o contraseña invalidos")
        }
        else {
         const userChecked = resp[0]
         console.log("Logueado correctamente")
         this.authUserSubject$.next(userChecked)
         this.router.navigate(['/dashboard/users']);
        }
      },
    })
    
  }

}
