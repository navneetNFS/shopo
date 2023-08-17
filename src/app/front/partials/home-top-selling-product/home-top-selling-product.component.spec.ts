import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopSellingProductComponent } from './home-top-selling-product.component';

describe('HomeTopSellingProductComponent', () => {
  let component: HomeTopSellingProductComponent;
  let fixture: ComponentFixture<HomeTopSellingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopSellingProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTopSellingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
