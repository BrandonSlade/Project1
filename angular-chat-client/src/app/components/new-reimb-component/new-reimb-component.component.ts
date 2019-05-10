import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reimb-component',
  templateUrl: './new-reimb-component.component.html',
  styleUrls: ['./new-reimb-component.component.css']
})
export class NewReimbComponentComponent implements OnInit {
  amount = '';
  description = '';
  resolver = 0;
  type = 0;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  backToMain() {
    this.router.navigateByUrl('chat');
  }

  newInputValidation(): boolean {
    return this.amount.length > 0 && this.description.length > 15 &&
      this.resolver !== 0 && this.type !== 0;
  }
}
