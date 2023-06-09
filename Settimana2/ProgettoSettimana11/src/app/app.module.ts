import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const rotte: Route[] = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    NavbarComponent,
    MoviesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
