import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './avatar/avatar.component';
// import { WalkthroughsLandingPageComponent } from './walkthroughs-landing-page/walkthroughs-landing-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    // { path: 'home', component: HomeComponent },
    { path: 'avatar', component: AvatarComponent },
    // { path: 'walkthroughs-landing-page', component: WalkthroughsLandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
