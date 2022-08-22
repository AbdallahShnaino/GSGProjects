import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilesService } from '../../services/files.service';
FormsModule
@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {

  
  constructor(
    public filesService:FilesService ,
  ) {
    this.filesService.fill()
  }

  ngOnInit(): void {


  }



}
