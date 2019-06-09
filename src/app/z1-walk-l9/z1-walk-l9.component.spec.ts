import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL9Component } from './z1-walk-l9.component';

describe('Z1WalkL9Component', () => {
  let component: Z1WalkL9Component;
  let fixture: ComponentFixture<Z1WalkL9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
