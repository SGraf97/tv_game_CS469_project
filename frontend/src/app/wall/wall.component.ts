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

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.models = [
      new Model("ΗΡΑΚΛΗΣ", 19, 177, 116),
      new Model("ΙΡΙΔΑ", 21, 177, 96),
      new Model("ΜΕΓΚΥ", 23, 177, 85)
    ];
  }

  /*onSelect() {
    this.router.navigateByUrl(['/models-info', model]);  // define your component where you want to go
  }*/

  /*Tha einai mia synartisi pou tha epistrefei enan pinaka 3 thesewn (top 3 models) kai tha ta emfanizei ston toixo
  topModels(): {

  }*/

}
