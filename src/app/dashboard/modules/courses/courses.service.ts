import { Injectable } from '@angular/core';
import { Course } from './models';
import { Observable, of, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient){}

  getCourses$(): Observable<Course[]> {
    return this.httpClient.get<Course[]>("http://localhost:3000/courses");
  }
  addCourse$(payload: Course): Observable<Course[]>{
    return this.httpClient.post<Course>("http://localhost:3000/courses", payload).pipe(concatMap(() => this.getCourses$()));
  }
  deleteCourse$(id: number): Observable<Course[]> {return this.httpClient.delete<Object>(`http://localhost:3000/courses/${id}`)
  .pipe(concatMap(() => this.getCourses$())
);
  }
  changeCourse$(courseId: number, payload: Course): Observable<Course[]> {
    return this.httpClient
      .put<Course>(`http://localhost:3000/courses/${courseId}`, payload).pipe(concatMap(() => this.getCourses$()));
  }
}
