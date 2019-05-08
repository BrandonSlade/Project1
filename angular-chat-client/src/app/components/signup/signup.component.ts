import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = '';
  password = '';
  passwordConfirmation = '';
  firstname = '';
  lastname = '';
  email = '';
  role = 0;
  loginAttemptSucceeded = undefined;

  // Using dependency injection to get reference of the SignupService
  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  formValidation(): boolean {
    this.usernameTrim();
    return this.passwordLengthValidation() &&
            this.passwordsMatch() &&
            this.usernameLengthValidation() &&
            this.firstnameLengthValidation() &&
            this.lastnameLengthValidation() &&
            this.emailLengthValidation() &&
            this.roleValidation();
  }

  firstnameLengthValidation(): boolean {
    return this.firstname.length >= 2;
  }

  lastnameLengthValidation(): boolean {
    return this.lastname.length >= 2;
  }

  emailLengthValidation(): boolean {
    return this.email.length >= 4;
  }

  roleValidation(): boolean {
    return this.role !== 0;
  }

  passwordLengthValidation(): boolean {
    return this.password.length >= 8;
  }

  passwordsMatch(): boolean {
    return this.password === this.passwordConfirmation;
  }

  usernameLengthValidation(): boolean {
    return this.username.length >= 1;
  }

  usernameTrim(): void {
    this.username = this.username.trim();
  }

  submit() {
    // call the signupService signup method
    this.signupService.signup(this.username, this.password, this.firstname, this.lastname, this.email, this.role).subscribe( result => {
      this.loginAttemptSucceeded = true;
    }, error => {
      this.loginAttemptSucceeded = false;
    });
  }

}
