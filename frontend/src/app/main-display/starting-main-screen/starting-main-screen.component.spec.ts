import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingMainScreenComponent } from './starting-main-screen.component';

describe('StartingMainScreenComponent', () => {
  let component: StartingMainScreenComponent;
  let fixture: ComponentFixture<StartingMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
