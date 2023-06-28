import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private apiUrl = 'http://localhost:5000/api/challenge';

  constructor(private http: HttpClient) { }

  //
  // Function that sends the challenge data to backend
  //
  createChallenge(challengeData: any): Observable<any> {
    const body = { challengeData };
    return this.http.post<any>(`${this.apiUrl}/create`, body, { withCredentials: true });
  }

}
