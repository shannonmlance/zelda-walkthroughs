import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL7Component } from './z1-walk-l7.component';

describe('Z1WalkL7Component', () => {
  let component: Z1WalkL7Component;
  let fixture: ComponentFixture<Z1WalkL7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
