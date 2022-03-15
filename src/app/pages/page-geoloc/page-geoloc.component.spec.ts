import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGeolocComponent } from './page-geoloc.component';

describe('PageGeolocComponent', () => {
  let component: PageGeolocComponent;
  let fixture: ComponentFixture<PageGeolocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGeolocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGeolocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
