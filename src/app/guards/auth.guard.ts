import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {UserService} from '../dashboard/login/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private userService: UserService, private  router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.getUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }
}
