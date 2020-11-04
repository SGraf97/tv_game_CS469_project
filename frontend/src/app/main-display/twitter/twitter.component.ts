import { Component, OnInit } from '@angular/core';
import {Tweet} from '../../model/tweet';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  // array of storing twits
  twits: any;



  constructor() { }

  ngOnInit(): void {

  //  adding some twits for testing
    this.twits = [
      new Tweet(),
      new Tweet(),
      new Tweet(),
      new Tweet(),
      new Tweet(),
      new Tweet(),
      new Tweet()
    ];



  }

}
