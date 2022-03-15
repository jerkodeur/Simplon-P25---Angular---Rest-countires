import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  public countries!: any[];

  constructor() { }

  ngOnInit(): void {
    fetch("https://restcountries.com/v3.1/region/europe?fields=name")
    .then((datas) => datas.json())
      .then((response) => {
        this.countries = response
      });
  }


}
