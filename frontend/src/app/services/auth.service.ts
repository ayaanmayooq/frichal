import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;
  private apiUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(this.apiUrl + 'login', body, { withCredentials: true })
      .pipe(
        map(response => {
          // No token received since backend uses express-session

          this.isAuthenticated = true;

          // Add user data to shared service (not as secure so trying backend session handling)
          //const user: User = response.user;
          //this.userService.setUser(user);

          // Route to home page after successful login
          this.router.navigate(['/home']);

          return response; // Return the response to the calling component if needed
        })
      );
  }

  // Method to perform logout
  logout(email: string): Observable<any> {
    this.isAuthenticated = false;
    const body = { email };
    return this.http.post<any>(this.apiUrl + 'logout', body);
  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  sessionLogin() {
    const body = {};
    const options = { withCredentials: true };
    return this.http.post<any>(this.apiUrl + 'sessionlogin', body, options)
      .pipe(
        catchError((error) => {
          console.error('Session login failed:', error);
          return throwError('Session login failed');
        })
      );
  }

  setLoggedIn(loginStatus: boolean) {
    this.isAuthenticated = true;
  }
}
