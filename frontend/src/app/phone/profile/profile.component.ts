import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  public profile = "Profile";
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loggedInUser.subscribe(user => this.user = user)
  }

  logout(){
    this.userService.logout();
    window.location.href = "phone/login"
  }

}
