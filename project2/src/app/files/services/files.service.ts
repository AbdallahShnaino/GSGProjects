import { Injectable } from '@angular/core';
import { File } from '../models/file.model';
@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private static ID = 0
  private static POSS = 0
  private files :File[] = new Array(10)
  constructor() { 
  }



  fill (): void{
    if (FilesService.POSS == 0) {
      for (let i of Array(10).keys()){
        var file = this.generateRandumUser() 
        this.files.fill(file, i , 10 )
      }
    }
    FilesService.POSS = 1
  }

  generateRandumUser(): File{
    return {
      id: ++FilesService.ID+"",
      name: (Math.random() + 1).toString(36).substring(7) ,
      description: (Math.random() + 1).toString(36).substring(7) 
    }
  }

  getFiles(): File[]{
    return this.files
  }

}

