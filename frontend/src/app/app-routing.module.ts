import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainDisplayComponent} from './main-display/main-display.component';
import {StartingMainScreenComponent} from './main-display/starting-main-screen/starting-main-screen.component';
import {SelectDeviceComponent} from './select-device/select-device.component';
import {QuizGameComponent} from './main-display/quiz-game/quiz-game.component';
import {VotingComponent} from './main-display/voting/voting.component';

const routes: Routes = [
  {path: 'main/home' , component: MainDisplayComponent},
  {path: 'main' , component : StartingMainScreenComponent},
  {path : '' , component: SelectDeviceComponent },
  {path : 'main/quiz' , component : QuizGameComponent},
  {path: 'main/voting' , component: VotingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

