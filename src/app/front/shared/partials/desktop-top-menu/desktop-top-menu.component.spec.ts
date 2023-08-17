import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopTopMenuComponent } from './desktop-top-menu.component';

describe('DesktopTopMenuComponent', () => {
  let component: DesktopTopMenuComponent;
  let fixture: ComponentFixture<DesktopTopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopTopMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
