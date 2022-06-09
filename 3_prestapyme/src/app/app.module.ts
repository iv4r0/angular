import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    ClientNewComponent,
    ClientListComponent,
    ClientSearchComponent,
    UserNewComponent,
    UserListComponent,
    UserSearchComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
