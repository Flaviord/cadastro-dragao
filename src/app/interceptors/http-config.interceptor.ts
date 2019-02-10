import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe (
            catchError((error: HttpErrorResponse) => {
                const validError: any = (error.headers.get('Content-Type') === 'text/plain')
                ? error.error : {body: error.error, status: error.status};
                return Observable.throw(
                    new HttpErrorResponse({
                        error: validError,
                        headers: error.headers,
                        status: error.status,
                        statusText: error.statusText,
                        url: error.url || req.url || undefined
                    })
                );
            })
        );
    }
}
