import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'view'
  },
  {
    path:'view',
    title:'View',
    component:UsersListComponent
  },
  {
    path:'add',
    title:'Add User',
    component:UsersAddComponent
  },
  {
    path:'update',
    title:'Update User',
    component:UsersUpdateComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
