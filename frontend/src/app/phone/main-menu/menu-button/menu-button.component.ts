import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {
  @Input() btnClass: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeRoute(newRoute: string){
    if(newRoute !== "")
      window.location.href = newRoute;
  }

}
