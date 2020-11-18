import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../../model/models';

@Component({
  selector: 'app-wall-notification',
  templateUrl: './wall-notification.component.html',
  styleUrls: ['./wall-notification.component.css']
})
export class WallNotificationComponent implements OnInit {

  models = [];
  episode: string;
  user: string;
  time:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user="user1";
    this.episode="s03e44";
    this.time="16:30";

    this.models = Model.getModels();
  }

}
