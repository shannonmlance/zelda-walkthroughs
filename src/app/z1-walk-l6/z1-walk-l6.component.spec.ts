import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL6Component } from './z1-walk-l6.component';

describe('Z1WalkL6Component', () => {
  let component: Z1WalkL6Component;
  let fixture: ComponentFixture<Z1WalkL6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
