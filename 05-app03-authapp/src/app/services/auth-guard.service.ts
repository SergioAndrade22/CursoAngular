import { Injectable, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router, 
        ActivatedRouteSnapshot, 
        RouterStateSnapshot, 
        CanActivate } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth0: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth0.isAuthenticated$;
  }
}
