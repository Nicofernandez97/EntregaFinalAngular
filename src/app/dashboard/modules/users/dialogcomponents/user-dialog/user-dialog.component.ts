import { Component, Inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<UserDialogComponent>, @Inject(MAT_DIALOG_DATA)public user?: User){
    this.userForm= this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email:['',[Validators.email, Validators.required]],
      grade:['', Validators.required],
    })
    if(this.user){
      this.userForm.patchValue(this.user)
    }
  }
  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);
    }
    }
}
