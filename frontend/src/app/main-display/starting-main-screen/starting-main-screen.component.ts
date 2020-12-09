import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {FrameComponent} from '../frame/frame.component';
import {UserService} from "../../services/user.service";
import {APIService, SocketsService} from "../../services";


@Component({
  selector: 'app-starting-main-screen',
  templateUrl: './starting-main-screen.component.html',
  styleUrls: ['./starting-main-screen.component.css']
})
export class StartingMainScreenComponent implements OnInit {
  onlineUsers: any;
  allUsers : any;
  nextEpisode: any;
  public socketEvents : any[];

  constructor(private userService:UserService , private socketService:SocketsService , private APIservice:APIService) {
    this.socketEvents = [];
  }

  ngOnInit(): void {

    this.onlineUsers = [];
    this.allUsers = [];


    this.socketService.syncAllMessages().subscribe(msg=>{
      console.log(msg);
      if(msg.event == 'create'){
        this.userService.getUsers().then(res=>{
          this.allUsers = res;
          for(let i of this.allUsers){
            if(i.isLoggedIn)this.onlineUsers.push(i);
          }
        });
      }

      if(msg.event == 'delete'){
        this.userService.getUsers().then(res=>{
          this.allUsers = res;
          for(let i of this.allUsers){
            if(i.isLoggedIn)this.onlineUsers.push(i);
          }
        })
      }

      if(msg.event == 'update'){
        this.userService.getUsers().then(res=>{
          this.allUsers = res;
          for(let i of this.allUsers){
            if(i.isLoggedIn)this.onlineUsers.push(i);
          }
        });
      }

    });



     this.userService.getUsers().then(res=>{
       this.allUsers = res;
       for(let i of this.allUsers){
         if(i.isLoggedIn)this.onlineUsers.push(i);
       }
     });

      this.nextEpisode = '20/12/20';


      const overlay = document.getElementsByClassName('overlay')[0] as any;

      document.querySelector('#startEpisode').addEventListener('click' , () => {

        const a = document.querySelector('app-main-display') as any ;
        console.log(a);
        a.querySelector('app-starting-main-screen').style.display = 'none';
        console.log(FrameComponent);
      });
      // show overlay
      document.querySelector('.gamepad').addEventListener('click',
        () => {
          overlay.style.display = 'flex';
          document.getElementsByClassName('bg-black')[0].classList.add('blur');
      });

      // hide overlay
      document.getElementsByClassName('overlay')[0].addEventListener('click' , () => {
          overlay.style.display = 'none';
          document.getElementsByClassName('bg-black')[0].classList.remove('blur');
      });

      // buttons
      document.getElementsByClassName('box')[0].addEventListener('click' , () => {
        this.APIservice.broadcastEvent('new-quiz-game' , 'quiz');
        location.href = 'main/quiz';
      });
      document.getElementsByClassName('box')[1].addEventListener('click' , ()=>{
        this.APIservice.broadcastEvent('new-photo-game' , 'Photo');
        location.href= 'main/photo';
      });
      document.getElementsByClassName('box')[2].addEventListener('click' , ()=>{
        this.APIservice.broadcastEvent('new-cat-game' , 'CAT');
        location.href= 'main/catwalk';
      });

  }


}
