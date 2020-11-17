import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { WallComponent } from './wall/wall.component';
import { TableComponent } from './table/table.component';
import { PhoneComponent } from './phone/phone.component';
import { ChatComponent } from './main-display/chat/chat.component';
import { TopnavComponent } from './phone/topnav/topnav.component';
import { EnterFormsComponent } from './phone/enter-forms/enter-forms.component';
import { InputComponent } from './phone/enter-forms/input/input.component';
import { SocialComponent } from './phone/enter-forms/social/social.component';
import { MainMenuComponent } from './phone/main-menu/main-menu.component';
import { MenuButtonComponent } from './phone/main-menu/menu-button/menu-button.component';
import { GamesComponent } from './phone/games/games.component';
import { PhotoEditorComponent } from './phone/photo-editor/photo-editor.component';
import { EditorButtonComponent } from './phone/photo-editor/editor-button/editor-button.component';


@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    WallComponent,
    TableComponent,
    PhoneComponent,
    ChatComponent,
    TopnavComponent,
    EnterFormsComponent,
    InputComponent,
    SocialComponent,
    MainMenuComponent,
    MenuButtonComponent,
    GamesComponent,
    PhotoEditorComponent,
    EditorButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
