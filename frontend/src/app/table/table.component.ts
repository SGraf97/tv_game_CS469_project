import { Component, OnInit } from '@angular/core';
import { OptionModule } from '../model/option/option.module';
import { User } from '../model/user';
import { OptionComponent } from './option/option.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  buzzers: any;
  options: any;
  constructor() { }

  ngOnInit(): void {
    this.buzzers = [
      //needs users that already exist somewhere
      new User('user1', 'red'),
      new User('User2', 'blue'),
      new User('User3', 'green'),
      new User('user3', 'green')
    ];

    this.options = [
      new OptionModule("option A"),
      new OptionModule("option B"),
      new OptionModule("option C"),
      new OptionModule("option D"),
    ];
  }

}
