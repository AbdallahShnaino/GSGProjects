import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router , Route, ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/users/Models/User.model';
import { UsersService } from 'src/app/users/services/users.service';
FormsModule
@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {
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
    private route: ActivatedRoute
  ) {
    this.getUserId()

  }
  
  ngOnInit(): void {
    

  }
  onFormSubbmited() :void{
    this.usersService.update(this.user).subscribe(
      res => console.log(res)
    )
    this.router.navigate(['users/view']);
  }
  
  getUserId () {
    this.route.queryParamMap
    .subscribe((params) => {
     var x = params.get('id')!
     this.user.id = Number(x)
     this.inflateData(this.user.id)
    }
  );
  }

  inflateData (id : number) :void {
    this.usersService.getById(id).subscribe(
      inflatedUser => this.user = inflatedUser
    )
  }


}
