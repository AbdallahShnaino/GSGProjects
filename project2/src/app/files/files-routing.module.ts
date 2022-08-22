import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileViewComponent } from './components/file-view/file-view.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'view'
  },
  {
    path:'view',
    title:'View',
    component:FileViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
