import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, } from '@angular/core';
import { ChatService, Message } from 'src/app/chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-kernel',
  templateUrl: './kernel.component.html',
  styleUrls: ['./kernel.component.css']
})
export class KernelComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  messages?: Observable<Message[]>;
  formValue!: string;
  sessionVal!: string;
  countVal = 0;

  constructor(public chat: ChatService) { }

  ngOnInit(): void {

      this.scrollToBottom();

      // Append to an array after each new message is added to feedSource
      this.messages = this.chat.conversation?.asObservable()
      .pipe(scan((acc, val: any) => acc.concat(val)));

  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  sendMessage() {

    // this.chat.converse(this.formValue);
    // console.log('formVal ===', this.formValue);

    if (this.countVal == 0) {
      this.sessionVal = "";
      this.countVal++;
    };

    var cht = {text: this.formValue,
      session_val: this.sessionVal};

    this.chat.sendMessage(cht).subscribe(res => console.log('entered value ==', res))
    
    if (this.countVal == 1) {
      this.chat.sendMessage(cht).subscribe(res => { console.log('response ====', res);
      let myObj = JSON.parse(JSON.stringify(res));

      this.sessionVal = myObj.session;
      this.countVal++;
      
      }); 
    }
    
    this.chat.converse(cht, false, "null");
    this.formValue = "";
  }
}
