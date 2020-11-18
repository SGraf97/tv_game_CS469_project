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
// import { TwitterComponent } from './main-display/twitter/twitter.component';
// import { BuzzerComponent } from './table/buzzer/buzzer.component';
// import { OptionComponent } from './table/option/option.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    WallComponent,
    TableComponent,
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
    PhotoShotGameComponent
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
