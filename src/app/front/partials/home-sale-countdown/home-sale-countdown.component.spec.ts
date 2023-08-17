import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSaleCountdownComponent } from './home-sale-countdown.component';

describe('HomeSaleCountdownComponent', () => {
  let component: HomeSaleCountdownComponent;
  let fixture: ComponentFixture<HomeSaleCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSaleCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSaleCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
