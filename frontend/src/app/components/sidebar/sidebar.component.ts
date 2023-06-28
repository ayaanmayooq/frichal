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


  //
  // Functionality for extending sidebars
  //
  extendHome = false;
  extendSocial = false;
  extendAnalytics = false;
  extendNotifs = false;
  extendSettings = false;

  extendHomeSidebar(event: Event) {
    //this.extendHome = !this.extendHome;
    //this.extendSocial = false;
    //this.extendAnalytics = false;
    //this.extendNotifs = false;
    //this.extendSettings = false;
    //event.preventDefault();
  }

  extendSocialSidebar(event: Event) {
    this.extendHome = false;
    this.extendSocial = !this.extendSocial;
    this.extendAnalytics = false;
    this.extendNotifs = false;
    this.extendSettings = false;
    event.preventDefault();
  }

  extendAnalyticsSidebar(event: Event) {
    this.extendHome = false;
    this.extendSocial = false;
    this.extendAnalytics = !this.extendAnalytics;
    this.extendNotifs = false;
    this.extendSettings = false;
    event.preventDefault();
  }

  extendNotifsSidebar(event: Event) {
    this.extendHome = false;
    this.extendSocial = false;
    this.extendAnalytics = false;
    this.extendNotifs = !this.extendNotifs;
    this.extendSettings = false;
    event.preventDefault();
  }

  extendSettingsSidebar(event: Event) {
    this.extendHome = false;
    this.extendSocial = false;
    this.extendAnalytics = false;
    this.extendNotifs = false;
    this.extendSettings = !this.extendSettings;
    event.preventDefault();
  }
}
