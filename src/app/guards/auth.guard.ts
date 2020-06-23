import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../user/service/user.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor (public userService: UserService, private router: Router){};

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(this.userService.currentUserValue.value){
            return true;
        } 
        else{
            return this.router.navigate(['/user/login']);
        }
    }

}