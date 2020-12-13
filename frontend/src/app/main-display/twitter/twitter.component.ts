import { Component, OnInit } from '@angular/core';
import {Tweet} from '../../model/tweet';
import {APIService, SocketsService} from "../../services";

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  // array of storing twits
  twits: any;



  constructor(private Api :APIService ,private sockets: SocketsService ) { }

  ngOnInit(): void {
  // this.addTwits();
    document.querySelector('#close-twitter').addEventListener('click' , () => {
      const a = document.querySelector('app-main-display') as any;
      // console.log(a.querySelector('app-frame'));
      // hide chat-twiter
      a.querySelector('app-twitter').style.display = 'none';
      a.querySelector('app-users-carusel').style.display = 'none';
      // resize iframe
      const frame = a.querySelector('app-frame > iframe');
      frame.setAttribute('width' , '1920');
      frame.setAttribute('height' , '1080');
    });

    this.sockets.syncMessages('create').subscribe(msg=>{
      this.Api.getAllfrom('twitter').then(res=>{
        this.twits = res;
      });
    });

    this.sockets.syncMessages('open-twitter').subscribe(msg=>{

      let chat = document.querySelector('app-chat');
      if(chat.style.display == 'block'){
        chat.style.display = 'none';
      }


      const a = document.querySelector('app-main-display') as any;
      // console.log(a.querySelector('app-frame'));
      // hide chat-twiter
      a.querySelector('app-twitter').style.display = 'block';
      a.querySelector('app-users-carusel').style.display = 'block';
      // resize iframe
      const frame = a.querySelector('app-frame > iframe');
      frame.setAttribute('width' , '1430');
      frame.setAttribute('height' , '800');

    });

    this.Api.getAllfrom('twitter').then(res=>{
        this.twits = res;
        for(let t of this.twits){
          t.likes = Math.floor(Math.random()*100);

          t.retweets = Math.floor(Math.random()*100);
        }
    });


  }


  public addTwits(){
    this.Api.create('/twitter' , {
      userTag:'Test',
      twit:'this is a sample twit'
    }).then(res=>{
      console.log(res);
    });
  }



}
