import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PermissaoTrabalhoModule } from './permissao-trabalho/permissao-trabalho.module';
import { DataFormModule } from './data-form/data-form.module';
import { TemplateFormModule } from './template-form/template-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { HomeComponent } from './home/home.component';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    TemplateFormModule,
    DataFormModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
