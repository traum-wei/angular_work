import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
 
@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {
 
  constructor() {}
 
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case HttpStatusCode.BadRequest:
              alert('wrong-input.');
              break;
            case HttpStatusCode.NotFound:
              alert('path not found.');
              break;
            default:
              alert('error occurred.');
          }
        }
 
        return EMPTY;
      })
    );
  }
}
