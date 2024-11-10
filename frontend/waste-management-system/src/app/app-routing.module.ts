import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinComponent } from './components/bin/bin.component';


const routes: Routes = [
  {path: 'bins', component: BinComponent},
  {path: '', redirectTo: '/bins', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
