import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private subjectData :Subject<any> = new Subject<any>()
  private dataObservable :Observable<any> = this.subjectData.asObservable()

  constructor() {}
 
 // i can pass user details by using these functions  
 

  sendData(value: any = { key:'user',value:{} }):void{
    this.subjectData.next(value)
  }
  getListener(key: any):Observable<any>{
    return this.dataObservable.pipe(
      filter( (value)=>{
        return value.key === key
      })
    )
  }



}
