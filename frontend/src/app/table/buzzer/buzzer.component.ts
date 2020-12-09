import { Component, OnInit, Input } from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-buzzer',
  templateUrl: './buzzer.component.html',
  styleUrls: ['./buzzer.component.css']
})
export class BuzzerComponent implements OnInit {
  @Input() color: string;
  constructor() { }

  user:User;
  ngOnInit(): void {
  }
  public cliked(username:String){
    console.log(username);
  }
}
