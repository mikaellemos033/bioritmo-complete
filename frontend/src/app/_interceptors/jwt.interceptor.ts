import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtStorage } from '../_storages/jwt.storage';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem(JwtStorage);
    console.log('aqui');
    
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    }

    return next.handle(request);
  }
}