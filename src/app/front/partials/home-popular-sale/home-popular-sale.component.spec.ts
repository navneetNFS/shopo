import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopularSaleComponent } from './home-popular-sale.component';

describe('HomePopularSaleComponent', () => {
  let component: HomePopularSaleComponent;
  let fixture: ComponentFixture<HomePopularSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePopularSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePopularSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
