import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Input() user: User | null = null;

  @Output() logout: EventEmitter<any> = new EventEmitter<any>();

  profileDropdownOpen = false;

  toggleProfileDropdown() {
    this.profileDropdownOpen = !this.profileDropdownOpen;
  }
}
