import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1WalkL5Component } from './z1-walk-l5.component';

describe('Z1WalkL5Component', () => {
  let component: Z1WalkL5Component;
  let fixture: ComponentFixture<Z1WalkL5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Z1WalkL5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Z1WalkL5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
