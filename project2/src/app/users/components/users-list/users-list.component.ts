import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/Models/User.model';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users!:User[]
  constructor( public usersService:UsersService) {

    /* 
      Only one time our system can fill the array
      */
     if (this.usersService.permission() == true){
       this.usersService.fill()
      }
      this.users = this.usersService.getUsers()
   
  }
  
  ngOnInit(): void {
    


  }



}
