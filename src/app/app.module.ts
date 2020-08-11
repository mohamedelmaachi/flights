//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

//Components
import { AppComponent } from './app.component';
import {
  BreadcrumbComponent,
  ContentComponent,
  HeaderComponent,
  SidebarComponent
} from '@app/components';
//Modules
import { SharedModule, CoreModule } from '@app/modules';
//Routing
import {appRoutes} from './app.routing';
import { TaostComponent } from './components/template/taost/taost.component';


//Pipes
import { BrowserModule } from '@angular/platform-browser';
import {AgmCoreModule} from "@agm/core";
import {API_KEY} from "@app/config";
import { AirlineComponent } from './components/airline/airline.component';
import { AirportComponent } from './components/airport/airport.component';
import { FlightComponent } from './components/flight/flight.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    BreadcrumbComponent,
    TaostComponent,
    AirlineComponent,
    AirportComponent,
    FlightComponent,
    ReservationComponent,
    PassengerComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
