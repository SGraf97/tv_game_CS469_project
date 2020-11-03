import {AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
// ειναι μεσα στον φακελο model για να ειναι ιδιο full stack
import {Message} from '../../model/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit  , DoCheck{
  // let array = [];
  messages: any;

  index: number;
  // πρεπει να μπαινουν σε type αλλα μπορει να ειναι και any
  container: HTMLElement;
  constructor() {
    console.log(this.messages);
  }

  // just for testing
  // καλειτε μολις φτιαχτει το αντικειμενο
  ngOnInit(): void {
    this.messages = [
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' )

    ];
    console.log(this.messages);
    // document.getElementById('chatContainer').style.overflow = 'scroll';



    // gia na testarw ta messages
    // this.index = 0;
    // setInterval(() => {
    //     this.messages.push({color : 'red' , username : 'user1' , text : 'ela' + this.index });
    //     this.index ++;
    //   }, 1000
    // );

  }


// καλειτε οποτε αλλαζει το αντικειμενο
  ngDoCheck(): void{
    this.container = document.getElementById('chatContainer');
    this.container.scrollTop = this.container.scrollHeight;
    console.log(this.container.scrollTop);
    console.log(this.container.scrollHeight);
    console.log(this);

  }


}



