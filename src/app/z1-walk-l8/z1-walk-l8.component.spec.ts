import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL8Component } from './z1-walk-l8.component';

describe('Z1WalkL8Component', () => {
  let component: Z1WalkL8Component;
  let fixture: ComponentFixture<Z1WalkL8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
