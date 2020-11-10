import {Component, DoCheck, OnInit} from '@angular/core';
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
  onlineCounter: number;
  index: number;
  // πρεπει να μπαινουν σε type αλλα μπορει να ειναι και any
  container: HTMLElement;


  containerMessages: HTMLCollectionOf<Element>;
  constructor() {

  }

  // just for testing
  // καλειτε μολις φτιαχτει το αντικειμενο
  ngOnInit(): void {


    document.querySelector('.closeMain').addEventListener('click' , () => {
      console.log('eimai edw!');
      const a = document.querySelector('app-main-display') as any;
      console.log(a.querySelector('app-frame'));
      // hide chat-twiter
      a.querySelector('app-chat').style.display = 'none';
      a.querySelector('app-users-carusel').style.display = 'none';
      // resize iframe
      const frame = a.querySelector('app-frame > iframe');
      frame.setAttribute('width' , '1920');
      frame.setAttribute('height' , '1080');
    });


    this.onlineCounter = 4;
    // fill container data
    this.messages = [
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' ),
      new Message('user1' , 'this is a text' , 'red' )

    ];



    this.container = document.getElementById('chatContainer');
    this.containerMessages = document.getElementsByClassName('chat-cmp');



    // // // gia na testarw ta messages
    // this.index = 0;
    // setInterval(() => {
    //     this.messages.unshift(new Message('user2' , 'this is a text' , 'orange'));
    //     this.index ++;
    //   }, 1000
    // );

  }


// καλειτε οποτε αλλαζει το αντικειμενο

  ngDoCheck(): void{

    // tslint:disable-next-line:triple-equals
    if (this.containerMessages[this.containerMessages.length - 1] != undefined){
      // console.log(this.container);
      // console.log(this.containerMessages[this.containerMessages.length - 1].offsetTop);
       // = this.containerMessages[this.containerMessages.length - 1].offsetTop;
      console.log(this.container.scrollHeight);
    }


    // window.scrollTo(this.container.scrollHeight , 0);
    // console.log(window);
  }


}



