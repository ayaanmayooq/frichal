import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SocialSidebarComponent } from './components/social-sidebar/social-sidebar.component';
import { HomeSidebarComponent } from './components/home-sidebar/home-sidebar.component';
import { AnalyticsSidebarComponent } from './components/analytics-sidebar/analytics-sidebar.component';
import { NotifsSidebarComponent } from './components/notifs-sidebar/notifs-sidebar.component';
import { SettingsSidebarComponent } from './components/settings-sidebar/settings-sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ChallengeDashComponent } from './components/challenge-dash/challenge-dash.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    SidebarComponent,
    SocialSidebarComponent,
    HomeSidebarComponent,
    AnalyticsSidebarComponent,
    NotifsSidebarComponent,
    SettingsSidebarComponent,
    TopbarComponent,
    ChallengeDashComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
