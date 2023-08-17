import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMiddleMenuComponent } from './desktop-middle-menu.component';

describe('DesktopMiddleMenuComponent', () => {
  let component: DesktopMiddleMenuComponent;
  let fixture: ComponentFixture<DesktopMiddleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopMiddleMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopMiddleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
