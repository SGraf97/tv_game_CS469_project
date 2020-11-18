import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buzzer',
  templateUrl: './buzzer.component.html',
  styleUrls: ['./buzzer.component.css']
})
export class BuzzerComponent implements OnInit {
  @Input() color: string;
  constructor() { }

  ngOnInit(): void {
  }

}
