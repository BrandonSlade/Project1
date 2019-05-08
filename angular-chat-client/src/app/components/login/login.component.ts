import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  username = '';
  password = '';
  loginResponse: Subscription;
  lastStatus = 200;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginResponse = this.loginService.$loginStatus.subscribe(status => {
      // do something with the status here
      if (status === 200) {
        this.router.navigateByUrl('chat');
      } else {
        // set status to lastStatus to display appropriate error message
        this.lastStatus = status;
      }
    });
  }

  ngOnDestroy() {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe();
    }
  }

  formValidation(): boolean {
    return this.username.length > 0 && this.password.length > 0;
  }

  submit() {
    this.loginService.login(this.username, this.password);
  }
}
