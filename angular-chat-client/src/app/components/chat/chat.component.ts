import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  status = 0;
  id = 0;
  amount = '';
  description = '';
  resolver = 0;
  type = 0;
  manager = 2;

  constructor() { }

  ngOnInit() {
  }

  formValidation(): boolean {
    return this.status !== 0 && this.id !== 0;
  }

  submit() {
    //do something to update the database here.
  }

  newInputValidation(): boolean {
    return this.amount.length > 0 && this.description.length > 15 &&
      this.resolver !== 0 && this.type !== 0;
  }

  submitNew() {
    //do something to add a new reimbursement to the database here.
  }

  managerValid(): boolean {
    return 
  }
}
