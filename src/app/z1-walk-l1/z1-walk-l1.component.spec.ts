import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL1Component } from './z1-walk-l1.component';

describe('Z1WalkL1Component', () => {
  let component: Z1WalkL1Component;
  let fixture: ComponentFixture<Z1WalkL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
