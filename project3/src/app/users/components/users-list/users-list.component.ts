import { Component, OnInit } from '@angular/core';
import { from, mergeMap } from 'rxjs';
import { User } from 'src/app/users/Models/User.model';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  checkedRecords: boolean[] = [];
  informationParStatus: boolean = false;
  users: User[] = [];
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.getAll();
    this.toggleCheckAll();
  }

  getAll(): void {
    this.usersService.getAll().subscribe(
      (resolve) => {
        this.users = resolve;
      },
      (reject) => {
        console.log('error fetching data ....');
      }
    );
  }
  delete(id: number): void {
    this.usersService.delete(id).subscribe(
    response => {
        console.log(`delete response `,response);
      
    });
  }
  toggleCheckAll(): void {
    this.checkedRecords = Array.from(
      new Array(this.usersService.getUsers().length).keys(),
      (item) => false
    );
  }
  checkboxOnClick(event: any, index: any): void {
    let value = event.target.checked;
    this.checkedRecords[index] = value;
  }
  deleteSelectedRecords(): void {
    var checkedIDs: User[] = [];
    this.checkedRecords.forEach((value, index) => {
      if (value == true) {
        checkedIDs.push(this.users[index]);
      }
    });
    var obs = from(checkedIDs);
    obs
      .pipe(
        mergeMap((user) => {
          return this.usersService.delete(user.id);
        })
      )
      .subscribe(
        (res) => {
          console.log(`delete response `,res);
        },
        (rej) => {
          console.log(`delete response (failed) `,rej);
        }
      );
  }
}
