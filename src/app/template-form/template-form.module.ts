import { CampoControlErrorComponent } from './../campo-control-error/campo-control-error.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TemplateFormComponent,
    CampoControlErrorComponent
  ]
})
export class TemplateFormModule { }
