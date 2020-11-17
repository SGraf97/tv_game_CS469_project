import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { WallComponent } from './wall/wall.component';
import { TableComponent } from './table/table.component';
import { PhoneComponent } from './phone/phone.component';
import { ChatComponent } from './main-display/chat/chat.component';
import { TwitterComponent } from './main-display/twitter/twitter.component';
import { BuzzerComponent } from './table/buzzer/buzzer.component';
import { OptionComponent } from './table/option/option.component';
import { UsersInfoComponent } from './wall/users-info/users-info.component';
import { ModelsInfoComponent } from './wall/models-info/models-info.component';
import { TonightHighlightsComponent } from './wall/tonight-highlights/tonight-highlights.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    WallComponent,
    TableComponent,
    PhoneComponent,
    ChatComponent,
    TwitterComponent,
    BuzzerComponent,
    OptionComponent,
    UsersInfoComponent,
    ModelsInfoComponent,
    TonightHighlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
