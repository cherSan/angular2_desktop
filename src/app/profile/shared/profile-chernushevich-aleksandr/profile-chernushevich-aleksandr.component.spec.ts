import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChernushevichAleksandrComponent } from './profile-chernushevich-aleksandr.component';

describe('ProfileChernushevichAleksandrComponent', () => {
  let component: ProfileChernushevichAleksandrComponent;
  let fixture: ComponentFixture<ProfileChernushevichAleksandrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChernushevichAleksandrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChernushevichAleksandrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
