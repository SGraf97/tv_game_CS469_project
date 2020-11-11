import { Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    console.log(this);
  }

}
