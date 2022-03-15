import { Component, OnInit } from '@angular/core';

import { Country } from 'src/app/interfaces/app.country';

@Component({
  selector: 'app-page-cards',
  templateUrl: './page-cards.component.html',
  styleUrls: ['./page-cards.component.scss']
})
export class PageCardsComponent implements OnInit {
  countries !: Country[];

  constructor() { }

  ngOnInit(): void {
    fetch("https://restcountries.com/v3.1/region/europe?fields=name,capital,maps,flags,cca2")
    .then((datas) => datas.json())
      .then((response) => {
        this.countries = response
      });
  }

}
