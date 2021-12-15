import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatEngComponent } from './chat-eng/chat-eng.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ChatService } from './chat.service';
import { VoicerecognitionService } from './voicerecognition.service';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatEngComponent,
    SpeechToTextComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ChatService, VoicerecognitionService, ConfigComponent, ChatEngComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
