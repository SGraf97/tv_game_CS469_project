import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { SocketsService, UserService } from '../services';
import { EnterFormsComponent } from './enter-forms/enter-forms.component';

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

  listenToSocket(){
    this.socketService.syncAllMessages().subscribe(
      msg=> {
        //always keep logged in user up to date with db
        if(msg.event === 'update'){
          this.userService.getById(this.loggedInUser._id)
          .then(res=>
            this.userService.updateUser(res)
          )
        }
      }
    )
  }
  // ngOnChange(){
  //   this.loggedInUser = this.enterForms.user;
  //   console.log('user changed: ')
  //   console.log(this.loggedInUser)
  // }

  

  
}
