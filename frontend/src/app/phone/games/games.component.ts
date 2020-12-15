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
  photoToVote: any;

  constructor(private userService: UserService, private apiService: APIService, private socketService: SocketsService) { }

  ngOnInit(): void {
    this.state = this.states.WAIT;
    this.userService.loggedInUser.subscribe(user => this.loggedInUser = user)
    this.socketService.syncMessages("turn").subscribe(
      msg => {
        this.state = this.states.WAIT;
        this.turn = new User(msg.message.username, msg.message.color);
        this.turn._id = msg.message._id;
      }
    )

    this.socketService.syncMessages("votePhoto").subscribe(
      msg => {
        console.log(msg)
        this.state = this.states.RATE;
        this.photoToVote = msg.message.img;
      }
    )

  }

  like() {
    if (!this.turn)
      return;
    this.turn.xp = this.turn.xp + 10;
    this.userService.update(this.turn)
    this.changeState()
    this.apiService.broadcastEvent("voted", "");
  }

  dislike() {
    this.changeState()
    this.apiService.broadcastEvent("voted", "");
  }

  changeState() {
    switch (this.state) {
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
