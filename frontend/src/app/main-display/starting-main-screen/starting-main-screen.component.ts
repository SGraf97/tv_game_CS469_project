import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {FrameComponent} from '../frame/frame.component';

@Component({
  selector: 'app-starting-main-screen',
  templateUrl: './starting-main-screen.component.html',
  styleUrls: ['./starting-main-screen.component.css']
})
export class StartingMainScreenComponent implements OnInit {
  onlineUsers: any;
  nextEpisode: any;
  constructor() { }

  ngOnInit(): void {
      this.onlineUsers = User.getUsers();
      this.nextEpisode = '20/12/20';
      document.querySelector('#startEpisode').addEventListener('click' , () => {

        const a = document.querySelector('app-main-display') as any ;
        console.log(a);
        a.querySelector('app-starting-main-screen').style.display = 'none';
        console.log(FrameComponent);
      });

  }


}
