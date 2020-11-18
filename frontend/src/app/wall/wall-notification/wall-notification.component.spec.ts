import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallNotificationComponent } from './wall-notification.component';

describe('WallNotificationComponent', () => {
  let component: WallNotificationComponent;
  let fixture: ComponentFixture<WallNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
