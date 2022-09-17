import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    pathMatch:'full',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
