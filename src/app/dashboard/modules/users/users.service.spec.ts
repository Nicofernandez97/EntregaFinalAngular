import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockProvider } from 'ng-mocks';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import {provideMockStore, MockStore} from '@ngrx/store/testing'
import { UsersService } from './users.service';
import { User } from './models';
import { Observable, async, map, of } from 'rxjs';
describe('UsersService', () => {
    let usersService: UsersService;
    let httpController: HttpTestingController;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule, RouterTestingModule],
          providers: [MockProvider(Router), provideMockStore({})],
        });
        usersService = TestBed.inject(UsersService);
        httpController = TestBed.inject(HttpTestingController);
    });

      it("Debería de poder suscribirme al observable de tipo User[] al llamar a usersService.getUsers$, y debería esperar que se ejecute una peticion GET a http://localhost:3000/users", () => {
        const ej: Observable<User[]> = of([{
            "name": "Jose",
            "lastName": "Al",
            "password": "1234256",
            "email": "josejose@gmail.com",
            "grade": 9,
            "role": "estudiante",
            "id": 100
          }])
          usersService.getUsers$().subscribe( user => {
            expect(user).toBeTruthy()
          });
          const req = httpController.expectOne("http://localhost:3000/users")
          expect(req.request.method).toBe("GET")
          req.flush(ej)
          })
      });