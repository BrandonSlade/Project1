import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-reimbcomponent',
  templateUrl: './view-reimbcomponent.component.html',
  styleUrls: ['./view-reimbcomponent.component.css']
})
export class ViewReimbcomponentComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  backToMain() {
    this.router.navigateByUrl('chat');
  }
}
