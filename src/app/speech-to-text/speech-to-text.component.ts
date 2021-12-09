import { Component, OnInit } from '@angular/core';
import { VoicerecognitionService } from '../voicerecognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],
  providers: [VoicerecognitionService]
})
export class SpeechToTextComponent implements OnInit {

  countSS = 0;

  constructor(
    public service : VoicerecognitionService
  ) { 
    this.service.init()
   }

  ngOnInit(): void {
  }

  startAndstop() {
    if (this.countSS == 0) {
      this.service.start();
      this.countSS++;
      console.log('if count value ==', this.countSS);
    }
    else {
      this.service.stop();
      this.countSS--;
      console.log('Else count value ==', this.countSS);
    }
  }

  // startService(){
  //   this.service.start()
  // }

  // stopService(){
  //   this.service.stop()
  // }

}