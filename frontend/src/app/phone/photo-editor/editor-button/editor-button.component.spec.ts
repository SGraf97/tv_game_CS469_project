import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorButtonComponent } from './editor-button.component';

describe('EditorButtonComponent', () => {
  let component: EditorButtonComponent;
  let fixture: ComponentFixture<EditorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
