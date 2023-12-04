import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable, map } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesmodalComponent } from './coursescomponents/coursesmodal/coursesmodal.component';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  courses$: Observable<Course[]>
  userPermits$: Observable<"admin"|"estudiante"|"profesor"| undefined>
  
  constructor(private coursesService: CoursesService, private matDialog: MatDialog, private store: Store){
    this.userPermits$ = this.store.select(selectAuthUser).pipe(map((user) => user?.role))
    this.courses$ = this.coursesService.getCourses$();
  }
  openCourseDialog():void {
    this.matDialog.open(CoursesmodalComponent).afterClosed().subscribe({
      next: (notCancelled) => {
        if(notCancelled){
          this.coursesService.addCourse$(notCancelled).subscribe({
          next: () => {
            this.courses$ = this.coursesService.getCourses$()
          }
         })
        }
      }
    })
  }

  onChangeCourse(course: Course): void{
    this.matDialog.open(CoursesmodalComponent,
      {
      data: course,
      }).afterClosed().subscribe({
      next: (formValue) => {
        if(formValue !== undefined){
         this.courses$ = this.coursesService.changeCourse$(course.id, formValue)
        }
      }
    })
  }

  OnDeleteCourse(courseId: number): void{
    this.courses$ = this.coursesService.deleteCourse$(courseId);
  }
  
}
