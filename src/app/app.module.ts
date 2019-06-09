import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AvatarComponent } from './avatar/avatar.component';
// import { HomeComponent } from './home/home.component';
// import { WalkthroughsLandingPageComponent } from './walkthroughs-landing-page/walkthroughs-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // AvatarComponent,
    // HomeComponent,
    // WalkthroughsLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
