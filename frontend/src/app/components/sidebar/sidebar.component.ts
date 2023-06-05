import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() user: User | null = null;

  @Output() logout: EventEmitter<any> = new EventEmitter<any>();



}
