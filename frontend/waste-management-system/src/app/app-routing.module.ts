import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinComponent } from './components/bin/bin.component';
import { CityMapComponent } from './components/city-map/city-map.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserServicesComponent } from './components/user-services/user-services.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserNotificationComponent } from './components/user-notification/user-notification.component';
import { WasteCategorizerComponent } from './components/waste-categorizer/waste-categorizer.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { WasteEducationComponent } from './components/waste-education/waste-education.component';


const routes: Routes = [
  {path: 'citymap', component: CityMapComponent},
  {path: 'bins', component: BinComponent},
  {path: 'notifications', component: NotificationComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'actions', component: ActionsComponent},
  {path: 'complaints', component: ComplaintsComponent},
  {path: 'user-home', component: UserHomeComponent},
  {path: 'classify', component: WasteCategorizerComponent},
  {path: 'search-bins', component: UserDashboardComponent},
  {path: 'services', component: UserServicesComponent},
  {path: 'user-notification', component: UserNotificationComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'waste-education', component: WasteEducationComponent},
  {path: '', redirectTo: '/user-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
