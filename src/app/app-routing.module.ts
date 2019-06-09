import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './avatar/avatar.component';
import { WalkthroughsComponent } from './walkthroughs/walkthroughs.component';
import { Z1WalkL0Component } from './z1-walk-l0/z1-walk-l0.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'avatar', component: AvatarComponent },
    { path: 'walkthroughs', component: WalkthroughsComponent },
    { path: 'z1-walk-l0', component: Z1WalkL0Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
