import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { WallComponent } from './wall/wall.component';
import { TableComponent } from './table/table.component';
import { PhoneComponent } from './phone/phone.component';
import { ChatComponent } from './main-display/chat/chat.component';
import { UsersInfoComponent } from './wall/users-info/users-info.component';
import { ModelsInfoComponent } from './wall/models-info/models-info.component';
import { TonightHighlightsComponent } from './wall/tonight-highlights/tonight-highlights.component';
import { WallNotificationComponent } from './wall/wall-notification/wall-notification.component';
import { TwitterComponent } from './main-display/twitter/twitter.component';
import { UsersCaruselComponent } from './main-display/users-carusel/users-carusel.component';
import { FrameComponent } from './main-display/frame/frame.component';
import { StartingMainScreenComponent } from './main-display/starting-main-screen/starting-main-screen.component';
import { SelectDeviceComponent } from './select-device/select-device.component';
import { QuizGameComponent } from './main-display/quiz-game/quiz-game.component';
import { VotingComponent } from './main-display/voting/voting.component';
import { CatwalkComponent } from './main-display/catwalk/catwalk.component';
import { PhotoShotGameComponent } from './main-display/photo-shot-game/photo-shot-game.component';
import { TopnavComponent } from './phone/topnav/topnav.component';
import { EnterFormsComponent } from './phone/enter-forms/enter-forms.component';
import { InputComponent } from './phone/enter-forms/input/input.component';
import { SocialComponent } from './phone/enter-forms/social/social.component';
import { MainMenuComponent } from './phone/main-menu/main-menu.component';
import { MenuButtonComponent } from './phone/main-menu/menu-button/menu-button.component';
import { GamesComponent } from './phone/games/games.component';
import { PhotoEditorComponent } from './phone/photo-editor/photo-editor.component';
import { EditorButtonComponent } from './phone/photo-editor/editor-button/editor-button.component';
import { ProfileComponent } from './phone/profile/profile.component';
import { ChatComponent as PhoneChat } from './phone/chat/chat.component';
import { ToiletBreakComponent } from './phone/toilet-break/toilet-break.component';
import { ChatContainerComponent } from './phone/chat-container/chat-container.component';
import { RouterModule, Routes } from '@angular/router';
import { BuzzerComponent } from './table/buzzer/buzzer.component';
import { OptionComponent } from './table/option/option.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';
import { UserService }  from './services/user.service';
import { CountdownModule } from 'ngx-countdown';


@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    WallComponent,
    ModelsInfoComponent,
    UsersInfoComponent,
    TonightHighlightsComponent,
    WallNotificationComponent,
    TableComponent,
    BuzzerComponent,
    OptionComponent,
    PhoneComponent,
    ChatComponent,
    TwitterComponent,
    UsersCaruselComponent,
    FrameComponent,
    StartingMainScreenComponent,
    SelectDeviceComponent,
    QuizGameComponent,
    VotingComponent,
    CatwalkComponent,
    PhotoShotGameComponent,
    ChatComponent,
    TopnavComponent,
    EnterFormsComponent,
    InputComponent,
    SocialComponent,
    MainMenuComponent,
    MenuButtonComponent,
    GamesComponent,
    PhotoEditorComponent,
    EditorButtonComponent,
    ProfileComponent,
    PhoneChat,
    ToiletBreakComponent,
    ChatContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    BsDropdownModule,
    HttpClientModule,
    AlertModule,
    CountdownModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
