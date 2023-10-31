import { Injectable } from '@angular/core';
import { Course } from './models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [
    {
      name:"Angular",
      startDate: new Date(),
      endDate: new Date()
    },
    {
      name:"React",
      startDate: new Date(),
      endDate: new Date()
    },
    {
      name:"NextJS",
      startDate: new Date(),
      endDate: new Date()
    }
  ];


  getCourses$(): Observable<Course[]> {
      return of (this.courses)
  }
  addCourse$(payload: Course): Observable<Course[]>{
    this.courses.push(payload)
    return of([...this.courses]) //Se precisa volver a referenciar a la variable para que se detecte el cambio.
  }
  deleteCourse$(courseName: string): Observable<Course[]>{
    this.courses= this.courses.filter((course) => course.name !== courseName)
    return of (this.courses)
  }
  findCourseByName$(courseName: string) : Observable< Course | undefined> {
    return of(this.courses.find( (course) => course.name === courseName))
  }
  changeCourse$(courseName: string, payload: Course): Observable<Course[]>{
    return of (this.courses.map( (course) => course.name === courseName ? { ...course, ...payload} : course)) //Al devolver un array no habrá necesidad de referenciarlo otra vez.
  }
}
