import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {GroundComponent} from './components/ground/ground.component';
import {UserProfileComponent} from "./components/user-profile/user-profile.component";



const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'ground', component: GroundComponent},
  {path: 'user-profile', component: UserProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
