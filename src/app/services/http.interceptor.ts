import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { HandleResponse } from './handleResponse.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class HttpInteceptor implements HttpInterceptor {
  constructor(private handleResponse: HandleResponse,private auth:AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const token = this.auth.getToken();
    let newReq;
    alert(token)
    if (token !== null) {
      newReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)});
    } else {
      newReq = req.clone();
    }

    return next.handle(newReq).map(event => {
      if (event instanceof HttpResponse) {
        this.handleResponse.handleData(event.body);
      }
      return event;
    })
    .catch((error, caught) => this.catchError(error)) as any;
  }

  catchError(error) {
    this.handleResponse.handleError(error);
    return Observable.throw(error);
  }
}
