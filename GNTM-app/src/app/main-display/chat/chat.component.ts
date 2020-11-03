import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // let array = [];
  messages: any;

  constructor() {
    console.log(this.messages);
  }

  // just for testing
  ngOnInit(): void {
    console.log('eimai edw');
    this.messages = [
      {color : 'red' , username : 'user1' , text : 'ela' },
      {color : 'green' , username : 'user2' , text : 'ela' },
      {color : 'red' , username : 'user1' , text : 'ela' },
      {color : 'orange' , username : 'user3' , text : 'eimai edw kai egw' },
      {color : 'red' , username : 'user1' , text : 'wraia' },


    ];

    console.log(this.messages);

  }



}
