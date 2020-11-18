import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Model} from '../../model/models';

@Component({
  selector: 'app-models-info',
  templateUrl: './models-info.component.html',
  styleUrls: ['./models-info.component.css']
})
export class ModelsInfoComponent implements OnInit {
  models = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.models = Model.getModels();
  }

}
