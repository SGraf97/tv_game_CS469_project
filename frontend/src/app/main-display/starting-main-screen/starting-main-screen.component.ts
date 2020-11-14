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
      // show overlay
      document.querySelector('.gamepad').addEventListener('click',
        () => {
          document.getElementsByClassName('overlay')[0].style.display = 'flex';
          document.getElementsByClassName('bg-black')[0].classList.add('blur');
      });

      // hide overlay
      document.getElementsByClassName('overlay')[0].addEventListener('click' , ()=>{
          document.getElementsByClassName('overlay')[0].style.display = 'none';
          document.getElementsByClassName('bg-black')[0].classList.remove('blur');
      });

      // buttons
      document.getElementsByClassName('box')[0].addEventListener('click' , () => {
        location.href = '/main/home';
      });

  }


}