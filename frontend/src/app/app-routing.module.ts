import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TwitterComponent } from './main-display/twitter/twitter.component';
import { UsersInfoComponent } from './wall/users-info/users-info.component';
import { ModelsInfoComponent } from './wall/models-info/models-info.component';
import { TonightHighlightsComponent } from './wall/tonight-highlights/tonight-highlights.component';
import { WallComponent } from './wall/wall.component';
import { WallNotificationComponent } from './wall/wall-notification/wall-notification.component';
// import { ChatComponent } from './main-display/chat/chat.component';

const routes: Routes = [
  { path: 'wall', component: WallComponent },
  { path: 'wall/tonight-highlights', component: TonightHighlightsComponent },
  { path: 'wall/models-info', component: ModelsInfoComponent },
  { path: 'wall/users-info', component: UsersInfoComponent },
  { path: 'wall/wall-notification', component: WallNotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

