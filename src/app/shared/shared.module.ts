import { CustomHttp } from './Interceptors/HttpInterceptor';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { HttpSubjectService } from './services/HttpSubject.service';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErrorComponent
  ],
  providers:[
    HttpSubjectService,
        {
           provide: Http, 
           useFactory: heroServiceFactory,
           deps: [XHRBackend, RequestOptions, HttpSubjectService]
        }
  ],
  exports:[
    FormDebugComponent,
    CampoControlErrorComponent]
})
export class SharedModule { }

export function heroServiceFactory (backend: XHRBackend, defaultOptions: RequestOptions, httpSubjectService: HttpSubjectService) {
    return new CustomHttp(backend, defaultOptions, httpSubjectService);
};