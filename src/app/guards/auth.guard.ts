import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../util/token/token.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor (public tokenService: TokenService, private router: Router){};

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(this.tokenService.bearerToken){
            console.log(this.tokenService.bearerToken);
            return true;
        } else{
            return this.router.navigate(['/user/login']);
        }
    }

}