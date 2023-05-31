import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(300)),
    ]),
  ],

})
export class LoginPageComponent {
  showLoginBox: boolean = true;
  showRegisterBox: boolean = false;

  toggleRegisterBox() {
    this.showLoginBox = !this.showLoginBox;
    this.showRegisterBox = !this.showRegisterBox;
  }
}
