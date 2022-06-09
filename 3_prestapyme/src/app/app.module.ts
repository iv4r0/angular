import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/acces-control/login/login.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { NavBarMainComponent } from './components/nav/main/nav-bar-main.component';
import { ClientNewComponent } from './components/clients/client-new/client-new.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientSearchComponent } from './components/clients/client-search/client-search.component';
import { UserNewComponent } from './components/users/user-new/user-new.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserSearchComponent } from './components/users/user-search/user-search.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { NavBarTabComponent } from './components/nav/tab/nar-bar-tab.component';
import { NavBarInfoComponent } from './components/nav/info/nav-bar-info.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarMainComponent,
    ClientNewComponent,
    ClientListComponent,
    ClientSearchComponent,
    UserNewComponent,
    UserListComponent,
    UserSearchComponent,
    UserUpdateComponent,
    NavBarTabComponent,
    NavBarInfoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
