import { Component, OnInit} from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public href: string = "";

  mySelect = '1';
  selectedValue: any;

  data = [
    {
      id: 1,
      name: 'Rent a Car',
    },
    {
      id: 2,
      name: 'Book an Appointment',
    },
  ];

  constructor(public chat: ChatService, private router: Router,location: Location) { 
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.href = location.path();
      } else {
        this.href = 'Home'
      }
    });
  }

  ngOnInit() {
  }

  selectChange() {
      this.selectedValue = this.chat.getDropDownText(this.mySelect, this.data)[0].id;
      console.log(this.selectedValue);

      this.chat.getSelectedUrl(this.selectedValue)
  }
  
  
}
