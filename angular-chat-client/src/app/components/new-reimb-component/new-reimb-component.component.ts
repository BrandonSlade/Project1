import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-reimb-component',
  templateUrl: './new-reimb-component.component.html',
  styleUrls: ['./new-reimb-component.component.css']
})
export class NewReimbComponentComponent implements OnInit {
  amount = '';
  description = '';
  managerId = 0;
  reimbType = 0;
  managerData;
  createResponse: Subscription;
  lastStatus = 200;
  submitCalled = false;

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.createResponse = this.chatService.$managerStatus.subscribe(status => {
      // do something with the status here
      if (status === 200) {
        this.managerData = this.chatService.managerData;
        console.log(this.managerData);
      } else {
        // set status to lastStatus to display appropriate error message
        this.lastStatus = status;
      }
    });
  }

  newInputValidation(): boolean {
    return this.amount.length > 0 && this.description.length > 15 &&
      this.managerId !== 0 && this.reimbType !== 0;
  }

  submitNew() {
    this.chatService.CreateNewDo(this.amount, this.description, this.managerId, this.reimbType);
    this.submitCalled = true;
  }
  submission(): boolean {
    return this.submitCalled === true;
  }
}
