import {Component, OnInit} from '@angular/core';
// ειναι μεσα στον φακελο model για να ειναι ιδιο full stack
import {SocketsService} from "../../services";
import {UserService} from "../../services";
import {MessageService} from "../../services/message.service";


@Component({
  selector: 'app-chats',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit  {
  // let array = [];
  messages: any;
  users:any;
  onlineCounter: number;
  index: number;
  // πρεπει να μπαινουν σε type αλλα μπορει να ειναι και any
  container: HTMLElement;


  containerMessages: HTMLCollectionOf<Element>;
  // private socketService: any;
  constructor(private socketService : SocketsService , private messageService:MessageService ,private userService:UserService ) {
    
  }

  ngOnInit(): void {
    this.socketService.syncAllMessages().subscribe(msg=> {
      if (msg.event == 'create') {
        this.messageService.getAll().then(res => {

          this.messages  = res;
          for(let m of this.messages){

            if(m.user){
              this.userService.getById(m.user).then(res=>{
                m.user = res;
              });
            }
          }
          this.messages = this.messages.reverse();
        });
      }

      if(msg.event == 'update'){
        this.userService.getUsers().then(res=>{
          let temp = 0 ;
          this.users = res;
          for(let u of this.users){
            if(u.isLoggedIn){
              temp++;
            }
          }
          this.onlineCounter = temp;
        });
      }
    });

    this.messageService.getAll().then(res=>{
      this.messages  = res;
      this.messages = this.messages.reverse();
      console.log(this.messages);
      for(let m of this.messages){

        console.log();
        this.userService.getById(m.user).then(res=>{
          m.user = res;
        });
      }
      console.log(this.messages);
    });


    this.userService.getUsers().then(res=>{
      let temp = 0 ;
      this.users = res;
      for(let u of this.users){
        if(u.isLoggedIn){
          temp++;
        }
      }
      this.onlineCounter = temp;
    });

    document.querySelector('#close-chat').addEventListener('click' , () => {
      const twitter = document.querySelector('app-twitter') as HTMLElement;
      //
      if(twitter.style.display != 'none'){
        twitter.style.display = 'none';
      }
      const a = document.querySelector('app-main-display') as any;
      console.log(a.querySelector('app-frame'));

      a.querySelector('app-chats').style.display = 'none';
      a.querySelector('app-users-carusel').style.display = 'none';
      // resize iframe
      const frame = a.querySelector('app-frame > iframe');
      frame.setAttribute('width' , '1920');
      frame.setAttribute('height' , '1080');
    });

    this.socketService.syncMessages('open-chat').subscribe(msg=>{

      const twitter = document.querySelector('app-twitter') as HTMLElement;
      //
      if(twitter.style.display != 'none'){
        twitter.style.display = 'none';
      }

      const a = document.querySelector('app-main-display') as any;
      console.log(a.querySelector('app-frame'));
      a.querySelector('app-chats').style.display = 'block';
      a.querySelector('app-users-carusel').style.display = 'block';
      // resize iframe
      const frame = a.querySelector('app-frame > iframe');
      frame.setAttribute('width' , '1430');
      frame.setAttribute('height' , '800');




    });

    // fill container data
    this.container = document.getElementById('chatContainer');
    this.containerMessages = document.getElementsByClassName('chat-cmp');

  }


  public wipeMessages(){
    for(let m of this.messages) {
      this.messageService.delete(m._id).then(res => {
        console.log(res);
      });
    }
  }


// // καλειτε οποτε αλλαζει το αντικειμενο
//
//   ngDoCheck(): void{
//
//     // tslint:disable-next-line:triple-equals
//     if (this.containerMessages[this.containerMessages.length - 1] != undefined){
//       // console.log(this.container);
//       // console.log(this.containerMessages[this.containerMessages.length - 1].offsetTop);
//        // = this.containerMessages[this.containerMessages.length - 1].offsetTop;
//       console.log(this.container.scrollHeight);
//     }
//
//
//     // window.scrollTo(this.container.scrollHeight , 0);
//     // console.log(window);
//   }


}



