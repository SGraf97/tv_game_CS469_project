import { Component, OnInit } from '@angular/core';
import { TopnavComponent } from '../topnav/topnav.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public states = {
    WAIT: "waitForUser",
    RATE: "rateUser",
    DONE: "userRated"
  };

  public state: any;

  public game = "Game";
  
  constructor() { }

  ngOnInit(): void {
    this.state = this.states.WAIT;
  }

  changeState(){
    switch(this.state){
      case this.states.WAIT:
          this.state = this.states.RATE;
          break;
      case this.states.RATE:
          this.state = this.states.DONE;
          break;
      default:
          this.state = this.states.WAIT;
          break;
    }
  }

}
