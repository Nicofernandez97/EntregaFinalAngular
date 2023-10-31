import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesmodalComponent } from './coursescomponents/coursesmodal/coursesmodal.component';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  courses$: Observable<Course[]>

  constructor(private coursesService: CoursesService, private matDialog: MatDialog ){
  this.courses$ = this.coursesService.getCourses$();
  }
  openCourseDialog():void {
    this.matDialog.open(CoursesmodalComponent).afterClosed().subscribe({
      next: (notCancelled) => {
        if(notCancelled){
         this.courses$ = this.coursesService.addCourse$({
            name: notCancelled.name,
            startDate: notCancelled.startDate,
            endDate: notCancelled.endDate
          })
        }
      }
    })
  }
}
