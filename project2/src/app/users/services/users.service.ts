import { Injectable } from '@angular/core';
import { User } from '../Models/User.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private static ID = 0
  private static POSS = 0
  private users :User[] = []
  constructor() {
  }

  permission () :boolean{
    if (UsersService.POSS == 0){
      return true
    }
    return false
  }

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

  getUsers(): User[]{
    return this.users
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
}
