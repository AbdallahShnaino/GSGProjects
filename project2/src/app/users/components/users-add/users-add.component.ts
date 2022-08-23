import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/users/Models/User.model';
import { UsersService } from 'src/app/users/services/users.service';
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
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
  ) {
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
    this.usersService.addUser(this.user)
    this.router.navigate(['users/view']);

  }


  private generateValidation():FormGroup{
    return new FormGroup({
      firstName: new FormControl('',[ Validators.required,Validators.maxLength(15),Validators.minLength(5)]),
      lastName:  new FormControl('',[ Validators.required,Validators.maxLength(15),Validators.minLength(5)]),
      age:  new FormControl('',[ Validators.required ,  Validators.min(16) ,  Validators.max(60)] , ),
      emailAddress: new FormControl('',[ Validators.required,Validators.maxLength(25),Validators.minLength(5) , Validators.email]),
      phoneNumber:  new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      address:  new FormControl('',[ Validators.required,Validators.maxLength(25),Validators.minLength(5)]),
      postion:  new FormControl('',[ Validators.required,Validators.maxLength(15),Validators.minLength(5)])
    })
  }



}
