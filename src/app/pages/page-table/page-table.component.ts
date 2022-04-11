import { Component, OnInit } from '@angular/core';

import { CountryTable } from 'src/app/interfaces/Country-table.interface';
import { CountryService } from 'src/app/services/config/country.service';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss'],
})
export class PageTableComponent implements OnInit {
  countries!: CountryTable[];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService
      .getTables()
      .subscribe((items: CountryTable[]) => (this.countries = items));
  }
}
