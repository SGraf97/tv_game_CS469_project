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
import { UsersCaruselComponent } from './main-display/users-carusel/users-carusel.component';
import { FrameComponent } from './main-display/frame/frame.component';
import { StartingMainScreenComponent } from './main-display/starting-main-screen/starting-main-screen.component';
import { SelectDeviceComponent } from './select-device/select-device.component';
import { QuizGameComponent } from './main-display/quiz-game/quiz-game.component';
import { VotingComponent } from './main-display/voting/voting.component';
import { CatwalkComponent } from './main-display/catwalk/catwalk.component';

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
    CatwalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
