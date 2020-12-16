import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from "../../services";

@Component({
  selector: 'app-users-carusel',
  templateUrl: './users-carusel.component.html',
  styleUrls: ['./users-carusel.component.css']
})
export class UsersCaruselComponent implements OnInit {
  users = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUsers().then(res=>{
          let u: any;
          u = res;
          for(let i of u){
            if(i.isLoggedIn)
            this.users.push(i);
          }
          
      });




  }

}
