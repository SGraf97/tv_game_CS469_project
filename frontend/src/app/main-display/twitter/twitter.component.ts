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
    document.querySelector('.closeMain').addEventListener('click' , () => {
      const a = document.querySelector('app-main-display') as any;
      console.log(a.querySelector('app-frame'));
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
    })

    this.Api.getAllfrom('twitter').then(res=>{
        this.twits = res;
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
