import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {APIService, SocketsService} from "../../services";
import * as html2canvas from "html2canvas";
import * as Html2Canvas from "html2canvas";
@Component({
  selector: 'app-photo-shot-game',
  templateUrl: './photo-shot-game.component.html',
  styleUrls: ['./photo-shot-game.component.css']
})
export class PhotoShotGameComponent implements OnInit {

  users: any;
  activeUser: User;
  images : Blob[];
  imagesBase64: [];
  start: any;
  choosePhoto: any;
  personalRes: any;
  congrats: any;
  userPhotos: any;
  countDownElem: HTMLElement;
  photosTaken: any;

  constructor(private api: APIService, private socket: SocketsService) {
  }

  ngOnInit(): void {
    this.imagesBase64 = [];
    this.photosTaken = 0;
    this.images = [];
    this.start = document.getElementById('gettingReady');
    this.choosePhoto = document.getElementById('chooseBestPhoto');
    this.personalRes = document.getElementById('personalResaults');
    this.congrats = document.getElementById('congratsUser');

    this.api.getAllfrom('user').then(res => {
      this.users = res;
      this.activeUser = this.users[0];
    });


    this.setTimer('#counter');


    this.start.style.display = 'block';


    // listeners


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

    }, 100);

  }

  snapPhoto() {
    if (this.photosTaken >= 5) {
      console.log(this.images);
      for(let i in this.images){
        this.convertBlobToBase64(this.images[i]).then(res=>{
          let image = res as any;
          this.imagesBase64.push(image);
        });
      }

      this.showImagesTochoose();
      console.log(this.imagesBase64);
      return;
    }
    this.photosTaken = this.photosTaken + 1;
    console.log(this.photosTaken);

    this.api.getImage().toPromise().then((res)=>{

      let canvas = document.getElementById('browser_video') as HTMLCanvasElement;
      let contex = canvas.getContext('2d');
      // contex.drawImage(res , 0 , 0 );
      this.images.push(res);
      this.setTimer('#counter');
    });


}


  blobToImage (blob){
    return new Promise(resolve => {
      const url = URL.createObjectURL(blob)
      let img = new Image()
      img.onload = () => {
        URL.revokeObjectURL(url)
        resolve(img)
      }
      img.src = url
    })
  }


  getImageAsBase64FromCanvas(canvas) {
    // return only the base64 image not the header as reported in issue #2
    return canvas.toDataURL('image/jpeg').split(',')[1];

  }

  convertBlobToBase64 (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader;
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }

  showImagesTochoose(){
    this.start.style.display = 'none';
    this.choosePhoto.style.display = 'block';

    this.userPhotos = document.querySelectorAll(`.imageToChoose`) ;
    console.log(this.userPhotos);
    for (let p in this.userPhotos) {
      //adding event listeners to photos
      console.log(p);

    }
  }
  clicked(){
    console.log(this);
  }
}




