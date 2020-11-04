import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { WallComponent } from './wall/wall.component';
import { TableComponent } from './table/table.component';
import { PhoneComponent } from './phone/phone.component';
import { ChatComponent } from './main-display/chat/chat.component';
import { TwitterComponent } from './main-display/twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    WallComponent,
    TableComponent,
    PhoneComponent,
    ChatComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
