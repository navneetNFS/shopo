import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShopBrandComponent } from './home-shop-brand.component';

describe('HomeShopBrandComponent', () => {
  let component: HomeShopBrandComponent;
  let fixture: ComponentFixture<HomeShopBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeShopBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeShopBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
