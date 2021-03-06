import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
 
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
 
        req = req.clone({
        setParams: {
            api_key: environment.apiKey
        }
      });
      
      return next.handle(req);
  }
}