import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  username: string = 'John Doe';

  user: User | null = null;

  constructor(private userService: UserService, private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userService.getUserData().subscribe(
      (response) => {
        this.user = response.user;
      },
      (error) => {
        // Handle error
        console.error('Error retrieving user information:', error);
      }
    );
  }

  logout(): void {
    // Perform the logout logic, such as clearing the user session
    // You can also make an API call to the backend to invalidate the user session
    this.authService.logout().subscribe(
      (response) => {
        console.log(response.message);
      },
      (error) => {
        // Handle error
        console.error('Error retrieving user information:', error);
      }
    );

    // Clear the user object in the component
    this.user = null;
  }
}
