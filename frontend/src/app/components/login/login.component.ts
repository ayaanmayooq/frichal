import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login(): void {

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Handle successful login response
        console.log(response);
      },
      (error) => {
        // Handle login error
        console.error(error);
      }
    );
  }
}



