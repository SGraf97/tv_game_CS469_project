import { Component, OnInit, ViewChild} from '@angular/core';
import {SmartSpeakerService} from '../../services/smart-speaker.service';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';
import { SocketsService } from 'src/app/services';
import { APIService } from 'src/app/services/API.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @ViewChild('screenshot', { static: true }) screen: any;

  id : any;
  link : any;
  private _smartSpeaker: any;
  constructor(private captureService: NgxCaptureService, private socketService: SocketsService, private apiService: APIService) {
    
  }

  ngOnInit(): void {

    //this.id = 'a21STYnfr_w';
    //this.link = 'youtube.com/embed/';
    //this.link += this.id;
    this._smartSpeaker = new SmartSpeakerService();

    if (!window['YT']){
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      //console.log(tag.src);
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    var player;
    window['onYouTubeIframeAPIReady'] = function() {
      player = new window['YT'].Player('player', {
          height: '800',
          width: '1430',
          videoId: 'a21STYnfr_w'
          //host: 'http://www.youtube.com',
          /*playerVars: {
            'enablejsapi': 1,
            'origin':'http://localhost:4200'
          },*/
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

    this._smartSpeaker.addCommand('close', ()=>{
      console.log('close');
      const a = document.querySelector('app-main-display') as any;

      a.querySelector('app-chats').style.display = 'none';
      a.querySelector('app-users-carusel').style.display = 'none';

      const frame = a.querySelector('app-frame > iframe');
      frame.setAttribute('width' , '1920');
      frame.setAttribute('height' , '1080');
    });

   this._smartSpeaker.addCommand('open', ()=>{
      console.log('open');
      const a = document.querySelector('app-main-display') as any;

      a.querySelector('app-chats').style.display = 'block';
      a.querySelector('app-users-carusel').style.display = 'block';

      const frame = a.querySelector('app-frame > iframe');
      frame.setAttribute('width', '1430');
      frame.setAttribute('height', '800');
    });


    let username: string;
    this.socketService.syncMessages("capture").subscribe(
      msg => {
        username = msg.message.user;
        this.captureService.getImage(this.screen.nativeElement, true)
          .pipe(
            tap(img => {
              console.log(img);
              this.apiService.broadcastEvent("capture" + username, {screenshot:img})
            })
          ).subscribe();
      }
    )

  }


}
