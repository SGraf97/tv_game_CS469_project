import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {
  users: any;
  constructor() { }

  ngOnInit(): void {
    //needs users that already exist somewhere
    this.users = User.getUsers();
  }
}
