import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL2Component } from './z1-walk-l2.component';

describe('Z1WalkL2Component', () => {
  let component: Z1WalkL2Component;
  let fixture: ComponentFixture<Z1WalkL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
