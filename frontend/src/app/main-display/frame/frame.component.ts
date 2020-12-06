import { Component, OnInit } from '@angular/core';
import {SmartSpeakerService} from '../../smart-speaker.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {


  id : any;
  link : any;
  private _smartSpeaker: any;
  constructor() {
    this._smartSpeaker = new SmartSpeakerService();
   }

  ngOnInit(): void {

    this.id = 'tgbNymZ7vqY';
    this.link = 'youtube.com/embed/';
    this.link += this.id;

    /*this._smartSpeaker.addCommand('play', ()=>{
      console.log('Play the video');
      var iframe = document.getElementsByTagName("iframe");
      var video = iframe[0].contentWindow;
      video.postMessage('{"event":"command","func":"' + 'playVideo' +   '","args":""}', '*');
    });*/

    /*this._smartSpeaker.addCommand('pause', ()=>{
      console.log('Stop the video');
      var iframe = document.getElementsByTagName("iframe");
      var video = iframe[0].contentWindow;
      video.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*');
    });*/

    // this.source = '\"https://www.youtube.com/embed/3EB13m5Ng9c\";
  }

}
