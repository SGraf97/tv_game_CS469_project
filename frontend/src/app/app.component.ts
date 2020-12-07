import { Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocketsService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private socketsService: SocketsService) {
    // Connect to sockets server on startup
    this.socketsService.initAndConnect();




    //How to consume an event
    this.socketsService.syncMessages('eventName').subscribe((data)=>{
      console.log('The message i received for this event is: ', data);
    });

  }

  ngOnInit(): void {
  }

}
