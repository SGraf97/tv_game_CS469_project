import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Model} from '../../model/models';

@Component({
  selector: 'app-models-info',
  templateUrl: './models-info.component.html',
  styleUrls: ['./models-info.component.css']
})
export class ModelsInfoComponent implements OnInit {
  @Input() name:string;
  @Input() age:string;
  @Input() height:string;
  models = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*this.name = this.route.snapshot.paramMap.get('name');*/
    this.route.paramMap.subscribe( params =>
      this.name = params.get('name') 
    ),
    this.route.paramMap.subscribe( params =>
      this.age = params.get('age')
    ),
    this.route.paramMap.subscribe( params =>
      this.height = params.get('height')
    )
    
    this.models = Model.getModels();
    this.sortArray();
    /*console.log(this.model);*/
  }

  sortArray() {
    this.models.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));
 
    /*console.log(this.models[1]);*/
  }

}
