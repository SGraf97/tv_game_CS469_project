import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainDisplayComponent} from './main-display/main-display.component';
import {StartingMainScreenComponent} from './main-display/starting-main-screen/starting-main-screen.component';
import {SelectDeviceComponent} from './select-device/select-device.component';
import {QuizGameComponent} from './main-display/quiz-game/quiz-game.component';
import {VotingComponent} from './main-display/voting/voting.component';
import {CatwalkComponent} from './main-display/catwalk/catwalk.component';
import {PhotoShotGameComponent} from './main-display/photo-shot-game/photo-shot-game.component';
import { UsersInfoComponent } from './wall/users-info/users-info.component';
import { ModelsInfoComponent } from './wall/models-info/models-info.component';
import { TonightHighlightsComponent } from './wall/tonight-highlights/tonight-highlights.component';
import { WallComponent } from './wall/wall.component';
import { WallNotificationComponent } from './wall/wall-notification/wall-notification.component';
import { ChatComponent as PhoneChat } from './phone/chat/chat.component';
import { EnterFormsComponent } from './phone/enter-forms/enter-forms.component';
import { GamesComponent } from './phone/games/games.component';
import { MainMenuComponent } from './phone/main-menu/main-menu.component';
import { PhotoEditorComponent } from './phone/photo-editor/photo-editor.component';
import { ProfileComponent } from './phone/profile/profile.component';
import { ToiletBreakComponent } from './phone/toilet-break/toilet-break.component';
import { CommonModule } from '@angular/common';

import { from } from 'rxjs';
const routes: Routes = [
  {path: 'main/home' , component: MainDisplayComponent},
  {path: 'main' , component : StartingMainScreenComponent},
  {path : '' , component: SelectDeviceComponent },
  {path : 'main/quiz' , component : QuizGameComponent},
  {path: 'main/voting' , component: VotingComponent},
  {path: 'main/catwalk' , component: CatwalkComponent},
  {path: 'main/photo' , component: PhotoShotGameComponent },
  { path: 'wall', component: WallComponent },
  { path: 'wall/tonight-highlights', component: TonightHighlightsComponent },
  { path: 'wall/models-info', component: ModelsInfoComponent },
  { path: 'wall/users-info', component: UsersInfoComponent },
  { path: 'wall/wall-notification', component: WallNotificationComponent},
  {path: 'phone/menu' , component: MainMenuComponent},
  {path: 'phone/login' , component: EnterFormsComponent},
  {path: 'phone/vote' , component: GamesComponent},
  {path: 'phone/profile' , component: ProfileComponent},
  {path: 'phone/edit' , component: PhotoEditorComponent},
  {path: 'phone/chat' , component: PhoneChat},
  {path: 'phone/wc', component: ToiletBreakComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

