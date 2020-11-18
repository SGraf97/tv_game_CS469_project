import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../model/message';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {
  @Input() height: string;
  public loggedInUser = "user1";

  public messages: any;
  constructor() { }

  ngOnInit(): void {
    this.messages = [
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user", "this is an incoming message from someone else @taged", "in"),
      new Message("user1", "this is a outgoing message sent by you.", "out")
    ];
    console.log(this.messages);
  }

}
