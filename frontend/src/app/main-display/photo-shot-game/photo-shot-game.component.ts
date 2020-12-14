import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {APIService, SocketsService} from "../../services";
import * as html2canvas from "html2canvas";
@Component({
  selector: 'app-photo-shot-game',
  templateUrl: './photo-shot-game.component.html',
  styleUrls: ['./photo-shot-game.component.css']
})
export class PhotoShotGameComponent implements OnInit {

  users: any;
  activeUser: User;

  start: any;
  choosePhoto: any;
  personalRes: any;
  congrats: any;
  userPhotos: any;
  countDownElem: HTMLElement;
  photosTaken: Number;

  constructor(private api: APIService, private socket: SocketsService) {
  }

  ngOnInit(): void {

    this.start = document.getElementById('gettingReady');
    this.choosePhoto = document.getElementById('chooseBestPhoto');
    this.personalRes = document.getElementById('personalResaults');
    this.congrats = document.getElementById('congratsUser');

    this.api.getAllfrom('user').then(res => {
      this.users = res;
      this.activeUser = this.users[0];
    });


    this.setTimer('#counter');


    // this.users =  User.getUsers();

    // navigate
    this.start.style.display = 'block';
    // setTimeout(() => {
    //   this.choosePhoto.style.display = 'block';
    //   this.start.style.display = 'none';
    // }, 5000);

    // listeners
    this.userPhotos = document.querySelectorAll('#choosing>img');

    for (let p of this.userPhotos) {
      p.addEventListener('click', () => {
        this.choosePhoto.style.display = 'none';
        this.personalRes.style.display = 'block';
        setTimeout(() => {
          this.personalRes.style.display = 'none';
          this.congrats.style.display = 'block';
        }, 2000);
      });
    }

    document.getElementById('exit').addEventListener('click', () => {
      location.href = '/main';
    });


  }


  setTimer(queryElement: String) {

    this.countDownElem = document.querySelector(queryElement);

    this.countDownElem.innerText = '10';
    let interval = setInterval(() => {
      this.countDownElem.innerText = String(Number(this.countDownElem.innerText) - 1);
      if (this.countDownElem.innerText == '0') {
        clearInterval(interval);
        this.snapPhoto();
      }

    }, 200);

  }

  snapPhoto() {
    if (this.photosTaken > 5) {
      return;
    }

    this.countDownElem.innerText = 'SNAP!';
    let video = document.getElementById('video') as HTMLImageElement;

    let canvas = document.getElementById('browser_video') as HTMLCanvasElement;
    let contex = canvas.getContext('2d');
    contex.drawImage(video, 0, 0);


    // let video = document.querySelector('*') as HTMLImageElement;

    html2canvas(document.querySelector('*')).then((canvas)=>{
      document.getElementById('test').append(canvas);
      console.log(this.getImageAsBase64FromCanvas(canvas));
    });




    // console.log(canvas.getContext('2d'));

    // console.log(this.getImageAsBase64FromCanvas(canvas));



  }


  getImageAsBase64FromCanvas(canvas) {
    // return only the base64 image not the header as reported in issue #2
    return canvas.toDataURL('image/jpeg').split(',')[1];

  }

  getImageAsBlobFromCanvas(canvas) {

    // function that converts the dataURL to a binary blob object
    function dataURLtoBlob(dataUrl) {
      // Decode the dataURL
      let binary = atob(dataUrl.split(',')[1]);

      // Create 8-bit unsigned array
      let array = [];
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }

      // Return our Blob object
      return new Blob([new Uint8Array(array)], {
        type: 'image/jpg',
      });
    }

    let fullQuality = canvas.toDataURL('image/jpeg', 1.0);
    return dataURLtoBlob(fullQuality);

  }


}




