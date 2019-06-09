import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL3Component } from './z1-walk-l3.component';

describe('Z1WalkL3Component', () => {
  let component: Z1WalkL3Component;
  let fixture: ComponentFixture<Z1WalkL3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
