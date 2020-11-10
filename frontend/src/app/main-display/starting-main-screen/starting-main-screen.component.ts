import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-starting-main-screen',
  templateUrl: './starting-main-screen.component.html',
  styleUrls: ['./starting-main-screen.component.css']
})
export class StartingMainScreenComponent implements OnInit {
  onlineUsers: any;
  constructor() { }

  ngOnInit(): void {
      this.onlineUsers = User.getUsers();

  }

}
