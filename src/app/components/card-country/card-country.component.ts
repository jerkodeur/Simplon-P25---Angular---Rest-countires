import { Component, Input, OnInit } from '@angular/core';

import { Country } from 'src/app/interfaces/app.country';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})
export class CardCountryComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  @Input() country!: Country;

}
