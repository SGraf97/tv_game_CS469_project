import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsInfoComponent } from './models-info.component';

describe('ModelsInfoComponent', () => {
  let component: ModelsInfoComponent;
  let fixture: ComponentFixture<ModelsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
