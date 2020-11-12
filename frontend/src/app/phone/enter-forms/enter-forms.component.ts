import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-forms',
  templateUrl: './enter-forms.component.html',
  styleUrls: ['./enter-forms.component.css']
})
export class EnterFormsComponent implements OnInit {
  @Input() enter:string;
  constructor() { }

  ngOnInit(): void {
    
  }

}
