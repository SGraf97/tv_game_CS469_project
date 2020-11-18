import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent as PhoneChat } from './phone/chat/chat.component';
import { EnterFormsComponent } from './phone/enter-forms/enter-forms.component';
import { GamesComponent } from './phone/games/games.component';
import { MainMenuComponent } from './phone/main-menu/main-menu.component';
import { PhotoEditorComponent } from './phone/photo-editor/photo-editor.component';
import { ProfileComponent } from './phone/profile/profile.component';
import { ToiletBreakComponent } from './phone/toilet-break/toilet-break.component';

const routes: Routes = [
  {path: 'phone/menu' , component: MainMenuComponent},
  {path: 'phone/login' , component: EnterFormsComponent},
  {path: 'phone/vote' , component: GamesComponent},
  {path: 'phone/profile' , component: ProfileComponent},
  {path: 'phone/edit' , component: PhotoEditorComponent},
  {path: 'phone/chat' , component: PhoneChat},
  {path: 'phone/wc', component: ToiletBreakComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

