import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../util/token/token.service';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(public tokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.bearerToken;
        if(token){
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            return next.handle(req);
        } else {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json'
                }
            })
            return next.handle(req);
        }
    }

}