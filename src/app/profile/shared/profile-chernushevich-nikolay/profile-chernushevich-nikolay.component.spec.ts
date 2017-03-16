import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChernushevichNikolayComponent } from './profile-chernushevich-nikolay.component';

describe('ProfileChernushevichNikolayComponent', () => {
  let component: ProfileChernushevichNikolayComponent;
  let fixture: ComponentFixture<ProfileChernushevichNikolayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChernushevichNikolayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChernushevichNikolayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
