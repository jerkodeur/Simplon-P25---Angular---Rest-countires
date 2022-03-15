import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageTableComponent } from './pages/page-table/page-table.component';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';
import { CardCountryComponent } from './components/card-country/card-country.component';
import { PageGeolocComponent } from './pages/page-geoloc/page-geoloc.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCountryComponent,
    NavbarComponent,
    PageHomeComponent,
    PageTableComponent,
    PageCardsComponent,
    PageGeolocComponent,
    PageSignInComponent,
    PageSignUpComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
