import { Injectable } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

declare var webkitSpeechRecognition: any;
declare function getMicStatus(): boolean; 

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class VoicerecognitionService {

  recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords!: string;

  // formValue!: any;
  sessionVal!: string;
  countVal = 0;
  voiceOf!: string;
  // result!: any;

  constructor(private chat: ChatService) { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';
    // this.recognition.lang = 'ar-AE';
    // this.recognition.lang = 'fr-FR';
    // this.recognition.lang = 'hi-HI';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0] )
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {

    var checkM = getMicStatus();
    console.log("checkinggggggggggggggggggg" + checkM)

    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }

  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords;
    this.tempWords = '';

    if (this.countVal == 0) {
      this.sessionVal = "";
      this.countVal++;
    };

    // this.sessionVal = "";
    var cht = {text: this.text,
              session_val: this.sessionVal};
    // this.chat.sendMessage(cht).subscribe(res => console.log('entered value ==', res))
    if (this.countVal == 1) {
      this.chat.sendMessage(cht).subscribe(res => { console.log('response ====', res);
      let myObj = JSON.parse(JSON.stringify(res));

      this.sessionVal = myObj.session;
      this.countVal++;
      
      }); 
    } 

    if (this.recognition.lang == 'en-US') {
      this.voiceOf = "US English Female";
      console.log('EnglishEnglishEnglishEnglish');
    };
    if (this.recognition.lang == 'ar-AE') {
      this.voiceOf = "Arabic Female";
      console.log('ArabicArabicArabicArabic');
    };


    this.chat.converse(cht, true, this.voiceOf);
    this.text = "";
    
    // this.formValue = "";
  }
}