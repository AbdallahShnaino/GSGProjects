import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/users/Models/User.model';
import { UsersService } from 'src/app/users/services/users.service';
FormsModule
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  user:User =  {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  }
  constructor(
    public usersService:UsersService ,
    public router:Router ,
  ) {
    
  }

  ngOnInit(): void {


  }

  onFormSubbmited() :void{
    this.usersService.add(this.user).subscribe(
      res => console.log(res)
    )
    this.router.navigate(['users/view']);
  }


}
