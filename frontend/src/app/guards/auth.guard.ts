import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn()) {
      // User is logged in, allow access to the route
      return true;
    } else {
      // User is not logged in, check if there is a session login
      return this.authService.sessionLogin().pipe(
        map(response => {
          // Session login successful, update authentication status and proceed to the route
          this.authService.setLoggedIn(true);
          return true;
        }),
        catchError(() => {
          // Session login failed, redirect to the login page
          this.router.navigate(['/login']);
          return of(false);
        })
      );
    }
  }
  
}
