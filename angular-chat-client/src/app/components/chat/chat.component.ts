import { Component, OnInit, NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

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
  splitCache = sessionStorage.getItem('cache').split(' ');
  name = this.splitCache[2] + ' ' + this.splitCache[3];
  userId = this.splitCache[0];
  role_id = this.splitCache[4];

  constructor(private loginService: LoginService, private router: Router) { }

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
     return this.role_id === '2';
  }
  clearStorage() {
    sessionStorage.removeItem('cache');
  }
  viewPending() {
    this.router.navigateByUrl('chat/view');
  }
  newReimb() {
    this.router.navigateByUrl('chat/new');
  }
  resolvePending() {
    this.router.navigateByUrl('chat/resolve');
  }
}
