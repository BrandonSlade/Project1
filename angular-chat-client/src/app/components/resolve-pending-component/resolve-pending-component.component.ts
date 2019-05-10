import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resolve-pending-component',
  templateUrl: './resolve-pending-component.component.html',
  styleUrls: ['./resolve-pending-component.component.css']
})
export class ResolvePendingComponentComponent implements OnInit {
  reimbStatus = 0;
  reimbId = 0;
  resolveData;
  createResponse: Subscription;
  lastStatus = 200;

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.createResponse = this.chatService.$resolveReimbStatus.subscribe(status => {
      // do something with the status here
      if (status === 200) {
        this.resolveData = this.chatService.resolveRequestData;
        console.log(this.resolveData);
      } else {
        // set status to lastStatus to display appropriate error message
        this.lastStatus = status;
      }
    });
  }
  formValidation(): boolean {
    return this.reimbStatus !== 0 && this.reimbId !== 0;
  }

  submit() {
    this.chatService.ResolvePending(this.reimbId, this.reimbStatus);
  }
}
