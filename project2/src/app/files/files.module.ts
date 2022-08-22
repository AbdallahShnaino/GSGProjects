import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FileViewComponent } from './components/file-view/file-view.component';
import { FilesService } from './services/files.service';


@NgModule({
  declarations: [
    FileViewComponent,
  ],
  imports: [
    CommonModule,
    FilesRoutingModule
  ],
  exports:[
    FileViewComponent
  ],
  providers:[FilesService]
})
export class FilesModule { }
