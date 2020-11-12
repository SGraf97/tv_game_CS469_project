import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersInfoComponent } from './wall/users-info/users-info.component';
import { ModelsInfoComponent } from './wall/models-info/models-info.component';
import { WallComponent } from './wall/wall.component';

const routes: Routes = [
  { path: '', component: WallComponent },
  { path: 'models-info', component: ModelsInfoComponent },
  { path: 'users-info', component: UsersInfoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

