import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cards',
  templateUrl: './page-cards.component.html',
  styleUrls: ['./page-cards.component.scss']
})
export class PageCardsComponent implements OnInit {
  countries !: any[];

  constructor() { }

  ngOnInit(): void {
    fetch("https://restcountries.com/v3.1/region/europe?fields=name,capital,maps,flags,cca2")
    .then((datas) => datas.json())
      .then((response) => {
        this.countries = response
      });
  }

}
