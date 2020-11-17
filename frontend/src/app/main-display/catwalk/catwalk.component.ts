import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user'
@Component({
  selector: 'app-catwalk',
  templateUrl: './catwalk.component.html',
  styleUrls: ['./catwalk.component.css']
})
export class CatwalkComponent implements OnInit {


  users : any;
  activeUser:User;

  starting:any;
  videoPreview: any;
  videoRes: any;



  constructor() { }

  ngOnInit(): void {

    this.starting = document.getElementById('recording-catwalk');
    this.videoPreview = document.getElementById('videoPreview');
    this.videoRes = document.getElementById('voteResaults');

    this.starting.style.display = 'block';


    setTimeout(() => {
      this.starting.style.display = 'none';
      this.videoPreview.style.display = 'block';
      console.log('mpika');
      setTimeout(() => {
        document.querySelector('#videoPreview>h1').textContent = 'Congrats ' + this.activeUser.username;

        setTimeout(() => {
            this.videoPreview.style.display = 'none';
            this.videoRes.style.display = 'flex';
            alert('θα πρεπει να παμε πισω με καποιο guesture η βαζωντας το link /main');
        }, 5000);

      }, 5000);
    }, 5000);



    this.users =  User.getUsers();

    this.activeUser = this.users[0];
    
  }

}



