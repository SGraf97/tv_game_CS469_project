import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-device',
  templateUrl: './select-device.component.html',
  styleUrls: ['./select-device.component.css']
})
export class SelectDeviceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeRoute(newRoute: string){
    window.location.href = newRoute;
  }

}
