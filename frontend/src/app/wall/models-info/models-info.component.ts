import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Model} from '../../model/models';

@Component({
  selector: 'app-models-info',
  templateUrl: './models-info.component.html',
  styleUrls: ['./models-info.component.css']
})
export class ModelsInfoComponent implements OnInit {
  // @Input() name:string;
  //@Input() age:string;
  //@Input() height:string;
  age: string;
  height: string;
  models = [];
  src: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    /*this.name = this.route.snapshot.paramMap.get('name');*/
    this.route.paramMap.subscribe( params =>
      this.name = params.get('name')
    )
    /*this.route.paramMap.subscribe( params =>
      this.age = params.get('age')
    ),
    this.route.paramMap.subscribe( params =>
      this.height = params.get('height')
    )*/

    this.models = Model.getModels();
    this.sortArray();

    /*find in array the model from input name*/
    const result = this.models.find( ({ fullname }) => fullname === this.name );
    //console.log(result);
    this.src = "./assets/models/" + result.name + ".jpg";
    this.age = result.age;
    this.height = result.height;

    document.querySelector('.hand').addEventListener('click' , () => {
      //console.log('ekei');
      this.router.navigate(['/wall']);
    });
  }

  sortArray() {
    this.models.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));

    /*console.log(this.models[1]);*/
  }

}
