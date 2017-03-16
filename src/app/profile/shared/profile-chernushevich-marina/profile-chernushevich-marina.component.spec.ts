import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChernushevichMarinaComponent } from './profile-chernushevich-marina.component';

describe('ProfileChernushevichMarinaComponent', () => {
  let component: ProfileChernushevichMarinaComponent;
  let fixture: ComponentFixture<ProfileChernushevichMarinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChernushevichMarinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChernushevichMarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
