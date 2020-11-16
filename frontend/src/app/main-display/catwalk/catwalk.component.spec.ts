import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatwalkComponent } from './catwalk.component';

describe('CatwalkComponent', () => {
  let component: CatwalkComponent;
  let fixture: ComponentFixture<CatwalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatwalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatwalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
