import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Model} from '../model/models';
import {SmartSpeakerService} from '../services/smart-speaker.service';
import { ModelsInfoComponent } from './models-info/models-info.component';

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
  modelName1:string;
  modelName2:string;
  modelName3:string;
  private _smartSpeaker: any;
  image1: string;
  image2: string;
  image3: string;

  constructor(private router: Router) { 
    this._smartSpeaker = new SmartSpeakerService();
  }
  
 
  ngOnInit(): void {
    const overlay = document.getElementsByClassName('overlay')[0] as any;
    this.user="User1";
    this.episode="s03e44";
    this.time="16:30";

    
    /*this._smartSpeaker.addCommand('hello', ()=>{
      this._smartSpeaker.speak('hi man');
    });*/
    

    document.querySelector('.wall').addEventListener('click', () => {  
        /*overlay.style.display = 'block';*/
        overlay.style.visibility = 'visible';
    });

    document.querySelector('.close').addEventListener('click', () => {  
      /*console.log("ekei");*/
      overlay.style.display = 'none';
      /*overlay.style.visibility = 'hidden';*/
    });
    
    this.models = Model.getModels();
    this.sortArray();
    this.image1 = "./assets/models/" + this.models[0].name + ".jpg";
    this.image2 = "./assets/models/" + this.models[1].name + ".jpg";
    this.image3 = "./assets/models/" + this.models[2].name + ".jpg";
    //console.log(this.src);

    this.modelName1=this.models[0].fullname;
    this.modelName2=this.models[1].fullname;
    this.modelName3=this.models[2].fullname;
  }

  /*sort array of models by points*/
  sortArray() {
    this.models.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));
 
    /*console.log(this.models[1]);*/
  }

  
  /*onSelect() {
    this.router.navigateByUrl(['/models-info', model]);  // define your component where you want to go
  }*/

}
