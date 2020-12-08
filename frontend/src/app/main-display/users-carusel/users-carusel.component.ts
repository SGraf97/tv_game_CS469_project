import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from "../../services";

@Component({
  selector: 'app-users-carusel',
  templateUrl: './users-carusel.component.html',
  styleUrls: ['./users-carusel.component.css']
})
export class UsersCaruselComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUsers().then(res=>{
          this.users = res;
      });




  }

}
