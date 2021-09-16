import { Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';

import { loadRemoteModule } from '@angular-architects/module-federation';

import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'flight-booking',
    loadChildren: () => import('./flight-booking/flight-booking.module').then((m) => m.FlightBookingModule)
  },

  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },

  {
    path: 'mf-passenger',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module'
      }).then((esm) => esm.PassengerModule)
  },

  {
    path: 'flight-lookahead',
    component: FlightLookaheadComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
