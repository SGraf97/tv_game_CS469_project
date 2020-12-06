import { Component, Input, OnInit } from '@angular/core';
import {UserService} from '../../model/user.service';

@Component({
  selector: 'app-enter-forms',
  templateUrl: './enter-forms.component.html',
  styleUrls: ['./enter-forms.component.css']
})

export class EnterFormsComponent implements OnInit {
  @Input() state: string;
  public errMssg: boolean;
  public colors: boolean;
  public colorList: any;

  public states = {
    LOGIN: "Login",
    REGISTER: "Sign Up",
    COLORS: "Pick Your Color"
  };
  public stateAlt: string;

  constructor(private userService: UserService) {
    this.state = this.states.LOGIN;
  }

  ngOnInit(): void {
    this.stateAlt = this.state === this.states.LOGIN ? this.states.REGISTER : this.states.LOGIN;
    this.colors = false;

    this.colorList = [
      "#FFFFFF",
      "#565656",
      "#1E1E1E",
      "#0076CC",
      "#E76F51",
      "#FFB500",
      "#264653",
      "#EE7B90"
    ]
  }

  //will user authorization
  enterFunc() {
    this.errMssg = false;
    if (this.state === this.states.LOGIN){
      let users = this.userService.getByUsername('user1');
      console.log(users);
    }
    else if(this.state === this.states.REGISTER) {
      this.errMssg = false;
      this.state = this.states.COLORS;
      this.colors = true;
    }else
      window.location.href = "/phone/menu";
  }

  changeState() {
    this.colors = false;
    this.errMssg = false;
    this.state = this.state === this.states.LOGIN ? this.states.REGISTER : this.states.LOGIN;

    this.stateAlt = this.state === this.states.LOGIN ? this.states.REGISTER : this.states.LOGIN;
    console.log("state: " + this.state);
  }
}
