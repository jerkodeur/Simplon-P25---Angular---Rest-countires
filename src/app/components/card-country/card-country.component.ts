import { Component, Input, OnInit } from '@angular/core';
import { CountryCard } from 'src/app/interfaces/Country-card.interface';
@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss'],
})
export class CardCountryComponent {
  constructor() {}

  @Input() country!: CountryCard;
}
