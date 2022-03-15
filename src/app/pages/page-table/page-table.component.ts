import { Component, OnInit } from '@angular/core';

import { Country } from 'src/app/interfaces/app.country';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {
  countries!: Country[];

  constructor() { }

  ngOnInit(): void {
    fetch("https://restcountries.com/v3.1/region/europe?fields=name,capital,area,population,cca2")
    .then((datas) => datas.json())
      .then((response) => {
        this.countries = response
      });
  }

}
