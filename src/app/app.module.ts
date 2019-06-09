import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { HomeComponent } from './home/home.component';
import { WalkthroughsComponent } from './walkthroughs/walkthroughs.component';
import { Z1WalkL0Component } from './z1-walk-l0/z1-walk-l0.component';
import { Z1WalkL1Component } from './z1-walk-l1/z1-walk-l1.component';
import { Z1WalkL2Component } from './z1-walk-l2/z1-walk-l2.component';
import { Z1WalkL3Component } from './z1-walk-l3/z1-walk-l3.component';
import { Z1WalkL4Component } from './z1-walk-l4/z1-walk-l4.component';
import { Z1WalkL5Component } from './z1-walk-l5/z1-walk-l5.component';
import { Z1WalkL6Component } from './z1-walk-l6/z1-walk-l6.component';
import { Z1WalkL7Component } from './z1-walk-l7/z1-walk-l7.component';
import { Z1WalkL8Component } from './z1-walk-l8/z1-walk-l8.component';
import { Z1WalkL9Component } from './z1-walk-l9/z1-walk-l9.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    HomeComponent,
    WalkthroughsComponent,
    Z1WalkL0Component,
    Z1WalkL1Component,
    Z1WalkL2Component,
    Z1WalkL3Component,
    Z1WalkL4Component,
    Z1WalkL5Component,
    Z1WalkL6Component,
    Z1WalkL7Component,
    Z1WalkL8Component,
    Z1WalkL9Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
