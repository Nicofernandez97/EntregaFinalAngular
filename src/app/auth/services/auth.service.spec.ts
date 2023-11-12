import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { MockProvider } from 'ng-mocks';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('AuthService', () => {
    let authService: AuthService;
    let httpController: HttpTestingController;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule, RouterTestingModule],
          providers: [MockProvider(Router)],
        });
        authService = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController);
    });

      it('En la funcion login() se esperaría que el empleado mock sea igual al authUser', () => {
        const employee_mock: any = {
          email: 'email@mail.com',
          password: "1234"
        };
    
        authService.login({
          email: employee_mock.email,
          password: employee_mock.password,
        });
         httpController.expectOne({method: 'GET', url: `http://localhost:3000/users?email=${employee_mock.email}&password=${employee_mock.password}`,})
         .flush([employee_mock]);
    
        authService.authUser$.subscribe({
          next: (authUser) => {
            expect(authUser).toBeTruthy();
            expect(authUser).toEqual(employee_mock);
          },
        });
      });
    });