import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OptionModule {
  option: string;
  constructor(option: string) {
    this.option = option;
  }
 }
