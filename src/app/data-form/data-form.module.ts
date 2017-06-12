import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,    
    ReactiveFormsModule
  ],
  declarations: [
    DataFormComponent
  ]
})
export class DataFormModule { }
