import { Component, OnInit } from '@angular/core';
import {SmartSpeakerService} from '../../services/smart-speaker.service';

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
    
  }

  ngOnInit(): void {

    //this.id = 'a21STYnfr_w';
    //this.link = 'youtube.com/embed/';
    //this.link += this.id;
    this._smartSpeaker = new SmartSpeakerService();

    if (!window['YT']){
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    var player;
    window['onYouTubeIframeAPIReady'] = function() {
      player = new window['YT'].Player('player', {
          height: '800',
          width: '1430',
          videoId: 'a21STYnfr_w',
          playerVars: {
            'enablejsapi': 1,
            'origin':'http://localhost:4200'
          }
          //host: 'http://www.youtube.com',
        /*events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }*/
      });
    }

    console.log("Say 'play' or 'stop'");
    this._smartSpeaker.addCommand('play', ()=>{
      console.log('Play the video');
      player.playVideo();
    });

    this._smartSpeaker.addCommand('stop', ()=>{
      console.log('Pause the video');
      player.stopVideo();
    });

    /*if (player.destroy) {
      player.destroy();
    }*/


  }


}
