import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { PiperequeridoPipe } from './pipes/piperequerido.pipe';
import { FontsizeDirective } from './directives/fontsize.directive';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    PiperequeridoPipe,
    FontsizeDirective,
  ],
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    PiperequeridoPipe,
    FontsizeDirective,
    MatDatepickerModule
  ],
})
export class SharedModule {}