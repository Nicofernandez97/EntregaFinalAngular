import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models';

@Component({
  selector: 'app-coursesmodal',
  templateUrl: './coursesmodal.component.html',
  styleUrls: ['./coursesmodal.component.scss']
})
export class CoursesmodalComponent {
  nameCourse= new FormControl()
  startCourse= new FormControl()
  endCourse= new FormControl()

  courseForm = new FormGroup({
    name: this.nameCourse,
    startDate: this.startCourse,
    endDate: this.endCourse
  });

    constructor(private matDialogRef: MatDialogRef<CoursesmodalComponent>){}

  onSubmit(): void {
    if (this.courseForm.invalid) {
     return this.courseForm.markAllAsTouched();
    } 
    else{
      this.matDialogRef.close(this.courseForm.value)
    }
  }



}

