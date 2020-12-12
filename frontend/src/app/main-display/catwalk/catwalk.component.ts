import {Component,  OnChanges, OnInit} from '@angular/core';
import {User} from '../../model/user';

// import  videojs from 'videojs-record';
import {APIService, SocketsService} from "../../services";
import {delay} from "rxjs/operators";



@Component({
  selector: 'app-catwalk',
  templateUrl: './catwalk.component.html',
  styleUrls: ['./catwalk.component.css']
})
export class CatwalkComponent implements OnInit{


  users : any;
  activeUser:User;

  starting:any;
  videoPreview: any;
  videoRes: any;
  phoneIP:'';
   iterator: any;


  constructor(private socket:SocketsService , private api: APIService) {


    //

  }

  ngOnInit(): void {

    let blockUsers = 0;

    this.api.getAllfrom('user').then(res=>{
      this.users = res;
      console.log(res);
      console.log(this.users);

      this.activeUser = this.users[0];
    });





    this.starting = document.getElementById('recording-catwalk');
    this.videoPreview = document.getElementById('videoPreview');
    this.videoRes = document.getElementById('voteResaults');

    this.starting.style.display = 'block';

    this.socket.syncMessages('userAccepted').subscribe(msg=>{
      if(blockUsers != 0)
        this.users.push(msg);
    });
    setTimeout(() => {
      document.getElementById('timer').style.display = 'none';
      this.iterator = 0;
      this.activeUser = this.users[this.iterator];
      console.log(this.activeUser);

      for(let u of this.users){
        this.showPreview();
        this.showCongrats();
        // this.showLeaderBoard();
      }

      // location.href = '/main/home';
    }, 2000);
  }

















  public showPreview(){
    this.starting.style.display = 'none';
    this.videoPreview.style.display = 'block';

  }

  public showCongrats(){
    document.querySelector('#videoPreview>h1').textContent = 'Congrats ' + this.activeUser.username;
  }

  public showLeaderBoard(){
    this.videoPreview.style.display = 'none';
    this.videoRes.style.display = 'flex';
  }


}



