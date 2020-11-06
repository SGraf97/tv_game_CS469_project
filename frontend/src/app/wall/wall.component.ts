import { Component, OnInit} from '@angular/core';
import {Model} from '../model/models';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
 
  models = [];

  constructor() { }

  ngOnInit(): void {
    
    this.models = [
      new Model("ΗΡΑΚΛΗΣ", 19, 177, 116),
      new Model("ΙΡΙΔΑ", 19, 177, 96),
      new Model("ΜΕΓΚΥ", 19, 177, 85)
    ];
  }

  /*Tha einai mia synartisi pou tha epistrefei enan pinaka 3 thesewn (top 3 models) kai tha ta emfanizei ston toixo
  topModels(): string[] {

  }*/

}
