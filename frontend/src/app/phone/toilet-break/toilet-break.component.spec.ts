import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletBreakComponent } from './toilet-break.component';

describe('ToiletBreakComponent', () => {
  let component: ToiletBreakComponent;
  let fixture: ComponentFixture<ToiletBreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToiletBreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
