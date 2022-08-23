import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
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
  formValidation!:FormGroup
  errorDialoge:boolean = false

  user:User =  {
    firstName: '',
    id: '',
    lastName: '',
    age: 0,
    emailAddress: '',
    phoneNumber: '',
    address: '',
    postion: ''
  }
  constructor(
    public usersService:UsersService ,
    public router:Router ,
    private route: ActivatedRoute
  ) {
    this.getUserId()
    this.inflateData(this.user.id)
    this.formValidation = this.generateValidation()

  }

  ngOnInit(): void {


  }
  onFormSubbmited() :void{
    if (this.formValidation.status === 'INVALID'){
      this.errorDialoge = true
      return
    }

    this.user.firstName = this.formValidation.value?.firstName
    this.user.lastName = this.formValidation.value?.lastName
    this.user.age = this.formValidation.value?.age
    this.user.emailAddress = this.formValidation.value?.emailAddress
    this.user.phoneNumber = this.formValidation.value?.phoneNumber
    this.user.address = this.formValidation.value?.address
    this.user.postion = this.formValidation.value?.postion
    this.usersService.updateUser(this.user.id , this.user)
    this.router.navigate(['users/view']);
  }
  
  getUserId () {
    this.route.queryParamMap
    .subscribe((params) => {
      this.user.id = params.get('id')!
    }
  );
  }

  inflateData (id : string) :void {
    var inflatedUser = this.usersService.getUserById(id)
    if (typeof inflatedUser !== 'number'){
      this.user.firstName = inflatedUser.firstName
      this.user.lastName = inflatedUser.lastName
      this.user.address = inflatedUser.address
      this.user.phoneNumber = inflatedUser.phoneNumber
      this.user.emailAddress = inflatedUser.emailAddress
      this.user.postion = inflatedUser.postion
      this.user.age = inflatedUser.age
    }
  }

  private generateValidation():FormGroup{
    return new FormGroup({
      firstName: new FormControl(this.user.firstName,[ Validators.required,Validators.maxLength(15),Validators.minLength(5)]),
      lastName:  new FormControl(this.user.lastName,[ Validators.required,Validators.maxLength(15),Validators.minLength(5)]),
      age:  new FormControl(this.user.age,[ Validators.required ,  Validators.min(16) ,  Validators.max(60)] , ),
      emailAddress: new FormControl(this.user.emailAddress,[ Validators.required,Validators.maxLength(25),Validators.minLength(5) , Validators.email]),
      phoneNumber:  new FormControl(this.user.phoneNumber,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      address:  new FormControl(this.user.address ,[ Validators.required,Validators.maxLength(25),Validators.minLength(5)]),
      postion:  new FormControl(this.user.postion,[ Validators.required,Validators.maxLength(15),Validators.minLength(5)])
    })
  }


}
