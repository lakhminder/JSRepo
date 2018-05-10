import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // added for 2 way binding of forms
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { User1Component } from './components/user1/user1.component';

import { UserDataService } from './services/user-data.service';// name shuld match the exact service

const appRoutes : Routes = [
  {path:'', component:User1Component},
  {path:'previousVersion', component:UserComponent} // localhost:4200/previousVersion
];

@NgModule({// NgModule directive
  declarations: [
    AppComponent,
    UserComponent,
    User1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserDataService],// for services
  bootstrap: [AppComponent] // root component
})
export class AppModule { }
