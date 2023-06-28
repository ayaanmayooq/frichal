import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private user: User | null = null; // User object to store user information
  private apiUrl = 'http://localhost:5000/api/auth/user';

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`, { withCredentials: true }); // Different way of writing (will be helpful for complex dynamic urls)
  }

  getUserChallenges(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data/challenges`, { withCredentials: true });
  }
}
