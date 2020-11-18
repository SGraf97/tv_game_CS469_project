import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFormsComponent } from './enter-forms.component';

describe('EnterFormsComponent', () => {
  let component: EnterFormsComponent;
  let fixture: ComponentFixture<EnterFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
