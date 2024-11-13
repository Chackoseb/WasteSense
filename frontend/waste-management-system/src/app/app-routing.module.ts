import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinComponent } from './components/bin/bin.component';
import { CityMapComponent } from './components/city-map/city-map.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';


const routes: Routes = [
  {path: 'citymap', component: CityMapComponent},
  {path: 'bins', component: BinComponent},
  {path: 'notifications', component: NotificationComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'actions', component: ActionsComponent},
  {path: 'complaints', component: ComplaintsComponent},
  {path: '', redirectTo: '/citymap', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
