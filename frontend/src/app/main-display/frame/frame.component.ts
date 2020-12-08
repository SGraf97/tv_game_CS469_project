import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {


  id : any;
  link : any;
  constructor() { }

  ngOnInit(): void {

    this.id = 'tgbNymZ7vqY';
    this.link = 'youtube.com/embed/';
    this.link += this.id;


  }

}
