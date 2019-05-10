import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-reimbcomponent',
  templateUrl: './view-reimbcomponent.component.html',
  styleUrls: ['./view-reimbcomponent.component.css']
})
export class ViewReimbcomponentComponent implements OnInit {
  reimbId = '';
​​  reimbAmount = '';
  ​​​reimbSubmitted = '';
  reimbResolved = '';
  description = '';
  ​​​reimbReceipt = '';
  reimbResolver = '';
  ​​​reimbStatus = '';
  reimbType = '';
  reimbData;
  createResponse: Subscription;
  lastStatus = 200;

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.createResponse = this.chatService.$requestReimbStatus.subscribe(status => {
      // do something with the status here
      if (status === 200) {
        this.reimbData = this.chatService.reimbRequestData;
        console.log(this.reimbData);
      } else {
        // set status to lastStatus to display appropriate error message
        this.lastStatus = status;
      }
    });
  }

  AddDataToTable() {

  }


}
