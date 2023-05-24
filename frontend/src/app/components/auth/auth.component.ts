import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginData = { email: '', password: '' };
  registerData = { email: '', password: '' };

  login() {
    console.log('Login:', this.loginData);
    // Perform login logic here
  }

  register() {
    console.log('Register:', this.registerData);
    // Perform registration logic here
  }
}
