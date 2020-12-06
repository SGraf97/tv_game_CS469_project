import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import {SmartSpeakerService} from '../smart-speaker.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html', 
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
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

  constructor() {
    this.state = this.states.BUZZER;
    console.log(this.state);
    this._smartSpeaker = new SmartSpeakerService();
  }

  ngOnInit(): void {
    //init state
    //N E E D S  T O  C H A N G E
    this.state = this.states.BUZZER;
    this.optionsDisplay="none";
    this.buzzersDisplay="block";

    //initalize buzzers
    this.buzzers = [
      //needs users that already exist somewhere
      //will change (data from DB)
      new User('user1', '#E76F51'),
      new User('User2', '#418791'),
      new User('User3', '#FFB500'),
      new User('user3', 'white')
    ];

    //initialize options
    //will change (data from DB)
    this.options = [
      "option A",
      "option B",
      "option C",
      "option D",
    ];

    this._smartSpeaker.addCommand('option a', ()=>{
      this._smartSpeaker.speak('you choose option a');
      console.log('You choose Option A'); 
    });

    this._smartSpeaker.addCommand('option b', ()=>{
      this._smartSpeaker.speak('you choose option b');
      console.log('You choose Option B');
    });

    this._smartSpeaker.addCommand('option c', ()=>{
      this._smartSpeaker.speak('you choose option c');
      console.log('You choose Option C');
    });

    this._smartSpeaker.addCommand('option d', ()=>{
      this._smartSpeaker.speak('you choose option d');
      console.log('You choose Option D');
    });

  }

  //change rendered elements
  changeState(newState: string): void {
    //change state
    this.state = newState;
    console.log(this.state);
  }

}
