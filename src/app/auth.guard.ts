
import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import { LoginService } from './services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private service: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    const redirectUrl = route['_routerState']['url'];
    console.log('not logged');
    if (this.service.isLogged()) {
      return true;
    }
    
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}