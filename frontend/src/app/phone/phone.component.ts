import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services';
import { EnterFormsComponent } from './enter-forms/enter-forms.component';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})

export class PhoneComponent implements OnInit {
  public state: string;
  loggedInUser: User;

  constructor() { 
  }

  ngOnInit(): void {
    this.state = "Login";
  }

  // ngOnChange(){
  //   this.loggedInUser = this.enterForms.user;
  //   console.log('user changed: ')
  //   console.log(this.loggedInUser)
  // }

  

  
}
