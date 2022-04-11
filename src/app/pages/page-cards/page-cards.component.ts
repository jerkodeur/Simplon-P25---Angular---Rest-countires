import { Component, OnInit } from '@angular/core';

import { CountryCard } from 'src/app/interfaces/Country-card.interface';
import { CountryService } from 'src/app/services/config/country.service';

@Component({
  selector: 'app-page-cards',
  templateUrl: './page-cards.component.html',
  styleUrls: ['./page-cards.component.scss'],
})
export class PageCardsComponent implements OnInit {
  countries!: CountryCard[];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService
      .getCards()
      .subscribe((cards: CountryCard[]) => (this.countries = cards));
  }
}
