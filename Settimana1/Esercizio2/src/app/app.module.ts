import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './components/post-non-attivi/post-non-attivi.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route [] = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'post-attivi',
    component: PostAttiviComponent
  },
  {
    path:'post-non-attivi',
    component: PostNonAttiviComponent
  }
]





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostNonAttiviComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
