import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'client-new', component: ClientNewComponent},
  {path: 'client-list', component: ClientListComponent},
  {path: 'client-search', component: ClientSearchComponent},
  {path: 'user-new', component: UserNewComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-search', component: UserSearchComponent},
  {path: 'user-update', component: UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
