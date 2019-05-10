import { Component, OnInit, NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
 
  splitCache = sessionStorage.getItem('cache').split(' ');
  name = this.splitCache[2] + ' ' + this.splitCache[3];
  userId = this.splitCache[0];
  role_id = this.splitCache[4];


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    //do something to update the database here.
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

  active() {
    
  }

}
