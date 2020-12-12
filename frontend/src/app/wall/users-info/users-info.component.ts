import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {
  users: any;
  xp: string;
  level: string;
  constructor() { }

  ngOnInit(): void {
    //users
    // this.users = User.getUsers();

    this.xp = "42069xp";
    this.level = "level3";
  }
}
