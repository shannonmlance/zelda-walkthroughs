import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL0Component } from './z1-walk-l0.component';

describe('Z1WalkL0Component', () => {
  let component: Z1WalkL0Component;
  let fixture: ComponentFixture<Z1WalkL0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
