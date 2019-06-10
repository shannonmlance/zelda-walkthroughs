import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './avatar/avatar.component';
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

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'avatar', component: AvatarComponent },
    { path: 'walkthroughs', component: WalkthroughsComponent },
    { path: 'z1-walk-l0', component: Z1WalkL0Component },
    { path: 'z1-walk-l1', component: Z1WalkL1Component },
    { path: 'z1-walk-l2', component: Z1WalkL2Component },
    { path: 'z1-walk-l3', component: Z1WalkL3Component },
    { path: 'z1-walk-l4', component: Z1WalkL4Component },
    { path: 'z1-walk-l5', component: Z1WalkL5Component },
    { path: 'z1-walk-l6', component: Z1WalkL6Component },
    { path: 'z1-walk-l7', component: Z1WalkL7Component },
    { path: 'z1-walk-l8', component: Z1WalkL8Component },
    { path: 'z1-walk-l9', component: Z1WalkL9Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
