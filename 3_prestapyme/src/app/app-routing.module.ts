import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/acces-control/login/login.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ClientNewComponent } from './components/clients/client-new/client-new.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientSearchComponent } from './components/clients/client-search/client-search.component';
import { UserNewComponent } from './components/users/user-new/user-new.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserSearchComponent } from './components/users/user-search/user-search.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'client-new', component: ClientNewComponent},
  {path: 'client-list', component: ClientListComponent},
  {path: 'client-search', component: ClientSearchComponent},
  {path: 'user-new', component: UserNewComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-search', component: UserSearchComponent},
  {path: 'user-update', component: UserUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
