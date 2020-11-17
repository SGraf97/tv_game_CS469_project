import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterComponent } from './main-display/twitter/twitter.component';
import { UsersInfoComponent } from './wall/users-info/users-info.component';
import { ModelsInfoComponent } from './wall/models-info/models-info.component';
import { TonightHighlightsComponent } from './wall/tonight-highlights/tonight-highlights.component';
import { WallComponent } from './wall/wall.component';
import { ChatComponent } from './main-display/chat/chat.component';

const routes: Routes = [
  { path: '', component: TwitterComponent },
  { path: 'tonight-highlights', component: TonightHighlightsComponent },
  { path: 'models-info', component: ModelsInfoComponent },
  { path: 'users-info', component: UsersInfoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

