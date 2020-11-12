import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-models-info',
  templateUrl: './models-info.component.html',
  styleUrls: ['./models-info.component.css']
})
export class ModelsInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
