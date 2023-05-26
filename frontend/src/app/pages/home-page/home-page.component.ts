import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  username: string = 'John Doe';

  user: User | null = null;

  constructor(private userService: UserService) { }

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
}
