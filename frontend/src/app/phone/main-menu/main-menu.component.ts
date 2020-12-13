import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { SocketsService, UserService } from 'src/app/services';
import { APIService } from 'src/app/services/API.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  loggedInUser: User;
  public btnClass: string;
  public menuButtons: any;
  public game: string;

  public tweetText = "Write your tweet...#gntm";

  constructor(private userService: UserService, private apiService: APIService, private socketService: SocketsService) { }

  ngOnInit(): void {
    this.initMenuButtons();
    this.userService.loggedInUser.subscribe(user => this.loggedInUser = user)
    //get new game's notification event
    this.socketService.syncAllMessages().subscribe(
      msg => {
        if (msg.event === "quiz" || msg.event === "catwalk" || msg.event === "photoshooting") {
          document.getElementById("toggleGameModal").click();
          this.game = msg.event;
        }
      }
    )

    //if user is not logged in, do not allow access in main menu
    if (!this.loggedInUser)
      window.location.href = "phone/login"

  }


  postTweet() {
    let username = this.loggedInUser.username;
    this.apiService.create('twitter', { username, twit: this.tweetText });
  }

  tweet(event: any) {
    this.tweetText = event.target.value;
  }

  acceptInvitaton() {
    this.apiService.broadcastEvent("userAccepted", this.loggedInUser);
    if (this.game === "photoshooting" || this.game === "catwalk")
      window.location.href = "/phone/vote"
  }

  autoClose() {
    setTimeout(() => {
      document.getElementById("decline").click();
    }, 10000);
  }

  initMenuButtons() {
    this.menuButtons = {
      screenshot: {
        class: "fas fa-camera fa-4x pt-2 mx-auto",
        background: "#E76F51",
        color: "black",
        label: "Screenshot",
        target: "#",
        toggle: "",
        route: "/phone/edit"
      },
      capture: {
        class: "fas fa-video fa-4x pt-2 mx-auto",
        background: "#264653",
        color: "#F15253",
        label: "Record",
        route: "/phone/edit"
      },
      info: {
        class: "fas fa-info fa-4x pt-2 mx-auto",
        background: "white",
        color: "black",
        label: "Info",
        target: "#notificationModal",
        toggle: "modal",
        route: ""
      },
      twitter: {
        class: "fab fa-twitter fa-4x pt-2 mx-auto",
        background: "#1DA1F2",
        color: "black",
        label: "Twitter",
        target: "#twitterModal",
        toggle: "modal",
        route: ""
      },
      toilet: {
        class: "fas fa-toilet-paper fa-4x pt-2 mx-auto",
        background: "#264653",
        color: "#F15253",
        label: "Toilet Break",
        target: "",
        toggle: "",
        route: "/phone/wc"
      },
      chat: {
        class: "far fa-comment fa-4x pt-2 mx-auto",
        background: "#E76F51",
        color: "black",
        label: "Live Chat",
        target: "",
        toggle: "",
        route: "/phone/chat"
      },
      games: {
        class: "fas fa-gamepad fa-4x pt-2 mx-auto",
        background: "white",
        color: "black",
        label: "Games",
        target: "",
        toggle: "",
        route: "/phone/vote"
      },
      user: {
        class: "fas fa-user-alt fa-4x pt-2 mx-auto",
        background: "#264653",
        color: "#F15253",
        label: "Profile",
        target: "",
        toggle: "",
        route: "/phone/profile"
      }
    }
  }


}
