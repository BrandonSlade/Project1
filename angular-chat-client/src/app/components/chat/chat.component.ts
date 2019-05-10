import { Component, OnInit, NgModule } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  reimbData;
  splitCache = sessionStorage.getItem('cache').split(' ');
  name = this.splitCache[2] + ' ' + this.splitCache[3];
  userId = this.splitCache[0];
  role_id = this.splitCache[4];


  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
  }

  managerValid(): boolean {
     return this.role_id === '2';
  }
  clearStorage() {
    sessionStorage.removeItem('cache');
  }
  viewPending() {
    this.chatService.Request();
    this.router.navigateByUrl('chat/view');
  }
  newReimb() {
    this.chatService.CreateNewGet();
    this.router.navigateByUrl('chat/new');
  }
  resolvePending() {
    this.chatService.ResolveRequest();
    this.router.navigateByUrl('chat/resolve');
  }

}
