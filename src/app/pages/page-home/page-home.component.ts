import { Component, OnInit } from '@angular/core';

import { CountryName } from 'src/app/interfaces/Country-name.interface';
import { CountryService } from 'src/app/services/config/country.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  public countries!: CountryName[];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService
      .getNames()
      .subscribe((items: CountryName[]) => (this.countries = items));
  }
}
