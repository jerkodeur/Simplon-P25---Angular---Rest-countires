import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

import { Country } from 'src/app/interfaces/app.country';

@Component({
  selector: 'app-page-geoloc',
  templateUrl: './page-geoloc.component.html',
  styleUrls: ['./page-geoloc.component.scss']
})
export class PageGeolocComponent implements OnInit {
  countries !: Country[];
  cca2 !: string;
  zoom = 10;
  center !: google.maps.LatLngLiteral;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.cca2 = params['cca2'] ?? "FR");
    axios.get("https://restcountries.com/v3.1/region/europe?fields=name,cca2")
      .then(res => {
        this.countries = res.data;
      });
    this.centerMapPosition();
  }

  onChange = (e: any):void => {
    this.cca2 = e.target.value;
    this.centerMapPosition();
  }

  centerMapPosition = (): void => {
    axios.get(`https://restcountries.com/v3.1/alpha?codes=${this.cca2}&fields=capitalInfo`)
      .then(res => {
        const [lat, lng] = res.data[0].capitalInfo.latlng;
        navigator.geolocation.getCurrentPosition(() => {
          return this.center = {
            lat: Number(lat),
            lng: Number(lng)
          }
        })
      })
  }

}
