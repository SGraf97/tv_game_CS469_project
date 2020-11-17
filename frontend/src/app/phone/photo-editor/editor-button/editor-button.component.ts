import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-button',
  templateUrl: './editor-button.component.html',
  styleUrls: ['./editor-button.component.css']
})
export class EditorButtonComponent implements OnInit {
  @Input() inBtn: any;
  constructor() { }

  ngOnInit(): void {
  }

}
