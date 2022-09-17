import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../Models/User.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
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
