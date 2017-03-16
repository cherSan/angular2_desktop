import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChernushevichOlesiaComponent } from './profile-chernushevich-olesia.component';

describe('ProfileChernushevichOlesiaComponent', () => {
  let component: ProfileChernushevichOlesiaComponent;
  let fixture: ComponentFixture<ProfileChernushevichOlesiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChernushevichOlesiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChernushevichOlesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
