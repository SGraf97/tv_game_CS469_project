import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonightHighlightsComponent } from './tonight-highlights.component';

describe('TonightHighlightsComponent', () => {
  let component: TonightHighlightsComponent;
  let fixture: ComponentFixture<TonightHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonightHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TonightHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
