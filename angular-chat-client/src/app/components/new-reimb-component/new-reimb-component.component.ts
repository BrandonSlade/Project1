import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reimb-component',
  templateUrl: './new-reimb-component.component.html',
  styleUrls: ['./new-reimb-component.component.css']
})
export class NewReimbComponentComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  backToMain() {
    this.router.navigateByUrl('chat');
  }

}
