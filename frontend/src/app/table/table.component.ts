import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { SmartSpeakerService } from '../services/smart-speaker.service';
import { Router } from '@angular/router';
import { SocketsService } from "../services";
import { APIService } from "../services/API.service";
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;

  public userAnswering: any;
  public correctAnswer: any;
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

  //voice commands
  private _smartSpeaker: any;


  constructor(private socketService: SocketsService, private APIService: APIService, private router: Router) {
    this.state = this.states.BUZZER;
    console.log(this.state);
    this._smartSpeaker = new SmartSpeakerService();
  }

  ngOnInit(): void {
    this.buzzers = [];
    this.options = [];

    this.state = this.states.NONE;
    this.exit = false;

    // Listening at Socket
    this.socketService.syncAllMessages().subscribe(msg => {

      if (msg.event == 'table-question') {
        this.options = msg.message.options;
        this.correctAnswer = msg.message.answer;
        this.state = this.states.BUZZER;
        this.exit = true;
        console.log(this.options)
      }
    });




    // getting users
    this.socketService.syncMessages("userAccepted").subscribe(
      msg => {
        console.log(msg);
        this.buzzers.push(msg.message);
        this.exit = false;
      }
    )

    //init state
    this.optionsDisplay = "none";
    this.buzzersDisplay = "block";

    /*voice for options*/
    this._smartSpeaker.addCommand('option a', () => {
      if (this.state === this.states.OPTION)
        this.checkAnswer(this.options[0])
    });


    this._smartSpeaker.addCommand('option b', () => {
      console.log(this.options[1])
      if (this.state === this.states.OPTION)
        this.checkAnswer(this.options[1])
    });

    this._smartSpeaker.addCommand('option c', () => {
      console.log(this.options[2])
      if (this.state === this.states.OPTION) 
        this.checkAnswer(this.options[2])
    });

    this._smartSpeaker.addCommand('option d', () => {
      if (this.state === this.states.OPTION)
        this.checkAnswer(this.options[3])
    });

  }

  //change rendered elements
  changeState(newState: string): void {
    //change state
    this.state = newState;
    // console.log(this.state);
  }

  onTimerFinished(event: any) {
    if (event.left == 0) {
      this.APIService.broadcastEvent('end-game', { message: 'wrong' });
      this.state = this.states.NONE;
      this.exit = true;
    }
  }

  public checkAnswer(option: String) {
    if (option == this.correctAnswer) {
      console.log('CORRECT!!!!!!!');
      this.APIService.update('user/' + this.userAnswering._id, { level: this.userAnswering.level + 1 });
      this.APIService.broadcastEvent('end-game', { message: 'correct' });
      console.log(this.userAnswering);
    } else {
      this.APIService.broadcastEvent('end-game', { message: 'wrong' });
      console.log(option);
    }
    this.state = this.states.NONE;
    this.exit = true;
  }

  leave() {
    this.APIService.broadcastEvent('end-game', '');
    this.state = this.states.NONE;
    this.exit = false;
  }
}
