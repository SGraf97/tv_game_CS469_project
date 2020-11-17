import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  public btnClass: string;

  public menuButtons: any;
  constructor() { }

  ngOnInit(): void {
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
        route: ""
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
        route: ""
      },
      chat: {
        class: "far fa-comment fa-4x pt-2 mx-auto",
        background: "#E76F51",
        color: "black",
        label: "Live Chat",
        target: "",
        toggle: "",
        route: ""
      },
      games: {
        class: "fas fa-gamepad fa-4x pt-2 mx-auto",
        background: "white",
        color: "black",
        label: "Games",
        target: "#gamesModal",
        toggle: "modal",
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
