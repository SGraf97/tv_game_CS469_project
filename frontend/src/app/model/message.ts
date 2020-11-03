import {User} from './user';

export class Message {
  user: User;
  messageText: string;


  // // @ts-ignore
  // constructor();
  // constructor(username , messageText);
  constructor(username , messageText , color) {
    this.messageText = messageText;
    // this.user = User.getUser(username);
    this.user = new User(username , color);
  }


}

