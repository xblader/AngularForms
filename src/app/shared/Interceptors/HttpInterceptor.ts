import { HttpSubjectService } from './../services/HttpSubject.service';
import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CustomHttp extends Http {
   constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private httpSubjectService: HttpSubjectService) {
       super(backend, defaultOptions);
       //defaultOptions.headers.append('token', 'fdfdf');
       //Prevent Ajax Request Caching for Internet Explorer
       /*defaultOptions.headers.append("Cache-control", "no-cache");
       defaultOptions.headers.append("Cache-control", "no-store");
       //defaultOptions.headers.append("Pragma", "no-cache");
       defaultOptions.headers.append("Expires", "0");*/
   }

   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
       //request Start;
       this.httpSubjectService.addSpinner();       
       return super.request(url, options).map(res => {
           //Successful Response;
           this.httpSubjectService.addNotification(res.json());
           return res;
       })
           .catch((err) => {
               //Error Response.
               this.httpSubjectService.removeSpinner();
               this.httpSubjectService.removeOverlay();

               if (err.status === 400 || err.status === 422) {
                   this.httpSubjectService.addHttp403(err);
                   return Observable.throw(err);
               } else if (err.status === 500) {
                   this.httpSubjectService.addHttp500(err);
                   return Observable.throw(err);
               } else {
                   return Observable.empty();
               }
           })
           .finally(() => {
               //After the request;
               this.httpSubjectService.removeSpinner();
           });
   }
}