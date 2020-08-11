import { Routes } from '@angular/router';
import {ROUTES} from "@app/config";
import { AirlineComponent } from './components/airline/airline.component';
import { AirportComponent } from './components/airport/airport.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { FlightComponent } from './components/flight/flight.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components';

export const appRoutes: Routes = [
  {path:'airlines', component:AirlineComponent, pathMatch:'full'},
  {path:'airports', component:AirportComponent, pathMatch:'full'},
  {path:'reservations', component:ReservationComponent, pathMatch:'full'},
  {path:'passengers', component:PassengerComponent, pathMatch:'full'},
  {path:'flights', component:FlightComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'', component:ContentComponent, pathMatch:'full'},
  {path:'auth', loadChildren:'app/components/auth/auth.module#AuthModule', data: { route: ''}},
  {path: ROUTES['component'].path, loadChildren:'app/components/component/component.module#ComponentModule', data: { route: ROUTES['component'].name }},
];
