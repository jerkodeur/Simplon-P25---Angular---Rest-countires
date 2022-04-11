import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CountryCard } from 'src/app/interfaces/Country-card.interface';
import { CountryName } from 'src/app/interfaces/Country-name.interface';
import { CountryTable } from 'src/app/interfaces/Country-table.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getNames = (): Observable<CountryName[]> => {
    return this.http.get<CountryName[]>(
      'http://localhost:8080/countries/names'
    );
  };

  getTables = (): Observable<CountryTable[]> => {
    return this.http.get<CountryTable[]>(
      'http://localhost:8080/countries/table-items'
    );
  };

  getCards = (): Observable<CountryCard[]> => {
    return this.http.get<CountryCard[]>(
      'http://localhost:8080/countries/cards'
    );
  };
}
