import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCaruselComponent } from './users-carusel.component';

describe('UsersCaruselComponent', () => {
  let component: UsersCaruselComponent;
  let fixture: ComponentFixture<UsersCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
