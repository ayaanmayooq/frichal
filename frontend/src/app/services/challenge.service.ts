import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private apiUrl = 'http://localhost:5000/api/challenge';

  constructor(private http: HttpClient, private router: Router) { }

  //
  // Function that sends the challenge data to backend
  //
  createChallenge(challengeData: any): Observable<any> {
    const body = { challengeData };
    return this.http.post<any>(`${this.apiUrl}/create`, body, { withCredentials: true })
      .pipe(
        map(response => {

          // Route to home page after successful creation
          //this.router.navigate(['/home']);

          return response; // Return the response to the calling component if needed
        })
      );
  }

}
