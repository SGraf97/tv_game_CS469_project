import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { SocketsService, UserService } from '../services';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})

export class PhoneComponent implements OnInit {
  public state: string;
  loggedInUser: User;

  constructor(private socketService: SocketsService, private userService: UserService) { 
  }

  ngOnInit(): void {
    this.userService.loggedInUser.subscribe(user => this.loggedInUser = user)
    this.state = "Login";
  }
  
}
