import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(private authService: AuthService) { }

  register(): void {

    const info = {
      'username': this.username,
      'email': this.email,
      'password': this.password,
      'firstName': this.firstName,
      'lastName': this.lastName
    };

    this.authService.register(info).subscribe(
      (response) => {
        // Handle successful register response
        console.log(response.message);

        // Automatic login (optional)
        this.authService.login(this.email, this.password).subscribe(
          (response) => {
            console.log(response.message);
          },
          (error) => {
            // Handle login error
            console.error(error);
          }
        );
        //

      },
      (error) => {
        // Handle login error
        console.error(error);
      }
    );
  }
}
