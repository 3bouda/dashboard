import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './layout/admin/admin.component';

import { NavComponent } from './view/nav/nav.component';
import { DepartementsComponent } from './view/departements/departements.component';
import { EmployeeComponent } from './view/employee/employee.component';
import { CalendarComponent } from './view/calendar/calendar.component';


const routes: Routes = [
  { path: 'Admin', component: AdminComponent},
      { path: 'nav', component: NavComponent},
      { path: 'departements', component: DepartementsComponent},
      { path: 'employee', component: EmployeeComponent},
      { path: 'calendar', component: CalendarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
