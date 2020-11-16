import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user'
@Component({
  selector: 'app-catwalk',
  templateUrl: './catwalk.component.html',
  styleUrls: ['./catwalk.component.css']
})
export class CatwalkComponent implements OnInit {


  users : any;
  activeUser:User;
  constructor() { }

  ngOnInit(): void {
    this.users =  User.getUsers();

    this.activeUser = this.users[0];
    
  }

}



