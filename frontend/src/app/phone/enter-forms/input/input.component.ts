import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() id:string;
  @Input() type:string;
  @Input() label:string;

  constructor() { }

  ngOnInit(): void {
  }


}
