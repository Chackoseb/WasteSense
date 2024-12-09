import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BinComponent } from './components/bin/bin.component';
import { CityMapComponent } from './components/city-map/city-map.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserServicesComponent } from './components/user-services/user-services.component';
import { UserNotificationComponent } from './components/user-notification/user-notification.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { WasteCategorizerComponent } from './components/waste-categorizer/waste-categorizer.component';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { WasteEducationComponent } from './components/waste-education/waste-education.component';
import { ReplaceCommaPipe } from './pipes/replace-comma.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BinComponent,
    CityMapComponent,
    NotificationComponent,
    ScheduleComponent,
    ActionsComponent,
    ComplaintsComponent,
    UserHomeComponent,
    UserServicesComponent,
    UserNotificationComponent,
    UserProfileComponent,
    UserNavbarComponent,
    WasteCategorizerComponent,
    UserDashboardComponent,
    WasteEducationComponent,
    ReplaceCommaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
