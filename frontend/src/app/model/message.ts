import {User} from './user';

export class Message {
  user: User;
  messageText: string;
  color: string;


  constructor(username , messageText , color) {
    this.messageText = messageText;
    // this.user = User.getUser(username);
    this.user = username;
    this.color = color;
  }
}

