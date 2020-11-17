import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Model} from '../model/models';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
 
  models = [];
  episode: string;
  user: string;
  time:string;

  constructor(private router: Router) { }
  
 
  ngOnInit(): void {
    
    const overlay = document.getElementsByClassName('overlay')[0] as any;
    this.user="user1";
    this.episode="s03e44";
    this.time="16:30";
    

    document.querySelector('.wall').addEventListener('click', () => {  
        overlay.style.display = 'flex';
    });

    document.querySelector('.close').addEventListener('click', () => {  
      /*console.log("ekei");*/
      overlay.style.display = 'none';
    });
    
    this.models = Model.getModels();
  }

  
  /*onSelect() {
    this.router.navigateByUrl(['/models-info', model]);  // define your component where you want to go
  }*/

  /*Tha einai mia synartisi pou tha epistrefei enan pinaka 3 thesewn (top 3 models) kai tha ta emfanizei ston toixo
  topModels(): {

  }*/

}
