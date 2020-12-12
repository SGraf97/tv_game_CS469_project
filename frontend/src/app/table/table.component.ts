import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import {SocketsService} from "../services";
import {APIService} from "../services/API.service";

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
  public exit = false;


  constructor(private socketService : SocketsService , private APIService: APIService) {
    this.state = this.states.BUZZER;
    console.log(this.state);
   }

  ngOnInit(): void {
    this.buzzers = [];
    this.options = [];

    this.state = this.states.NONE;

    // Listening at Socket
    this.socketService.syncAllMessages().subscribe(msg=> {

      if(msg.event == 'table-question'){
        this.options = msg.message.options;
        this.correctAnswer = msg.message.answer;
        this.state = this.states.BUZZER;
        this.exit = true;
      }
    })

    // getting users
    this.socketService.syncMessages("userAccepted").subscribe(
      msg => {
        this.buzzers.push(msg.message);
      }
    )

    //init state
    this.optionsDisplay="none";
    this.buzzersDisplay="block";

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
      this.APIService.broadcastEvent('end-game' , {message: 'correct'});
      console.log(this.userAnswering);
    }else{
      this.APIService.broadcastEvent('end-game' , {message: 'wrong'});
      console.log(option);
    }
    this.state = this.states.NONE;
  }

  leave(){
    this.APIService.broadcastEvent('end-game' , '');
    this.exit = false;
  }
}
