import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL4Component } from './z1-walk-l4.component';

describe('Z1WalkL4Component', () => {
  let component: Z1WalkL4Component;
  let fixture: ComponentFixture<Z1WalkL4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
