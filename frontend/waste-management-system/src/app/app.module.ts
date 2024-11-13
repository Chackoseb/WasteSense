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
import { FormsModule } from '@angular/forms';


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
    ComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
