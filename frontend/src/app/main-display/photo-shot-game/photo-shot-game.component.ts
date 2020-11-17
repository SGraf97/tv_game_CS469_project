import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
@Component({
  selector: 'app-photo-shot-game',
  templateUrl: './photo-shot-game.component.html',
  styleUrls: ['./photo-shot-game.component.css']
})
export class PhotoShotGameComponent implements OnInit {

  users : any;
  activeUser:User;

  start: any;
  choosePhoto: any;
  personalRes: any;
  congrats: any;
  userPhotos: any;
  constructor() { }

  ngOnInit(): void {

    this.start = document.getElementById('gettingReady');
    this.choosePhoto = document.getElementById('chooseBestPhoto');
    this.personalRes = document.getElementById('personalResaults');
    this.congrats = document.getElementById('congratsUser');

    
    this.users =  User.getUsers();
    
    this.activeUser = this.users[0];
    
    // navigate
    this.start.style.display = 'block';
    setTimeout(() => {
      this.choosePhoto.style.display = 'block';
      this.start.style.display = 'none';
    }, 5000);
    
    // listeners
    this.userPhotos = document.querySelectorAll('#choosing>img');
   
    for(let p of this.userPhotos){
      p.addEventListener('click' , () => {
        this.choosePhoto.style.display = 'none';
        this.personalRes.style.display = 'block';
        setTimeout(()=>{
          this.personalRes.style.display = 'none';
          this.congrats.style.display = 'block';
        } , 2000);
      });
    }

    document.getElementById('exit').addEventListener('click' , () => {
      location.href = '/main';
    });



  }
}
