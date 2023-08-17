import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestSellersComponent } from './home-best-sellers.component';

describe('HomeBestSellersComponent', () => {
  let component: HomeBestSellersComponent;
  let fixture: ComponentFixture<HomeBestSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBestSellersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
