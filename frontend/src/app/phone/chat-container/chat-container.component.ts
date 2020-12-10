import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services';
import { APIService } from 'src/app/services/API.service';
import { Message } from '../../model/message';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {
  @Input() height: string;
  public loggedInUser: User;
  public newMessage: string;
  public messages = new Array();
  constructor(private userService: UserService, private apiService: APIService) { }

  ngOnInit(): void {
    let tmpMessages: any;

    this.userService.loggedInUser.subscribe(user => this.loggedInUser = user)

    this.apiService.getAllfrom("message").then(
      res => {
        tmpMessages = res;
        for (let mssg of tmpMessages) {
          this.userService.getById(mssg.user).then(user => {
            if (user.username === this.loggedInUser.username)
              this.messages.push(new Message(user.username, mssg.messageText, "out"))
            else
              this.messages.push(new Message(user.username, mssg.messageText, "in"))
          })
        }
        console.log(this.messages)
      }
    )

  }

  sendMessage() {
    if (this.newMessage) {
      this.apiService.create('message', { user: this.loggedInUser, messageText: this.newMessage });
      this.messages.push(new Message(this.loggedInUser.username, this.newMessage, "out"));
    }
  }

  message(event: any) {
    this.newMessage = event.target.value;
  }

}
