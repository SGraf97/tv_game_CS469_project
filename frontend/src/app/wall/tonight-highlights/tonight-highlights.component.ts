import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tonight-highlights',
  templateUrl: './tonight-highlights.component.html',
  styleUrls: ['./tonight-highlights.component.css']
})
export class TonightHighlightsComponent implements OnInit {

  title1: string;
  title2: string;
  constructor() { }

  
  ngOnInit(): void {
    /*(get title from iframe)
    
    let iframe = document.getElementById('video1') as HTMLIFrameElement;
    this.title1 = iframe.contentDocument.title;
    console.log(this.title1);*/

   
  }

 

}
