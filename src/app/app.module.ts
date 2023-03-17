import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './view/nav/nav.component';
import { DepartementsComponent } from './view/departements/departements.component';
import { EmployeeComponent } from './view/employee/employee.component';
import { AdminComponent } from './layout/admin/admin.component';
import { CalendarComponent } from './view/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DepartementsComponent,
    EmployeeComponent,
    AdminComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
