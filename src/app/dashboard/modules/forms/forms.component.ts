import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  
  userForm: FormGroup;
  constructor(private Formbuilder: FormBuilder){
    this.userForm= this.Formbuilder.group({
      name:["",[Validators.required,Validators.minLength(4)]],
      lastName:["",[Validators.required, Validators.minLength(4)]],
      age:["",[Validators.required,]],
      email:["",[Validators.required, Validators.email]],
      phone:["",[Validators.required]],
      userName:["",[Validators.required]],
      passcode:["",[Validators.required,]],
    }
    ) 
  
  
  
  }
}
