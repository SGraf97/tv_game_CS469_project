import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

