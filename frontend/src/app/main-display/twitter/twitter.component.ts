import { Component, OnInit } from '@angular/core';
import {Tweet} from '../../model/tweet';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  // array of storing twits
  twits: any;



  constructor() { }

  ngOnInit(): void {

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


  //  adding some twits for testing
    this.twits = [
      new Tweet(),
      new Tweet(),
      new Tweet(),
      new Tweet(),
      new Tweet(),
      new Tweet(),
      new Tweet()
    ];



  }

}
