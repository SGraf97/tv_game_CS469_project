import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import {SmartSpeakerService} from '../services/smart-speaker.service';
import { Router } from '@angular/router';
import {APIService, SocketsService} from "../services";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public userAnswering:any;
  public correctAnswer:any;
  public states = {
    BUZZER: "buzz",
    OPTION: "opt",
    NONE: "none"
  }
  public state: string;

  //components' styles
  public countdownStyle = {
    fontSize: "",
    float: "",
    margin: ""
  };
  public optionsDisplay: string;
  public buzzersDisplay: string;
  public tableDisplay: string;

  //data
  public buzzers: any;
  public options: any;

  //voice commands
  private _smartSpeaker: any;


  constructor(private socketService : SocketsService , private APIService:APIService, private router: Router) {
    this.state = this.states.BUZZER;
    console.log(this.state);
    this._smartSpeaker = new SmartSpeakerService();
  }

  ngOnInit(): void {
    this.buzzers = [];
    this.options = [];

    // Listening at Socket
    this.socketService.syncAllMessages().subscribe(msg=> {
      console.log(msg);
      if(msg.event == 'table-question'){
        this.options = msg.message.options;
        console.log(msg);
        console.log(this.options);
        this.correctAnswer = msg.message.answer;
      }

      if(msg.event == 'quiz'){
        console.log('we got a new game');
        this.state = this.states.BUZZER;
      }
    })




    // getting users
    this.APIService.getAllfrom('user').then(res=>{
      let users:any;
      console.log(res);
      users = res;
      for(let u of users){
        if(u.isLoggedIn){
          this.buzzers.push(u);
        }
      }
      console.log(this.buzzers);

    });

    //init state
    //N E E D S  T O  C H A N G E
    this.state = this.states.NONE;
    this.optionsDisplay="none";
    this.buzzersDisplay="block";

    /*voice for options*/
    this._smartSpeaker.addCommand('option a', ()=>{
      this._smartSpeaker.speak('you choose option a');
      console.log('You choose Option A'); 
      //this.router.navigate(['/path_name']);
    });
  
    this._smartSpeaker.addCommand('option b', ()=>{
      this._smartSpeaker.speak('you choose option b');
      console.log('You choose Option B');
      //this.router.navigate(['/path_name']);
    });
  
    this._smartSpeaker.addCommand('option c', ()=>{
      this._smartSpeaker.speak('you choose option c');
      console.log('You choose Option C');
      //this.router.navigate(['/path_name']);
    });
  
    this._smartSpeaker.addCommand('option d', ()=>{
      this._smartSpeaker.speak('you choose option d');
      console.log('You choose Option D');
      //this.router.navigate(['/path_name']);
    });

  }

  //change rendered elements
  changeState(newState: string): void {
    //change state
    this.state = newState;
    // console.log(this.state);
  }


  startCountDown(){
    let countDownElement = document.getElementById('table-countdown');
    console.log(countDownElement);
  }

  public checkAnswer(option:String){
    if(option == this.correctAnswer){
      console.log('CORRECT!!!!!!!');
      this.APIService.update('user/'+this.userAnswering._id , {level : this.userAnswering.level+1 });
      this.APIService.broadcastEvent('end-game' , 'we got a winner');
      console.log(this.userAnswering);
    }else{
      this.APIService.broadcastEvent('end-game' , 'no winner');
      console.log(option);
    }

    this.state = this.states.NONE;
  }


}
