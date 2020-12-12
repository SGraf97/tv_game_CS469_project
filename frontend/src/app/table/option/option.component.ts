import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})

export class OptionComponent implements OnInit {
  @Input() option: string;

  public rightOption: any;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}
