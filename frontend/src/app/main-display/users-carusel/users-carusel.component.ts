import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-users-carusel',
  templateUrl: './users-carusel.component.html',
  styleUrls: ['./users-carusel.component.css']
})
export class UsersCaruselComponent implements OnInit {
  users: any;

  constructor() { }

  ngOnInit(): void {
    this.users = User.getUsers();




  }

}
