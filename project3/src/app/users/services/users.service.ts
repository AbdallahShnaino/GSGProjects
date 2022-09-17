import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { filter, map, Observable } from 'rxjs';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private static ID = 0;
  private static POSS = 0;
  private users: User[] = [];

  private apiLink = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  permission(): boolean {
    if (UsersService.POSS == 0) {
      return true;
    }
    return false;
  }

  getAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiLink, {
        observe: 'body',
      })
      .pipe(map((res: any) => res.data));
  }
  getById(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.apiLink}/${id}`, {
        observe: 'body',
      })
      .pipe(
        map((res: any) => res.data),
        filter((user) => user.id === id)
      );
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(this.apiLink, user, {
      observe: 'body',
    });
  }
  update(id: number, user: User):  Observable<User>  {
    const body = { title: 'update user' };
    return this.http.put<User>(`${this.apiLink}/${id}`, body,{
      observe: 'body',
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink}/${id}`);
  }

  getUsers(): User[] {
    return this.users;
  }

  /* 



  fill (): void{
    if (UsersService.POSS == 0) {
      for (let i of Array(10).keys()){
        var user = this.generateRandumUser() 
        this.users.push(user)
      }
      UsersService.POSS = 1
    }
  }

  generateRandumUser(): User{
    return {
      id: String(++UsersService.ID),
      firstName:(Math.random() + 1).toString(36).substring(7) ,
      lastName: (Math.random() + 1).toString(36).substring(7) ,
      age: Number( Math.floor(Math.random() * 60)) ,
      emailAddress: (Math.random() + 1).toString(36).substring(7)+'@gmail.com',
      phoneNumber: '059'+ Number( Math.floor(Math.random() * 10000000)),
      address: (Math.random() + 1).toString(36).substring(7),
      postion: (Math.random() + 1).toString(36).substring(7)
    }
  }


  getUserById(id:string): User | number {
    return this.users.find((user)=> user.id === id ) || -1
  }

  addUser( user : User ) :boolean{
    var preLength = this.users.length
    user.id = String(++UsersService.ID)
    return this.users.push(user) - preLength == 1
  }

  updateUser(id: string, user: User): boolean {
    for (let userCurser of this.users) {
      if (userCurser.id === id) {
        userCurser.firstName = user.firstName
        userCurser.lastName = user.lastName
        userCurser.address = user.address
        userCurser.phoneNumber = user.phoneNumber
        userCurser.emailAddress = user.emailAddress
        userCurser.age = user.age
        userCurser.postion = user.postion
        return true;
      }
    }
    return false;
  }

  deleteUser(id: string): boolean {
    console.log('in delete function ... ')
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
        console.log(this.users)
        return true;
      }
    }
    return false;
  }
*/
}
