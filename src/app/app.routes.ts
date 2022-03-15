import { Routes } from '@angular/router'

import { PageCardsComponent } from './pages/page-cards/page-cards.component';
import { PageGeolocComponent } from './pages/page-geoloc/page-geoloc.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageTableComponent } from './pages/page-table/page-table.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: PageHomeComponent
  },
  {
    path: 'table', component: PageTableComponent,
  },
  {
    path: 'cards', component: PageCardsComponent,
  },
  {
    path: 'geoloc', component: PageGeolocComponent,
  },
  {
    path: 'sign-in', component: PageSignInComponent,
  },
  {
    path: 'sign-up', component: PageSignUpComponent,
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

export {
  ROUTES
}
