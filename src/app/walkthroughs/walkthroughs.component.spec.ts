import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkthroughsComponent } from './walkthroughs.component';

describe('WalkthroughsComponent', () => {
  let component: WalkthroughsComponent;
  let fixture: ComponentFixture<WalkthroughsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkthroughsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkthroughsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
