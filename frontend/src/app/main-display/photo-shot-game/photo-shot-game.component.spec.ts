import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoShotGameComponent } from './photo-shot-game.component';

describe('PhotoShotGameComponent', () => {
  let component: PhotoShotGameComponent;
  let fixture: ComponentFixture<PhotoShotGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoShotGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoShotGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
