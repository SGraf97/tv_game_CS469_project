import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})

export class PhoneComponent implements OnInit {
  public states = {
    LOGIN: "Login",
    REGISTER: "Sign Up"
  };
  public state: string;

  public enter: string;
  public enterAlt: string;

  constructor() { 
    this.state = this.states.LOGIN;
    console.log("state: " + this.state);
  }

  ngOnInit(): void {
    this.enter = this.state;
    this.enterAlt = this.state === this.states.LOGIN? this.states.REGISTER : this.states.LOGIN;
  }

  changeState(){
    this.enterAlt = this.state;
    this.state = this.state === this.states.LOGIN? this.states.REGISTER : this.states.LOGIN;
    this.enter = this.state;
    console.log("state: " + this.state);
  }
}
