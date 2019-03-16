import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile/profile-list.component';
import { CanyonComponent } from './canyon/canyon.component';
import { CanyonListComponent } from './canyon/canyon-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'canyon-list', component: CanyonListComponent },
  { path: 'canyon/:id',      component: CanyonComponent },
  { path: 'profile/:id',      component: ProfileComponent },
  {
    path: 'profile-list',
    component: ProfileListComponent,
    data: { title: 'Profiles' }
  },
  { path: '',
    redirectTo: '/canyon-list',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
