import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { SocketsService, UserService } from 'src/app/services';
import { APIService } from 'src/app/services/API.service';

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


  loggedInUser: User;
  turn: User;
  
  constructor(private userService: UserService, private apiService: APIService, private socketService: SocketsService) { }

  ngOnInit(): void {
    this.state = this.states.WAIT;
    this.userService.loggedInUser.subscribe(user => this.loggedInUser = user)
    this.socketService.syncMessages("turn").subscribe(
      msg => {
        this.turn = msg.message;
      }
    )
  }

  like(){
    if(!this.turn)
      return;
    this.turn.xp = this.turn.xp+10;
    this.userService.update(this.turn)
    this.changeState()
  }

  dislike(){
    this.changeState()
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
